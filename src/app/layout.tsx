
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'


import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flocentra',
  description: 'The connected workspace where better, faster work happens.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      </body>
    </html>
  )
}