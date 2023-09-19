import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Library',
  description: 'Library',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": './Library-logos.jpeg',
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": './Library-logos.jpeg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
