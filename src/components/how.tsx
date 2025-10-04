"use client";
import React from "react";
import { StickyScroll } from "./design/sticky-scroll-reveal";
import Heading from "./Heading";
import Section from "./Section";

const steps = [
  {
    title: "1. Share Your Story",
    description:
      "Start by writing a short idea or concept. Vidogen will help transform it into engaging video content.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-xl font-bold rounded-lg shadow-xl">
        ✍️ Your Story Starts Here
      </div>
    ),
  },
  {
    title: "2. Generate Script with AI",
    description:
      "Our AI instantly creates multiple script options for your story — tailored for different tones and audiences.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 text-white text-xl font-bold rounded-lg shadow-xl">
        📜 AI Script Options
      </div>
    ),
  },
  {
    title: "3. Edit or Choose Script",
    description:
      "Pick the best script or fine-tune it until it feels perfect. Everything stays in your control.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-600 text-white text-xl font-bold rounded-lg shadow-xl">
        ✨ Script Editing
      </div>
    ),
  },
  {
    title: "4. Select Avatar & Voice",
    description:
      "Choose from AI avatars and natural voices, or upload your own for a personalized video.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500 to-red-700 text-white text-xl font-bold rounded-lg shadow-xl">
        🧑‍🎤 Avatar & Voice
      </div>
    ),
  },
  {
    title: "5. Choose Output",
    description:
      "Decide where your video should go — YouTube, Instagram, TikTok, or download locally.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-sky-700 text-white text-xl font-bold rounded-lg shadow-xl">
        🌍 Upload or Download
      </div>
    ),
  },
  {
    title: "6. Auto-Upload Post",
    description:
      "Vidogen generates your final video, then auto-posts or schedules it to your chosen platforms.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500 to-blue-700 text-white text-xl font-bold rounded-lg shadow-xl">
        🚀 Auto-Upload Post
      </div>
    ),
  },
   {
    title: "",
    description:"",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500 to-blue-700 text-white text-xl font-bold rounded-lg shadow-xl">
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section crosses id="how-it-works" className="w-full py-20 bg-black text-white">
      <div className="text-center mb-16">
        <Heading
          title="How Vidogen Works"
          text="From idea to published video in minutes — Vidogen handles scriptwriting, avatars, and posting, so you can focus on creating."
        />
      </div>
      <StickyScroll content={steps} />
    </Section>
  );
}
