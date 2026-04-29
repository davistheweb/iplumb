import { FooterLinks } from "@/data";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-10 bg-[#F8FAFC] px-8 py-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col space-y-4">
        <Logo />
        <p>
          <span className="text-[#475569]">
            &copy; {new Date().getFullYear()} Iplumb Professional Services. All
            rights reserved.
          </span>
        </p>
      </div>
      <li className="grid list-none grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {FooterLinks.map(({ name, href }, i) => (
          <Link
            key={i}
            href={href}
            className="text-[#475569] underline"
          >
            {name}
          </Link>
        ))}
      </li>
    </div>
  );
};
