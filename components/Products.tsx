"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "./data";

function ProductMockupBody({ product }: { product: Product }) {
  switch (product.id) {
    case "learnchain":
      return (
        <>
          <div className="quiz-progress-track">
            <div
              className="quiz-progress-fill"
              style={{ width: "40%", background: product.accent }}
            />
          </div>
          <div className="quiz-question">
            Which pigment absorbs light for photosynthesis?
          </div>
          <div
            className="quiz-option"
            style={{
              borderColor: product.accent,
              color: product.accent,
              background: `${product.accent}12`,
              fontWeight: 600,
            }}
          >
            Chlorophyll <span>✓</span>
          </div>
          <div className="quiz-option">Carotenoid</div>
          <div className="quiz-option">Melanin</div>
          <div className="quiz-reward">
            <span>Correct! Reward earned</span>
            <span className="quiz-reward-value" style={{ color: product.accent }}>
              +250 $OPHIN
            </span>
          </div>
        </>
      );

    case "scryptyra":
      return (
        <>
          <div className="script-slug" style={{ color: product.accent }}>
            INT. COFFEE SHOP — DAY
          </div>
          <p className="script-line">
            MAYA sits by the window, laptop open, coffee untouched.
          </p>
          <p className="script-line" style={{ marginTop: 10 }}>
            MAYA
          </p>
          <p className="script-line" style={{ paddingLeft: 18 }}>
            &ldquo;Some stories choose you.&rdquo;
          </p>
          <div className="script-typing" style={{ color: product.accent }}>
            <span className="script-typing-dot" />
            <span
              className="script-typing-dot"
              style={{ animationDelay: "0.15s" }}
            />
            <span
              className="script-typing-dot"
              style={{ animationDelay: "0.3s" }}
            />
            <span
              style={{ marginLeft: 6, color: "var(--text-muted)", fontSize: 11 }}
            >
              AI co-writer typing…
            </span>
          </div>
        </>
      );

    case "echosynth":
      return (
        <>
          <div className="waveform-bars">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="hero-bar"
                style={{
                  background: i % 2 ? product.accent : "var(--accent-blue)",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>
                Lo-fi Chill Beat
              </div>
              <div
                style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}
              >
                Generating…
              </div>
            </div>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                color: product.accent,
              }}
            >
              0:32
            </span>
          </div>
        </>
      );

    case "lifewave":
      return (
        <>
          <div className="feed-post-header">
            <div
              className="feed-avatar"
              style={{ background: `${product.accent}18`, color: product.accent }}
            >
              🌊
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>@driftwood</div>
              <div style={{ color: "var(--text-muted)", fontSize: 11 }}>2m ago</div>
            </div>
          </div>
          <p className="feed-post-text">
            Just shipped the redesign. Small team, big horizon. 🚀
          </p>
          <div className="feed-post-actions">
            <span>♡ 12</span>
            <span>💬 4</span>
            <span>↻ 2</span>
          </div>
        </>
      );

    default:
      return null;
  }
}

function ProductVisual({ product }: { product: Product }) {
  return (
    <div
      className="product-visual"
      style={{
        background: `linear-gradient(135deg, ${product.accent}09 0%, var(--bg) 100%)`,
      }}
    >
      <div
        className="product-visual-glow"
        style={{
          background: `radial-gradient(circle, ${product.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="product-mockup" style={{ borderColor: `${product.accent}30` }}>
        <div className="product-mockup-bar">
          <span className="product-mockup-dot" />
          <span className="product-mockup-dot" />
          <span className="product-mockup-dot" />
          <span className="product-mockup-bar-label">
            {product.name.toLowerCase()}.app
          </span>
        </div>
        <div className="product-mockup-body">
          <ProductMockupBody product={product} />
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState(0);
  const prod = PRODUCTS[active];

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div
            className="section-label"
            style={{ color: "var(--accent-green)" }}
          >
            Our Products
          </div>
          <h2 className="section-title">Four platforms.&nbsp;One ecosystem.</h2>
        </div>

        {/* Tabs */}
        <div className="product-tabs">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              className={`product-tab${i === active ? " active" : ""}`}
              style={{ "--tab-accent": p.accent } as React.CSSProperties}
              onClick={() => setActive(i)}
            >
              <span>{p.icon}</span>
              {p.name}
              {p.status === "Live" && <span className="live-badge">LIVE</span>}
            </button>
          ))}
        </div>

        {/* Main showcase */}
        <div className="product-showcase">
          {/* Left: Info */}
          <div className="product-info">
            <div>
              {/* Header row */}
              <div className="product-header">
                <div
                  className="product-icon-wrap"
                  style={{
                    background: `${prod.accent}16`,
                    border: `1.5px solid ${prod.accent}30`,
                  }}
                >
                  {prod.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="product-name">{prod.name}</div>
                  <div
                    className="product-tag-line"
                    style={{ color: prod.accent }}
                  >
                    {prod.tag}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    padding: "4px 10px",
                    borderRadius: 20,
                    background:
                      prod.status === "Live"
                        ? "rgba(0,229,160,0.12)"
                        : `${prod.accent}12`,
                    color:
                      prod.status === "Live"
                        ? "var(--accent-green)"
                        : prod.accent,
                    border: `1px solid ${
                      prod.status === "Live"
                        ? "rgba(0,229,160,0.28)"
                        : `${prod.accent}28`
                    }`,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {prod.status}
                </span>
              </div>

              {/* Tagline */}
              <p className="product-tagline" style={{ color: prod.accent }}>
                {prod.tagline}
              </p>

              {/* Description */}
              <p className="product-desc">{prod.desc}</p>

              {/* Feature chips */}
              <div className="feature-chips">
                {prod.features.map((f) => (
                  <span
                    key={f}
                    className="feature-chip"
                    style={{
                      borderColor: `${prod.accent}28`,
                      background: `${prod.accent}07`,
                      color: "var(--text)",
                    }}
                  >
                    <span
                      className="feature-chip-dot"
                      style={{ background: prod.accent }}
                    />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={prod.link}
              target={prod.link ? "_blank" : undefined}
              rel={prod.link ? "noopener noreferrer" : undefined}
              className="btn-primary"
              style={{
                alignSelf: "flex-start",
                background: `linear-gradient(135deg, ${prod.accent}, ${prod.accent}CC)`,
                color: "#000",
              }}
            >
              {prod.status === "Live" ? "Launch App →" : "Join Waitlist →"}
            </a>
          </div>

          {/* Right: Visual */}
          <ProductVisual product={prod} />
        </div>

        {/* Mini grid */}
        <div className="product-mini-grid">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className={`product-mini-card${i === active ? " active" : ""}`}
              style={i === active ? { borderColor: `${p.accent}40` } : {}}
              onClick={() => setActive(i)}
            >
              <div className="product-mini-icon">{p.icon}</div>
              <div className="product-mini-name">{p.name}</div>
              <div className="product-mini-tag" style={{ color: p.accent }}>
                {p.tag.split("·")[0].trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
