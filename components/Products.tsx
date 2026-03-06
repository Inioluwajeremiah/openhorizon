"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "./data";

function ProductVisual({ product }: { product: Product }) {
  return (
    <div
      className="product-visual"
      style={{
        background: `linear-gradient(135deg, ${product.accent}09 0%, var(--bg) 100%)`,
      }}
    >
      {/* Decorative rings */}
      <div className="visual-rings">
        {[350, 260, 170].map((size, i) => (
          <div
            key={size}
            className="visual-ring"
            style={{
              width: size,
              height: size,
              borderColor: `${product.accent}${20 + i * 8}`,
            }}
          />
        ))}
      </div>

      {/* Center icon */}
      <div
        className="visual-center-icon"
        style={{
          background: `linear-gradient(135deg, ${product.accent}22, ${product.accent}0e)`,
          borderColor: `${product.accent}45`,
          boxShadow: `0 0 60px ${product.accent}28`,
        }}
      >
        {product.icon}
      </div>

      {/* Context floaters */}
      {product.id === "learnchain" && (
        <>
          <div className="visual-floater" style={{ top: "18%", right: "8%" }}>
            <div
              style={{
                color: "#00E5A0",
                fontWeight: 700,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              +250 OPHIN
            </div>
            <div
              style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}
            >
              Quiz reward earned
            </div>
          </div>
          <div className="visual-floater" style={{ bottom: "22%", left: "7%" }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>
              Math · Science · History
            </div>
            <div
              style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}
            >
              12 subjects available
            </div>
          </div>
        </>
      )}

      {product.id === "scryptyra" && (
        <div
          className="visual-floater"
          style={{ top: "20%", right: "8%", maxWidth: 180 }}
        >
          <div
            style={{
              color: "#FF6B35",
              fontWeight: 700,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
            }}
          >
            INT. COFFEE SHOP — DAY
          </div>
          <div
            style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 4 }}
          >
            AI writing next scene...
          </div>
        </div>
      )}

      {product.id === "soundwave" && (
        <div
          className="visual-floater"
          style={{
            bottom: "20%",
            right: "8%",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ color: "#A855F7", fontSize: 18 }}>♪</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 13 }}>
              Lo-fi Chill Beat
            </div>
            <div
              style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2 }}
            >
              Generating 0:32...
            </div>
          </div>
        </div>
      )}

      {product.id === "lifewave" && (
        <div
          className="visual-floater"
          style={{ top: "18%", left: "8%", maxWidth: 172 }}
        >
          <div style={{ color: "#38BDF8", fontWeight: 700 }}>
            Just shipped! 🚀
          </div>
          <div
            style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 3 }}
          >
            12 reactions · 4 replies
          </div>
        </div>
      )}
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
            <button
              className="btn-primary"
              style={{
                alignSelf: "flex-start",
                background: `linear-gradient(135deg, ${prod.accent}, ${prod.accent}CC)`,
                color: "#000",
              }}
            >
              {prod.status === "Live" ? "Launch App →" : "Join Waitlist →"}
            </button>
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
