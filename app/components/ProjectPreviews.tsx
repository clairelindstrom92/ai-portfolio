// Mini CSS-rendered previews for each project card.
// Each preview fills a 16:9 aspect-video container.

export function VoiceAIPreview() {
  const bars = [40, 65, 85, 55, 90, 45, 70, 60, 80, 50, 75, 35, 88, 62, 48]
  return (
    <div className="w-full h-full bg-[#07101a] flex flex-col items-center justify-center gap-3 p-4">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] font-mono text-green-400 tracking-widest">LIVE · FIELD OPS</span>
      </div>
      <div className="flex items-end gap-[3px] h-10">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-cyan-400"
            style={{
              height: `${h}%`,
              opacity: 0.5 + (i % 3) * 0.2,
              animation: `pulse ${0.8 + (i % 4) * 0.2}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.06}s`,
            }}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        {['Twilio', 'OpenAI RT', 'FastAPI', 'AWS'].map((t) => (
          <span key={t} className="text-[8px] font-mono bg-cyan-400/10 border border-cyan-400/20 text-cyan-400/80 px-1.5 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ManifestAlchemyPreview() {
  return (
    <div className="w-full h-full bg-[#0d0718] flex flex-col justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <span className="text-[10px] font-mono text-purple-300">Manifest Alchemy AI</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="self-end bg-purple-600/40 border border-purple-500/30 rounded-lg rounded-br-sm px-3 py-1.5 max-w-[70%]">
          <p className="text-[9px] text-purple-100">Set my goal for this quarter</p>
        </div>
        <div className="self-start bg-white/5 border border-white/10 rounded-lg rounded-bl-sm px-3 py-1.5 max-w-[80%]">
          <p className="text-[9px] text-foreground/80">Based on your journal, I&apos;d suggest focusing on...</p>
        </div>
        <div className="self-end bg-purple-600/40 border border-purple-500/30 rounded-lg rounded-br-sm px-3 py-1.5 max-w-[60%]">
          <p className="text-[9px] text-purple-100">Retrieve last month&apos;s entries</p>
        </div>
      </div>
      <div className="flex gap-1">
        {['RAG', 'pgvector', 'Supabase'].map((t) => (
          <span key={t} className="text-[8px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-400/80 px-1.5 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function DocumentProcessingPreview() {
  return (
    <div className="w-full h-full bg-[#0a0f1a] flex flex-col justify-between p-4">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-blue-400">Document Processing AI</span>
        <span className="text-[8px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400/80 px-1.5 py-0.5 rounded ml-auto">FastAPI</span>
      </div>
      <div className="flex gap-2">
        {['report.pdf', 'notes.txt', 'data.pdf'].map((f, i) => (
          <div key={f} className="flex-1 bg-white/5 border border-white/10 rounded p-2">
            <div className="text-[8px] font-mono text-foreground/60 mb-1">{f}</div>
            {[70, 50, 85, 40].map((w, j) => (
              <div key={j} className="h-[2px] bg-white/10 rounded mb-1" style={{ width: `${w}%`, opacity: 0.3 + i * 0.2 }} />
            ))}
          </div>
        ))}
      </div>
      <div className="bg-white/5 border border-white/10 rounded px-3 py-1.5 flex items-center gap-2">
        <span className="text-[9px] text-foreground/50 font-mono flex-1">Query your documents...</span>
        <span className="text-[8px] font-mono text-blue-400">FAISS</span>
      </div>
    </div>
  )
}

export function GeneratedMoonPreview() {
  return (
    <div className="w-full h-full bg-[#08070f] flex flex-col justify-between p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-yellow-300/80 tracking-widest">GENERATED MOON</span>
        <span className="text-[8px] font-mono bg-yellow-500/10 border border-yellow-500/20 text-yellow-400/80 px-1.5 py-0.5 rounded">Luxury AI</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="self-start bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1.5">
          <p className="text-[9px] text-yellow-100/80">What&apos;s your project budget range?</p>
        </div>
        <div className="self-end bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
          <p className="text-[9px] text-foreground/70">$15k – $25k for a full rebrand</p>
        </div>
        <div className="self-start bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1.5">
          <p className="text-[9px] text-yellow-100/80">Generating your project brief...</p>
        </div>
      </div>
      <div className="flex gap-1.5">
        {['Claude AI', 'Stripe', 'Resend'].map((t) => (
          <span key={t} className="text-[8px] font-mono bg-yellow-500/10 border border-yellow-500/20 text-yellow-400/80 px-1.5 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SynergyLivingPreview() {
  return (
    <div className="w-full h-full bg-[#0d1a0f] flex flex-col justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-green-500/40 border border-green-500/40 flex items-center justify-center text-[8px]">🌿</div>
        <span className="text-[10px] font-mono text-green-400">Synergy Living</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[2px] bg-green-500/20 rounded w-full" />
        <div className="text-[11px] font-semibold text-green-100">Balance your mind.</div>
        <div className="text-[11px] font-semibold text-green-100">Strengthen your life.</div>
        <div className="flex gap-[3px] mt-1">
          {[80, 60, 90, 70, 50].map((w, i) => (
            <div key={i} className="h-1.5 bg-green-400/20 rounded" style={{ width: `${w * 0.4}px` }} />
          ))}
        </div>
      </div>
      <div className="flex gap-1.5">
        {['Home', 'About', 'Resources', 'Stories'].map((p) => (
          <span key={p} className="text-[8px] font-mono text-green-400/60 border border-green-500/15 px-1.5 py-0.5 rounded bg-green-500/5">
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SmartSitePreview() {
  return (
    <div className="w-full h-full bg-[#07070f] flex flex-col justify-between p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 70%)' }}
      />
      <div className="flex items-center gap-2 relative">
        <span className="text-[10px] font-mono text-foreground/80">Smart<span className="text-purple-400">Site</span></span>
        <span className="text-[8px] font-mono border border-cyan-400/30 text-cyan-400/80 px-1.5 py-0.5 rounded ml-auto">VOICE AI</span>
      </div>
      <div className="flex flex-col gap-1.5 relative">
        <div className="text-[11px] font-bold text-white">Your website,</div>
        <div className="text-[11px] font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          built by voice
        </div>
        <div className="flex gap-1 mt-1">
          {['"Add testimonials"', '"Dark theme"'].map((c) => (
            <span key={c} className="text-[7px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-400/80 px-1.5 py-0.5 rounded">
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between relative">
        <span className="text-[8px] font-mono text-foreground/30">React · Vite · Web Speech API</span>
        <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 12px rgba(124,58,237,0.5)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>
        </div>
      </div>
    </div>
  )
}
