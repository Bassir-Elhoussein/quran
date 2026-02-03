import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Amiri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ["arabic"],
  variable: '--font-amiri',
});

export const metadata: Metadata = {
  title: 'لأميمة - Quran Ayat for the Soul',
  description: 'Find peace and comfort through Quran ayat based on your emotional state',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/b.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/b.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/b.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/b.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#C9A962',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geist.className} ${amiri.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
