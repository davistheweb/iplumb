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
        className={`${isActive ? "lg:after:absolute after:w-18 after:h-0.75 after:bg-[#F97316] after:bottom-0 after:content[''] ease-in duration-500 transition-all after:left-0 after:right-0" : "lg:after:absolute after:w-18 hover:after:h-0.75 hover:after:bg-[#F97316] hover:after:bottom-0 hover:after:content[''] ease-in hover:duration-500 hover:transition-all hover:after:left-0 hover:after:right-0"}`}
      >
        {children}
      </Link>
    </div>
  );
};
