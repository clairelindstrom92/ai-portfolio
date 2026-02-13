/**
 * CHANGELOG - Portfolio Upgrade
 * 
 * Major updates:
 * - Rebalanced content to emphasize "production AI systems engineer" (not only voice AI)
 * - Updated Hero with new headline "I build production AI systems" and CTAs
 * - Restructured Projects section with 3 main projects:
 *   1. Voice AI for Field Ops - with employer badge and IP-safe content
 *   2. Manifest Alchemy AI - Founder project
 *   3. RAG Evaluation & Retrieval Toolkit - Personal project
 * - Added Experience section with timeline
 * - Updated Skills section with grouped, real skills (8-12 items)
 * - Improved Contact section with copy button and cleaner layout
 * - Updated all contact links throughout site
 * - Enhanced visual design: better typography, spacing, subtle motion
 * - Removed Architecture section from main page (moved to project detail)
 * - Made voice AI project page IP-safe with employer disclaimer
 */

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { Briefcase, Building2, Code, Calendar } from 'lucide-react'

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
      links: {
        live: '#', // TODO: Add live URL
        repo: 'https://github.com/clairelindstrom92/manifest-alchemy', // TODO: Verify repo exists
      },
    },
    {
      title: 'RAG Evaluation & Retrieval Toolkit',
      subtitle: 'Personal Build',
      description:
        'Comprehensive evaluation framework for RAG systems measuring retrieval quality (precision/recall), latency, groundedness, and response accuracy. Includes dataset harness, regression tests, and deployment tooling.',
      technologies: ['Python', 'FastAPI', 'Vector Search', 'Evaluation Metrics', 'Testing'],
      href: '/projects/rag-toolkit',
      featured: false,
      badge: 'Personal Project (WIP)',
      links: {
        repo: '#', // TODO: Add repo URL when available
      },
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-10 space-y-6 text-lg text-foreground/95 leading-relaxed">
            <p className="text-xl text-foreground/95">
              I build and deploy <span className="text-accent font-semibold">production AI systems</span> that operate reliably in real-world environments. 
              My work spans LLM orchestration, agentic systems, RAG infrastructure, evaluation frameworks, 
              and real-time voice AI platforms.
            </p>
            <p className="text-foreground/95">
              I specialize in the full stack of AI infrastructure: <span className="text-accent font-medium">LLM systems and agents</span>, 
              {' '}<span className="text-accent font-medium">semantic retrieval and RAG</span>, 
              {' '}<span className="text-accent font-medium">evaluation and testing</span>, and 
              {' '}<span className="text-accent font-medium">real-time communication systems</span>. My systems are designed for 
              production—not prototypes. I focus on reliability, observability, and performance at scale.
            </p>
            <p className="text-foreground/95">
              My approach treats AI systems as distributed systems: modular orchestration layers, 
              rigorous evaluation of LLM failure modes, and observability-first design. I build 
              systems with proper testing, monitoring, and deployment practices.
            </p>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-base text-foreground/75">
                Based in Frederick, MD. B.S. Computer Science (GPA: 3.49), University of Maryland Global Campus, 2025. 
                Certificate: Artificial Intelligence Foundations. U.S. Citizen, eligible for security clearance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Production AI systems I've built">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Technologies and capabilities">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Languages</h3>
              <ul className="space-y-2">
                {skills.languages.map((skill) => (
                  <li key={skill} className="text-foreground/90 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">AI & ML</h3>
              <ul className="space-y-2">
                {skills.aiMl.map((skill) => (
                  <li key={skill} className="text-foreground/90 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Web & Backend</h3>
              <ul className="space-y-2">
                {skills.webBackend.map((skill) => (
                  <li key={skill} className="text-foreground/90 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Databases</h3>
              <ul className="space-y-2">
                {skills.databases.map((skill) => (
                  <li key={skill} className="text-foreground/90 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2">
                {skills.cloud.map((skill) => (
                  <li key={skill} className="text-foreground/90 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Professional background">
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 relative pl-12">
              <div className="absolute left-6 top-8 w-2 h-2 bg-accent rounded-full" />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  )
}
