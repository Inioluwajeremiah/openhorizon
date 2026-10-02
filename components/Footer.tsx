import Link from 'next/link'
import { PRODUCTS } from './data'
import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoMark size={30} id="footer-mark" />
        <span
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          Open Horizon Innovations
        </span>
      </div>

      {/* Product links */}
      <nav className="footer-links">
        {PRODUCTS.map((p) => (
          <Link key={p.id} href="/#products" className="footer-link">
            {p.name}
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Open Horizon Innovations. All rights reserved.
      </p>
    </footer>
  )
}
