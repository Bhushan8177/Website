import React,{ Suspense } from 'react'
import Box from "./threejs/Box";
import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AskQuestion from './assets/askQuestions.svg' 
import Image from 'next/image';

const AboutTeam = () => {
  return (
      <>
    <div className="flex flex-row">
        
    <div className="flex flex-col lg:pl-16 lg:pr-16 lg:mt-[180px]">
          <div className="pl-8 pr-8">
              
        <h2 className="text-sm font-semibold text-[#89BAEE]  text-center lg:text-left lg:pl-0">
          About the Team
        </h2>
        <h1 className="font-bold lg:text-5xl text-3xl text-[#A8ECF0] text-center lg:text-left lg:pl-0 pb-8 ">
          <span className="text-white font-bold pr-4">OUR</span>
          TEAM
        </h1>
          </div>
        <p className="lg:text-lg text-sm lg:font-semibold font-[400] text-[#FFFFFF] pl-8 pr-8 lg:text-left text-center">
          Our primary goal is to promote CP in our college community and help
          students enhance their problem-solving abilities. Our primary goal is
          to promote CP in our college community and help students enhance their
         
        </p>
      </div>
      <div className="flex flex-col lg:pl-16 lg:pr-16 lg:mt-[180px]">
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
      </div>
    </div>
        <div className="bg-[#091E32] mt-8  lg:mr-64 lg:ml-64 lg:h-[150px]  rounded-2xl  ml-8 mr-8 flex flex-row items-center text-[#FFFFFF] lg:text-2xl text-md font-semibold ">
            
            <div className='flex lg:flex-row flex-col lg:ml-auto'>
            <div className='lg:mr-8 pl-4 pb-2'>HAVE ANY QUESTIONS ?</div>
            <div className="font-semibold ml-4 p-2 lg:pl-8 lg:pr-8 rounded-2xl lg:ml-8 bg-[#384C5C] text-sm cursor-pointer text-center items-center ">CONTACT US</div>
            </div>
            <div className="flex flex-row ml-auto">
                <Image src={AskQuestion} width='150' height='150'/>
            </div>
            
        </div>
      </>
  )
}

export default AboutTeam