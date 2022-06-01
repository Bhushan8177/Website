import React, { Suspense } from "react";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import v1 from "./assets/v1.gif";
import v2 from "./assets/v2.gif";
import v3 from "./assets/v3.png";
import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./threejs/Box";
import logo from "./assets/CPMCLogo.svg";

const Timeline = () => {
  return (
    <>
      <div
        id="timeline"
        className="w-[100vw] flex flex-col bg-[#0F263A] mt-[200px]  "
      >
        <div className="flex flex-row mb-8 justify-center">
          <div className=" w-[150px] h-[150px] lg:w-[350px] lg:h-[300px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-[#A8ECF0] text-right lg:text-4xl  text-2xl font-bold flex flex-col items-end lg:pt-8 pt-8 w-[300px] mr-auto lg:pr-0 pr-8">
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
        <div className="flex flex-row mb-8 justify-center">
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold flex flex-col lg:pt-8 pt-8 w-[300px] ml-auto lg:pl-0 pl-8 ">
            <span className="text-2xl text-[#EDEDED] font-bold">02.</span>
            {/* <br /> */}
            LEARN AND DISCUSS <br /> COMPETITIVE PROGRAMMING
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
          <div className=" w-[150px] h-[150px] lg:w-[350px] lg:h-[300px] flex md:mr-auto flex-col lg:mr-auto ml-auto mr-auto cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="flex flex-row mb-8 justify-center">
          <div className=" w-[150px] h-[150px] lg:w-[350px] lg:h-[300px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-[#A8ECF0] text-right lg:text-4xl text-2xl font-bold flex flex-col  pt-8 w-[300px] mr-auto lg:pr-0 pr-8">
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
