import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import Image from "next/image";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <p className="caption text-n-4">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="caption text-n-4">
            Created with ❤️ by <a href="https://rishiyadav.me"><span className="text-blue-500 font-medium hover:underline">Rishi Yadav</span></a>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-n-7 border border-n-5 text-sm font-medium text-white">
          Backed with 
          <div className="flex items-center gap-1">
            <span className="bg-[#FF5100] text-white px-2 py-0.5 rounded font-bold text-sm">
Your love and support
            </span>
          </div>
        </div>

        <ul className="flex gap-5 flex-wrap justify-center sm:justify-end">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
