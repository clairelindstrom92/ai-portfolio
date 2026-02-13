import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claire Lindstrom | AI Software Engineer | Real-Time Voice AI | Applied LLM Systems',
  description: 'Production AI systems engineer specializing in real-time voice AI, applied LLMs, and deployed infrastructure. U.S. Citizen, eligible for security clearance.',
  keywords: ['AI Engineer', 'LLM Systems', 'Voice AI', 'Real-Time Systems', 'Machine Learning', 'RAG', 'Applied AI', 'Production AI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
