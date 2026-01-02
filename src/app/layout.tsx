import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

export const metadata: Metadata = {
  title: 'Just Add Color Painting LLC | Professional Painting Services',
  description: 'Transform your space with Just Add Color Painting LLC. We offer professional residential and commercial painting services with quality craftsmanship and attention to detail.',
  keywords: 'painting, house painting, commercial painting, interior painting, exterior painting, painting contractor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
