import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function VoiceAIPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Real-Time Voice AI System</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Production voice AI platform with role-aware dialogue flows and optimized latency
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Twilio', 'OpenAI Realtime', 'FastAPI', 'WebSocket', 'AWS EC2', 'PostgreSQL', 'Python'].map((tech) => (
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
                Built a production voice AI system that needed to handle real-time audio streaming,
                maintain context across conversations, and support role-specific dialogue flows
                (Technician vs Home Manager). The system required sub-second latency, reliable
                session management, and robust error handling for production use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>Twilio Media Streams → WebSocket Server</div>
                <div className="text-foreground/60">↓</div>
                <div>FastAPI Backend (Audio Processing)</div>
                <div className="text-foreground/60">↓</div>
                <div>OpenAI Realtime API (Streaming Responses)</div>
                <div className="text-foreground/60">↓</div>
                <div>Context Retrieval + Structured Memory</div>
                <div className="text-foreground/60">↓</div>
                <div>AWS EC2 (Deployed Infrastructure)</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Call Drops:</strong> Implemented robust
                  reconnection logic and session state management to handle network interruptions
                  gracefully.
                </li>
                <li>
                  <strong className="text-foreground">Timeouts:</strong> Optimized WebSocket
                  keepalive mechanisms and implemented timeout handling for long-running
                  conversations.
                </li>
                <li>
                  <strong className="text-foreground">Session Lifecycle:</strong> Built state
                  machines to manage session initialization, active conversation, and cleanup
                  phases reliably.
                </li>
                <li>
                  <strong className="text-foreground">Role-Aware Flows:</strong> Designed
                  context-aware dialogue system that adapts responses based on user role
                  (Technician vs Home Manager) with structured memory retrieval.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Optimization Work</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Latency Optimization:</strong> Implemented
                  audio buffering strategies and parallel processing to reduce end-to-end latency.
                </li>
                <li>
                  <strong className="text-foreground">Caching Strategies:</strong> Built intelligent
                  caching layer for frequently accessed context and user preferences to minimize
                  API calls.
                </li>
                <li>
                  <strong className="text-foreground">Connection Pooling:</strong> Optimized
                  WebSocket connection management and resource pooling for better scalability.
                </li>
                <li>
                  <strong className="text-foreground">Error Recovery:</strong> Implemented
                  automatic retry logic with exponential backoff for transient failures.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Deployment Details</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Infrastructure:</strong> Deployed on AWS EC2
                  with auto-scaling capabilities
                </li>
                <li>
                  <strong className="text-foreground">Database:</strong> PostgreSQL for persistent
                  storage of session data and user context
                </li>
                <li>
                  <strong className="text-foreground">Monitoring:</strong> Integrated logging and
                  metrics collection for production observability
                </li>
                <li>
                  <strong className="text-foreground">Status:</strong> Live in production
                  environment, handling real-world voice interactions
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Impact</h2>
              <p className="text-foreground/80 leading-relaxed">
                Successfully deployed a production voice AI system that handles real-time
                conversations with role-specific context. The system demonstrates reliable
                performance in production, with robust error handling and optimized latency.
                Solved critical production issues including call drops, timeouts, and session
                lifecycle management, resulting in a stable platform ready for scale.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
