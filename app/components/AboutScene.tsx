'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, MeshTransmissionMaterial, Environment, Float } from '@react-three/drei'

function GlassKnot() {
  const meshRef = useRef<any>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05
  })

  return (
    <Float speed={0.8} floatIntensity={1.0} rotationIntensity={0.2}>
      <TorusKnot ref={meshRef} args={[0.7, 0.22, 200, 20, 2, 3]}>
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={512}
          transmission={1}
          roughness={0.05}
          thickness={0.3}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#c9b8f5"
        />
      </TorusKnot>
      <pointLight color="#f4a7c3" intensity={2} distance={5} position={[2, 2, 2]} />
      <pointLight color="#7ee8e8" intensity={1.5} distance={4} position={[-2, -1, 1]} />
    </Float>
  )
}

export default function AboutScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '360px',
        height: '360px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <Environment preset="city" />
      <GlassKnot />
    </Canvas>
  )
}
