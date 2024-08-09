import { navLinks } from "@/constant/Constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser, BiWallet } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

type Props{
  openNav: () => void
}

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
        <div className="lg:flex hidden items-center">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="text-lg font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200 text-gray-900">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-8">
          <BiWallet className="w-6 h-6 cursor-pointer hover:text-red-600 " />
          <BiUser className="w-6 h-6 cursor-pointer hover:text-red-600 " />
          <FaBars className="lg:hidden w-6 h-6 cursor-pointer hover:text-red-600 " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
