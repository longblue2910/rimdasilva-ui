import { navLinks } from "@/constant/Constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-[13vh]">
      <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          objectFit="cover"
          height={50}
        />

        {/* Nav Links */}
        <div className="lg:flex hidden items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="text-lg font-semibold curso">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
