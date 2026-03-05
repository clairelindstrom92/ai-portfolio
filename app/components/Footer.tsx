'use client'

import { Github, Linkedin, Mail, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('clairelindstrom7@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <footer
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Aurora glow at top of footer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(244,167,195,0.5), rgba(201,184,245,0.5), rgba(126,232,232,0.5), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="font-display mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '0.06em', color: 'var(--pearl)' }}
          >
            Let&apos;s Build Together
          </h2>
          <p className="text-sm" style={{ color: 'rgba(240,238,248,0.5)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.8 }}>
            Open to AI/ML engineering roles, LLM infrastructure, voice AI systems, and applied generative AI.
          </p>
          <p className="text-xs mt-2" style={{ color: 'rgba(240,238,248,0.3)' }}>
            Recruiters and hiring managers welcome.
          </p>
        </div>

        {/* Glass contact card */}
        <div
          className="glass-card rounded-2xl p-10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h3
                className="font-display mb-8"
                style={{ fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.06em', color: 'var(--pearl)' }}
              >
                Claire Lindstrom
              </h3>
              <div className="flex items-start gap-4">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--lavender)', opacity: 0.6 }} />
                <div>
                  <p className="holo-label mb-1.5">Location</p>
                  <p className="text-sm" style={{ color: 'rgba(240,238,248,0.8)' }}>Frederick, MD</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <h4
                className="mb-8 text-sm tracking-widest uppercase"
                style={{ color: 'rgba(240,238,248,0.5)' }}
              >
                Contact
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="holo-label mb-2">Email</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:clairelindstrom7@gmail.com"
                      className="text-sm font-mono transition-colors duration-300"
                      style={{ color: 'rgba(240,238,248,0.75)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--aqua)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.75)')}
                    >
                      clairelindstrom7@gmail.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg transition-all duration-300"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,238,248,0.4)' }}
                      aria-label="Copy email"
                    >
                      {emailCopied
                        ? <Check className="h-3.5 w-3.5" style={{ color: 'var(--aqua)' }} />
                        : <Copy className="h-3.5 w-3.5" />
                      }
                    </button>
                  </div>
                </div>
                <div>
                  <p className="holo-label mb-2">GitHub</p>
                  <a
                    href="https://github.com/clairelindstrom92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono transition-colors duration-300"
                    style={{ color: 'rgba(240,238,248,0.75)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--pink)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.75)')}
                  >
                    github.com/clairelindstrom92
                  </a>
                </div>
                <div>
                  <p className="holo-label mb-2">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/clairelindstrom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono transition-colors duration-300"
                    style={{ color: 'rgba(240,238,248,0.75)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--lavender)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.75)')}
                  >
                    linkedin.com/in/clairelindstrom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {[
            { href: 'https://github.com/clairelindstrom92', icon: Github, label: 'GitHub', color: 'var(--pink)' },
            { href: 'https://www.linkedin.com/in/clairelindstrom/', icon: Linkedin, label: 'LinkedIn', color: 'var(--lavender)' },
            { href: 'mailto:clairelindstrom7@gmail.com', icon: Mail, label: 'Email', color: 'var(--aqua)' },
          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 rounded-full transition-all duration-300"
              style={{
                color: 'rgba(240,238,248,0.3)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = color
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.boxShadow = `0 0 20px ${color}30`
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(240,238,248,0.3)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: 'rgba(240,238,248,0.2)', letterSpacing: '0.08em' }}
          >
            © {new Date().getFullYear()} Claire Lindstrom
          </p>
        </div>
      </div>
    </footer>
  )
}
