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
  title: "NeuralAI — Build AI Apps in Seconds",
  description:
    "The most powerful AI developer platform. Build, scale, and deploy AI applications in seconds with natural language processing, instant APIs, and enterprise-grade security.",
  keywords: ["AI", "SaaS", "API", "machine learning", "NLP", "developer platform"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
