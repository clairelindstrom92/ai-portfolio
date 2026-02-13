import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Briefcase, AlertCircle } from 'lucide-react'

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

          {/* Employer Badge and Disclaimer */}
          <div className="mb-8 p-4 bg-foreground/5 border border-foreground/10 rounded-lg flex items-start gap-3">
            <Briefcase className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-1">Employer Project</p>
              <p className="text-xs text-foreground/70">
                Built as part of my role at a previous employer. Details generalized to respect confidentiality.
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Voice AI for Field Ops</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Production System
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Twilio', 'OpenAI Realtime', 'FastAPI', 'WebSocket', 'AWS EC2', 'Redis', 'Python'].map((tech) => (
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
                Built a production voice AI system for field operations that handles real-time audio streaming,
                maintains context across conversations, and supports role-specific dialogue flows. The system 
                required sub-second latency, reliable session management, and robust error handling for 
                production use in field service environments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">High-Level Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>Twilio Media Streams → WebSocket Server</div>
                <div className="text-foreground/60">↓</div>
                <div>FastAPI Backend (Audio Processing)</div>
                <div className="text-foreground/60">↓</div>
                <div>OpenAI Realtime API (Streaming Responses)</div>
                <div className="text-foreground/60">↓</div>
                <div>Context Retrieval + Caching Layer</div>
                <div className="text-foreground/60">↓</div>
                <div>AWS EC2 (Deployed Infrastructure)</div>
              </div>
              <p className="text-sm text-foreground/60 mt-4 italic">
                Architecture shown at high level. Internal implementation details omitted for confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">What I Owned</h2>
              <ul className="space-y-3 text-foreground/95 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>Architected real-time audio streaming pipeline with bidirectional WebSocket communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>Implemented session lifecycle and state management with Redis caching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>Optimized latency and reliability metrics, reducing call drops and timeouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>Built monitoring and observability systems for production debugging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>Deployed and maintained AWS infrastructure with auto-scaling capabilities</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/95 leading-relaxed">
                <li>
                  <strong className="text-foreground">Reliability:</strong> Implemented robust reconnection logic 
                  and session state management to handle network interruptions gracefully.
                </li>
                <li>
                  <strong className="text-foreground">Latency:</strong> Optimized WebSocket keepalive mechanisms 
                  and implemented timeout handling for long-running conversations.
                </li>
                <li>
                  <strong className="text-foreground">Session Lifecycle:</strong> Built state machines to manage 
                  session initialization, active conversation, and cleanup phases reliably.
                </li>
                <li>
                  <strong className="text-foreground">Context Management:</strong> Designed context-aware dialogue 
                  system with structured memory retrieval for role-specific flows.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Outcomes</h2>
              <p className="text-foreground/95 leading-relaxed">
                Successfully deployed a production voice AI system that handles real-time conversations 
                with role-specific context. The system demonstrates reliable performance in production, 
                with robust error handling and optimized latency. Solved critical production issues 
                including call drops, timeouts, and session lifecycle management, resulting in a 
                stable platform ready for scale.
              </p>
            </section>

            {/* IP Safety Disclaimer */}
            <div className="mt-12 p-4 bg-foreground/5 border border-foreground/10 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-foreground/50 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-foreground/60 leading-relaxed">
                  <strong className="text-foreground/80">Confidentiality Note:</strong> This project description 
                  has been generalized to respect employer confidentiality and intellectual property. Specific 
                  implementation details, internal architecture, customer information, and proprietary systems 
                  have been omitted. All technical descriptions focus on high-level outcomes and general 
                  engineering approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
