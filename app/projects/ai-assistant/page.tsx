import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AIAssistantPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Personal Assistant</h1>
          <p className="text-xl text-foreground/70 mb-8">
            FastAPI-based assistant with goal tracking and NLP pipeline optimization
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['FastAPI', 'OpenAI', 'NLP', 'Python', 'Cloud Deployed'].map((tech) => (
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
                Developed an AI personal assistant that needed to track user goals, process
                natural language inputs, and provide accurate, contextually relevant responses
                in real-time. The system required optimization to improve response accuracy and
                reduce latency for better user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>User Input (Natural Language)</div>
                <div className="text-foreground/60">↓</div>
                <div>FastAPI Backend (NLP Pipeline)</div>
                <div className="text-foreground/60">↓</div>
                <div>Goal Tracking System</div>
                <div className="text-foreground/60">↓</div>
                <div>OpenAI API (Response Generation)</div>
                <div className="text-foreground/60">↓</div>
                <div>Real-Time Response Logic</div>
                <div className="text-foreground/60">↓</div>
                <div>Cloud Deployment</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">NLP Pipeline:</strong> Built efficient
                  natural language processing pipeline to extract intent and entities from user
                  inputs.
                </li>
                <li>
                  <strong className="text-foreground">Goal Tracking:</strong> Implemented
                  persistent goal tracking system that maintains user objectives across sessions.
                </li>
                <li>
                  <strong className="text-foreground">Response Accuracy:</strong> Optimized prompt
                  engineering and context management to improve response relevance and accuracy.
                </li>
                <li>
                  <strong className="text-foreground">Real-Time Processing:</strong> Designed
                  response logic that processes requests quickly while maintaining quality.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Optimization Work</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Response Accuracy Improvement:</strong>
                  Achieved ~40% improvement in response accuracy through prompt optimization,
                  context refinement, and better goal tracking integration.
                </li>
                <li>
                  <strong className="text-foreground">NLP Pipeline Efficiency:</strong> Optimized
                  text processing and intent extraction for faster response times.
                </li>
                <li>
                  <strong className="text-foreground">Caching Strategy:</strong> Implemented
                  intelligent caching for common queries and user preferences.
                </li>
                <li>
                  <strong className="text-foreground">API Optimization:</strong> Reduced API
                  call overhead through batching and request optimization.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Deployment Details</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Backend:</strong> FastAPI application with
                  async request handling
                </li>
                <li>
                  <strong className="text-foreground">AI Integration:</strong> OpenAI API for
                  response generation and NLP capabilities
                </li>
                <li>
                  <strong className="text-foreground">Deployment:</strong> Cloud-deployed with
                  scalable infrastructure
                </li>
                <li>
                  <strong className="text-foreground">Monitoring:</strong> Integrated logging and
                  performance metrics
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Impact</h2>
              <p className="text-foreground/80 leading-relaxed">
                Successfully improved response accuracy by approximately 40% through systematic
                optimization of the NLP pipeline, prompt engineering, and goal tracking system.
                The assistant demonstrates production-ready capabilities in natural language
                understanding and real-time response generation, deployed in a cloud environment
                with reliable performance.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
