"use client";

import { NavbarLinks } from "@/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../ui/Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export const Navbar: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-[#fffbfb] px-4 py-6 md:px-20">
      <div className="flex justify-center">
        <Logo />
      </div>

      {/* Desktop Navigation  */}

      <div className="hidden items-center justify-between lg:flex">
        <ul className="relative flex space-x-10 font-sans">
          {NavbarLinks.map(({ name, href }, i) => (
            <li
              key={i}
              className="text-primary-bold relative list-none font-bold text-[#1E3A8A] md:text-base"
            >
              <NavLinks href={href}>{name}</NavLinks>
            </li>
          ))}
        </ul>
      </div>

      {/* Request Quote Button  */}

      <div className="hidden lg:flex">
        <Link
          href="/book-service"
          className="cursor-pointer rounded-sm bg-[#EF8300] px-4 py-2 font-bold text-white uppercase"
        >
          Request Quote
        </Link>
      </div>

      <MobileNav
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
      />

      <button
        className="cursor-pointer rounded-sm border p-2 lg:hidden"
        onClick={(): void => setNavIsOpen((prev) => !prev)}
      >
        <Menu size={20} />
      </button>
    </nav>
  );
};
