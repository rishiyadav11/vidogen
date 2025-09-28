"use client";
import Image from "next/image";
import { FaXTwitter, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa6";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

const legalLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const addressLines = [
  "New Delhi, India", 
];

const helpLinks = [
  { name: "Contact Support", href: "/contact" },
];

const bottomLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Contact Us", href: "/contact" }
];

const socialLinks = [
  { href: "#", icon: <FaXTwitter />, label: "X" },
  { href: "#", icon: <FaTiktok />, label: "TikTok" },
  { href: "#", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
];

const Footer = () => (
  <footer className="bg-black pt-12 pb-6 text-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 mb-8">
      {/* Branding & Workflow */}
      <div className="col-span-1 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.webp" width={44} height={44} alt="vidogen logo" className="bg-white rounded-md" />
          <span className="font-extrabold text-lg tracking-tight">VidoGen</span>
        </div>
        <div className="mt-2 text-[1rem] font-medium leading-relaxed text-gray-200">
          Write your script → Pick an AI avatar → Generate stunning videos instantly
        </div>
      </div>

      {/* Main Links */}
      <div>
        <div className="font-bold mb-2 text-gray-400 tracking-wide">MAIN</div>
        <ul className="space-y-1">
          {mainLinks.map(l => (
            <li key={l.name}><a href={l.href} className="hover:underline text-gray-200">{l.name}</a></li>
          ))}
        </ul>
      </div>

      {/* Legal */}
      <div>
        <div className="font-bold mb-2 text-gray-400 tracking-wide">LEGAL</div>
        <ul className="space-y-1">
          {legalLinks.map(l => (
            <li key={l.name}><a href={l.href} className="hover:underline text-gray-200">{l.name}</a></li>
          ))}
        </ul>
      </div>

      {/* Address */}
      <div>
        <div className="font-bold mb-2 text-gray-400 tracking-wide">ADDRESS</div>
        <div className="text-gray-200 space-y-1 text-[1rem]">
          {addressLines.map((line, i) => <div key={i}>{line}</div>)}
        </div>
      </div>

      {/* Help */}
      <div>
        <div className="font-bold mb-2 text-gray-400 tracking-wide">NEED HELP?</div>
        <ul className="space-y-1">
          {helpLinks.map(l => (
            <li key={l.name}><a href={l.href} className="hover:underline text-gray-200">{l.name}</a></li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="max-w-7xl mx-auto w-full px-4 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="flex gap-6">
        {bottomLinks.map(l =>
          <a key={l.name} href={l.href} className="text-sm text-gray-400 hover:text-white underline">
            {l.name}
          </a>
        )}
      </div>
      <div className="text-sm text-gray-400">
        © 2025 VidoGen. All Rights Reserved.
      </div>
      <div className="flex items-center gap-2 text-lg">
        <span className="text-gray-400 font-medium">Follow us:</span>
        {socialLinks.map((l, i) => (
          <a
            key={i}
            href={l.href}
            className="text-gray-200 hover:text-pink-500 transition"
            aria-label={l.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
