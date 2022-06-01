import React, { useState } from "react";
import NavList from "./NavList";
import classes from "./Navbar.module.css";
import Image from "next/image";
import logo from "../assets/CPMC.svg";
import logo1 from "../assets/CPMCLogo.svg";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const disableScroll = () => {
    document.body.classList.toggle("stop-scrolling");
  };
  const navHandler = () => {
    setActive(!isActive);
    disableScroll();
  };
  return (
    <>
      <div className={classes.navbar}>
        <div className="img_container">
          <Image alt="xyz" src={logo} width={150} height={70} />
        </div>

        <div className={classes.hamburger} onClick={navHandler}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
      </div>
      {isActive && <NavList onClick={navHandler} />}
    </>
  );
};

export default Navbar;
