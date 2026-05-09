import React from "react";
import { Logo } from "./Logo";
import { FooterLinks, FooterSocialLinks } from "@/data";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="flex w-full flex-col  bg-[#F8FAFC] px-8 py-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col space-y-4">
        <Logo />
        <p>
          <span className="text-[#475569]">
            &copy; {new Date().getFullYear()} Iplumb Professional Services. All
            rights reserved.
          </span>
        </p>
      </div>
      <li className="grid list-none grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {FooterSocialLinks.map(({ Icon, href }, i) => (
          <Link
            key={i}
            href={href}
            className="text-[#475569] underline"
          >
            <Icon size={30} />
           
          </Link>
        ))}
      </li>
    </div>
  );
};
