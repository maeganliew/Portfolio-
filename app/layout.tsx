import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jia Wei Liew's portfolio",
  description: "A Computer Science student who enjoys building things that work well at scale.",
  keywords: [
    "Liew Jia WEi",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Liew Jia Wei" }],
  creator: "Liew Jia Wei",
  publisher: "Liew Jia Wei",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jia Wei Liew's portfolio",
    description: "A Computer Science student who enjoys building things that work well at scale.",
    siteName: "Liew Jia Wei Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
