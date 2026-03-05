'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Briefcase, Code, Sparkles } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const CardSparkles = dynamic(() => import('./CardSparkles'), { ssr: false })

interface ProjectCardProps {
  title: string
  subtitle?: string
  description: string
  technologies: string[]
  href: string
  featured?: boolean
  badge?: string
  ownership?: string[]
  links?: {
    live?: string
    repo?: string
  }
  preview?: React.ReactNode
}

const blobColors = [
  'rgba(244, 167, 195, 0.15)',
  'rgba(201, 184, 245, 0.15)',
  'rgba(126, 232, 232, 0.15)',
  'rgba(240, 238, 248, 0.1)',
]

const ease = [0.23, 1, 0.32, 1]

let cardIndex = 0

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  href,
  featured = false,
  badge,
  ownership,
  links,
  preview,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const blobColor = blobColors[cardIndex++ % blobColors.length]

  const getBadgeGradient = () => {
    if (badge?.includes('Employer')) return 'linear-gradient(135deg, rgba(126,232,232,0.3), rgba(201,184,245,0.3))'
    if (badge?.includes('Founder')) return 'linear-gradient(135deg, rgba(244,167,195,0.3), rgba(201,184,245,0.3))'
    return 'linear-gradient(135deg, rgba(240,238,248,0.15), rgba(201,184,245,0.15))'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
    >
      <div
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Abstract holographic blob at top */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-30px',
            width: '200px',
            height: '140px',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            background: `radial-gradient(circle at 40% 40%, ${blobColor}, transparent 70%)`,
            filter: 'blur(24px)',
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'opacity 0.4s ease',
            opacity: hovered ? 1.4 : 1,
          }}
        />

        {/* 3D sparkles on hover */}
        {hovered && <CardSparkles />}

        {/* Preview image */}
        {preview && (
          <div className="w-full aspect-video border-b relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {preview}
          </div>
        )}

        <div className="p-8 flex flex-col flex-1 relative z-10">
          {/* Badge */}
          {badge && (
            <div className="flex items-center gap-2 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full"
                style={{
                  background: getBadgeGradient(),
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(240,238,248,0.85)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {badge?.includes('Employer') && <Briefcase className="h-3 w-3" />}
                {badge?.includes('Founder') && <Sparkles className="h-3 w-3" />}
                {badge?.includes('Personal') && <Code className="h-3 w-3" />}
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <div className="mb-5">
            <h3
              className="font-display mb-1"
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 300,
                letterSpacing: '0.04em',
                color: hovered ? 'var(--lavender)' : 'var(--pearl)',
                transition: `color 0.4s cubic-bezier(0.23, 1, 0.32, 1)`,
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p className="holo-label">{subtitle}</p>
            )}
          </div>

          {/* Description */}
          <p
            className="mb-6 leading-relaxed text-sm flex-grow"
            style={{ color: 'rgba(240,238,248,0.65)', lineHeight: 1.75 }}
          >
            {description}
          </p>

          {/* Ownership */}
          {ownership && ownership.length > 0 && (
            <div className="mb-6">
              <p className="holo-label mb-3">What I Owned</p>
              <ul className="space-y-2">
                {ownership.map((item, i) => (
                  <li key={i} className="text-xs flex items-start gap-2" style={{ color: 'rgba(240,238,248,0.6)' }}>
                    <span style={{ color: 'var(--aqua)', marginTop: '0.2rem', flexShrink: 0 }}>◈</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="holo-chip text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Links row */}
          <div
            className="flex items-center justify-between mt-auto pt-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <Link
              href={href}
              className="flex items-center gap-2 text-xs font-medium group transition-all duration-300"
              style={{ color: 'rgba(240,238,248,0.5)', letterSpacing: '0.05em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--lavender)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.5)')}
            >
              View Details
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-3">
              {links?.live && links.live !== '#' && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(240,238,248,0.3)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--aqua)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.3)')}
                  aria-label="Live site"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {links?.repo && links.repo !== '#' && (
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(240,238,248,0.3)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--pink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.3)')}
                  aria-label="Repository"
                >
                  <Code className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
