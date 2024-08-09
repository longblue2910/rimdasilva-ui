import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-[13vh]">
      <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image src="/images/logo.png" alt="Logo">
      </div>
    </div>
  );
};

export default Nav;
