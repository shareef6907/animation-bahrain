import { chromium } from 'playwright'

async function measure() {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  })
  const page = await context.newPage()

  const results = {
    desktop: {},
    mobile: {},
    networkRequests: [],
  }

  // Capture network requests
  const videoRequests = []
  page.on('request', req => {
    const url = req.url()
    if (url.includes('.mp4') || url.includes('s3.amazonaws.com')) {
      videoRequests.push({ url: url.split('?')[0].split('/').pop(), type: req.resourceType(), start: Date.now() })
    }
  })

  // DESKTOP 1280x720
  console.log('\n=== DESKTOP 1280x720 ===')
  await page.goto('https://animationbahrain.com', { waitUntil: 'domcontentloaded', timeout: 30000 })
  
  const desktopMetrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0]
    const paint = performance.getEntriesByType('paint')
    const lcp = performance.getEntriesByType('largest-contentful-paint')
    return {
      ttfb: Math.round(nav?.responseStart || 0),
      fcp: Math.round(paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0),
      lcp: Math.round(lcp[lcp.length - 1]?.startTime || 0),
      domReady: Math.round(nav?.domContentLoadedEventEnd || 0),
      load: Math.round(nav?.loadEventEnd || 0),
    }
  })
  
  // Wait 3s then capture video network requests
  await page.waitForTimeout(3000)
  const desktopVideos = videoRequests.filter(r => r.type === 'video' || r.url.includes('.mp4'))
  
  console.log('Desktop metrics:', JSON.stringify(desktopMetrics))
  console.log('Video requests after 3s:', desktopVideos.length)
  desktopVideos.forEach(v => console.log(' ', v.type, v.url))
  
  results.desktop = { ...desktopMetrics, videoRequests: desktopVideos.length }
  videoRequests.length = 0

  // MOBILE 375x667
  console.log('\n=== MOBILE 375x667 ===')
  await context.close()
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15'
  })
  const mobilePage = await mobileContext.newPage()
  
  mobilePage.on('request', req => {
    const url = req.url()
    if (url.includes('.mp4') || url.includes('s3.amazonaws.com')) {
      videoRequests.push({ url: url.split('?')[0].split('/').pop(), type: req.resourceType() })
    }
  })
  
  await mobilePage.goto('https://animationbahrain.com', { waitUntil: 'domcontentloaded', timeout: 30000 })
  
  const mobileMetrics = await mobilePage.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0]
    const paint = performance.getEntriesByType('paint')
    const lcp = performance.getEntriesByType('largest-contentful-paint')
    return {
      ttfb: Math.round(nav?.responseStart || 0),
      fcp: Math.round(paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0),
      lcp: Math.round(lcp[lcp.length - 1]?.startTime || 0),
      domReady: Math.round(nav?.domContentLoadedEventEnd || 0),
      load: Math.round(nav?.loadEventEnd || 0),
    }
  })
  
  await mobilePage.waitForTimeout(3000)
  const mobileVideos = videoRequests.filter(r => r.type === 'video' || r.url.includes('.mp4'))
  
  console.log('Mobile metrics:', JSON.stringify(mobileMetrics))
  console.log('Video requests after 3s:', mobileVideos.length)
  mobileVideos.forEach(v => console.log(' ', v.type, v.url))
  
  results.mobile = { ...mobileMetrics, videoRequests: mobileVideos.length }

  await browser.close()
  console.log('\n=== BASELINE CAPTURED ===')
  console.log(JSON.stringify(results, null, 2))
}

measure().catch(console.error)