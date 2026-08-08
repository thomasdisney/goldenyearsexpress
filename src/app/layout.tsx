import type { Metadata, Viewport } from "next";
import { Cinzel, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { site } from "@/data/content";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0c",
};

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseURL),
  title: {
    default: `${site.name} | Partnership Opportunity`,
    template: `%s | ${site.name}`,
  },
  description:
    "Partnership opportunity — The Golden Years Express brings Rat Pack entertainment by rail to senior living communities and veterans from San Diego to Seattle. Call or text 530-608-9324.",
  applicationName: site.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: `${site.name} | Partnership Opportunity`,
    description:
      "Help bring joy to seniors — Rat Pack entertainment by train from San Diego to Seattle. Sponsorships, in-kind support, and donations welcome.",
    url: site.baseURL,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Golden Years Express — bringing entertainment to senior communities and veterans by rail.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Partnership Opportunity`,
    description:
      "Help bring joy to seniors — Rat Pack entertainment by train from San Diego to Seattle. Call or text 530-608-9324.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${sourceSerif.variable}`}>
      <body
        style={
          {
            ["--font-display" as string]: "var(--font-cinzel), 'Times New Roman', serif",
            ["--font-body" as string]: "var(--font-source-serif), Georgia, serif",
          } as React.CSSProperties
        }
      >
        <div className="shell">
          <Header />
          <main className="main" id="main-content">
            {children}
          </main>
          <Footer />
          <StickyCtaBar />
        </div>
      </body>
    </html>
  );
}
