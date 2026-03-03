import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Code, ExternalLink } from 'lucide-react'

export default function DocumentProcessingPage() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border bg-foreground/10 border-foreground/20 text-foreground/70">
              <Code className="h-3 w-3" />
              Personal Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Document Processing AI</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Production-grade RAG API — upload documents, query them in natural language
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Python', 'FastAPI', 'FAISS', 'SQLite', 'RAG', 'LLM Abstraction', 'REST API'].map((tech) => (
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
                Enterprise document workflows are slow and require manual reading. This API lets
                users ingest PDFs and plain-text files, then ask natural-language questions against
                them — no manual indexing, no prompt injection risk from raw document dumping.
                Built with a production-first mindset: clean REST contract, persistent metadata,
                and a pluggable LLM backend.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>Client (HTTP)</div>
                <div className="text-foreground/60">↓</div>
                <div>FastAPI REST Layer</div>
                <div className="text-foreground/60">↓</div>
                <div>Chunking Engine (character-based, word-boundary snap)</div>
                <div className="text-foreground/60">↓</div>
                <div>FAISS Vector Index (embedding + similarity search)</div>
                <div className="text-foreground/60">↓  ↓</div>
                <div>SQLite (document metadata)  |  Abstracted LLM Provider</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">API Endpoints</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed font-mono text-sm">
                <li className="flex gap-3">
                  <span className="text-accent">POST</span>
                  <span>/docs — ingest PDF or plain-text file into the vector index</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">POST</span>
                  <span>/query — ask a natural-language question, returns grounded answer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">GET</span>
                  <span>/docs/&#123;id&#125; — retrieve document metadata and status</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">GET</span>
                  <span>/health — availability check</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Chunking Strategy:</strong> Implemented
                  character-based splitting with word-boundary snapping to preserve semantic
                  coherence and avoid mid-word cuts that degrade embedding quality.
                </li>
                <li>
                  <strong className="text-foreground">LLM Provider Abstraction:</strong> Designed
                  a pluggable provider interface so the backend LLM can be swapped (OpenAI,
                  local models, etc.) without touching the API or chunking logic.
                </li>
                <li>
                  <strong className="text-foreground">FAISS Integration:</strong> Managed in-memory
                  FAISS index lifecycle alongside SQLite metadata for durability across restarts.
                </li>
                <li>
                  <strong className="text-foreground">Production Hardening:</strong> Built with
                  proper error handling, input validation, health endpoints, and a test suite —
                  not a prototype.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Impact</h2>
              <p className="text-foreground/95 leading-relaxed mb-6">
                Demonstrates production RAG engineering beyond tutorials: real chunking decisions,
                real vector index management, real provider abstraction, and a proper REST API
                contract. Applicable to enterprise document Q&amp;A, legal review, internal
                knowledge bases, and any domain with high document volume.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                <a
                  href="https://github.com/clairelindstrom92/Document-Processing-AI"
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
