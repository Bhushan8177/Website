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
      <div className="flex flex-col bg-[#0F263A] lg:ml-64 lg:mr-64 pb-12 mt-8 ml-2 mr-2">
        <div className="flex flex-row mb-8">
          <div className="inline-block w-[200px] h-[200px] float-right cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold lg:ml-[18rem] lg:pt-8 pt-8  ">
            <span className="text-2xl text-[#EDEDED] font-bold">01.</span>
            <br />
            Improve problem solving skills
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
        </div>
        <div className="flex flex-row mb-8">
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold lg:mr-[20rem] text-left pl-2 justify-left items-left lg:pt-8 pt-8 ">
            <span className="text-2xl text-[#EDEDED] font-bold">02.</span>
            <br />
            Group disccusion on Competitive programming
            <br />
            <h2 className="text-sm pt-4  text-[#EDEDED] font-semibold tracking-tight leading-normal">
              Our primary goal is to promote CP in our college community and
              help students enhance their problem-solving abilities.
            </h2>
          </div>
          <div className="inline-block w-[200px] h-[200px]  cursor-pointer">
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
        <div className="flex flex-row">
          <div className="inline-block w-[200px] h-[200px] float-right cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </div>
          <div className="text-[#A8ECF0] lg:text-4xl text-2xl font-bold lg:ml-[18rem] lg:pt-8 pt-8">
            <span className="text-2xl text-[#EDEDED] font-bold">03.</span>
            <br />
            Helping each other to learn new technical skill
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
