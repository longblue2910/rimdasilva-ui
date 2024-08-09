import Image from "next/image";
import React from "react";
import { BiX } from "react-icons/bi";

const MobileNav = () => {
  return (
    <div className="transform transition-all duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#f3ff6b]">
      {/* Logo */}
      <div>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          objectFit="cover"
          height={50}
        />
        <BiX className="w-8 h-8 absolute top-[2rem] text-black z-[202] right-[2rem]" />
      </div>
      {/* Nav Links */}
      <div className="relative z-[201] space-y-10 flex flex-col"></div>
    </div>
  );
};

export default MobileNav;
