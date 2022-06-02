import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../assets/Social/linkedin.svg";
import instagram from "../assets/Social/instagram.svg";
import twitter from "../assets/Social/twitter.svg";
import gmail from "../assets/Social/gmail.svg";
import logo from "../assets/CPMC.svg";
import insta from "../assets/instagram-new.png"
import linkd from "../assets/linkedin.png"

const Footer = () => {
  return (
    <>
      <div className={classes.footer_container}>
        <div className={classes.footer}>
          <div className={classes.logotagline}>
            <div className={classes.logo}>
              <Image
                alt="xyz"
                src={logo}
                width={150}
                height={100}
                layout="fixed"
              />
            </div>
            <div className={classes.tagline}>
              Where Creativity meets innovation
            </div>
          </div>
            <div className={classes.menu}>
              Menu
              <ul className={classes.footer_links}>
                <li className={classes.link_container}>
                  <Link href="/">
                    <a className={classes.link}> Home</a>
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
              <div className={classes.socialmedia}>
                <Link href="https://www.linkedin.com/company/cpmc-dypcoe/">
                <div className={classes.linkedin}>
                    <div className={classes.innerlink}>
                      <div className="name">Linkedin</div>
                      <div className={classes.icon}>
                        <Image alt="xyz" src={linkd} width={24} height={24} layout="fixed"/>
                      </div>
                    </div>
                </div>
                </Link>
                <Link href="https://www.instagram.com/cpmc_dypcoe/">
                <div className={classes.instagram}>
                    <div className={classes.innerinsta}>
                        <div className="name">Instagram</div>
                        <div className={classes.icon}>
                          <Image alt="xyz" src={insta} width={24} height={24} layout="fixed"/>
                        </div>
                    </div>
                </div>
                </Link>
              </div>
            </div>
        </div>
        <div className={classes.footer_ruler}></div>
      </div>
    </>
  );
};

export default Footer;
