import { PRODUCTS } from './data'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: 'linear-gradient(135deg, #00E5A0, #00A3FF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            fontWeight: 800,
            color: '#000',
            flexShrink: 0,
          }}
        >
          O
        </div>
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
          <a key={p.id} href="#products" className="footer-link">
            {p.name}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Open Horizon Innovations. All rights reserved.
      </p>
    </footer>
  )
}
