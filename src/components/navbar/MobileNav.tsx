import { MobileNavbarLink } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Logo } from "../ui/Logo";
import { NavLinks } from "./NavLinks";

export const MobileNav: React.FC<{
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navIsOpen, setNavIsOpen }) => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setNavIsOpen(false);
    };
    if (navIsOpen) document.addEventListener("click", handleOutClick);

    return () => document.removeEventListener("click", handleOutClick);
  }, [navIsOpen, setNavIsOpen]);

  return (
    <AnimatePresence>
      {navIsOpen && (
        <div className="fixed inset-0 z-50 flex backdrop-saturate-150 lg:hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            ref={navRef}
          >
            <div className="relative h-full w-3xs bg-white px-4 py-1">
              <div className="mt-4">
                <Logo />
              </div>
              <button
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setNavIsOpen(false)}
              >
                <X />
              </button>
              <div className="mt-10 flex justify-center">
                <ul className="flex flex-col space-y-8">
                  {MobileNavbarLink.map(({ name, href }, i) => (
                    <li key={i}>
                      <NavLinks
                        href={href}
                        handleNavClick={() => setNavIsOpen(false)}
                      >
                        {name}
                      </NavLinks>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
