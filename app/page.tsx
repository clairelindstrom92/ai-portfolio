'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import Link from 'next/link'
import { Building2, Code, Calendar, Zap, ArrowRight } from 'lucide-react'
import {
  VoiceAIPreview,
  ManifestAlchemyPreview,
  DocumentProcessingPreview,
  GeneratedMoonPreview,
  SynergyLivingPreview,
  SmartSitePreview,
  AOAISolutionsPreview,
} from './components/ProjectPreviews'
import AboutSceneWrapper from './components/AboutSceneWrapper'
import GitHubCarousel from './components/GitHubCarousel'

export default function Home() {
  const projects = [
    {
      title: 'Voice AI for Field Ops',
      subtitle: 'Production System',
      description:
        'Real-time voice orchestration system for field operations. Built production-grade infrastructure with reliability and latency optimizations, AWS deployment, and integrations with Twilio and OpenAI Realtime API.',
      technologies: ['Twilio', 'OpenAI Realtime', 'FastAPI', 'WebSocket', 'AWS EC2', 'Redis'],
      href: '/projects/voice-ai',
      featured: true,
      badge: 'Employer Project',
      preview: <VoiceAIPreview />,
      ownership: [
        'Architected real-time audio streaming pipeline',
        'Implemented session lifecycle and state management',
        'Optimized latency and reliability metrics',
        'Built monitoring and observability systems',
        'Deployed and maintained AWS infrastructure'
      ],
    },
    {
      title: 'Manifest Alchemy AI',
      subtitle: 'Founder Project',
      description:
        'Agentic planning platform with personalized AI memory, structured reasoning, and RAG-powered retrieval. Built with Next.js, Supabase, and vector search for intelligent task orchestration.',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Supabase', 'Vector DB', 'LLM Orchestration'],
      href: '/projects/manifest-alchemy',
      featured: true,
      badge: 'Founder Project',
      preview: <ManifestAlchemyPreview />,
      links: {
        live: 'https://manifestalchemy.ai',
        repo: 'https://github.com/clairelindstrom92/manifestalchemy.ai',
      },
    },
    {
      title: 'Document Processing AI',
      subtitle: 'Personal Build',
      description:
        'Production-grade RAG API built with FastAPI. Upload PDFs and plain-text files, then query them in natural language. Features FAISS vector indexing, character-based chunking with word-boundary snapping, SQLite metadata persistence, and an abstracted LLM provider pattern.',
      technologies: ['Python', 'FastAPI', 'FAISS', 'SQLite', 'RAG', 'LLM Abstraction'],
      href: '/projects/document-processing',
      featured: false,
      badge: 'Personal Project',
      preview: <DocumentProcessingPreview />,
      links: {
        repo: 'https://github.com/clairelindstrom92/Document-Processing-AI',
      },
    },
    {
      title: 'Generated Moon',
      subtitle: 'Luxury AI Design Agency',
      description:
        'Full-stack AI-powered design agency platform. Features an intelligent chatbot that conducts a structured assessment (5–8 questions) to auto-generate detailed project briefs, Stripe payments, Resend email integration, and lead capture — all deployable on Railway or Vercel.',
      technologies: ['React', 'Vite', 'Express', 'Claude AI', 'HuggingFace', 'Stripe', 'Resend'],
      href: '/projects/ai-design-website',
      featured: false,
      badge: 'Founder Project',
      preview: <GeneratedMoonPreview />,
      links: {
        live: 'https://ai-design-website-ruddy.vercel.app',
        repo: 'https://github.com/clairelindstrom92/AiDesignWebsite',
      },
    },
    {
      title: 'Synergy Living',
      subtitle: 'Wellness Platform',
      description:
        'Multi-page wellness platform built with clean semantic HTML, custom CSS, and vanilla JavaScript. Covers Home, About, Resources, Newsletter, and Stories — a full brand identity and content system with zero dependencies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
      href: '/projects/synergy-living',
      featured: false,
      badge: 'Founder Project',
      preview: <SynergyLivingPreview />,
      links: {
        live: 'https://synergylivingnews.com',
        repo: 'https://github.com/clairelindstrom92/synergyliving',
      },
    },
    {
      title: 'AO AI Solutions',
      subtitle: 'Founder Project',
      description:
        'AI-powered business systems platform. Built and deployed a full client-facing web application to deliver AI-driven solutions for business operations, live at aoaisolutions.dev.',
      technologies: ['JavaScript', 'Vite', 'Tailwind CSS', 'AI Integration'],
      href: '/projects/ao-ai-solutions',
      featured: false,
      badge: 'Founder Project',
      preview: <AOAISolutionsPreview />,
      links: {
        live: 'https://aoaisolutions.dev',
        repo: 'https://github.com/clairelindstrom92/AO-AI-Solutions',
      },
    },
  ]

  const prototypes = [
    {
      title: 'Smart Site',
      subtitle: 'Voice AI Web Builder',
      description:
        'Speak commands to modify a live website in real time. "Add testimonials", "dark theme", "add booking section" — the AI interprets voice input and updates the layout instantly with animated transitions.',
      technologies: ['React', 'Vite', 'Web Speech API', 'Claude API', 'OpenAI API', 'CSS'],
      href: '/projects/smart-site',
      repo: 'https://github.com/clairelindstrom92/smart-site-prototype',
      commands: ['"Add testimonials"', '"Dark theme"', '"Add booking section"', '"Make it modern"'],
    },
  ]

  const skills = {
    languages: ['Python', 'JavaScript', 'SQL', 'Java', 'C++'],
    aiMl: ['OpenAI APIs (Realtime & Chat)', 'LLMs', 'NLP', 'Prompt Engineering', 'AI Evaluation', 'TensorFlow'],
    webBackend: ['FastAPI', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'WebSockets'],
    databases: ['PostgreSQL', 'Supabase', 'SQLite', 'Airtable', 'Pinecone', 'Vector Databases'],
    cloud: ['AWS EC2', 'Load Balancing', 'Git/GitHub', 'Docker'],
  }

  const experience = [
    {
      company: 'Previous Employer',
      role: 'AI Software Engineer (Voice AI Systems)',
      period: '2025 - Present',
      description: 'Architected and deployed production-grade Voice AI system using Twilio Media Streams, OpenAI Realtime, FastAPI, and AWS EC2. Built low-latency WebSocket audio pipelines for real-time transcription and response generation. Implemented role-based conversational logic and dynamic data retrieval from operational databases. Designed caching and pre-generation strategies to eliminate cold-start latency and call drop-offs. Debugged and resolved real-time call reliability issues in a live production environment.',
    },
    {
      company: 'Manifest Alchemy',
      role: 'Founder & AI Engineer',
      period: '2024 - Present',
      description: 'Designed and built full-stack AI platform focused on long-term memory and personalized reasoning. Implemented LLM-powered conversational agents with structured prompts and semantic retrieval. Built modern web interfaces using React, Next.js, and Tailwind CSS. Designed scalable data models using PostgreSQL/Supabase with vector storage.',
    },
    {
      company: 'Re:Members',
      role: 'AI & Front-End Software Engineer',
      period: '2024 - 2025',
      description: 'Developed and maintained JavaScript, HTML, and CSS front-end components. Wrote and optimized SQL queries supporting customer and operational workflows. Assisted in training and evaluating AI chatbot systems, improving accuracy and reliability. Performed AI quality assurance, identifying hallucinations and failure cases prior to deployment.',
    },
    {
      company: 'The Kelly Companies',
      role: 'Data & AI Solutions Specialist',
      period: '2022 - 2023',
      description: 'Developed AI-driven VR/AR training programs using Unity, Unreal Engine, and Python. Built data-rich web platforms using React, Python, and SQL for analytics and LMS integration. Created AI-powered learning materials using ChatGPT API and Pinecone vector databases for semantic retrieval. Automated production workflows with Python, increasing efficiency by 40%. Contributed to AI-assisted visualization tools for training and performance tracking.',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="Production AI systems engineering">
        <div className="max-w-5xl mx-auto relative">
          {/* Floating glass 3D object */}
          <AboutSceneWrapper />
          <div
            className="glass-card rounded-2xl p-10 space-y-6 leading-relaxed relative z-10"
            style={{ maxWidth: '680px' }}
          >
            <p className="text-base" style={{ color: 'rgba(240,238,248,0.85)', lineHeight: 1.9 }}>
              I build and deploy{' '}
              <span className="holo-text" style={{ fontWeight: 500 }}>production AI systems</span>{' '}
              that operate reliably in real-world environments. My work spans LLM orchestration,
              agentic systems, RAG infrastructure, evaluation frameworks, and real-time voice AI platforms.
            </p>
            <p className="text-base" style={{ color: 'rgba(240,238,248,0.7)', lineHeight: 1.9 }}>
              I specialize in the full stack of AI infrastructure:{' '}
              <span style={{ color: 'var(--lavender)' }}>LLM systems and agents</span>,{' '}
              <span style={{ color: 'var(--aqua)' }}>semantic retrieval and RAG</span>,{' '}
              <span style={{ color: 'var(--pink)' }}>evaluation and testing</span>, and{' '}
              <span style={{ color: 'var(--lavender)' }}>real-time communication systems</span>.
            </p>
            <p className="text-base" style={{ color: 'rgba(240,238,248,0.7)', lineHeight: 1.9 }}>
              My approach treats AI systems as distributed systems: modular orchestration layers,
              rigorous evaluation of LLM failure modes, and observability-first design.
            </p>
            <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-sm" style={{ color: 'rgba(240,238,248,0.45)', lineHeight: 1.8 }}>
                Based in Frederick, MD · B.S. Computer Science (GPA: 3.49), UMGC 2025 ·
                Certificate: Artificial Intelligence Foundations · U.S. Citizen, clearance eligible
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Production AI systems I've built">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="github" title="GitHub" subtitle="10 most recent repositories">
        <GitHubCarousel />
      </Section>

      <Section id="skills" title="Skills" subtitle="Technologies and capabilities">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'Languages', items: skills.languages, color: 'var(--pink)' },
              { label: 'AI & ML', items: skills.aiMl, color: 'var(--lavender)' },
              { label: 'Web & Backend', items: skills.webBackend, color: 'var(--aqua)' },
              { label: 'Databases', items: skills.databases, color: 'var(--pink)' },
              { label: 'Cloud & DevOps', items: skills.cloud, color: 'var(--lavender)' },
            ].map(({ label, items, color }) => (
              <div key={label} className="glass-card rounded-2xl p-6">
                <h3
                  className="holo-label mb-5"
                  style={{ color }}
                >
                  {label}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm flex items-center gap-2"
                      style={{ color: 'rgba(240,238,248,0.65)' }}
                    >
                      <span style={{ color, opacity: 0.5, fontSize: '0.5rem' }}>◆</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Professional background">
        <div className="max-w-4xl mx-auto space-y-5">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 relative pl-12"
            >
              <div
                className="absolute left-6 top-9 w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, var(--pink), var(--lavender))' }}
              />
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div>
                  <h3
                    className="font-display mb-1"
                    style={{ fontSize: '1.3rem', fontWeight: 300, letterSpacing: '0.03em', color: 'var(--pearl)' }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2" style={{ color: 'rgba(240,238,248,0.5)' }}>
                    <Building2 className="h-3.5 w-3.5" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'rgba(240,238,248,0.35)' }}>
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-xs tracking-wider">{exp.period}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,238,248,0.65)', lineHeight: 1.8 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="prototypes" title="Prototypes" subtitle="Interactive demos and experiments">
        <div className="space-y-6">
          {prototypes.map((proto) => (
            <div
              key={proto.title}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-500"
              style={{ '--ease-float': 'cubic-bezier(0.23, 1, 0.32, 1)' } as React.CSSProperties}
            >
              <div className="w-full aspect-video overflow-hidden relative" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <SmartSitePreview />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-5 flex-wrap gap-4">
                  <div>
                    <span className="holo-chip mb-3 inline-flex items-center gap-1.5">
                      <Zap className="h-3 w-3" style={{ color: 'var(--aqua)' }} />
                      Interactive Prototype
                    </span>
                    <h3
                      className="font-display mt-3"
                      style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.04em', color: 'var(--lavender)' }}
                    >
                      {proto.title}
                    </h3>
                    <p className="holo-label mt-1">{proto.subtitle}</p>
                  </div>
                  {proto.repo && (
                    <a
                      href={proto.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(240,238,248,0.3)' }}
                      aria-label="Repository"
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--pink)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.3)')}
                    >
                      <Code className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(240,238,248,0.65)', maxWidth: '42rem', lineHeight: 1.8 }}>
                  {proto.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proto.technologies.map((tech) => (
                    <span key={tech} className="holo-chip">{tech}</span>
                  ))}
                </div>

                <div
                  className="flex items-center justify-between flex-wrap gap-4 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex flex-wrap gap-2">
                    {proto.commands.map((cmd) => (
                      <span
                        key={cmd}
                        className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{ color: 'var(--aqua)', background: 'rgba(126,232,232,0.06)', border: '1px solid rgba(126,232,232,0.15)' }}
                      >
                        {cmd}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={proto.href}
                    className="flex items-center gap-2 text-xs tracking-wider group transition-all duration-300"
                    style={{ color: 'rgba(240,238,248,0.45)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--lavender)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,238,248,0.45)')}
                  >
                    View Details
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  )
}
