import React, { Suspense } from "react";
import Image from "next/image";
import t1 from "./assets/t1.svg";
import t2 from "./assets/t2.svg";
import t3 from "./assets/t3.svg";
import t4 from "./assets/t4.svg";
// import { AmbientLight } from "three";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Box from "./threejs/Box";
import logo from "./assets/CPMCLogo.svg";

const Timeline = () => {
  return (
    <>
      <div
        id="timeline"
        className="w-[100vw] flex flex-col bg-[#0F263A] mt-[65px] lg:mt-[200px] "
      >
        <div className="flex flex-row mb-8 justify-center items-center">
          <div className=" w-[250px] h-[250px] lg:w-[675px] lg:h-[450px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            {/* <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas> */}
            <Image src={t1} alt="xyz" width={2000} height={2000} />
          </div>
          <div className="text-[#A8ECF0]  lg:text-4xl  text-2xl font-bold flex flex-col  lg:pt-8 pt-8 w-[380px] mr-auto lg:pr-0 pr-8">
            <span className="text-2xl text-[#EDEDED]  font-bold">01.</span>
            {/* <br /> */}
            IMPROVE PROBLEM SOLVING
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
        </div>
        <div className="flex flex-row mb-8 justify-center items-center">
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold flex flex-col lg:pt-8 pt-8 w-[380px] ml-auto lg:pl-0 pl-8 ">
            <span className="text-2xl text-[#EDEDED] font-bold">02.</span>
            {/* <br /> */}
            LEARN AND DISCUSS <br /> COMPETITIVE PROGRAMMING
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
          <div className=" w-[250px] h-[250px] lg:w-[675px] lg:h-[450px] flex md:mr-auto flex-col lg:mr-auto ml-auto mr-auto cursor-pointer">
            {/* <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas> */}
            <Image src={t2} alt="xyz" width={2000} height={2000} />
          </div>
        </div>
        <div className="flex flex-row mb-8 justify-center items-center">
          <div className=" w-[250px] h-[250px] lg:w-[675px] lg:h-[450px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            {/* <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas> */}
            <Image src={t3} alt="xyz" width={2000} height={2000} />
          </div>
          <div className="text-[#A8ECF0]  lg:text-4xl text-2xl font-bold flex flex-col  pt-8 w-[400px] mr-auto lg:pr-0 pr-8">
            <span className="text-2xl text-[#EDEDED] font-bold ">03.</span>
            {/* <br /> */}
            MENTORING AND HELPING EACH OTHER TO LEARN NEW SKILLS
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
