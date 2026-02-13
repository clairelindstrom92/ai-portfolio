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
    <footer id="contact" className="border-t border-foreground/10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-foreground">
            Let's Build Real AI Systems
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            Open to AI/ML engineering roles, LLM infrastructure, voice AI systems, and applied generative AI.
            <br />
            <span className="text-sm text-foreground/60 mt-2 block">
              Recruiters and hiring managers welcome.
            </span>
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Personal Info */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-foreground">Claire Lindstrom</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-4 w-4 text-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-foreground/50 mb-1.5 font-mono uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm text-foreground/90">Frederick, MD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h4 className="text-base font-medium mb-8 text-foreground/90">Contact</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-foreground/50 mb-2 font-mono uppercase tracking-wider">
                    Email
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:clairelindstrom7@gmail.com"
                      className="text-sm font-mono text-foreground/90 hover:text-foreground transition-colors break-all"
                    >
                      clairelindstrom7@gmail.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 hover:bg-foreground/10 rounded transition-colors"
                      aria-label="Copy email"
                      title="Copy email"
                    >
                      {emailCopied ? (
                        <Check className="h-4 w-4 text-accent" />
                      ) : (
                        <Copy className="h-4 w-4 text-foreground/60" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 mb-2 font-mono uppercase tracking-wider">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/clairelindstrom92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-foreground/90 hover:text-foreground transition-colors break-all"
                  >
                    github.com/clairelindstrom92
                  </a>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 mb-2 font-mono uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/clairelindstrom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-foreground/90 hover:text-foreground transition-colors break-all"
                  >
                    linkedin.com/in/clairelindstrom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://github.com/clairelindstrom92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/clairelindstrom/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:clairelindstrom7@gmail.com"
            className="text-foreground/50 hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-foreground/10 text-center">
          <p className="text-xs text-foreground/40 font-mono">
            © {new Date().getFullYear()} Claire Lindstrom. Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}
