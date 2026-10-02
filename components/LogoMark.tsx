type Props = {
  size?: number
  /** Unique per page instance so gradient ids don't collide */
  id?: string
}

export default function LogoMark({ size = 36, id = 'oh-mark' }: Props) {
  const grad = `${id}-grad`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Open Horizon"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00E5A0" />
          <stop offset="1" stopColor="#00A3FF" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${grad})`} />
      <g fill="none" stroke="#07090F" strokeWidth="5.5" strokeLinecap="round">
        <path d="M15 37a17 17 0 0 1 34 0" />
        <path d="M11 44h42" />
      </g>
      <path d="M24 37a8 8 0 0 1 16 0z" fill="#07090F" />
    </svg>
  )
}
