import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Code, ExternalLink } from 'lucide-react'

export default function RAGToolkitPage() {
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
              Personal Project (WIP)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">RAG Evaluation & Retrieval Toolkit</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Comprehensive evaluation framework for RAG systems
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Python', 'FastAPI', 'Vector Search', 'Evaluation Metrics', 'Testing', 'Dataset Harness'].map((tech) => (
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
              <p className="text-foreground/95 leading-relaxed">
                A comprehensive evaluation framework for RAG (Retrieval-Augmented Generation) systems that 
                measures retrieval quality, response accuracy, latency, and groundedness. The toolkit provides 
                standardized metrics, dataset harnesses, regression tests, and deployment tooling for 
                production RAG systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Key Features</h2>
              <ul className="space-y-3 text-foreground/95 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span><strong>Retrieval Quality Metrics:</strong> Precision, recall, and relevance scoring for retrieved documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span><strong>Response Evaluation:</strong> Groundedness checks, factuality, and coherence scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span><strong>Latency Measurement:</strong> End-to-end response time tracking and optimization insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span><strong>Dataset Harness:</strong> Standardized test datasets for consistent evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span><strong>Regression Testing:</strong> Automated tests to prevent performance degradation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span><strong>Deployment Tooling:</strong> CI/CD integration and monitoring dashboards</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>Test Dataset → Evaluation Engine</div>
                <div className="text-foreground/60">↓</div>
                <div>RAG System Under Test</div>
                <div className="text-foreground/60">↓</div>
                <div>Metrics Collection (Retrieval + Response)</div>
                <div className="text-foreground/60">↓</div>
                <div>Results Dashboard + Regression Tests</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Use Cases</h2>
              <ul className="space-y-3 text-foreground/95 leading-relaxed">
                <li>Evaluating retrieval pipeline improvements before deployment</li>
                <li>Comparing different embedding models and vector search strategies</li>
                <li>Monitoring RAG system performance over time</li>
                <li>Running regression tests in CI/CD pipelines</li>
                <li>Benchmarking against industry standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Status</h2>
              <p className="text-foreground/95 leading-relaxed mb-4">
                This project is currently in development. The framework is being built to support production 
                RAG evaluation needs with a focus on reliability, reproducibility, and actionable insights.
              </p>
              <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-lg">
                <p className="text-sm text-foreground/70 mb-2">
                  <strong className="text-foreground/90">Repository:</strong> Coming soon
                </p>
                <p className="text-xs text-foreground/60">
                  TODO: Add repository link when project is ready for public release
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
