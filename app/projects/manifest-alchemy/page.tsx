import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Sparkles, ExternalLink, Code } from 'lucide-react'

export default function ManifestAlchemyPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Manifest Alchemy AI</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Agentic planning platform with personalized AI memory and RAG-powered retrieval
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Next.js', 'React', 'PostgreSQL', 'Supabase', 'Vector DB', 'LLM Orchestration', 'TypeScript'].map((tech) => (
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
                Built a comprehensive AI reasoning platform that enables structured prompting,
                semantic retrieval, and personalized AI memory. The system needed to handle complex
                reasoning tasks while maintaining context across sessions and providing fast,
                accurate responses through vector-based similarity search.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>Next.js / React Frontend</div>
                <div className="text-foreground/60">↓</div>
                <div>API Layer (Structured Prompting)</div>
                <div className="text-foreground/60">↓</div>
                <div>LLM Orchestration Engine</div>
                <div className="text-foreground/60">↓</div>
                <div>Vector Database (Semantic Retrieval)</div>
                <div className="text-foreground/60">↓</div>
                <div>PostgreSQL / Supabase (Persistent Storage)</div>
                <div className="text-foreground/60">↓</div>
                <div>Personalized AI Memory Architecture</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Structured Prompting:</strong> Designed
                  flexible prompt engineering system that enables complex reasoning tasks with
                  consistent output formatting.
                </li>
                <li>
                  <strong className="text-foreground">Semantic Retrieval:</strong> Implemented
                  vector database integration for fast similarity search and context retrieval
                  across large knowledge bases.
                </li>
                <li>
                  <strong className="text-foreground">Memory Architecture:</strong> Built
                  personalized AI memory system that maintains user context and preferences
                  across sessions.
                </li>
                <li>
                  <strong className="text-foreground">Full-Stack Integration:</strong> Seamlessly
                  connected React frontend with backend services, ensuring real-time updates
                  and responsive user experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Optimization Work</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Vector Search Performance:</strong>
                  Optimized embedding generation and similarity search algorithms for sub-100ms
                  retrieval times.
                </li>
                <li>
                  <strong className="text-foreground">Database Queries:</strong> Implemented
                  efficient indexing strategies and query optimization for PostgreSQL operations.
                </li>
                <li>
                  <strong className="text-foreground">Frontend Performance:</strong> Optimized
                  React rendering and state management for smooth user interactions.
                </li>
                <li>
                  <strong className="text-foreground">Caching Layer:</strong> Implemented
                  intelligent caching for frequently accessed data and user preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Deployment Details</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Frontend:</strong> Next.js application
                  deployed on Vercel with optimized build pipeline
                </li>
                <li>
                  <strong className="text-foreground">Database:</strong> PostgreSQL hosted on
                  Supabase with vector extension support
                </li>
                <li>
                  <strong className="text-foreground">Vector DB:</strong> Integrated vector
                  database for semantic search capabilities
                </li>
                <li>
                  <strong className="text-foreground">API:</strong> RESTful API layer with
                  structured prompt processing and LLM orchestration
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Impact</h2>
              <p className="text-foreground/95 leading-relaxed mb-6">
                Created a production-ready AI reasoning platform that demonstrates advanced
                capabilities in LLM orchestration, semantic retrieval, and personalized memory
                systems. The platform showcases full-stack AI engineering skills, from frontend
                React development to backend database design and vector search implementation.
                Successfully integrated multiple technologies to create a cohesive, performant
                AI system.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Site
                  <span className="text-xs text-foreground/50">(Coming soon)</span>
                </a>
                <a
                  href="https://github.com/clairelindstrom92/manifest-alchemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-foreground/70 hover:text-accent transition-colors"
                >
                  <Code className="h-4 w-4" />
                  Repository
                  <span className="text-xs text-foreground/50">(TODO: Verify link)</span>
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
