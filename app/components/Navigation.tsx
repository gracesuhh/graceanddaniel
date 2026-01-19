'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import './Navigation.css'

export default function Navigation() {
  const pathname = usePathname()
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
    // If we're on the RSVP page, set active section to RSVP
    if (pathname === '/rsvp') {
      setActiveSection('#rsvp')
      return
    }

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
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (href === '#home') {
      if (pathname === '/rsvp') {
        // If on RSVP page, navigate to home page
        window.location.href = '/'
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (href === '#rsvp') {
      // Navigate to RSVP page
      window.location.href = '/rsvp'
    } else {
      // If on RSVP page, navigate to home first, then scroll
      if (pathname === '/rsvp') {
        window.location.href = `/${href}`
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

