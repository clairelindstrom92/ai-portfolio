import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Code, ExternalLink, Sparkles } from 'lucide-react'

export default function SynergyLivingPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Synergy Living</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Wellness platform — mindset, habits, and purpose aligned in one beautifully designed site
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'].map((tech) => (
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
                Synergy Living is a multi-page wellness platform designed to help people align their
                mindset, habits, and purpose. The site features a full navigation system across Home,
                About, Resources, Newsletter, and Stories pages — all built with clean semantic HTML,
                custom CSS, and vanilla JavaScript for a fast, dependency-free experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Pages & Features</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Home:</strong> Hero section with animated CTA,
                  feature highlights, and newsletter sign-up. Establishes the brand identity and
                  value proposition.
                </li>
                <li>
                  <strong className="text-foreground">About:</strong> Mission statement and philosophy
                  behind the Synergy Living approach to wellbeing.
                </li>
                <li>
                  <strong className="text-foreground">Resources:</strong> Curated tools, practices,
                  and content for building healthy habits and mental clarity.
                </li>
                <li>
                  <strong className="text-foreground">Newsletter:</strong> Email capture and community
                  building — free subscription with value-first content strategy.
                </li>
                <li>
                  <strong className="text-foreground">Stories:</strong> Real stories of transformation
                  using the Synergy Living philosophy.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Design Approach</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Typography:</strong> Playfair Display for
                  editorial warmth paired with Nunito for readability — a wellness brand feel without
                  being generic.
                </li>
                <li>
                  <strong className="text-foreground">Color & Tone:</strong> Earthy greens and soft
                  neutrals communicate calm and growth. Every color decision reinforces the brand message.
                </li>
                <li>
                  <strong className="text-foreground">Responsive Layout:</strong> Fully responsive
                  across mobile, tablet, and desktop using CSS Grid and Flexbox — no framework required.
                </li>
                <li>
                  <strong className="text-foreground">Performance:</strong> Zero JavaScript dependencies.
                  Fast load times with semantic HTML and optimized CSS.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">What This Demonstrates</h2>
              <ul className="space-y-2 text-foreground/80">
                {[
                  'Clean semantic HTML and accessible markup',
                  'Custom CSS design system without a framework',
                  'Multi-page site architecture with consistent navigation',
                  'Brand identity and visual design thinking',
                  'Responsive layouts from scratch using Grid and Flexbox',
                  'Product-minded design: wellness content strategy built into the UX',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                <a
                  href="https://github.com/clairelindstrom92/synergy-living"
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
