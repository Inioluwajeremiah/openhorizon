import { ImageResponse } from "next/og";

export const alt = "Open Horizon Innovations — Where Intelligence Meets Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#07090F",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(0,163,255,0.25), transparent 45%), radial-gradient(circle at 10% 90%, rgba(0,229,160,0.18), transparent 40%)",
          color: "#EEF2FF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 21,
              display: "flex",
              background: "linear-gradient(135deg, #00E5A0, #00A3FF)",
            }}
          >
            <svg width="96" height="96" viewBox="0 0 64 64">
              <g fill="none" stroke="#07090F" strokeWidth="5.5" strokeLinecap="round">
                <path d="M15 37a17 17 0 0 1 34 0" />
                <path d="M11 44h42" />
              </g>
              <path d="M24 37a8 8 0 0 1 16 0z" fill="#07090F" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
              Open Horizon
            </div>
            <div style={{ fontSize: 18, letterSpacing: 6, color: "#6B7A99" }}>
              INNOVATIONS
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <span style={{ marginRight: 20 }}>Where</span>
            <span style={{ color: "#00E5A0" }}>Intelligence</span>
            <span style={{ width: "100%" }} />
            <span style={{ marginRight: 20 }}>Meets</span>
            <span style={{ color: "#FF6B35" }}>Innovation</span>
          </div>
          <div style={{ fontSize: 28, color: "#9AA7C7" }}>
            LearnChain · Scryptyra · EchoSynth · LifeWave
          </div>
        </div>
      </div>
    ),
    size
  );
}
