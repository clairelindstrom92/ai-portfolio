'use client'

import { useRef, useState } from 'react'
import { ExternalLink, Code, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const repos = [
  {
    name: 'manifestalchemy.ai',
    description: 'Agentic AI planning platform with personalized memory, RAG retrieval, and structured reasoning.',
    language: 'TypeScript',
    live: 'https://manifestalchemy.ai',
    repo: 'https://github.com/clairelindstrom92/manifestalchemy.ai',
  },
  {
    name: 'AO-AI-Solutions',
    description: 'AI solutions platform built and deployed on Vercel.',
    language: 'JavaScript',
    live: 'https://ao-ai-solutions.vercel.app',
    repo: 'https://github.com/clairelindstrom92/AO-AI-Solutions',
  },
  {
    name: 'ai-portfolio',
    description: 'This portfolio — AI engineer showcase built with Next.js, Framer Motion, and Tailwind.',
    language: 'TypeScript',
    live: 'http://clairelindstrom.dev',
    repo: 'https://github.com/clairelindstrom92/ai-portfolio',
  },
  {
    name: 'AiDesignWebsite',
    description: 'Generated Moon — luxury AI design agency site with Claude chatbot, project briefs, and Stripe.',
    language: 'JavaScript',
    live: 'https://ai-design-website-ruddy.vercel.app',
    repo: 'https://github.com/clairelindstrom92/AiDesignWebsite',
  },
  {
    name: 'smart-site-prototype',
    description: 'Speak commands to modify a live website in real time using Web Speech API and Claude.',
    language: 'JavaScript',
    live: null,
    repo: 'https://github.com/clairelindstrom92/smart-site-prototype',
  },
  {
    name: 'synergyliving',
    description: 'Multi-page wellness platform with brand identity, newsletter, and community resources.',
    language: 'HTML',
    live: 'https://synergyliving.vercel.app',
    repo: 'https://github.com/clairelindstrom92/synergyliving',
  },
  {
    name: 'Document-Processing-AI',
    description: 'Production RAG API — upload PDFs and query them in natural language with FAISS vector search.',
    language: 'Python',
    live: null,
    repo: 'https://github.com/clairelindstrom92/Document-Processing-AI',
  },
  {
    name: 'CelebrationofServiceSummitAwards',
    description: 'Award ceremony and recognition platform deployed on Vercel.',
    language: 'TypeScript',
    live: 'https://celebrationof-service-summit-awards.vercel.app',
    repo: 'https://github.com/clairelindstrom92/CelebrationofServiceSummitAwards',
  },
  {
    name: 'manifest',
    description: 'Early prototype of the Manifest Alchemy concept — the seed of the full platform.',
    language: null,
    live: null,
    repo: 'https://github.com/clairelindstrom92/manifest',
  },
  {
    name: 'ChatbotforSeniors',
    description: 'Accessible AI chatbot interface designed for senior users with simplified UX.',
    language: null,
    live: null,
    repo: 'https://github.com/clairelindstrom92/ChatbotforSeniors',
  },
]

const languageColors: Record<string, string> = {
  TypeScript: 'var(--lavender)',
  JavaScript: '#f7df1e',
  Python: '#3b82f6',
  HTML: '#f97316',
}

export default function GitHubCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.2
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const onMouseUp = () => setIsDragging(false)
  const onMouseLeave = () => setIsDragging(false)

  return (
    <div className="relative">
      {/* Fade edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10"
        style={{ background: 'linear-gradient(to right, var(--bg, #080810), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10"
        style={{ background: 'linear-gradient(to left, var(--bg, #080810), transparent)' }}
      />

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-4 select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {repos.map((repo, i) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 glass-card rounded-2xl p-5 flex flex-col gap-3"
            style={{ width: '260px', minHeight: '160px' }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Github className="h-3.5 w-3.5 flex-shrink-0" style={{ color: 'rgba(240,238,248,0.3)' }} />
                <span
                  className="text-xs font-mono truncate"
                  style={{ color: 'var(--pearl)' }}
                  title={repo.name}
                >
                  {repo.name}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {repo.live && (
                  <a
                    href={repo.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: 'rgba(240,238,248,0.25)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--aqua)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.25)')}
                    aria-label="Live site"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <a
                  href={repo.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: 'rgba(240,238,248,0.25)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--pink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.25)')}
                  aria-label="Repository"
                >
                  <Code className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-xs leading-relaxed flex-grow"
              style={{ color: 'rgba(240,238,248,0.55)', lineHeight: 1.75 }}
            >
              {repo.description}
            </p>

            {/* Language badge */}
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: languageColors[repo.language] ?? 'rgba(240,238,248,0.3)' }}
                />
                <span className="text-[10px] font-mono" style={{ color: 'rgba(240,238,248,0.35)' }}>
                  {repo.language}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Hint text */}
      <p className="text-center text-xs mt-2" style={{ color: 'rgba(240,238,248,0.2)' }}>
        drag to scroll · {repos.length} repositories
      </p>
    </div>
  )
}
