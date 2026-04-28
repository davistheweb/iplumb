import React from "react";
import { Logo } from "./Logo";
import { FooterLinks } from "@/data";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row  bg-[#F8FAFC] px-8 py-12 gap-10 lg:items-center lg:justify-between">
      <div className="flex flex-col space-y-4 ">
        <Logo />
        <p>
          <span className="text-[#475569]">
            &copy; {new Date().getFullYear()} Iplumb Professional Services. All
            rights reserved.
          </span>
        </p>
      </div>
      <li className="list-none grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {FooterLinks.map(({ name, href }, i) => (
          <Link key={i} href={href} className="text-[#475569] underline">
            {name}
          </Link>
        ))}
      </li>
    </div>
  );
};
