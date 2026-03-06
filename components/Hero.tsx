'use client'

import { PRODUCTS } from './data'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero grid-bg">
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

      {/* Badge */}
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Building the future of digital experiences
      </div>

      {/* Title */}
      <h1 className="hero-title">
        Where{' '}
        <span className="grad-green">Intelligence</span>
        <br />
        Meets{' '}
        <span className="grad-warm">Innovation</span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Open Horizon Innovations builds AI-integrated, blockchain-powered web applications
        that transform how people learn, create, connect, and express themselves.
      </p>

      {/* CTAs */}
      <div className="hero-ctas">
        <button className="btn-primary" onClick={() => scrollTo('products')}>
          Explore Products →
        </button>
        <button className="btn-secondary" onClick={() => scrollTo('technology')}>
          Our Technology
        </button>
      </div>

      {/* Product pills */}
      <div className="hero-product-pills">
        {PRODUCTS.map((p, i) => (
          <div
            key={p.id}
            className="hero-pill"
            style={{
              animationDelay: `${i * 0.55}s`,
              borderColor: `${p.accent}22`,
            }}
            onClick={() => scrollTo('products')}
          >
            <span className="hero-pill-icon">{p.icon}</span>
            <div>
              <div className="hero-pill-name">{p.name}</div>
              <div className="hero-pill-tag" style={{ color: p.accent }}>
                {p.tag.split('·')[0].trim()}
              </div>
            </div>
            {p.status === 'Live' && <span className="live-dot" />}
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
