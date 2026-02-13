'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle radial background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-radial-gradient from-foreground/3 via-transparent to-transparent" 
               style={{
                 background: 'radial-gradient(circle at 30% 50%, rgba(229, 229, 229, 0.03) 0%, transparent 50%)'
               }} />
        </div>

        {/* Faint grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(229, 229, 229, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(229, 229, 229, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '48px 48px'
             }} />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-[120px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Top Identity Line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-2"
              >
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                  Claire Lindstrom
                </h1>
                <p className="text-sm text-foreground/80 font-medium tracking-wide uppercase">
                  AI Software Engineer — Real-Time & Applied LLM Systems
                </p>
                <p className="text-xs text-foreground/70 font-mono">
                  Frederick, MD · U.S. Citizen · Clearance Eligible
                </p>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-6"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-foreground max-w-2xl">
                  I design and deploy production AI systems
                  {' '}
                  <span className="font-medium">for real-time, distributed environments.</span>
                </h2>
                
                {/* Subtle divider line */}
                <div className="w-24 h-px bg-foreground/20" />
              </motion.div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-2xl font-light"
              >
                Specializing in LLM orchestration, retrieval pipelines,
                and low-latency voice AI infrastructure.
              </motion.p>
            </div>

            {/* Right Column - System Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-10 hover:border-foreground/20 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                <h3 className="text-sm font-mono text-foreground/60 uppercase tracking-wider mb-8">
                  Real-Time Voice AI Architecture
                </h3>
                <div className="space-y-6">
                  <div className="font-mono text-xs text-foreground/80 leading-relaxed">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="px-3 py-2 bg-foreground/10 rounded border border-foreground/10 text-center">Twilio</span>
                      <span className="px-3 py-2 bg-foreground/10 rounded border border-foreground/10 text-center">WebSocket</span>
                      <span className="px-3 py-2 bg-foreground/10 rounded border border-foreground/10 text-center">FastAPI</span>
                      <span className="px-3 py-2 bg-foreground/10 rounded border border-foreground/10 text-center">OpenAI</span>
                      <span className="px-3 py-2 bg-foreground/10 rounded border border-foreground/10 text-center">Cache</span>
                      <span className="px-3 py-2 bg-foreground/10 rounded border border-foreground/10 text-center">AWS</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-3">
                      <ArrowRight className="h-3 w-3 text-foreground/40 rotate-90" />
                      <ArrowRight className="h-3 w-3 text-foreground/40" />
                      <ArrowRight className="h-3 w-3 text-foreground/40 rotate-90" />
                      <ArrowRight className="h-3 w-3 text-foreground/40" />
                      <ArrowRight className="h-3 w-3 text-foreground/40 rotate-90" />
                      <ArrowRight className="h-3 w-3 text-foreground/40" />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-foreground/10">
                    <p className="text-xs text-foreground/70 font-mono leading-relaxed">
                      Production system handling bidirectional audio streaming,
                      context retrieval, and session lifecycle management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Thin divider below hero */}
      <div className="h-px bg-foreground/5 mx-auto max-w-7xl" />
    </>
  )
}
