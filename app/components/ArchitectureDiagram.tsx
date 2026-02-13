'use client'

import { useEffect, useRef, useState } from 'react'

export default function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const mermaidInitialized = useRef(false)
  const diagramRendered = useRef(false)

  useEffect(() => {
    // Only run once
    if (diagramRendered.current) return
    diagramRendered.current = true

    const loadMermaid = async () => {
      if (typeof window === 'undefined') return
      
      const container = containerRef.current
      if (!container) return

      try {
        // Dynamic import of mermaid
        const mermaidModule = await import('mermaid')
        const mermaid = mermaidModule.default

        // Initialize mermaid only once globally
        if (!mermaidInitialized.current) {
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
          mermaidInitialized.current = true
        }
        
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
        
        // Create the mermaid element
        const id = 'mermaid-diagram-' + Date.now()
        const element = document.createElement('div')
        element.className = 'mermaid'
        element.id = id
        element.textContent = graphDefinition.trim()
        
        // Append to container
        container.appendChild(element)
        
        // Render the diagram
        await mermaid.run({
          nodes: [element],
        })
        
        setIsLoading(false)
        setError(null)
      } catch (err) {
        console.error('Error loading Mermaid:', err)
        setError('Failed to load diagram')
        setIsLoading(false)
        const errorDiv = document.createElement('div')
        errorDiv.className = 'text-foreground/90 text-center p-4'
        errorDiv.textContent = 'Diagram unavailable. Please refresh the page.'
        container.appendChild(errorDiv)
      }
    }
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadMermaid()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto space-y-12 relative">
      {/* Soft radial background behind diagram */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Diagram Container - Elevated */}
      <div className="flex justify-center relative">
        <div className="bg-foreground/5 rounded-lg p-10 border border-foreground/10 min-h-[450px] w-full max-w-5xl flex items-center justify-center relative shadow-[0_0_40px_rgba(59,130,246,0.08)]">
          {isLoading && !error && (
            <div className="absolute text-foreground/60">Loading diagram...</div>
          )}
          {error && (
            <div className="absolute text-foreground/90 text-center">{error}</div>
          )}
          <div 
            ref={containerRef} 
            className={`w-full ${isLoading && !error ? 'opacity-0' : 'opacity-100'} flex justify-center`}
          />
        </div>
      </div>

      {/* Text Content - Engineering Postmortem Style */}
      <div className="space-y-10 text-foreground/95 leading-relaxed max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-5 font-mono text-accent">Latency Considerations</h3>
          <p className="text-foreground/95">
            Latency occurs primarily at three points: WebSocket audio buffering (50-100ms), 
            OpenAI Realtime API response generation (200-500ms), and network round-trip time 
            (50-150ms). The Redis caching layer mitigates cold-start delays by storing frequently 
            accessed context, user preferences, and session state, reducing API calls by ~40% 
            and improving perceived latency.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-5 font-mono text-accent">Failure Modes Handled</h3>
          <p className="text-foreground/95">
            The system handles call drops through robust reconnection logic with exponential backoff. 
            Timeout scenarios are managed via WebSocket keepalive mechanisms and session state 
            persistence. API failures trigger automatic retry with circuit breaker patterns. 
            Session lifecycle bugs are prevented through state machines that enforce proper 
            initialization, active conversation, and cleanup phases.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-5 font-mono text-accent">Session Lifecycle Logic</h3>
          <p className="text-foreground/95">
            Sessions transition through states: INIT → CONNECTING → ACTIVE → IDLE → CLEANUP. 
            Each state has defined entry/exit conditions and timeout handlers. The FastAPI backend 
            maintains session state in Redis with TTL-based expiration. Context retrieval happens 
            asynchronously during the CONNECTING phase to minimize latency once the session becomes ACTIVE.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-5 font-mono text-accent">Observability Considerations</h3>
          <p className="text-foreground/95">
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
