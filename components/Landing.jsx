import React from "react";

const Landing = () => {
  return (
    <>
      <div className="py-4 px-8 bg-[#004445] flex flex-row rounded-b-2xl">
        <h1 className="text-3xl tracking-wide font-semibold text-[#DDF0A7]">
          CPMC
        </h1>

        <div className="hamburger ml-auto justify-center items-center flex flex-col  space-y-4">
          <div className="bg-[#fff] w-14 h-[5px] "></div>
          <div className="bg-[#fff] w-8 h-[5px] "></div>
          <div className="bg-[#fff] w-14 h-[5px] "></div>
        </div>
      </div>
      <div className="font-semibold text-center align-middle justify-center h-screen  bg-green-50 ">
        <h1 className="text-[#469697] pt-32 tracking-wide text-3xl lg:text-5xl pb-5">
          Competetive Programming
        </h1>
        <h1 className="text-[#004445]  tracking-wide text-3xl lg:text-5xl pb-5">
          and MentorShip Club
        </h1>
        <h1 className="text-[#469697]  tracking-wide text-3xl lg:text-5xl">
          DYPCOE<span className="text-black">, Pune.</span>{" "}
        </h1>
      </div>
    </>
  );
};

export default Landing;
