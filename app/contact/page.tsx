'use client'

import { useState, type FormEvent } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const CONTACT_EMAIL = 'scryptyrao@openhorizoninnovations.com'

const REASONS = ['General Inquiry', 'Product Support', 'Partnerships', 'Press', 'Careers']

interface FormState {
  name: string
  email: string
  reason: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    reason: REASONS[0],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.reason}] Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="contact-hero">
          <div
            className="hero-orb"
            style={{
              width: 460,
              height: 460,
              top: '0%',
              left: '6%',
              background: 'radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 68%)',
            }}
          />
          <div
            className="hero-orb"
            style={{
              width: 380,
              height: 380,
              top: '10%',
              right: '4%',
              background: 'radial-gradient(circle, rgba(0,163,255,0.07) 0%, transparent 68%)',
            }}
          />
          <div className="container">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Get In Touch
            </div>
            <h1 className="hero-title" style={{ maxWidth: 640 }}>
              Let&apos;s start a{' '}
              <span className="grad-green">conversation</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: 560, marginBottom: 0 }}>
              Questions about a product, a partnership idea, or press inquiry — the Open
              Horizon team reads every message.
            </p>
          </div>
        </section>

        {/* Form + info */}
        <section className="contact-section">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="section-label" style={{ color: 'var(--accent-green)' }}>
                Contact Details
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                We&apos;d love to hear from you.
              </h2>
              <p>
                Reach out directly by email, or use the form and we&apos;ll get back to you as
                soon as we can.
              </p>

              <div className="contact-info-cards">
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-info-card">
                  <span className="contact-info-icon">✉️</span>
                  <div>
                    <div className="contact-info-label">Email us</div>
                    <div className="contact-info-value">{CONTACT_EMAIL}</div>
                  </div>
                </a>
                <div className="contact-info-card">
                  <span className="contact-info-icon">⚡</span>
                  <div>
                    <div className="contact-info-label">Response time</div>
                    <div className="contact-info-value">Within 1–2 business days</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {sent ? (
                <div className="contact-success">
                  <div style={{ fontSize: 40 }}>✅</div>
                  <h3>Your email app should be open</h3>
                  <p>
                    We prefilled a message addressed to {CONTACT_EMAIL} — just hit send from
                    there. If nothing opened, email us directly at that address.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="reason">What&apos;s this about?</label>
                    <select id="reason" name="reason" value={form.reason} onChange={handleChange}>
                      {REASONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Send Message →
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
