'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleField() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { opacity: 0 },
        fpsLimit: 60,
        particles: {
          number: { value: 55, density: { enable: true, width: 1400 } },
          color: { value: ['#f4a7c3', '#c9b8f5', '#7ee8e8', '#f0eef8'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.04, max: 0.25 },
            animation: { enable: true, speed: 0.4, sync: false },
          },
          size: {
            value: { min: 0.5, max: 1.8 },
          },
          move: {
            enable: true,
            speed: 0.25,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
