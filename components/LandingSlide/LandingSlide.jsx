import React from "react";
import Image from "next/image";
import Link from "next/link";
import down_arrow from "../assets/downArrow.svg";

import classes from "./LandingSlide.module.css";

const LandingSlide = () => {
  return (
    <>
      <div className={classes.landing}>
        <h1 className={classes.heading}>
          Competetive Programming <br />
          <span className={classes.heading2}>and Mentorship Club.</span>
          <br /> DYPCOE, <span className={classes.heading2}>Pune.</span>
        </h1>
        <Link href="/events">
          <button className={classes.btn}>
            <span className={classes.span}>VIEW EVENTS</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
        <a href="#timeline">
          <div href className={classes.down_arrow}>
            <Image src={down_arrow} alt="down" width={50} height={50} />
          </div>
        </a>
      </div>
    </>
  );
};

export default LandingSlide;
