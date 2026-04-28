import { MessageSquare } from "lucide-react";
import React from "react";

export const ReachOut: React.FC = () => {
  return (
    <a
      className="bg-[#EF8300] w-16 h-16 rounded-full fixed bottom-10 flex items-center justify-center right-5"
      href="#"
    >
      <MessageSquare color="white" fill="white" size={25} />
    </a>
  );
};
