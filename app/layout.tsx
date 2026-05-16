import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/navbar'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AMANITY Tech Solutions - Smart Technology, Stronger Tomorrow',
  description: 'Enterprise tech solutions for healthcare, education, and businesses. HIMS, School ERP, Cyber Security & Software Development.',
  keywords: ['HIMS', 'ERP', 'Cyber Security', 'Software Development', 'Tech Solutions'],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-950">
      <body className="font-sans antialiased bg-slate-950 text-white">
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
