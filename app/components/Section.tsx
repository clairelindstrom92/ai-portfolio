'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  noDivider?: boolean
}

const ease = [0.23, 1, 0.32, 1]

export default function Section({ id, title, subtitle, children, className = '', noDivider = false }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      {!noDivider && (
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
            margin: '0 auto',
            maxWidth: '80rem',
          }}
        />
      )}
      <section
        ref={ref}
        id={id}
        className={`py-24 px-4 sm:px-6 lg:px-8 relative ${className}`}
      >
        <div className="max-w-7xl mx-auto">
          {(title || subtitle) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease }}
              className="mb-16 text-center"
            >
              {title && (
                <h2
                  className="font-display mb-4"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 300,
                    letterSpacing: '0.06em',
                    color: 'var(--pearl)',
                  }}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className="holo-label mx-auto"
                  style={{ maxWidth: '36rem', display: 'block', lineHeight: 2 }}
                >
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-8"
          >
            {children}
          </motion.div>
        </div>
      </section>
    </>
  )
}
