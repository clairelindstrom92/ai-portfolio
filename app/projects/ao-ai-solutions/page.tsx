import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function AOAISolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border bg-purple-500/10 border-purple-500/20 text-purple-400/90">
              <Sparkles className="h-3 w-3" />
              Founder Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AO AI Solutions</h1>
          <p className="text-xl text-foreground/70 mb-8">
            AI-powered business systems platform — live at aoaisolutions.dev
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['JavaScript', 'Vite', 'Tailwind CSS', 'AI Integration'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-mono bg-foreground/10 rounded border border-foreground/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Overview</h2>
              <p className="text-foreground/80 leading-relaxed">
                AO AI Solutions is a client-facing platform delivering AI-powered business systems.
                Built and deployed as a production web application with Vite and Tailwind CSS,
                hosted on Vercel and available at aoaisolutions.dev.
              </p>
            </section>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://aoaisolutions.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                Live Site →
              </a>
              <a
                href="https://github.com/clairelindstrom92/AO-AI-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
