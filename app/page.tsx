import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import ArchitectureDiagram from './components/ArchitectureDiagram'

export default function Home() {
  const projects = [
    {
      title: 'Real-Time Voice AI System',
      description:
        'Production voice AI platform with bidirectional WebSocket streaming, context retrieval, role-aware dialogue flows, and latency optimization. Deployed on AWS EC2.',
      technologies: ['Twilio', 'OpenAI Realtime', 'FastAPI', 'WebSocket', 'AWS EC2', 'Redis'],
      href: '/projects/voice-ai',
      featured: true,
    },
    {
      title: 'Manifest Alchemy',
      description:
        'Full-stack AI reasoning platform with LLM structured prompting, semantic retrieval via vector database, and personalized AI memory architecture.',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Supabase', 'Vector DB', 'LLM Orchestration'],
      href: '/projects/manifest-alchemy',
      featured: true,
    },
    {
      title: 'AI Personal Assistant',
      description:
        'FastAPI-based assistant with goal tracking, NLP pipeline, and real-time response logic. Improved response accuracy by ~40% through optimization.',
      technologies: ['FastAPI', 'OpenAI', 'NLP', 'Cloud Deployed'],
      href: '/projects/ai-assistant',
      featured: false,
    },
    {
      title: 'AI Laundry Automation Robot',
      description:
        'Autonomous robot with OpenCV computer vision, ROS navigation, SLAM, and task scheduling. Achieved ~35% efficiency improvement through optimization.',
      technologies: ['OpenCV', 'ROS', 'SLAM', 'Computer Vision', 'Task Scheduling'],
      href: '/projects/robotics',
      featured: false,
    },
  ]

  const techStack = {
    languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java'],
    aiMl: [
      'OpenAI Realtime',
      'LLM Orchestration',
      'RAG Systems',
      'Vector Databases',
      'Semantic Search',
      'NLP Pipelines',
    ],
    realTime: [
      'WebSocket',
      'Twilio Media Streams',
      'FastAPI',
      'Real-Time Audio Streaming',
      'Session Management',
    ],
    databases: ['PostgreSQL', 'Redis', 'Vector DB', 'Supabase'],
    cloud: ['AWS EC2', 'Docker', 'CI/CD', 'Vercel', 'Cloud Deployment'],
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="Production AI systems engineering">
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-10 space-y-8 text-lg text-foreground/95 leading-relaxed">
            <p className="text-xl text-foreground/95">
              I build and deploy <span className="text-accent font-semibold">real-time AI systems</span> that operate reliably in production environments. 
              My work focuses on applied LLM systems, voice AI platforms, and distributed AI infrastructure 
              that must perform consistently under load.
            </p>
            <p className="text-foreground/95">
              I specialize in the full stack of AI infrastructure: <span className="text-accent font-medium">LLM orchestration</span>, 
              {' '}<span className="text-accent font-medium">semantic retrieval pipelines</span>, and 
              {' '}<span className="text-accent font-medium">WebSocket-based real-time communication</span>. My systems are designed for 
              production—not prototypes. I've resolved critical production issues including latency 
              bottlenecks, call drops, timeouts, and session lifecycle bugs in deployed voice AI systems.
            </p>
            <p className="text-foreground/95">
              My approach treats AI systems as distributed systems: modular orchestration layers, 
              rigorous evaluation of LLM failure modes, and observability-first design. I build 
              retrieval systems with filtering and evaluation rigor, ensuring reliability and 
              performance at scale.
            </p>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-base text-foreground/75">
                Based in Frederick, MD, I hold a B.S. in Computer Science from the University of Maryland 
                Global Campus (GPA 3.49) and a certificate in Artificial Intelligence Foundations. 
                U.S. Citizen, eligible for security clearance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="philosophy" title="Engineering Philosophy" subtitle="How I approach production AI systems">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/50 transition-colors rounded-l-lg" />
              <h3 className="text-xl font-bold mb-3 font-mono text-accent">Design for production, not prototypes</h3>
              <p className="text-foreground/90 leading-relaxed">
                Every system I build is architected for deployment, monitoring, and scale from day one.
              </p>
            </div>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/50 transition-colors rounded-l-lg" />
              <h3 className="text-xl font-bold mb-3 font-mono text-accent">Optimize for latency, reliability, and observability</h3>
              <p className="text-foreground/90 leading-relaxed">
                Real-time systems require sub-second response times, graceful failure handling, and comprehensive metrics.
              </p>
            </div>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/50 transition-colors rounded-l-lg" />
              <h3 className="text-xl font-bold mb-3 font-mono text-accent">Treat AI systems as distributed systems</h3>
              <p className="text-foreground/90 leading-relaxed">
                LLM applications are distributed by nature. They require proper state management, caching strategies, and failure modes.
              </p>
            </div>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/50 transition-colors rounded-l-lg" />
              <h3 className="text-xl font-bold mb-3 font-mono text-accent">Build modular orchestration layers</h3>
              <p className="text-foreground/90 leading-relaxed">
                Separation of concerns enables maintainability, testability, and independent scaling of components.
              </p>
            </div>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/50 transition-colors rounded-l-lg" />
              <h3 className="text-xl font-bold mb-3 font-mono text-accent">Evaluate and monitor LLM failure modes</h3>
              <p className="text-foreground/90 leading-relaxed">
                LLMs fail in predictable ways. I implement circuit breakers, retry logic, and structured error handling.
              </p>
            </div>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/50 transition-colors rounded-l-lg" />
              <h3 className="text-xl font-bold mb-3 font-mono text-accent">Implement retrieval filtering and evaluation rigor</h3>
              <p className="text-foreground/90 leading-relaxed">
                RAG systems require careful filtering, relevance scoring, and continuous evaluation to maintain quality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="tech" title="Technical Stack" subtitle="Technologies I work with in production">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 font-mono text-accent">Languages</h3>
            <ul className="space-y-3">
              {techStack.languages.map((tech) => (
                <li key={tech} className="text-foreground/95 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 font-mono text-accent">AI/ML</h3>
            <ul className="space-y-3">
              {techStack.aiMl.map((tech) => (
                <li key={tech} className="text-foreground/95 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 font-mono text-accent">Real-Time Systems</h3>
            <ul className="space-y-3">
              {techStack.realTime.map((tech) => (
                <li key={tech} className="text-foreground/95 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 font-mono text-accent">Databases</h3>
            <ul className="space-y-3">
              {techStack.databases.map((tech) => (
                <li key={tech} className="text-foreground/95 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 font-mono text-accent">Cloud & DevOps</h3>
            <ul className="space-y-3">
              {techStack.cloud.map((tech) => (
                <li key={tech} className="text-foreground/95 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="h-px bg-foreground/5 mx-auto max-w-7xl" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-4">
              Production System Case Study
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight text-foreground">
              Real-Time Voice AI Architecture
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Production system architecture and engineering considerations
            </p>
          </div>
          <div className="space-y-12">
            <div className="max-w-6xl mx-auto">
              <ArchitectureDiagram />
            </div>
          </div>
        </div>
      </section>

      <Section id="projects" title="Featured Projects" subtitle="Production AI systems I've built and deployed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  )
}
