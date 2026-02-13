'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name prominently displayed */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            CLAIRE LINDSTROM
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-8 font-medium">
            AI Software Engineer | Real-Time Voice AI | Applied LLM Systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block">I architect and deploy production-grade AI systems</span>
            <span className="block text-accent">that operate in real-time, distributed environments.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Specializing in LLM orchestration, semantic retrieval pipelines, and low-latency voice AI infrastructure powering real-world automation systems.
        </motion.p>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="space-y-2 text-sm font-mono text-foreground/80">
            <p>Frederick, MD</p>
            <p>U.S. Citizen | Eligible for Security Clearance</p>
            <p>
              <a href="mailto:clairelindstrom7@gmail.com" className="hover:text-accent transition-colors">
                clairelindstrom7@gmail.com
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/clairelindstrom/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                https://www.linkedin.com/in/clairelindstrom/
              </a>
            </p>
            <p>
              <a href="https://github.com/clairelindstrom92" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                https://github.com/clairelindstrom92
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-foreground/50 hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
