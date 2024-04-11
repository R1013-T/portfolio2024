import './globals.css'

import { Analytics } from '@vercel/analytics/react'
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
        </ThemeProvider>
      </body>
    </html>
  )
}
