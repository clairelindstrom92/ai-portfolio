'use client'

import dynamic from 'next/dynamic'

const AboutScene = dynamic(() => import('./AboutScene'), { ssr: false })

export default function AboutSceneWrapper() {
  return <AboutScene />
}
