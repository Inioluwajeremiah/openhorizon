import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Horizon Innovations — Where Intelligence Meets Innovation",
  description:
    "Open Horizon Innovations builds AI-integrated, blockchain-powered web applications: LearnChain, Scryptyra, SoundWave, and LifeWave",
  keywords: [
    "AI",
    "blockchain",
    "Solana",
    "OPHIN",
    "LearnChain",
    "edtech",
    "cryptocurrency",
    "web3",
    "script writing",
    "movie",
  ],
  openGraph: {
    title: "Open Horizon Innovations",
    description:
      "Building the future of digital experiences with AI + Blockchain.",
    type: "website",
  },
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
