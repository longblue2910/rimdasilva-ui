import React from "react";

const MobileNav = () => {
  return (
    <div className="transform transition-all duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#f3ff6b]">
      {/* Logo */}
      <Image  
        src="/images/logo.png"
        alt="Logo"
        width={50}
        objectFit="cover"
        height={50}
      />
    </div>
  );
};

export default MobileNav;
