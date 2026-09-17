'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const NAV_ITEMS = [
  { label: 'Products',   href: '/#products' },
  { label: 'Technology', href: '/#technology' },
  { label: 'About',      href: '/#about' },
  { label: 'Contact',    href: '/contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled || menuOpen ? ' scrolled' : ''}`}>
        {/* Logo */}
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          <div className="nav-logo-icon">O</div>
          <div>
            <div className="nav-logo-name">Open Horizon</div>
            <div className="nav-logo-sub">Innovations</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              <Link href={item.href} className="nav-link">{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="nav-right">
          <span className="token-badge">$OPHIN · Solana</span>

          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div
              className="theme-toggle-knob"
              style={{
                background:  isDark ? '#00E5A0' : '#3B82F6',
                transform:   isDark ? 'translateX(20px)' : 'translateX(0px)',
              }}
            >
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className="nav-drawer-link"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          <span className="token-badge" style={{ fontSize: 12 }}>$OPHIN · Solana</span>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed', inset: 0, zIndex: 997,
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}
    </>
  )
}
