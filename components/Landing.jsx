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
const Landing = () => {
  return (
    <>
      <div className="py-4 px-8 bg-[#004445] flex flex-row ">
        <div className="hamburger ml-auto justify-center cursor-pointer items-center flex flex-col  space-y-2.5">
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
          DYPCOE<span className="text-[#EDEDED]">, Pune.</span>
        </h1>
      </div>

      <div className="flex flex-col lg:ml-64 lg:mr-64 pb-12 mt-8 ml-2 mr-2">
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
          <div className="text-[#469697] lg:text-4xl text-2xl font-bold lg:ml-[18rem] lg:pt-20 pt-8  ">
            Improve problem solving skills
          </div>
        </div>
        <div className="flex flex-row mb-8">
          <div className="text-[#469697] lg:text-4xl text-2xl font-bold lg:mr-[20rem] text-left pl-2 justify-left items-left lg:pt-20 pt-8 ">
            Group disccusion on Competitive programming
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
          <div className="text-[#469697] lg:text-4xl text-2xl font-bold lg:ml-[18rem] lg:pt-20 pt-8">
            Helping each other to learn new technical skill
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
