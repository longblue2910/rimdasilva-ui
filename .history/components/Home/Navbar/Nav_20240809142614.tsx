import { navLinks } from "@/constant/Constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser, BiWallet } from "react-icons/bi";

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
        <div className="lg:flex hidden items-center space-x-10 hover:text-blue-800 transition-all duration-200 text-gray-900">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="text-lg font-semibold cursor-pointer">
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
          <FaBars className="lg:hidden cus w-6 h-6 cursor-pointer hover:text-red-600 " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
