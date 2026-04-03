import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "ThinkEasyLabs — Transform Your Business with Intelligent AI Frameworks",
    template: "%s — ThinkEasyLabs",
  },
  description:
    "AI-powered analytics for MSME manufacturing companies in India. Connect CSV/Excel/SAP/Databases, ask questions in plain English, and get insights, summaries, and dashboards in seconds.",
  applicationName: "ThinkEasyLabs",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "ThinkEasyLabs — Transform Your Business with Intelligent AI Frameworks",
    description:
      "Turn your raw data into actionable insights in seconds. Built for MSME manufacturing teams in India.",
    siteName: "ThinkEasyLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkEasyLabs — Transform Your Business with Intelligent AI Frameworks",
    description:
      "Connect CSV/Excel/SAP/Databases, ask questions, and get insights instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
