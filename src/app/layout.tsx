import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonGradient from "@/assets/svg/ButtonGradient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VidoGen – AI-Powered Video Creation & Auto-Posting",
  description:
    "VidoGen transforms ideas into stunning AI-generated videos instantly. Auto-generate, caption, and post to YouTube & Instagram effortlessly.",
  keywords: [
    "VidoGen",
    "AI video",
    "video generator",
    "auto-post",
    "YouTube video automation",
    "Instagram reels",
    "AI video captions",
    "AI avatar",
    "social media videos",
    "video scheduling",
  ],
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "VidoGen – AI Video Generator & Auto-Poster",
    description:
      "VidoGen lets creators instantly generate AI videos from prompts or images and auto-post them to YouTube & Instagram.",
    url: "https://vidogen.vercel.app/",
    siteName: "VidoGen",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "VidoGen – AI Video Creation & Auto-Posting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidoGen – AI Video Creation & Auto-Posting",
    description:
      "Create AI-powered videos from prompts or images and auto-post to YouTube & Instagram with VidoGen.",
    images: ["/preview.png"],
    creator: "@vidogen",
  },
  metadataBase: new URL("https://vidogen.vercel.app/"),
  category: "video-creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <Header />
        {children}
        <Footer />
        <ButtonGradient />
      </body>
    </html>
  );
}
