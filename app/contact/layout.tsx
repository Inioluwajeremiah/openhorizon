import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Open Horizon Innovations about our products, partnerships, press, or careers.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Open Horizon Innovations",
    description:
      "Questions about a product, a partnership idea, or press inquiry — the Open Horizon team reads every message.",
    url: "/contact",
    siteName: "Open Horizon Innovations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Open Horizon Innovations",
    description:
      "Questions about a product, a partnership idea, or press inquiry — the Open Horizon team reads every message.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
