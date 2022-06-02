import React from "react";
import Image from "next/image";
import strongCommunity from "./assets/StrongCommunity.svg";
import competativeProgramming from "./assets/CompitativeProgramming.svg";
import mentoring from "./assets/Mentoring.svg";

const Mission = () => {
  return (
    <div className="lg:flex lg:flex-row bg-[#091E32] pt-20 pb-16">
      <div className="flex flex-col lg:pl-16 lg:pr-16 lg:mt-[180px]">
        <div className="pl-8 pr-8">
          <h2 className="text-sm font-semibold text-[#89BAEE]  text-center lg:text-left lg:pl-0">
            Why are we Doing This
          </h2>
          <h1 className="font-bold lg:text-5xl text-3xl text-[#A8ECF0] text-center lg:text-left lg:pl-0 pb-8 ">
            <span className="text-white font-bold pr-4">OUR</span>
            MISSION
          </h1>
        </div>
        <p className="lg:text-lg text-sm  lg:font-semibold font-[600] text-[#FFFFFF] pl-8 pr-8 lg:text-left text-center">
          Our primary goal is to promote CP in our college community and help
          students enhance their problem-solving abilities. Our primary goal is
          to promote CP in our college community and help students enhance their
          problem-solving abilities. Our primary goal is to promote CP in our
          college community and help students enhance their problem-solving
          abilities. Our primary goal is to promote CP in our college community
          and help students enhance their problem-solving abilities.
        </p>
      </div>
      <div className="lg:container  lg:flex lg:flex-row">
        <div className="lg:mb-4 rounded-xl  bg-[#0F263A] lg:p-2 lg:w-auto lg:h-[50%] lg:pb-0 lg:mt-[180px] lg:ml-0  ml-[44px] mt-6 mr-[44px] lg:mr-[20px]  ">
          <div className="flex lg:pl-8 lg:pr-8 justify-center items-center">
            <Image alt="xyz" src={competativeProgramming} />
          </div>
          <div className="text-2xl lg:pl-8 lg:pr-8 font-semibold text-center text-[#95EBF0]">
            Competitive Programming
          </div>
          <div className="lg:w-auto">
            <h2 className="text-sm p-4  text-[#EDEDED] font-semibold tracking-tight leading-normal text-center">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
        </div>
        <div className="flex flex-col  text-[#95EBF0] rounded-xl ">
          <div className="lg:mb-4 rounded-2xl lg:mt-4 bg-[#0F263A] lg:pr-4 lg:w-[346px] lg:h-[296px] ml-0 mr-4  mt-8 mb-4 ">
            <div className="flex justify-center items-center">
              <Image alt="xyz" src={strongCommunity} />
            </div>
            <div className="text-2xl font-semibold text-center text-[#95EBF0]">
              Strong Community
            </div>

            <h2 className="text-sm p-4  text-[#EDEDED] font-semibold tracking-tight leading-normal text-center">
              We also want to build a robust and influential network that will
              assist juniors in connecting with and learning from their mentors,
              and seniors in preparing for competitive programming so that they
              may pass their interviews and land fantastic MNC jobs.
            </h2>
          </div>
          <div className="lg:mb-4 rounded-xl lg:mt-8 bg-[#0F263A] lg:p-2 ml-12 mr-12 mt-4 mb-3">
            <div className="flex justify-center items-center">
              <Image alt="xyz" src={mentoring} />
            </div>
            <div className="text-2xl font-semibold text-center text-[#95EBF0]">
              Mentorship
            </div>

            <h2 className="text-sm p-4  text-[#EDEDED] font-semibold tracking-tight leading-normal text-center">
              Our secondary goal is to build a strong mentoring relationship
              between our seasoned seniors and juniors. This will allow the
              students to learn a lot in a short amount of time while also
              allowing them to form strong bonds with their peers.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
