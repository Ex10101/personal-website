import type { Metadata } from "next";
import { Geist, Geist_Mono, Foldit } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const foldit = Foldit({
  variable: "--font-foldit",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sergey Davidovich - Full Stack Developer | Next.js, React, TypeScript",
    template: "%s | Sergey Davidovich - Full Stack Developer"
  },
  description: "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building scalable web applications with focus on performance and user experience.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer", 
    "TypeScript Developer",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "TailwindCSS Developer"
  ],
  authors: [{ name: "Sergey Davidovich" }],
  creator: "Sergey Davidovich",
  publisher: "Sergey Davidovich",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://davidovich-dev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://davidovich-dev.vercel.app',
    title: 'Sergey Davidovich - Full Stack Developer | Next.js, React, TypeScript',
    description: 'Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building scalable web applications with focus on performance and user experience.',
    siteName: 'Sergey Davidovich - Full Stack Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sergey Davidovich - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sergey Davidovich - Full Stack Developer | Next.js, React, TypeScript',
    description: 'Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'my-google-verification-code', // Add later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${foldit.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
