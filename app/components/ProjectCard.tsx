'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href={href}
        className={`block group relative p-10 rounded-lg border transition-all duration-300 h-full ${
          featured 
            ? 'bg-foreground/5 border-foreground/15 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1' 
            : 'bg-foreground/5 border-foreground/10 hover:border-foreground/30 hover:shadow-lg hover:-translate-y-1'
        }`}
      >
        <div className="flex items-start justify-between mb-6">
          <h3 className={`text-2xl sm:text-3xl font-bold group-hover:text-accent transition-colors ${featured ? 'text-accent' : 'text-foreground'}`}>
            {title}
          </h3>
        </div>
        
        <p className="text-foreground/90 mb-8 leading-relaxed text-base">
          {description}
        </p>
        
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

        <div className="flex items-center gap-2 text-sm font-mono text-foreground/60 group-hover:text-accent transition-colors">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}
