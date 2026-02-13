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
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            I build and deploy real-time AI systems that operate reliably in production environments. 
            My work focuses on applied LLM systems, voice AI platforms, and distributed AI infrastructure 
            that must perform consistently under load.
          </p>
          <p>
            I specialize in the full stack of AI infrastructure: LLM orchestration, semantic retrieval 
            pipelines, and WebSocket-based real-time communication. My systems are designed for 
            production—not prototypes. I've resolved critical production issues including latency 
            bottlenecks, call drops, timeouts, and session lifecycle bugs in deployed voice AI systems.
          </p>
          <p>
            My approach treats AI systems as distributed systems: modular orchestration layers, 
            rigorous evaluation of LLM failure modes, and observability-first design. I build 
            retrieval systems with filtering and evaluation rigor, ensuring reliability and 
            performance at scale.
          </p>
          <p>
            Based in Frederick, MD, I hold a B.S. in Computer Science from the University of Maryland 
            Global Campus (GPA 3.49) and a certificate in Artificial Intelligence Foundations. 
            U.S. Citizen, eligible for security clearance.
          </p>
        </div>
      </Section>

      <Section id="philosophy" title="Engineering Philosophy" subtitle="How I approach production AI systems">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 font-mono text-accent">Design for production, not prototypes</h3>
              <p className="text-foreground/70">
                Every system I build is architected for deployment, monitoring, and scale from day one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 font-mono text-accent">Optimize for latency, reliability, and observability</h3>
              <p className="text-foreground/70">
                Real-time systems require sub-second response times, graceful failure handling, and comprehensive metrics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 font-mono text-accent">Treat AI systems as distributed systems</h3>
              <p className="text-foreground/70">
                LLM applications are distributed by nature. They require proper state management, caching strategies, and failure modes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 font-mono text-accent">Build modular orchestration layers</h3>
              <p className="text-foreground/70">
                Separation of concerns enables maintainability, testability, and independent scaling of components.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 font-mono text-accent">Evaluate and monitor LLM failure modes</h3>
              <p className="text-foreground/70">
                LLMs fail in predictable ways. I implement circuit breakers, retry logic, and structured error handling.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 font-mono text-accent">Implement retrieval filtering and evaluation rigor</h3>
              <p className="text-foreground/70">
                RAG systems require careful filtering, relevance scoring, and continuous evaluation to maintain quality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="tech" title="Technical Stack" subtitle="Technologies I work with in production">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-accent">Languages</h3>
            <ul className="space-y-2">
              {techStack.languages.map((tech) => (
                <li key={tech} className="text-foreground/70">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-accent">AI/ML</h3>
            <ul className="space-y-2">
              {techStack.aiMl.map((tech) => (
                <li key={tech} className="text-foreground/70">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-accent">Real-Time Systems</h3>
            <ul className="space-y-2">
              {techStack.realTime.map((tech) => (
                <li key={tech} className="text-foreground/70">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-accent">Databases</h3>
            <ul className="space-y-2">
              {techStack.databases.map((tech) => (
                <li key={tech} className="text-foreground/70">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-accent">Cloud & DevOps</h3>
            <ul className="space-y-2">
              {techStack.cloud.map((tech) => (
                <li key={tech} className="text-foreground/70">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="architecture" title="Real-Time Voice AI Architecture" subtitle="Production system architecture and engineering considerations">
        <ArchitectureDiagram />
      </Section>

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
