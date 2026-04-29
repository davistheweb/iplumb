import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavLinks: React.FC<INavLinksProps> = ({
  children,
  href,
  handleNavClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className="relative">
      <Link
        href={href}
        onClick={handleNavClick}
        className={`text-[14px] after:h-0.75 after:w-18 lg:after:absolute xl:text-[16px] ${isActive ? "after:content[''] transition-all duration-500 ease-in after:right-0 after:bottom-0 after:left-0 after:bg-[#F97316]" : "hover:after:content[''] ease-in hover:transition-all hover:duration-500 hover:after:right-0 hover:after:bottom-0 hover:after:left-0 hover:after:bg-[#F97316]"}`}
      >
        {children}
      </Link>
    </div>
  );
};
