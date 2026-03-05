'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = ['about', 'projects', 'skills', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? 'rgba(8, 8, 16, 0.75)'
          : 'rgba(8, 8, 16, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid' : '1px solid transparent',
        borderBottomColor: isScrolled ? undefined : 'transparent',
        animation: isScrolled ? 'border-iridescent 3s ease infinite' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-sm font-medium tracking-widest uppercase transition-all duration-300"
            style={{ color: 'rgba(240, 238, 248, 0.7)', fontFamily: 'var(--font-dm-sans)' }}
          >
            CL
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 group"
                style={{
                  color: activeSection === link.id
                    ? 'var(--pearl)'
                    : 'rgba(240, 238, 248, 0.5)',
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, var(--pink), var(--lavender), var(--aqua))',
                    }}
                  />
                )}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, var(--pink), var(--lavender), var(--aqua))',
                  }}
                />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'rgba(240, 238, 248, 0.6)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3" style={{ background: 'rgba(8,8,16,0.9)', backdropFilter: 'blur(20px)' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-2 text-xs tracking-widest uppercase cursor-pointer transition-colors"
                style={{ color: activeSection === link.id ? 'var(--lavender)' : 'rgba(240, 238, 248, 0.55)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
