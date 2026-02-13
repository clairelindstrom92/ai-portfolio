'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced background with gradient and dot grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/3" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(229, 229, 229, 0.1) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-[120px] pb-20">
          <div className="max-w-4xl">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-2">
                Claire Lindstrom
              </h1>
              <p className="text-sm text-foreground/70 font-medium tracking-wide">
                AI Software Engineer | Real-Time Voice AI | Applied LLM Systems
              </p>
              <p className="text-xs text-foreground/60 font-mono mt-1">
                Frederick, MD • U.S. Citizen • Clearance Eligible
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
                I build production AI systems.
              </h2>
              <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
                LLM systems, agents, RAG, evaluation, real-time voice, and cloud deployment.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-all duration-200 flex items-center gap-2 group"
              >
                See Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-foreground/20 rounded-lg font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-foreground/20 rounded-lg font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/clairelindstrom92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/clairelindstrom/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:clairelindstrom7@gmail.com"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Thin divider below hero */}
      <div className="h-px bg-foreground/5 mx-auto max-w-7xl" />
    </>
  )
}
