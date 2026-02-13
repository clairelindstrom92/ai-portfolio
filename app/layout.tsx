import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claire Lindstrom | Production AI Systems Engineer',
  description: 'I build production AI systems. Specializing in LLM systems, agents, RAG, evaluation, real-time voice, and cloud deployment.',
  keywords: ['AI Engineer', 'LLM Systems', 'RAG', 'Voice AI', 'Production AI', 'Applied AI', 'AI Infrastructure'],
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
