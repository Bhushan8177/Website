import React from "react";
import classes from "./LandingSlide/LandingSlide.module.css";
import Link from "next/link";

const JoinClub = () => {
  return (
    <div
      id="joinclub"
      className="pt-20 pb-16 mb-0 mt-0  bg-[#091E32] flex justify-center items-center flex-col  "
    >
      <div className="font-bold lg:text-5xl pb-4 text-3xl text-center justify-center ">
        <h1 className="text-[#A8ECF0] font-Paytone mb-4">
          <span className="text-[#FFFFFF]">WANT TO </span>
          JOIN CLUB
          <span className="text-[#FFFFFF]"> ?</span>
        </h1>
      </div>
      <div className="text-[1.2rem] w-[70%] sm:w-[100%]  pb-[1.8rem]   break-words font-normal text-center text-[#FFFFFF]  pl-8 pr-8 mr-0  ">
        <h1>
          By clicking the button below and filling out the form, you can join
          the team. C.P.M.C is always looking for motivated members that are
          eager to explore CP.
        </h1>
      </div>
      <Link href="/joinus">
        <button className={classes.btn} style={{ marginTop: "0" }}>
          <span className={classes.span}>BECOME A MEMBER</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default JoinClub;
