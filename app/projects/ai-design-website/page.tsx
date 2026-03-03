import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Code, ExternalLink } from 'lucide-react'

export default function AiDesignWebsitePage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Generated Moon</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Luxury AI design agency platform — AI chatbot to structured client brief in minutes
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['React', 'Vite', 'Express', 'Claude AI', 'HuggingFace', 'Stripe', 'Resend', 'Calendly'].map((tech) => (
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
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Problem</h2>
              <p className="text-foreground/80 leading-relaxed">
                Design agencies lose hours to back-and-forth discovery calls before a project even
                starts. Generated Moon replaces that with an AI-led intake flow: the chatbot
                conducts a structured 5–8 question assessment, then auto-generates a detailed
                project brief — scoped, formatted, and ready for proposal. Stripe handles payment,
                Resend sends confirmation, and Calendly closes the booking loop.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>React + Vite Frontend (luxury UI, animated)</div>
                <div className="text-foreground/60">↓</div>
                <div>Express Backend (API routing, session management)</div>
                <div className="text-foreground/60">↓  ↓</div>
                <div>Claude AI / HuggingFace Mistral-7B  |  Lead Capture (/api/leads)</div>
                <div className="text-foreground/60">↓</div>
                <div>Stripe (payments)  |  Resend (email)  |  Calendly (scheduling)</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Key Features</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">AI Assessment Flow:</strong> Chatbot conducts
                  a structured 5–8 question intake — budget, timeline, design aesthetic,
                  deliverables — and produces a formatted project brief automatically.
                </li>
                <li>
                  <strong className="text-foreground">Lead Capture System:</strong> Every
                  assessment response is stored via <code className="text-accent text-xs">/api/leads</code>,
                  giving the agency a complete CRM pipeline without third-party tools.
                </li>
                <li>
                  <strong className="text-foreground">Stripe Integration:</strong> Clients can
                  pay deposits or retainers directly within the flow — no external invoicing step.
                </li>
                <li>
                  <strong className="text-foreground">Resend + Calendly:</strong> Automated
                  confirmation emails and discovery call scheduling close the client acquisition
                  loop end-to-end.
                </li>
                <li>
                  <strong className="text-foreground">Dual LLM Support:</strong> Abstracted
                  provider layer supports Claude AI for premium quality and HuggingFace
                  Mistral-7B as an open-source fallback.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Conversational State Management:</strong>
                  Maintained multi-turn assessment context across the chatbot session without
                  leaking prior responses into brief generation.
                </li>
                <li>
                  <strong className="text-foreground">Structured Output from LLM:</strong>
                  Engineered prompts to reliably produce consistently-formatted project briefs
                  regardless of open-ended user input.
                </li>
                <li>
                  <strong className="text-foreground">Full-Stack Payment Flow:</strong> Integrated
                  Stripe webhooks with Express session state to gate brief delivery behind
                  confirmed payment.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Impact</h2>
              <p className="text-foreground/95 leading-relaxed mb-6">
                End-to-end client acquisition platform that demonstrates applied LLM product
                engineering: conversational flow design, structured output extraction, payment
                integration, and full-stack delivery. Deployable on Railway or Vercel with zero
                infrastructure overhead.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                <a
                  href="https://github.com/clairelindstrom92/AiDesignWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-accent transition-colors"
                >
                  <Code className="h-4 w-4" />
                  Repository
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
