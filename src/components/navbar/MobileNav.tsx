import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { X } from "lucide-react";
import { NavbarLinks } from "@/data";
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
        <div className="fixed inset-0 z-50 flex lg:hidden backdrop-saturate-150">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            ref={navRef}
          >
            <div className="h-full bg-white w-3xs relative py-1 px-4">
              <div className="mt-4">
                <Logo />
              </div>
              <button
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setNavIsOpen(false)}
              >
                <X />
              </button>
              <div className="flex justify-center  mt-10">
                <ul className="flex flex-col space-y-8 ">
                  {NavbarLinks.map(({ name, href }, i) => (
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
