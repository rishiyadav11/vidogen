import "styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "trpc/react";
import Footer from "components/Footer";
import NavBar from "components/Navbar";

export const metadata: Metadata = {
  title: "VidoGen – AI Video Generator | Create Stunning Videos Instantly",
  description:
    "Effortlessly transform your prompts and images into stunning AI-generated videos. Auto-post directly to YouTube and Instagram with VidoGen.",
  keywords: [
    "AI Video Generator",
    "Create Videos Online",
    "AI Content Creator",
    "Social Media Videos",
    "VidoGen App",
    "Automatic Video Maker",
    "YouTube Video Auto-Post",
    "Instagram Video Auto-Post"
  ],
  authors: [{ name: "VidoGen", url: "https://vidogen.me" }],
  openGraph: {
    title: "VidoGen – AI Video Generator | Create Stunning Videos Instantly",
    description:
      "Transform prompts and images into stunning AI videos effortlessly. Auto-post to YouTube & Instagram with VidoGen.",
    url: "https://vidogen.me",
    siteName: "VidoGen",
    images: [
      {
        url: "https://vidogen.me/og-image.webp",
        width: 1200,
        height: 630,
        alt: "VidoGen – AI Video Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vidogen",
    title: "VidoGen – AI Video Generator",
    description:
      "Effortlessly create AI-generated videos from prompts and images. Auto-post directly to YouTube and Instagram.",
    images: ["https://vidogen.me/og-image.webp"],
  },
  icons: [
    { rel: "icon", url: "/logo.webp" },
  ],
};


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
       
      </head>
      <body>
        <NavBar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
