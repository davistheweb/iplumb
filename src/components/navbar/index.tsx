"use client";

import React, { useState } from "react";
import { Logo } from "../ui/Logo";
import { NavbarLinks } from "@/data";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

export const Navbar: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex bg-[#fffbfb] justify-between items-center top-0 left-0 w-full py-6 px-4 md:px-20 h-20 z-10">
      <div className="flex justify-center">
        <Logo />
      </div>

      {/* Desktop Navigation  */}

      <div className="hidden lg:flex justify-between items-center">
        <ul className="relative flex space-x-10 font-sans">
          {NavbarLinks.map(({ name, href }, i) => (
            <li
              key={i}
              className="relative list-none md:text-base text-primary-bold text-[#1E3A8A] font-bold"
            >
              <NavLinks href={href}>{name}</NavLinks>
            </li>
          ))}
        </ul>
      </div>

      {/* Request Quote Button  */}

      <div className="hidden lg:flex">
        <button className="font-sans font-bold text-white bg-[#EF8300] px-4 py-2 rounded-sm cursor-pointer ">
          Request Quote
        </button>
      </div>

      <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />

      <button
        className="border p-2 rounded-sm lg:hidden cursor-pointer"
        onClick={(): void => setNavIsOpen((prev) => !prev)}
      >
        <Menu size={20} />
      </button>
    </nav>
  );
};
