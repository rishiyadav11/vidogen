"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import Section from "./Section";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between text-left text-lg font-medium text-white hover:text-blue-400 transition-colors"
      >
        {question}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`mt-2 overflow-hidden text-gray-300 transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is VidoGen?",
    answer:
      "VidoGen is a cutting-edge platform for creating, editing, and sharing high-quality videos effortlessly.",
  },
  {
    question: "Do I need prior video editing experience to use VidoGen?",
    answer:
      "No! VidoGen is designed with a simple, intuitive interface suitable for both beginners and advanced users.",
  },
  {
    question: "Which platforms does VidoGen support?",
    answer:
      "VidoGen works on all modern browsers and has apps for Windows, macOS, iOS, and Android.",
  },
  {
    question: "Can I collaborate with a team on VidoGen?",
    answer:
      "Yes! Multiple users can collaborate in real-time on the same video project.",
  },
  {
    question: "What video formats does VidoGen support?",
    answer:
      "VidoGen supports MP4, MOV, AVI, and GIF formats, and allows HD and 4K exports.",
  },
  {
    question: "Is my content safe on VidoGen?",
    answer:
      "Absolutely. All videos are securely stored with end-to-end encryption, and you control access permissions.",
  },
  {
    question: "Can I use VidoGen for social media videos?",
    answer:
      "Yes! Preset aspect ratios and templates are available for YouTube, Instagram, TikTok, and Facebook.",
  },
  {
    question: "Does VidoGen offer templates?",
    answer:
      "Yes, VidoGen offers a wide library of customizable templates, including marketing videos, tutorials, intros, and more.",
  },
  {
    question: "How much does VidoGen cost?",
    answer:
      "VidoGen offers a free plan with basic features. Paid plans unlock advanced tools, templates, HD exports, and team collaboration.",
  },
  {
    question: "How do I get started with VidoGen?",
    answer:
      "Sign up for a free account, choose a template or start from scratch, and begin creating your video.",
  },
];

const FAQPage = () => {
  return (
  <Section crosses>
      <div className="min-h-screen bg-black py-20 px-5 flex item-center flex-col md:px-20 text-white">
                <AnimatedTitle
            title="Frequently Asked Questions"
            containerClass="mb-10 mt-5 text-center text-xl sm:text-3xl md:text-5xl pointer-events-none mix-blend-difference relative z-10"
          />

      <div className="max-w-4xl mx-auto divide-y divide-gray-700">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </Section>
  );
};

export default FAQPage;
