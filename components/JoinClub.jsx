import React from "react";
import classes from "./LandingSlide/LandingSlide.module.css";

const JoinClub = () => {
  return (
    <div className="pt-16 pb-16 mb-10 mt-40 bg-[#091E32]  ">
      <div className="font-bold lg:text-5xl pb-4 text-3xl text-center justify-center ">
        <h1 className="text-[#A8ECF0]">
          <span className="text-[#FFFFFF]">WANT TO </span>
          JOIN CLUB
          <span className="text-[#FFFFFF]"> ?</span>
        </h1>
      </div>
      <div className="text-sm pb-[1.5rem]  flex flex-row items-center justify-center break-words font-normal text-center text-[#FFFFFF]  pl-8 pr-8  lg:h-[64px]">
        Our club seeks to increase students&apos; problem-solving skills as well
        as their cp in order to improve their coding abilities. The following
        three steps describe how our Club operates.
      </div>
      <button className={classes.btn}>
        <span className={classes.span}>JOIN NOW</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default JoinClub;
