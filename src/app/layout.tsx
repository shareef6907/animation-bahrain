import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://animationbahrain.com'),
  title: 'Animation Bahrain | Cinematic Animation Studio',
  description: 'Premium brand films and motion graphics for the GCC.',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Animation Bahrain',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://animation-bahrain-videos.s3.us-east-1.amazonaws.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-body bg-[#050508] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
