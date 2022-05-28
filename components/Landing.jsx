import React from "react";
import Image from "next/image";
import downArrow from "./assets/downArrow.svg";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import v1 from "./assets/v1.gif";
import v2 from "./assets/v2.gif";
import v3 from "./assets/v3.png";

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
      <div className="font-semibold text-center align-middle justify-center h-[70vh] bg-[#004445] rounded-b-[16%]">
        <h1 className="text-[#469697] pt-32 tracking-wide text-3xl lg:text-5xl pb-5">
          Competetive Programming
        </h1>
        <h1 className="text-[#EDEDED]  tracking-wide text-3xl lg:text-5xl pb-5">
          and MentorShip Club
        </h1>
        <h1 className="text-[#469697]  tracking-wide text-3xl lg:text-5xl">
          DYPCOE<span className="text-[#EDEDED]">, Pune.</span>{" "}
        </h1>
        <div className="pt-[28vh]">
          <Image src={downArrow} alt="down" width={"50px"} height={"50px"} />
        </div>
      </div>
      <div className="mt-[150px] px-40">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={a} alt="down" width={"500px"} height={"500px"} />
          </div>
          {/* <div className=" border-dotted border-4 h-[500px]  border-[#8FC7C8]"></div> */}
          <div className="text-[#469697] font-Paytone font-[800] leading-[67px] text-[48px]">
            Improve <br /> problem <br />
            solving skills
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className=" border-dotted border-4 h-[500px]  border-[#8FC7C8]"></div> */}
          <div className="text-[#469697] font-Paytone font-[800] leading-[67px] text-[48px]">
            Group disccusion
            <br /> on Competitive <br />
            programming
          </div>
          <div className="">
            <Image src={b} alt="down" width={"500px"} height={"400px"} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={c} alt="down" width={"500px"} height={"500px"} />
          </div>
          {/* <div className=" border-dotted border-4 h-[500px]  border-[#8FC7C8]"></div> */}
          <div className="text-[#469697] font-Paytone font-[800] leading-[67px] text-[48px] ">
            Helping each other
            <br /> to learn new <br />
            technical skill
          </div>
        </div>
      </div>
      <section className="vision_section ">
        <div className="text-center pt-[50px] font-Paytone font-[800] text-[48px] text-[#fff]">
          OUR VISION
        </div>
        <div className="flex justify-center items-center  px-[100px] py-[100px] space-x-[150px]">
          <div className="bg-[#fff] w-[250px] h-[250px] rounded-[50%] ">
            <Image
              src={v1}
              alt="down"
              width={"500px"}
              height={"500px"}
              className="rounded-[50%]"
            ></Image>
            <div className="text-[#fff] text-center font-[700] text-[36px]">
              CP
            </div>
            <div className="text-[#fff] w-[120%] text-[20px] ">
              The Vision of our club in the next 2 years is to promote
              competitive programming in the college and raise students'
              problem-solving skills.
            </div>
          </div>
          <div className="bg-[#fff] w-[250px] h-[250px] rounded-[50%] ">
            <Image
              src={v2}
              alt="down"
              width={"500px"}
              height={"500px"}
              className="rounded-[50%]"
            ></Image>
            <div className=" whitespace-nowrap text-[#fff] text-center font-[700] text-[36px]">
              Strong Community
            </div>
            <div className="text-[#fff] w-[120%] text-[20px] ">
              The Vision of our club in the next 2 years is to promote
              competitive programming in the college and raise students'
              problem-solving skills.
            </div>
          </div>
          <div className="bg-[#fff] w-[250px] h-[250px] rounded-[50%] ">
            <Image
              src={v3}
              alt="down"
              width={"500px"}
              height={"500px"}
              className="rounded-[50%]"
            ></Image>
            <div className="text-[#fff] text-center font-[700] text-[36px]">
              Mentorship
            </div>
            <div className="text-[#fff] w-[120%] text-[20px] ">
              We also aim to establish a mentorship among juniors and seniors,
              so that every student learns and grows more.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
