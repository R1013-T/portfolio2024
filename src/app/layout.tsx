import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'

import { ThemeProvider } from '@/components/theme/provider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | RYU PORTFOLIO',
    default: 'RYU PORTFOLIO',
  },
  description: 'RYUのポートフォリオサイトです。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.ryu-tech.tokyo/',
    title: 'RYU PORTFOLIO',
    description: 'RYUのポートフォリオサイトです。',
    images: [
      {
        url: 'https://github.com/R1013-T/portfolio2024/blob/main/src/app/opengraph-image.png',
        width: 800,
        height: 450,
        alt: 'RYU PORTFOLIO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RYU PORTFOLIO',
    description: 'RYUのポートフォリオサイトです。',
    site: '@rtjob2023',
    creator: '@rtjob2023',
    images: [
      'https://github.com/R1013-T/portfolio2024/blob/main/src/app/twitter-image.png',
    ],
  },
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          notoSansJP.className,
          'bg-background font-sans antialiased',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
