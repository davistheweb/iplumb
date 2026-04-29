import { IplumbLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={IplumbLogo}
          alt="logo"
          priority
          width={130}
          height={135}
          draggable={false}
        />
      </Link>
    </div>
  );
};
