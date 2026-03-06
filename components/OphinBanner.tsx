export default function OphinBanner() {
  const stats = [
    { icon: '◎', value: 'Solana', label: 'Blockchain' },
    { icon: '🪙', value: '$OPHIN', label: 'Token' },
    { icon: '🔑', value: 'Rewards + Access', label: 'Utility' },
  ]

  return (
    <section className="ophin-section">
      <div className="container">
        <div className="ophin-inner">
          {/* Left text */}
          <div style={{ maxWidth: 540 }}>
            <div className="section-label" style={{ color: 'var(--accent-green)' }}>
              OPHIN Token
            </div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Earn crypto for learning.
              <br />
              Power the ecosystem.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.78 }}>
              OPHIN is our native utility token on the Solana blockchain — fast, low-cost,
              and built for rewards. Students earn it through learning. Creators use it for
              access. The entire Open Horizon ecosystem runs on it.
            </p>
          </div>

          {/* Right stats */}
          <div className="ophin-stats">
            {stats.map((s) => (
              <div key={s.label} className="ophin-stat">
                <div className="ophin-stat-icon">{s.icon}</div>
                <div className="ophin-stat-value font-mono">{s.value}</div>
                <div className="ophin-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
