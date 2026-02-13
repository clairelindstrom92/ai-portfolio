'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-foreground/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold hover:text-accent transition-colors">
            Claire Lindstrom
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="#tech"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              href="#architecture"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#about"
              className="block py-2 text-sm hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#tech"
              className="block py-2 text-sm hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tech Stack
            </Link>
            <Link
              href="#architecture"
              className="block py-2 text-sm hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Architecture
            </Link>
            <Link
              href="#projects"
              className="block py-2 text-sm hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-sm hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
