import { chromium } from 'playwright'

async function measure(url, viewport) {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] })
  const ctx = await browser.newContext({ viewport })
  const page = await ctx.newPage()

  const videoRequests = []
  page.on('request', req => {
    const u = req.url()
    if (u.includes('.mp4') || u.includes('s3.amazonaws.com')) {
      videoRequests.push({ url: u.split('?')[0].split('/').pop(), t: Date.now() })
    }
  })

  // Inject performance observers BEFORE navigation
  await page.addInitScript(() => {
    // LCP observer
    window.__lcpValue = 0
    window.__lcpUrl = null
    window.__lcpSize = 0
    window.__lcpElement = null
    const lcpObs = new PerformanceObserver(list => {
      const entries = list.getEntries()
      const last = entries[entries.length - 1]
      window.__lcpValue = Math.round(last.startTime)
      window.__lcpSize = last.size
      window.__lcpUrl = last.url || null
      window.__lcpElement = last.element ? last.element.tagName : null
    })
    lcpObs.observe({ type: 'largest-contentful-paint', buffered: true })

    // CLS observer
    window.__clsValue = 0
    const clsObs = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) window.__clsValue += entry.value
      }
    })
    clsObs.observe({ type: 'layout-shift', buffered: true })

    // Long task observer for TBT
    window.__tbtValue = 0
    const ltObs = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        window.__tbtValue += entry.duration
      }
    })
    ltObs.observe({ type: 'longtask', buffered: true })
  })

  const t0 = Date.now()
  await page.goto(url, { waitUntil: 'load', timeout: 30000 })
  const loadMs = Date.now() - t0

  // Wait for LCP to settle (video load)
  await page.waitForTimeout(3000)

  const browserMetrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] || {}
    const paint = performance.getEntriesByType('paint')
    const resources = performance.getEntriesByType('resource')
    const videoEntries = resources.filter(e => e.name.includes('.mp4') || e.name.includes('s3.amazonaws.com'))

    return {
      ttfb: Math.round(nav.responseStart || 0),
      fcp: Math.round(paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0),
      lcp: window.__lcpValue,
      lcpSize: window.__lcpSize,
      lcpUrl: window.__lcpUrl,
      lcpElement: window.__lcpElement,
      cls: window.__clsValue.toFixed(3),
      tbt: Math.round(window.__tbtValue),
      domContentLoaded: Math.round(nav.domContentLoadedEventEnd || 0),
      videoCount: videoEntries.length,
      videoURLs: videoEntries.map(v => v.name.split('?')[0].split('/').pop()),
    }
  })

  const heroState = await page.evaluate(() => {
    const v = document.querySelector('section.relative video') || document.querySelector('video')
    if (!v) return null
    return {
      readyState: v.readyState,
      paused: v.paused,
      videoWidth: v.videoWidth,
      videoHeight: v.videoHeight,
      src: v.src ? v.src.split('/').pop() : null,
    }
  })

  await browser.close()
  return { loadMs, ...browserMetrics, hero: heroState, videoRequests }
}

async function main() {
  console.log('\n=== PERFORMANCE METRICS - animationbahrain.com ===\n')

  const desktop = await measure('https://animationbahrain.com', { width: 1280, height: 720 })
  console.log('--- DESKTOP 1280x720 ---')
  console.log('Load (ms):', desktop.loadMs)
  console.log('TTFB (ms):', desktop.ttfb)
  console.log('FCP (ms):', desktop.fcp)
  console.log('LCP (ms):', desktop.lcp, desktop.lcpUrl ? '(' + desktop.lcpUrl.split('/').pop() + ')' : '')
  console.log('LCP size:', desktop.lcpSize)
  console.log('TBT (ms):', desktop.tbt)
  console.log('CLS:', desktop.cls)
  console.log('Videos on load:', desktop.videoCount, desktop.videoURLs)
  if (desktop.hero) console.log('Hero state:', JSON.stringify(desktop.hero))

  const mobile = await measure('https://animationbahrain.com', { width: 375, height: 667 })
  console.log('\n--- MOBILE 375x667 ---')
  console.log('Load (ms):', mobile.loadMs)
  console.log('TTFB (ms):', mobile.ttfb)
  console.log('FCP (ms):', mobile.fcp)
  console.log('LCP (ms):', mobile.lcp)
  console.log('TBT (ms):', mobile.tbt)
  console.log('CLS:', mobile.cls)
  console.log('Videos on load:', mobile.videoCount)

  console.log('\n=== TARGETS ===')
  const lcpD = desktop.lcp
  const lcpM = mobile.lcp
  console.log('LCP < 2.5s DESKTOP:', lcpD > 0 && lcpD < 2500 ? 'MET ✓' : (lcpD === 0 ? 'CANNOT MEASURE' : 'NOT MET (' + (lcpD/1000).toFixed(2) + 's)'))
  console.log('LCP < 2.5s MOBILE:', lcpM > 0 && lcpM < 2500 ? 'MET ✓' : (lcpM === 0 ? 'CANNOT MEASURE' : 'NOT MET (' + (lcpM/1000).toFixed(2) + 's)'))
  console.log('TBT < 200ms DESKTOP:', desktop.tbt < 200 ? 'MET ✓' : 'NOT MET (' + desktop.tbt + 'ms)')
  console.log('TBT < 200ms MOBILE:', mobile.tbt < 200 ? 'MET ✓' : 'NOT MET (' + mobile.tbt + 'ms)')
  console.log('CLS < 0.1 DESKTOP:', parseFloat(desktop.cls) < 0.1 ? 'MET ✓' : 'NOT MET (' + desktop.cls + ')')
  console.log('CLS < 0.1 MOBILE:', parseFloat(mobile.cls) < 0.1 ? 'MET ✓' : 'NOT MET (' + mobile.cls + ')')
  console.log('Video requests (before/after):', mobile.videoCount, '/ 17')
}

main().catch(console.error)