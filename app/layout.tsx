import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishwakarandak 2026 · Apex of Infinity | VIT Pune",
  description:
    "Official frontend design proposal for Vishwakarandak 2026, the flagship annual sports, technical, and cultural festival of Vishwakarma Institute of Technology (VIT Pune). Official Theme: Apex of Infinity — MCU.",
  keywords: [
    "Vishwakarandak",
    "VIT Pune",
    "Apex of Infinity",
    "Student Council VIT Pune",
    "College Festival",
    "Marvel Cinematic Universe",
    "Pune Engineering Fest",
  ],
  authors: [{ name: "Student Council VIT Pune Website Team" }],
  icons: {
    icon: "/images/council-logo.png",
    shortcut: "/images/council-logo.png",
    apple: "/images/council-logo.png",
  },
  openGraph: {
    title: "Vishwakarandak 2026 · Apex of Infinity | VIT Pune",
    description:
      "Interactive comic-book journey through the multiversal college festival of Vishwakarma Institute of Technology, Pune.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} antialiased`}>
      <head>
        <link rel="icon" href="/images/council-logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,500;0,600;0,700;1,700&family=Orbitron:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans bg-background text-foreground">
        <SmoothScroll />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
