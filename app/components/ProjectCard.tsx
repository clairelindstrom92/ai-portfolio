'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Briefcase, Code, Sparkles } from 'lucide-react'

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
  const getBadgeIcon = () => {
    if (badge?.includes('Employer')) return <Briefcase className="h-3 w-3" />
    if (badge?.includes('Founder')) return <Sparkles className="h-3 w-3" />
    if (badge?.includes('Personal')) return <Code className="h-3 w-3" />
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`bg-foreground/5 border rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 ${
        featured
          ? 'border-foreground/15 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1'
          : 'border-foreground/10 hover:border-foreground/30 hover:shadow-lg hover:-translate-y-1'
      }`}>
        {/* Preview */}
        {preview && (
          <div className="w-full aspect-video bg-foreground/5 border-b border-foreground/10 overflow-hidden relative">
            {preview}
          </div>
        )}

        <div className="p-8 flex flex-col flex-1">
        {/* Badge */}
        {badge && (
          <div className="flex items-center gap-2 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border ${
              badge.includes('Employer')
                ? 'bg-accent/10 border-accent/20 text-accent/90'
                : badge.includes('Founder')
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400/90'
                : 'bg-foreground/10 border-foreground/20 text-foreground/70'
            }`}>
              {getBadgeIcon()}
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <div className="mb-4">
          <h3 className={`text-2xl sm:text-3xl font-bold mb-1 ${featured ? 'text-accent' : 'text-foreground'}`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-foreground/60 font-mono">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Description */}
        <p className="text-foreground/90 mb-6 leading-relaxed text-base flex-grow">
          {description}
        </p>

        {/* Ownership List (for employer projects) */}
        {ownership && ownership.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-3">
              What I Owned
            </p>
            <ul className="space-y-2">
              {ownership.map((item, index) => (
                <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                featured
                  ? 'bg-accent/10 border-accent/20 text-accent/90'
                  : 'bg-foreground/10 border-foreground/20 text-foreground/80'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/10">
          <Link
            href={href}
            className="flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-accent transition-colors group"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-3">
            {links?.live && links.live !== '#' && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
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
                className="text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Repository"
              >
                <Code className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        </div>{/* end p-8 */}
      </div>
    </motion.div>
  )
}
