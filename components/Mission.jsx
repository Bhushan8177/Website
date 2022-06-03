import React from 'react';
import Image from 'next/image';
import strongCommunity from './assets/StrongCommunity.svg';
import competativeProgramming from './assets/CompitativeProgramming.svg';
import mentoring from './assets/Mentoring.svg';

const Mission = () => {
  return (
    <div className="bg-[#091E32] pt-20 pb-16 lg:flex lg:flex-row">
      <div className="flex flex-col lg:mt-[180px] lg:pl-16 lg:pr-16">
        <div className="pl-8 pr-8">
          <h2 className="text-center text-sm font-semibold  text-[#89BAEE] lg:pl-0 lg:text-left">
            Why are we Doing This
          </h2>
          <h1 className="pb-8 text-center text-3xl font-bold text-[#A8ECF0] lg:pl-0 lg:text-left lg:text-5xl ">
            <span className="pr-4 font-bold text-white">OUR</span>
            MISSION
          </h1>
        </div>
        <p className="pl-8 pr-8  text-center text-sm font-[600] text-[#FFFFFF] lg:text-left lg:text-lg lg:font-semibold">
          Our primary goal is to promote CP in our college community and help students enhance their
          problem-solving abilities. Our primary goal is to promote CP in our college community and
          help students enhance their problem-solving abilities. Our primary goal is to promote CP
          in our college community and help students enhance their problem-solving abilities. Our
          primary goal is to promote CP in our college community and help students enhance their
          problem-solving abilities.
        </p>
      </div>
      <div className="lg:container  lg:flex lg:flex-row">
        <div className="ml-[44px] mt-6  mr-[44px] rounded-xl bg-[#0F263A] lg:mb-4 lg:mt-[180px] lg:ml-0 lg:mr-[20px]  lg:h-[50%] lg:w-auto lg:p-2 lg:pb-0  ">
          <div className="flex items-center justify-center lg:pl-8 lg:pr-8">
            <Image alt="xyz" src={competativeProgramming} />
          </div>
          <div className="text-center text-2xl font-semibold text-[#95EBF0] lg:pl-8 lg:pr-8">
            Competitive Programming
          </div>
          <div className="lg:w-auto">
            <h2 className="p-4 text-center  text-sm font-semibold leading-normal tracking-tight text-[#EDEDED]">
              Our primary goal is to promote CP in our college community and help students enhance
              their problem-solving abilities.
            </h2>
          </div>
        </div>
        <div className="flex flex-col  rounded-xl text-[#95EBF0] ">
          <div className="ml-0 mr-4 mt-8 mb-4 rounded-2xl bg-[#0F263A] lg:mb-4 lg:mt-4 lg:h-[296px]  lg:w-[346px] lg:pr-4 ">
            <div className="flex items-center justify-center">
              <Image alt="xyz" src={strongCommunity} />
            </div>
            <div className="text-center text-2xl font-semibold text-[#95EBF0]">
              Strong Community
            </div>

            <h2 className="p-4 text-center  text-sm font-semibold leading-normal tracking-tight text-[#EDEDED]">
              We also want to build a robust and influential network that will assist juniors in
              connecting with and learning from their mentors, and seniors in preparing for
              competitive programming so that they may pass their interviews and land fantastic MNC
              jobs.
            </h2>
          </div>
          <div className="ml-12 mr-12 mt-4 mb-3 rounded-xl bg-[#0F263A] lg:mb-4 lg:mt-8 lg:p-2">
            <div className="flex items-center justify-center">
              <Image alt="xyz" src={mentoring} width={100} height={100} />
            </div>
            <div className="text-center text-2xl font-semibold text-[#95EBF0]">Mentorship</div>

            <h2 className="p-4 text-center  text-sm font-semibold leading-normal tracking-tight text-[#EDEDED]">
              Our secondary goal is to build a strong mentoring relationship between our seasoned
              seniors and juniors. This will allow the students to learn a lot in a short amount of
              time while also allowing them to form strong bonds with their peers.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
