'use client'

import { useState } from 'react'
import { PRODUCTS } from './data'

const BAR_COLORS = [
  'var(--accent-green)',
  'var(--accent-blue)',
  'var(--accent-purple)',
  'var(--accent-orange)',
  'var(--accent-sky)',
  'var(--accent-green)',
  'var(--accent-blue)',
  'var(--accent-purple)',
]

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const liveCount = PRODUCTS.filter((p) => p.status === 'Live').length
  const floaters = PRODUCTS.filter((p) => p.id !== 'learnchain').slice(0, 3)

  return (
    <section id="hero" className="hero">
      {/* Ambient orbs */}
      <div
        className="hero-orb"
        style={{
          width: 560,
          height: 560,
          top: '12%',
          left: '4%',
          background: 'radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 68%)',
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: 460,
          height: 460,
          top: '25%',
          right: '2%',
          background: 'radial-gradient(circle, rgba(0,163,255,0.07) 0%, transparent 68%)',
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: 340,
          height: 340,
          bottom: '8%',
          left: '28%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 68%)',
        }}
      />

      <div className="hero-inner">
        {/* Left: copy */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Building the future of digital experiences
          </div>

          <h1 className="hero-title">
            Where{' '}
            <span className="grad-green">Intelligence</span>
            <br />
            Meets{' '}
            <span className="grad-warm">Innovation</span>
          </h1>

          <p className="hero-subtitle">
            Open Horizon Innovations builds AI-integrated, blockchain-powered web applications
            that transform how people learn, create, connect, and express themselves.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo('products')}>
              Explore Products →
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('technology')}>
              Our Technology
            </button>
          </div>
        </div>

        {/* Right: floating product dashboard */}
        <div
          className="hero-visual-perspective"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="hero-visual-scene"
            style={{
              transform: `rotateY(${tilt.x * 14}deg) rotateX(${tilt.y * -14}deg)`,
            }}
          >
            <div className="hero-visual-glow" />

            <div className="hero-main-card">
              <div className="hero-main-card-header">
                <span className="hero-main-card-logo">◆</span>
                <div>
                  <div className="hero-main-card-title">Open Horizon Ecosystem</div>
                  <div className="hero-main-card-sub">
                    <span className="live-dot" />
                    All systems operational
                  </div>
                </div>
              </div>

              <div className="hero-main-card-stats">
                <div className="hero-stat-tile">
                  <div className="hero-stat-value">{PRODUCTS.length}</div>
                  <div className="hero-stat-label">Products</div>
                </div>
                <div className="hero-stat-tile">
                  <div className="hero-stat-value" style={{ color: 'var(--accent-green)' }}>
                    {liveCount} Live
                  </div>
                  <div className="hero-stat-label">Shipping</div>
                </div>
                <div className="hero-stat-tile">
                  <div className="hero-stat-value font-mono">$OPHIN</div>
                  <div className="hero-stat-label">Solana Token</div>
                </div>
              </div>

              <div className="hero-main-card-bars">
                {BAR_COLORS.map((color, i) => (
                  <span
                    key={i}
                    className="hero-bar"
                    style={{ animationDelay: `${i * 0.12}s`, background: color }}
                  />
                ))}
              </div>
            </div>

            {floaters.map((p, i) => (
              <div key={p.id} className={`hero-float-slot hero-float-slot-${i + 1}`}>
                <div
                  className="hero-float-card"
                  style={{ borderColor: `${p.accent}40`, animationDelay: `${i * 0.4}s` }}
                  onClick={() => scrollTo('products')}
                >
                  <span className="hero-float-icon">{p.icon}</span>
                  <div>
                    <div className="hero-float-name">{p.name}</div>
                    <div className="hero-float-tag" style={{ color: p.accent }}>
                      {p.status === 'Live' ? 'Live' : 'Coming Soon'}
                    </div>
                  </div>
                  {p.status === 'Live' && <span className="live-dot" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
