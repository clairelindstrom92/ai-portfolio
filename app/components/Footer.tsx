import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-foreground/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Real AI Systems</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Open to:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg font-mono text-sm">
              AI/ML Engineering Roles
            </span>
            <span className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg font-mono text-sm">
              LLM / RAG Infrastructure
            </span>
            <span className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg font-mono text-sm">
              Voice AI Systems
            </span>
            <span className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-lg font-mono text-sm">
              Applied Generative AI
            </span>
          </div>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 mb-8">
          <div className="space-y-3 text-sm font-mono">
            <p className="text-lg font-semibold mb-4">Claire Lindstrom</p>
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
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://github.com/clairelindstrom92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/clairelindstrom/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:clairelindstrom7@gmail.com"
            className="text-foreground/60 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="pt-8 border-t border-foreground/10 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Claire Lindstrom. Built with Next.js & TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}
