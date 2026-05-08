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
          width={200}
          height={200}
          draggable={false}
        />
      </Link>
    </div>
  );
};
