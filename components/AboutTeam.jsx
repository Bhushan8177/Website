import React, { Suspense } from "react";
import Box from "./threejs/Box";
import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AskQuestion from "./assets/askQuestions.svg";
import Image from "next/image";
import Model from "./DemoModels";
import classes from "./LandingSlide/LandingSlide.module.css";
import t4 from "./assets/t4.svg";

const AboutTeam = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col lg:pl-16 lg:pr-16 lg:mt-[0px] justify-center">
          <div className="pl-8 pr-8">
            <h2 className="text-sm font-semibold text-[#89BAEE]  text-center lg:text-left lg:pl-0">
              About the Team
            </h2>
            <h1 className="font-bold lg:text-5xl text-3xl text-[#A8ECF0] text-center lg:text-left lg:pl-0 pb-8 ">
              <span className="text-white font-bold pr-4">MEET OUR</span>
              TEAM
            </h1>
          </div>
          <p className="lg:text-lg  text-sm lg:font-semibold font-[400] text-[#FFFFFF] pl-8 pr-8 lg:text-center text-left">
            Our primary goal is to promote CP in our college community and help
            students enhance their problem-solving abilities. Our primary goal
            is to promote CP in our college community and help students enhance
            their
          </p>
        </div>
        <div className="flex flex-col lg:pl-16 lg:pr-16 lg:mt-[180px]">
          {/* <div className=" w-[150px] h-[150px] lg:w-[500px] lg:h-[500px] flex md:mr-auto lg:mr-auto ml-auto cursor-pointer">
            <Canvas className="">
              <OrbitControls enableDamping={true} enableZoom={false} />
              <ambientLight intensity={0.01} />
              <directionalLight
                position={[-2, 5, 2]}
                intensity={1}
                color="#A8ECF0"
              />
              <directionalLight
                position={[4, 5, 2]}
                intensity={1}
                color="#A8ECF0"
              />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div> */}
          <Image src={t4} width={1000} height={1000} />
        </div>
      </div>
      <div className="mt-10 mb-40 lg:mt-20">
        <button className={classes.btn}>
          <span className={classes.span}>OUR TEAM</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>

      {/* <div className="sm:mr-0 sm:ml-0 sm:rounded-none mr-0 ml-0 rounded-none bg-[#091E32] mt-8  lg:mr-0 lg:ml-0 lg:h-[150px]  mb-0 flex flex-row justify-center items-center text-[#FFFFFF] lg:text-2xl text-md font-semibold md:mr-0 md:ml-0 md:rounded-none    ">
        <div className=" flex justify-center items-center lg:flex-row flex-col ">
          <div className="lg:mr-0 pl-4 pb-2">HAVE ANY QUESTIONS ?</div>
          <div className="ml-[400px]">
            <button className={classes.btn}>
              <span className={classes.span}>CONTACT US</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row ml-auto">
          <Image alt="xyz" src={AskQuestion} width="150" height="150" />
        </div>
      </div> */}
    </>
  );
};

export default AboutTeam;
