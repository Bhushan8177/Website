import React, { Suspense } from "react";
import Image from "next/image";
import downArrow from "./assets/downArrow.svg";
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
const Landing = () => {
  return (
    <>
      <div className="py-4 px-8 bg-[#091E32] flex flex-row ">
        <Image
          src={logo}
          className="lg:w-[138px] lg:h-[62px]"
          width="138px"
          height="62px"
        />
        <div className="hamburger ml-auto justify-center cursor-pointer items-center flex flex-col  space-y-2.5">
          <div className="bg-[#fff] w-14 h-[4px] "></div>
          <div className="bg-[#fff] w-8 h-[4px] "></div>
          <div className="bg-[#fff] w-14 h-[4px] "></div>
        </div>
      </div>
      <div className="font-bold text-center align-middle justify-center h-[70vh] bg-[#091E32] rounded-b-[16%]">
        <h1 className="text-[#89BAEE] pt-32 tracking-wide text-3xl lg:text-5xl pb-5">
          Competetive Programming
        </h1>

        <h1 className="text-[#EDEDED]  tracking-wide text-3xl lg:text-5xl pb-5">
          and MentorShip Club
        </h1>
        <h1 className="text-[#89BAEE]  tracking-wide text-3xl lg:text-5xl">
          DYPCOE<span className="text-[#EDEDED]">, Pune.</span>
        </h1>
      </div>

      <div className="flex flex-col bg-[#0F263A] lg:ml-64 lg:mr-64 pb-12 mt-8 ml-2  ">
      <div className="flex flex-row mb-8 justify-center">
          <div className=" w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold flex flex-col lg:pt-8 pt-8 w-[300px] mr-auto lg:pr-0 pr-8">
            <span className="text-2xl text-[#EDEDED] font-bold">01.</span>
            <br />
            Improve problem  solving skills
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
        </div>
        <div className="flex flex-row mb-8 justify-center">
        <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold flex flex-col lg:pt-8 pt-8 w-[300px] ml-auto lg:pl-0 pl-8 ">
            <span className="text-2xl text-[#EDEDED] font-bold">01.</span>
            <br />
            Improve problem  solving skills
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
          <div className=" w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] flex md:mr-auto flex-col lg:mr-auto ml-auto mr-auto cursor-pointer">
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
          <div className=" w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold flex flex-col lg:pt-8 pt-8 w-[300px] mr-auto lg:pr-0 pr-8">
            <span className="text-2xl text-[#EDEDED] font-bold">01.</span>
            <br />
            Improve problem  solving skills
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

export default Landing;
