import React from 'react'
import '@/styles/reset.scss'
import '@/styles/unreset.scss'
import '@/styles/globals.scss'
import '@/styles/markdown.scss'
import '@/styles/highlighting.scss'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import config from 'config'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import ReducedMotionDetector from '@/components/ReducedMotionDetector'
import Header from '@/components/Header'
import PageContainer from '@/components/PageContainer'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import DesktopOnly from '@/components/DesktopOnly'
import { getSiteUrl } from '@/utils/url'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  metadataBase: getSiteUrl(),
  openGraph: {
    title: config.title,
    description: config.description,
    images: '/api/og',
  },
  alternates: {
    types: {
      'application/rss+xml': [{ url: 'feed.xml', title: 'RSS Feed' }],
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ReducedMotionDetector />
        <NextTopLoader color="#14b8a6" showSpinner={false} />
        <ThemeProvider>
          <Header />
          <PageContainer>{children}</PageContainer>
          <Footer />
          {config.backToTopButton && (
            <DesktopOnly>
              <BackToTop />
            </DesktopOnly>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
