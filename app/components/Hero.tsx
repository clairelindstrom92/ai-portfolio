'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

const ease = [0.23, 1, 0.32, 1]

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 3D iridescent sphere — offset right */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '-5%',
            top: '5%',
            width: '55%',
            height: '90%',
            zIndex: 0,
          }}
        >
          <HeroScene />
        </div>

        {/* Soft radial glow behind sphere */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '-10%',
            top: '10%',
            width: '60%',
            height: '80%',
            background: 'radial-gradient(ellipse at center, rgba(201,184,245,0.12) 0%, rgba(244,167,195,0.07) 40%, transparent 70%)',
            zIndex: 0,
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-[120px] pb-20">
          <div className="max-w-2xl">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-6"
            >
              <span className="holo-label">AI Systems Engineer · Frederick, MD</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mb-4"
            >
              <h1
                className="font-display leading-[1.05] tracking-wide"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  fontWeight: 300,
                  color: 'var(--pearl)',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  className="holo-text-hover cursor-default select-none"
                  style={{ display: 'inline-block' }}
                >
                  Claire
                </span>
                <br />
                <span style={{ color: 'var(--pearl)' }}>Lindstrom</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mb-10 tracking-widest uppercase text-xs"
              style={{ color: 'var(--lavender)', opacity: 0.75, letterSpacing: '0.18em' }}
            >
              LLM Systems · Voice AI · RAG · Cloud Deployment
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="font-display mb-8"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
                fontWeight: 300,
                color: 'rgba(240,238,248,0.8)',
                letterSpacing: '0.02em',
                lineHeight: 1.4,
              }}
            >
              I build production AI systems.
            </motion.h2>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 group transition-all duration-400 px-6 py-3 rounded-full text-sm font-medium"
                style={{
                  background: 'linear-gradient(135deg, rgba(244,167,195,0.2), rgba(201,184,245,0.2), rgba(126,232,232,0.15))',
                  border: '1px solid rgba(201,184,245,0.3)',
                  color: 'var(--pearl)',
                  backdropFilter: 'blur(10px)',
                  transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(201,184,245,0.25), 0 0 60px rgba(244,167,195,0.1)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                See Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-400"
                style={{
                  border: '1px solid rgba(240,238,248,0.12)',
                  color: 'rgba(240,238,248,0.65)',
                  transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,184,245,0.35)'
                  e.currentTarget.style.color = 'var(--lavender)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(240,238,248,0.12)'
                  e.currentTarget.style.color = 'rgba(240,238,248,0.65)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Contact
              </a>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-400"
                style={{
                  border: '1px solid rgba(126,232,232,0.18)',
                  color: 'rgba(126,232,232,0.65)',
                  transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(126,232,232,0.45)'
                  e.currentTarget.style.color = 'var(--aqua)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(126,232,232,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(126,232,232,0.18)'
                  e.currentTarget.style.color = 'rgba(126,232,232,0.65)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="flex items-center gap-6"
            >
              {[
                { href: 'https://github.com/clairelindstrom92', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/clairelindstrom/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:clairelindstrom7@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="transition-all duration-300"
                  style={{ color: 'rgba(240,238,248,0.35)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--lavender)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.35)')}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Iridescent hairline divider */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(244,167,195,0.3), rgba(201,184,245,0.3), rgba(126,232,232,0.3), transparent)',
        }}
      />
    </>
  )
}
