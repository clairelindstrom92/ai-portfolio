import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  noDivider?: boolean
}

export default function Section({ id, title, subtitle, children, className = '', noDivider = false }: SectionProps) {
  return (
    <>
      {!noDivider && <div className="h-px bg-foreground/5 mx-auto max-w-7xl" />}
      <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}>
        <div className="max-w-7xl mx-auto">
          {(title || subtitle) && (
            <div className="mb-12 text-center">
              {title && (
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          <div className="space-y-12">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
