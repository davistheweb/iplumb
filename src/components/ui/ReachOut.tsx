import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export const ReachOut: React.FC = () => {
  return (
    <a
      className="fixed right-5 bottom-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#EF8300]"
      href="https://wa.me/+2348170740048"
      target="_blank"
    >
      <IoLogoWhatsapp
        fill="green"
        size={35}
      />
    </a>
  );
};
