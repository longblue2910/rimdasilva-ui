"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ReponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Nav />
      <MobileNav />
    </>
  );
};

export default ReponsiveNav;
