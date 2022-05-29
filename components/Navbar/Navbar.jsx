import React, { useState } from "react";
import NavList from "./NavList";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const navHandler = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className={classes.navbar}>
        <h1 className={classes.logo}>CPMC</h1>

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
