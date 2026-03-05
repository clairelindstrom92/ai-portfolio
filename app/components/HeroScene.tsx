'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function IridescentSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#c9b8f5"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
          envMapIntensity={2}
        />
      </Sphere>
      <pointLight color="#f4a7c3" intensity={3} distance={6} position={[-1.5, 1, 1]} />
      <pointLight color="#7ee8e8" intensity={2} distance={5} position={[1.5, -1, 0.5]} />
    </Float>
  )
}

function FloatingOrbs() {
  const orbs = [
    { position: [-3.5, 1.5, -2] as [number, number, number], color: '#f4a7c3', scale: 0.3, speed: 0.8 },
    { position: [3, -1, -3] as [number, number, number], color: '#7ee8e8', scale: 0.2, speed: 1.1 },
    { position: [-2, -2, -2.5] as [number, number, number], color: '#c9b8f5', scale: 0.25, speed: 0.9 },
    { position: [2.5, 2, -3.5] as [number, number, number], color: '#f0eef8', scale: 0.18, speed: 1.3 },
  ]

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} floatIntensity={1.2}>
          <Sphere position={orb.position} args={[orb.scale, 32, 32]}>
            <MeshDistortMaterial
              color={orb.color}
              distort={0.5}
              speed={1.5}
              roughness={0}
              metalness={0.9}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <IridescentSphere />
      <FloatingOrbs />
    </Canvas>
  )
}
