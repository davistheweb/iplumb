import { MessageSquare } from "lucide-react";
import React from "react";

export const ReachOut: React.FC = () => {
  return (
    <a
      className="fixed right-5 bottom-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#EF8300]"
      href="#"
    >
      <MessageSquare
        color="white"
        fill="white"
        size={25}
      />
    </a>
  );
};
