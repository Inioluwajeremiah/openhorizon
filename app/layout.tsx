import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "Open Horizon Innovations builds AI-integrated, blockchain-powered web applications: LearnChain, Scryptyra, EchoSynth, and LifeWave.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Open Horizon Innovations — Where Intelligence Meets Innovation",
    template: "%s — Open Horizon Innovations",
  },
  description: DESCRIPTION,
  applicationName: "Open Horizon Innovations",
  keywords: [
    "AI",
    "blockchain",
    "Solana",
    "OPHIN",
    "LearnChain",
    "Scryptyra",
    "EchoSynth",
    "LifeWave",
    "edtech",
    "cryptocurrency",
    "web3",
    "script writing",
    "movie",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Open Horizon Innovations",
    description:
      "Building the future of digital experiences with AI + Blockchain.",
    url: "/",
    siteName: "Open Horizon Innovations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Horizon Innovations",
    description:
      "Building the future of digital experiences with AI + Blockchain.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Open Horizon Innovations",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.png`,
  description: DESCRIPTION,
  sameAs: ["https://www.linkedin.com/company/109987747/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
