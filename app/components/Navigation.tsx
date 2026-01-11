'use client'

import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['#home', '#love-story', '#ceremony', '#schedule', '#gifts', '#faq', '#rsvp']
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.querySelector(section)
      if (element) {
        observer.observe(element)
      }
    })

    // Handle home section when at top of page
    const handleScrollForHome = () => {
      if (window.scrollY < 100) {
        setActiveSection('#home')
      }
    }
    window.addEventListener('scroll', handleScrollForHome)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollForHome)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#love-story', label: 'Our Love Story' },
    { href: '#ceremony', label: 'Ceremony' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#gifts', label: 'Gifts' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rsvp', label: 'RSVP' },
  ]

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span>GRACE</span> <span>&</span> <span>DANIEL</span>
        </a>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={activeSection === link.href ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

