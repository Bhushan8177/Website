import React from "react";
import Image from "next/image";
import downArrow from "./assets/downArrow.svg";
import a from "./assets/a.svg";

const Landing = () => {
  return (
    <>
      <div className="py-4 px-8 bg-[#004445] flex flex-row ">
        <h1 className="text-3xl tracking-wide font-semibold text-[#DDF0A7]">
          CPMC
        </h1>

        <div className="hamburger ml-auto justify-center items-center flex flex-col  space-y-2.5">
          <div className="bg-[#fff] w-14 h-[4px] "></div>
          <div className="bg-[#fff] w-8 h-[4px] "></div>
          <div className="bg-[#fff] w-14 h-[4px] "></div>
        </div>
      </div>
      <div className="font-semibold text-center align-middle justify-center h-[92vh] bg-[#004445] rounded-b-[16%]">
        <h1 className="text-[#469697] pt-32 tracking-wide text-3xl lg:text-5xl pb-5">
          Competetive Programming
        </h1>
        <h1 className="text-[#EDEDED]  tracking-wide text-3xl lg:text-5xl pb-5">
          and MentorShip Club
        </h1>
        <h1 className="text-[#469697]  tracking-wide text-3xl lg:text-5xl">
          DYPCOE<span className="text-[#EDEDED]">, Pune.</span>{" "}
        </h1>
        <div className="pt-[50vh]">
          <Image src={downArrow} alt="down" width={"50px"} height={"50px"} />
        </div>
      </div>
      <div className="">
        <div>
          <div className="">
            <Image src={a} alt="down" width={"500px"} height={"500px"} />
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
