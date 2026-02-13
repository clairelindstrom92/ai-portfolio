import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function RoboticsPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Laundry Automation Robot</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Autonomous robot with computer vision, SLAM navigation, and task scheduling optimization
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['OpenCV', 'ROS', 'SLAM', 'Computer Vision', 'C++', 'Task Scheduling', 'Object Detection'].map((tech) => (
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
                Built an autonomous laundry automation robot that needed to navigate indoor
                environments, detect and manipulate laundry items, and optimize task execution
                for efficiency. The system required computer vision for object detection,
                SLAM for navigation, and intelligent task scheduling algorithms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Architecture</h2>
              <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 font-mono text-sm space-y-3">
                <div>OpenCV (Computer Vision)</div>
                <div className="text-foreground/60">↓</div>
                <div>Object Detection Pipeline</div>
                <div className="text-foreground/60">↓</div>
                <div>ROS (Robot Operating System)</div>
                <div className="text-foreground/60">↓</div>
                <div>SLAM (Simultaneous Localization & Mapping)</div>
                <div className="text-foreground/60">↓</div>
                <div>Autonomous Navigation System</div>
                <div className="text-foreground/60">↓</div>
                <div>Task Scheduling Algorithms</div>
                <div className="text-foreground/60">↓</div>
                <div>Efficiency Optimization Engine</div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Technical Challenges</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Computer Vision:</strong> Implemented
                  object detection using OpenCV to identify and classify laundry items in
                  various lighting conditions and orientations.
                </li>
                <li>
                  <strong className="text-foreground">SLAM Navigation:</strong> Built
                  simultaneous localization and mapping system for autonomous navigation in
                  indoor environments without GPS.
                </li>
                <li>
                  <strong className="text-foreground">Collision Detection:</strong> Implemented
                  physics-based collision detection and avoidance algorithms for safe operation.
                </li>
                <li>
                  <strong className="text-foreground">Task Scheduling:</strong> Designed
                  algorithms to optimize task execution order and resource allocation for
                  maximum efficiency.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Optimization Work</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Efficiency Improvement:</strong> Achieved
                  ~35% efficiency improvement through optimization of task scheduling algorithms
                  and navigation paths.
                </li>
                <li>
                  <strong className="text-foreground">Vision Processing:</strong> Optimized
                  computer vision pipeline for real-time object detection with reduced latency.
                </li>
                <li>
                  <strong className="text-foreground">Path Planning:</strong> Implemented
                  efficient path planning algorithms to minimize travel time and energy
                  consumption.
                </li>
                <li>
                  <strong className="text-foreground">Resource Management:</strong> Optimized
                  task allocation and resource utilization for better overall system performance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Deployment Details</h2>
              <ul className="space-y-3 text-foreground/80 leading-relaxed">
                <li>
                  <strong className="text-foreground">Platform:</strong> ROS-based robotic
                  system with modular architecture
                </li>
                <li>
                  <strong className="text-foreground">Vision System:</strong> OpenCV for
                  computer vision and object detection
                </li>
                <li>
                  <strong className="text-foreground">Navigation:</strong> SLAM algorithms for
                  autonomous navigation and mapping
                </li>
                <li>
                  <strong className="text-foreground">Control:</strong> Real-time control
                  systems for precise manipulation and movement
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 font-mono text-accent">Impact</h2>
              <p className="text-foreground/80 leading-relaxed">
                Successfully developed an autonomous laundry automation robot that demonstrates
                advanced capabilities in computer vision, SLAM navigation, and task optimization.
                Achieved approximately 35% efficiency improvement through systematic optimization
                of scheduling algorithms and navigation systems. The project showcases expertise
                in robotics, computer vision, and algorithm optimization for real-world
                autonomous systems.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
