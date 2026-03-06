const TECH = [
  {
    icon: '🤖',
    title: 'AI-Integrated',
    desc: 'Every product is powered by advanced AI — from adaptive learning to generative music and intelligent content discovery.',
  },
  {
    icon: '🌐',
    title: 'Web-Based',
    desc: 'All applications are accessible from any modern browser, on any device. No installs, no friction.',
  },
  {
    icon: '⛓️',
    title: 'Blockchain',
    desc: 'Built on the Solana ecosystem with the OPHIN utility token — fast finality, micro-fees, and real on-chain rewards.',
  },
  {
    icon: '🔌',
    title: 'API-First',
    desc: 'A unified backend with robust REST API endpoints powers all products and enables seamless third-party integrations.',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="tech-section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ color: 'var(--accent-purple)' }}>
            Technology
          </div>
          <h2 className="section-title">
            Built on a modern,
            <br />
            integrated stack.
          </h2>
        </div>

        {/* Cards */}
        <div className="tech-grid">
          {TECH.map(item => (
            <div key={item.title} className="tech-card">
              <div className="tech-card-icon">{item.icon}</div>
              <div className="tech-card-title">{item.title}</div>
              <p className="tech-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* API banner */}
        <div className="api-banner">
          <div className="api-banner-icon">⚡</div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div className="api-banner-title">API-First Architecture</div>
            <p className="api-banner-desc">
              All Open Horizon products share a unified backend API infrastructure. Each application
              is web-based, AI-integrated, and communicates over robust REST endpoints — enabling
              fast development, shared authentication, and seamless future expansion across the ecosystem.
            </p>
          </div>
          <span className="api-banner-tag">REST API · WebSockets</span>
        </div>
      </div>
    </section>
  )
}
