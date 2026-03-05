import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Code, Zap } from 'lucide-react'

export default function SmartSitePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#prototypes"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Prototypes
          </Link>

          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border bg-accent/10 border-accent/20 text-accent/90">
              <Zap className="h-3 w-3" />
              Interactive Prototype
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Smart Site</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Voice-powered AI web builder — speak commands to modify a live website in real time
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['React', 'Vite', 'Web Speech API', 'Claude API', 'OpenAI API', 'CSS', 'AI Command Parsing'].map((tech) => (
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
                Smart Site is a prototype demonstrating real-time voice-driven UI modification. Users
                speak natural language commands — "add testimonials", "dark theme", "add a booking section"
                — and the website layout updates instantly with animated transitions. It showcases the
                full voice-to-UI pipeline: speech capture, AI command interpretation, structured JSON
                instructions, and reactive state rendering.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Voice Command Pipeline</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>Web Speech API (voice capture)</div>
                <div className="text-foreground/60">↓</div>
                <div>Speech-to-text transcript</div>
                <div className="text-foreground/60">↓</div>
                <div>interpretCommand() — fuzzy match or Claude/OpenAI API</div>
                <div className="text-foreground/60">↓</div>
                <div>{'{ "action": "add_component", "component": "testimonials" }'}</div>
                <div className="text-foreground/60">↓</div>
                <div>React state update → LayoutRenderer re-renders</div>
                <div className="text-foreground/60">↓</div>
                <div>Animated section appears / disappears / theme changes</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">What You Can Say</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '"Add testimonials"',
                  '"Add a booking section"',
                  '"Add contact form"',
                  '"Dark theme" / "Light theme"',
                  '"Make it modern"',
                  '"Remove testimonials"',
                  '"Remove booking"',
                  '"Reset"',
                ].map((cmd) => (
                  <div
                    key={cmd}
                    className="bg-foreground/5 border border-foreground/10 rounded px-4 py-3 font-mono text-sm text-accent/90"
                  >
                    {cmd}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Mock Mode (default):</strong> No API key needed.
                  Commands are matched against <code className="text-accent text-xs">mockCommands.json</code> using
                  exact and fuzzy string matching. Runs fully offline.
                </li>
                <li>
                  <strong className="text-foreground">Live AI Mode:</strong> Drop in a{' '}
                  <code className="text-accent text-xs">VITE_CLAUDE_API_KEY</code> or{' '}
                  <code className="text-accent text-xs">VITE_OPENAI_API_KEY</code> to enable natural
                  language understanding for arbitrary commands beyond the mock set.
                </li>
                <li>
                  <strong className="text-foreground">LayoutRenderer:</strong> Maintains an ordered
                  array of active component names. Any add/remove command mutates the array and React
                  re-renders the new layout with CSS entry animations.
                </li>
                <li>
                  <strong className="text-foreground">Theme & Style:</strong> CSS custom properties
                  switched via data attributes on the root element — no JS style injection, purely
                  declarative and transition-friendly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">What This Demonstrates</h2>
              <ul className="space-y-2 text-foreground/80">
                {[
                  'Browser-native Web Speech API integration',
                  'AI-as-interpreter pattern: voice → structured JSON → UI update',
                  'Modular React component rendering from dynamic state',
                  'Dual-mode AI (mock offline + live Claude/OpenAI)',
                  'Futuristic animated UI with CSS transitions and keyframes',
                  'Interactive prototyping and rapid demo-able product thinking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Run Locally</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-2">
                <div><span className="text-foreground/50">$</span> cd smart-site-prototype</div>
                <div><span className="text-foreground/50">$</span> npm install</div>
                <div><span className="text-foreground/50">$</span> npm run dev</div>
                <div className="text-foreground/50 pt-2"># Open in Chrome for Web Speech API support</div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                <a
                  href="https://github.com/clairelindstrom92/smart-site-prototype"
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
