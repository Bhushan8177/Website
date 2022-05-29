import React from "react";
import classes from "./NavList.module.css";
import Link from "next/link";

const NavList = (props) => {
  return (
    <>
      <ul className={classes.nav_links}>
        <li className={classes.link_container}>
          <Link href="/" onClick={props.onClick}>
            <a className={classes.link}> Home</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link href="/about" onClick={props.onClick}>
            <a className={classes.link}> About</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link href="/events" onClick={props.onClick}>
            <a className={classes.link}> Events</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link href="/team" onClick={props.onClick}>
            <a className={classes.link}> Team</a>
          </Link>
        </li>
        <li className={classes.link_container}>
          <Link
            className={classes.link}
            href="/contact"
            onClick={props.onClick}
          >
            <a className={classes.link}>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
