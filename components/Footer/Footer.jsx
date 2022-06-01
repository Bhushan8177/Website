import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../assets/Social/linkedin.svg";
import instagram from "../assets/Social/instagram.svg";
import twitter from "../assets/Social/twitter.svg";
import gmail from "../assets/Social/gmail.svg";
import logo from "../assets/CPMC.svg";

const Footer = () => {
  return (
    <>
      <div className={classes.footer_container}>
        <div className={classes.footer}>
          <div className={classes.logo}>
            <Image src={logo} width={150} height={150} layout="fixed" />
          </div>
          <div className={classes.linker}>
            <div className={classes.menu}>
              Menu
              <ul className={classes.footer_links}>
                <li className={classes.link_container}>
                  <Link href="/">
                    <a className={classes.link}> Home</a>
                  </Link>
                </li>
                <li className={classes.link_container}>
                  <Link href="/about">
                    <a className={classes.link}> About</a>
                  </Link>
                </li>
                <li className={classes.link_container}>
                  <Link href="/events">
                    <a className={classes.link}> Events</a>
                  </Link>
                </li>
                <li className={classes.link_container}>
                  <Link href="/team">
                    <a className={classes.link}>Our Team</a>
                  </Link>
                </li>
                <li className={classes.link_container}>
                  <Link className={classes.link} href="/contact">
                    <a className={classes.link}>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.social}>
              Connect With Us
              <ul className={classes.social_links}>
                <li className={classes.link_container}>
                  <a className={classes.link}>
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </a>
                </li>
                <li className={classes.link_container}>
                  <a className={classes.link}>
                    <Image
                      src={instagram}
                      alt="instagram"
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </a>
                </li>
                <li className={classes.link_container}>
                  <a className={classes.link}>
                    <Image src={twitter} alt="twitter" width={50} height={50} />
                  </a>
                </li>
                <li className={classes.link_container}>
                  <a className={classes.link}>
                    <Image src={gmail} alt="gmail" width={50} height={50} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.footer_ruler}></div>
      </div>
    </>
  );
};

export default Footer;
