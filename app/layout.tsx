import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import ClientEffects from './components/ClientEffects'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Claire Lindstrom | Production AI Systems Engineer',
  description: 'I build production AI systems. Specializing in LLM systems, agents, RAG, evaluation, real-time voice, and cloud deployment.',
  keywords: ['AI Engineer', 'LLM Systems', 'RAG', 'Voice AI', 'Production AI', 'Applied AI', 'AI Infrastructure'],
}

// Sparkle positions: [top%, left%, size(px), duration(s), delay(s)]
const sparkles = [
  [12, 7, 7, 2.8, 0],
  [28, 91, 5, 3.5, 0.6],
  [45, 15, 8, 2.2, 1.1],
  [18, 62, 4, 4.0, 0.3],
  [67, 78, 6, 3.1, 0.9],
  [82, 5, 5, 2.6, 1.4],
  [35, 45, 4, 3.8, 0.2],
  [72, 38, 7, 2.4, 1.7],
  [55, 88, 5, 3.3, 0.5],
  [90, 55, 6, 2.9, 1.2],
  [8, 48, 4, 4.2, 0.8],
  [60, 22, 5, 2.7, 1.5],
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-dm-sans, DM Sans, Inter, system-ui)' }}>
        {/* Fixed particle dust */}
        <ClientEffects />

        {/* CSS sparkle stars */}
        {sparkles.map(([top, left, size, duration, delay], i) => (
          <span
            key={i}
            aria-hidden="true"
            className="sparkle"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              '--duration': `${duration}s`,
              '--delay': `${delay}s`,
            } as React.CSSProperties}
          />
        ))}

        {children}
      </body>
    </html>
  )
}
