const STATS = [
  { value: '4',      label: 'Products',    sub: 'in the ecosystem' },
  { value: 'Solana', label: 'Blockchain',  sub: 'low fees, fast finality' },
  { value: '100%',   label: 'AI-Powered',  sub: 'across all products' },
  { value: '$OPHIN', label: 'Token',       sub: 'our utility token' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Text */}
          <div>
            <div className="section-label" style={{ color: 'var(--accent-sky)' }}>
              About Us
            </div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              Open Horizon
              <br />
              Innovations
            </h2>
            <div className="about-text">
              <p>
                We are a software company at the intersection of artificial intelligence,
                blockchain technology, and human creativity. Our mission is to build products
                that are not just tools — but transformative experiences.
              </p>
              <p>
                From helping high schoolers earn crypto for academic achievement, to empowering
                screenwriters with AI co-creation, to giving musicians AI-powered composition
                tools and creators a micro-blogging platform — every product we build reflects
                our belief that technology should unlock human potential.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats-grid">
            {STATS.map(s => (
              <div key={s.label} className="about-stat-card">
                <div className="about-stat-value">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
                <div className="about-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
