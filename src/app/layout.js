import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Goutham G',
  description: 'Portfolio',
  keywords: 'Goutham G, Portfolio, Web Developer, Software Engineer',
  icons: {
    icon: '/anime2.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}