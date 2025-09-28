"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const navItems = [
  { name: "Features", path: "#features" },
  { name: "Pricing", path: "#pricing" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = currentScrollY > 50;
      if (currentScrollY > lastScrollY && isScrolled) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [isNavVisible]);

  return (
    <>
      <div
        ref={navContainerRef}
        className={clsx(
          "fixed inset-x-0 top-4 z-50 h-20 transition-all duration-700 sm:inset-x-8 rounded-md",
          "bg-white/10 backdrop-blur-3xl backdrop-saturate-200 shadow-lg border border-white/20"
        )}
      >
        <header className="flex size-full items-center justify-between px-6 py-3">
          {/* Logo and Name */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.webp"
              alt="VidoGen Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <h1 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              VidoGen
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="relative font-semibold text-white/80 transition-all duration-300 group hover:text-white"
              >
                {item.name}
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded-full opacity-0 scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
              </Link>
            ))}
            <Button id="get-started-btn" title="Get Started" rightIcon={<FaPlayCircle className="ml-2" />} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-4xl text-white md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HiMenu />
          </button>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 animate-fadeIn md:hidden">
          <button
            className="absolute right-8 top-8 text-5xl text-white"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <HiX />
          </button>

          <div className="flex flex-col items-center gap-12">
            <div className="flex items-center gap-4">
              <img
                src="/logo.webp"
                alt="VidoGen Logo"
                className="h-16 w-16 rounded-full object-cover"
              />
              <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                VidoGen
              </h1>
            </div>

            <ul className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-4xl font-bold text-white transition hover:text-pink-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button id="get-started-btn-mobile" title="Get Started" rightIcon={<FaPlayCircle className="ml-2" />} onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.77, 0, 0.18, 1.02);
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(1.04);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;