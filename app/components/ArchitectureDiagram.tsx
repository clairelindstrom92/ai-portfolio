'use client'

import { useEffect, useRef, useState } from 'react'

export default function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadMermaid = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        try {
          const mermaid = (await import('mermaid')).default
          mermaid.initialize({ 
            startOnLoad: false, 
            theme: 'dark',
            themeVariables: {
              primaryColor: '#3b82f6',
              primaryTextColor: '#e5e5e5',
              primaryBorderColor: '#2563eb',
              lineColor: '#3b82f6',
              secondaryColor: '#1a1a1a',
              tertiaryColor: '#0a0a0a',
              background: '#0a0a0a',
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
            }
          })
          
          const graphDefinition = `
graph TD
    A[Twilio Media Streams] -->|Audio Stream| B[WebSocket Audio Pipeline]
    B -->|Bidirectional Streaming| C[FastAPI Backend]
    C -->|API Calls| D[OpenAI Realtime API]
    D -->|Response Stream| C
    C -->|Cache Layer| E[Redis Caching Layer]
    C -->|Deploy| F[AWS EC2 Deployment]
    
    style A fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#e5e5e5
    style C fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#e5e5e5
    style E fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#e5e5e5
    style F fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
          `
          
          const id = 'mermaid-diagram-' + Date.now()
          const element = document.createElement('div')
          element.className = 'mermaid'
          element.id = id
          element.textContent = graphDefinition
          containerRef.current.innerHTML = ''
          containerRef.current.appendChild(element)
          
          await mermaid.run({
            nodes: [element],
          })
          setIsLoading(false)
        } catch (error) {
          console.error('Error loading Mermaid:', error)
          setIsLoading(false)
          if (containerRef.current) {
            containerRef.current.innerHTML = '<div class="text-foreground/40">Diagram unavailable</div>'
          }
        }
      }
    }
    
    loadMermaid()
  }, [])

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div ref={containerRef} className="bg-foreground/5 rounded-lg p-8 border border-foreground/10 min-h-[400px] flex items-center justify-center">
        {isLoading && <div className="text-foreground/40">Loading diagram...</div>}
      </div>

      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold mb-3 font-mono text-accent">Latency Considerations</h3>
          <p>
            Latency occurs primarily at three points: WebSocket audio buffering (50-100ms), 
            OpenAI Realtime API response generation (200-500ms), and network round-trip time 
            (50-150ms). The Redis caching layer mitigates cold-start delays by storing frequently 
            accessed context, user preferences, and session state, reducing API calls by ~40% 
            and improving perceived latency.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 font-mono text-accent">Failure Modes Handled</h3>
          <p>
            The system handles call drops through robust reconnection logic with exponential backoff. 
            Timeout scenarios are managed via WebSocket keepalive mechanisms and session state 
            persistence. API failures trigger automatic retry with circuit breaker patterns. 
            Session lifecycle bugs are prevented through state machines that enforce proper 
            initialization, active conversation, and cleanup phases.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 font-mono text-accent">Session Lifecycle Logic</h3>
          <p>
            Sessions transition through states: INIT → CONNECTING → ACTIVE → IDLE → CLEANUP. 
            Each state has defined entry/exit conditions and timeout handlers. The FastAPI backend 
            maintains session state in Redis with TTL-based expiration. Context retrieval happens 
            asynchronously during the CONNECTING phase to minimize latency once the session becomes ACTIVE.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 font-mono text-accent">Observability Considerations</h3>
          <p>
            Metrics collected include: WebSocket connection duration, API response times, cache hit 
            rates, error rates by type, and session state transitions. Logging captures structured 
            events at each pipeline stage. Distributed tracing tracks requests across Twilio → 
            FastAPI → OpenAI boundaries. Alerts trigger on error rate thresholds, latency spikes, 
            and session lifecycle anomalies.
          </p>
        </div>
      </div>
    </div>
  )
}
