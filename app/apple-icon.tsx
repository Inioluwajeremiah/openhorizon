import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00E5A0, #00A3FF)',
        }}
      >
        <svg width="180" height="180" viewBox="0 0 64 64">
          <g fill="none" stroke="#07090F" strokeWidth="5.5" strokeLinecap="round">
            <path d="M15 37a17 17 0 0 1 34 0" />
            <path d="M11 44h42" />
          </g>
          <path d="M24 37a8 8 0 0 1 16 0z" fill="#07090F" />
        </svg>
      </div>
    ),
    size
  )
}
