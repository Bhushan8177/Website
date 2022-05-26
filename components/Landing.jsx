import React from 'react'

const Landing = () => {
  return (
    <>
      <div className="p-4 bg-[#004445] flex flex-row rounded-b-2xl">
        <h1 className="text-3xl tracking-wide font-semibold text-[#DDF0A7]">
          CPMC
        </h1>

        <div className="hamburger ml-auto">Hamburger here</div>
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
}

export default Landing