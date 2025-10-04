"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

import { denlogo } from "../assets"; // adjust extension if needed
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => {
      const next = !prev;
      next ? disablePageScroll() : enablePageScroll();
      return next;
    });
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-black lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          className=" w-[12rem] xl:mr-8  flex justify-start items-center gap-3"
          href="/"
        >
          <Image src={denlogo} width={35} height={35} alt="Dash" />
          <h1 className="text-2xl font-bold text-white">VidoGen</h1>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Link
          href="/"
          // className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1  "
          className="button hidden lg:block px-5 py-3 mr-5 rounded-md border hover:text-purple-500 border-gray-600 text-white hover:bg-zinc-900 transition-all duration-300"
        >
          Book a demo
        </Link>

        <Button className="hidden lg:flex" href="#login">
          Start NOw
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-6"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
