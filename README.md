# Open Horizon Innovations — Landing Page

A production-ready Next.js 14 landing page for Open Horizon Innovations.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules / Global CSS** (no Tailwind dependency)
- **Google Fonts** — Syne + Outfit + JetBrains Mono

## Features

- 🌙 Dark / Light mode (system preference + manual toggle, persisted to localStorage)
- 🎨 Per-product accent colors
- ✨ Smooth animations (fadeUp, float, glow-pulse)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Interactive product showcase with tab switching
- 🔤 Custom typography pairing (Syne display + Outfit body)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
open-horizon/
├── app/
│   ├── globals.css        # All styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── data.ts            # Product data (single source of truth)
│   ├── ThemeProvider.tsx  # Dark/light context + localStorage
│   ├── Navbar.tsx         # Sticky nav with scroll detection
│   ├── Hero.tsx           # Hero section with animated pills
│   ├── Products.tsx       # Interactive product showcase
│   ├── OphinBanner.tsx    # OPHIN token feature section
│   ├── Technology.tsx     # Tech stack cards
│   ├── About.tsx          # About + stats
│   ├── Cta.tsx            # Call to action
│   └── Footer.tsx         # Footer
└── next.config.js
```

## Customization

- **Products**: Edit `components/data.ts` to update product names, descriptions, features, and accent colors.
- **Theme colors**: Edit CSS variables in `app/globals.css` under `:root` (dark) and `[data-theme="light"]`.
- **Fonts**: Update the Google Fonts import in `app/layout.tsx`.
