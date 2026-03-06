export interface Product {
  id: string;
  name: string;
  tag: string;
  tagline: string;
  desc: string;
  icon: string;
  accent: string;
  features: string[];
  status: "Live" | "Coming Soon";
}

export const PRODUCTS: Product[] = [
  {
    id: "learnchain",
    name: "LearnChain",
    tag: "EdTech · Blockchain",
    tagline: "Learn. Quiz. Earn.",
    desc: "High school students master subjects through AI-powered quizzes and earn OPHIN tokens — real cryptocurrency deployed on Solana — as rewards for academic achievement.",
    icon: "📚",
    accent: "#00E5A0",
    features: [
      "AI-Adaptive Quizzes",
      "OPHIN Token Rewards",
      "Solana Blockchain",
      "Multi-Subject",
    ],
    status: "Live",
  },
  {
    id: "scryptyra",
    name: "Scryptyra",
    tag: "Creative · AI Writing",
    tagline: "Write the next great screenplay.",
    desc: "A professional-grade screenplay editor built for movie writers. AI co-writing, scene breakdowns, character arcs, and industry-standard formatting — all in one place.",
    icon: "🎬",
    accent: "#FF6B35",
    features: [
      "AI Co-Writer",
      "Scene Analysis",
      "Industry Format",
      "Character Arcs",
    ],
    status: "Coming Soon",
  },
  {
    id: "soundwave",
    name: "SoundWave",
    tag: "Music · Generative AI",
    tagline: "Compose without limits.",
    desc: "Generate original music with AI. From lo-fi beats to orchestral compositions, SoundWave turns your ideas into fully produced tracks using state-of-the-art generative models.",
    icon: "🎵",
    accent: "#A855F7",
    features: [
      "AI Music Generation",
      "Multi-Genre",
      "Stem Export",
      "Collaboration",
    ],
    status: "Coming Soon",
  },
  {
    id: "lifewave",
    name: "LifeWave",
    tag: "Social · Micro-Blogging",
    tagline: "Moments that matter.",
    desc: "A micro-blogging social platform where authentic moments connect communities. AI-powered content discovery, blockchain-verified identity, and meaningful engagement.",
    icon: "🌊",
    accent: "#38BDF8",
    features: [
      "Micro-Blogging",
      "AI Discovery",
      "Blockchain Identity",
      "Community",
    ],
    status: "Coming Soon",
  },
];
