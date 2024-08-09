"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ReponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <>
      <Nav openNav={showNavHandler} />
      <MobileNav nav={showNav} closeNav={} />
    </>
  );
};

export default ReponsiveNav;
