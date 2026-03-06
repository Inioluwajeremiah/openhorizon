export default function Cta() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-card">
        {/* Background orb */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-15%',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40%',
            right: '-10%',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,163,255,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-label" style={{ color: 'var(--accent-green)', marginBottom: 20 }}>
          Get In Touch
        </div>

        <h2 className="cta-title">Ready to join the future?</h2>

        <p className="cta-desc">
          Whether you&apos;re a student, creator, or developer — there&apos;s a place for you
          in the Open Horizon ecosystem.
        </p>

        <div className="cta-btns">
          <button className="btn-primary">Start with LearnChain →</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>
    </section>
  )
}
