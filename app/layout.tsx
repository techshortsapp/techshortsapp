import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechShortsApp — Calm Tech. Fast.",
  description:
    "TechShortsApp is a self-funded video platform for developers to share short, meaningful tech content — no trends, just clarity. Built by a developer, for developers.",
  keywords: [
    "TechShorts",
    "TechShortsApp",
    "developer platform",
    "short tech videos",
    "developer content",
    "coding short videos",
    "learn to code",
    "90 second tech content",
    "tech creators",
    "programming education",
    "developer showcase",
    "built by devs",
    "developer tools",
  ],
  authors: [{ name: "Niraj Chaurasiya", url: "https://techshortsapp.com" }],
  creator: "Niraj Chaurasiya",
  openGraph: {
    title: "TechShortsApp — Calm Tech. Fast.",

    description:
      "A calm space for tech creators and dev learners to share bite-sized content — 90 seconds or less. No noise, no trends. Just clean, short tech.",
    url: "https://techshortsapp.com",
    siteName: "TechShortsApp",
    images: [
      {
        url: "https://techshortsapp.com/og.png", // Add this file later
        width: 1200,
        height: 630,
        alt: "TechShortsApp – Share Tech, Not Noise",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechShortsApp — Calm Tech. Fast.",
    description:
      "A calm, short-form platform for tech creators. Built from scratch, self-funded by an international student, and focused on clarity.",
    images: ["https://techshortsapp.com/og.png"], // Same as OG image
    creator: "@techshortsapp", // Update if you have one
  },
  metadataBase: new URL("https://techshortsapp.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8BLC8QL7DS"
        ></script>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8BLC8QL7DS"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8BLC8QL7DS');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
