import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../shared/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Next App",
    template: "%s | Next App",
  },
  description: "A modern Next.js application with blog management built with React, TypeScript and Tailwind CSS.",
  keywords: ["nextjs", "react", "typescript", "tailwindcss", "blog", "course"],
  authors: [{ name: "Next App" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Next App",
    title: "Next App",
    description: "A modern Next.js application with blog management built with React, TypeScript and Tailwind CSS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next App",
    description: "A modern Next.js application with blog management built with React, TypeScript and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col border-2 m-5 border-amber-500 ">
        <Header />
        {children}
      </body>
    </html>
  );
}
