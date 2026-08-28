import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten accent font for headline highlight words (e.g. "Journeys")
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://meridianhomes.com"),

  title: {
    default: "Meridian Homes | Where Every Address Feels Like Home",
    template: "%s | Meridian Homes",
  },

  description:
    "Browse premium homes, apartments, and investment properties for sale and rent. Trusted agents, verified listings, and a simple path to your next address.",

  keywords: [
    "Meridian Homes",
    "real estate",
    "homes for sale",
    "houses for rent",
    "property investment",
    "real estate agents",
  ],

  authors: [{ name: "Meridian Homes" }],
  creator: "Meridian Homes",
  publisher: "Meridian Homes",

  category: "real estate",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Meridian Homes | Where Every Address Feels Like Home",
    description:
      "Browse premium homes, apartments, and investment properties for sale and rent.",
    url: "https://meridianhomes.com",
    siteName: "Meridian Homes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?fm=jpg&q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 1000,
        alt: "Meridian Homes — Dubai skyline at dusk",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Meridian Homes | Where Every Address Feels Like Home",
    description:
      "Browse premium homes, apartments, and investment properties for sale and rent.",
    images: [
      "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    ],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://meridianhomes.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "Meridian Homes",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} font-sans antialiased bg-white text-brand-900`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
