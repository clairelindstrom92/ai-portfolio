'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  href: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  technologies,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className={`block group relative p-6 rounded-lg border border-foreground/10 hover:border-accent/50 transition-all duration-300 ${
          featured ? 'bg-gradient-to-br from-accent/5 to-transparent' : 'bg-foreground/5'
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
            {title}
          </h3>
          <ArrowRight className="h-5 w-5 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
        
        <p className="text-foreground/70 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-foreground/10 rounded border border-foreground/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
