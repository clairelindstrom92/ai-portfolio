'use client'

import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export default function CardSparkles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 60 }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <Sparkles
        count={30}
        scale={4}
        size={1.5}
        speed={0.4}
        color="#c9b8f5"
        opacity={0.8}
      />
      <Sparkles
        count={20}
        scale={3}
        size={1}
        speed={0.6}
        color="#f4a7c3"
        opacity={0.6}
      />
    </Canvas>
  )
}
