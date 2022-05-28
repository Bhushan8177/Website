import React from 'react'
import Image from 'next/dist/client/image';
import downArrow from "./assets/downArrow.svg";


const Vision = () => {
  return (
    <>
    <div className='justify-center text-center align-middle  relative top-[-20px] '>
      <Image src={downArrow} alt="down" width={"75px"} height={"75px"}  />
    </div>

      <div className="text-5xl font-bold font-Paytone text-[#469697] lg:pt-2 mt-16 text-center justify-center lg:mb-8">
        How does this club work?
        <div className="text-lg font-normal pt-8 pb-8 font-Paytone text-[#3A3A3A] tracking-wide  break-normal m-8 lg:ml-16 lg:mr-16 lg:mb-16">
          Our vision for the next two years is to create a community that will
          not only assist students in obtaining better placements and assisting
          them in their path, but will also give confidence in them to achieve
          future milestones. We want to mentor and guide as many students as
          possible, as well as create a community that extends beyond our
          campus.
         
        </div>
      </div>
      <div className="lg:flex lg:m-8 lg:flex-row ml-8 mr-8 lg:ml-16 lg:mr-16">
        <div className="shadow-md mb-4 flex flex-row lg:mr-16 lg:mb-0 p-4 rounded-2xl ">
            <div className="rounded-xl p-4 ml-2 text-white text-center font-semibold pt-1 text-xl mt-4 bg-[#FF6347] w-[100px] h-[40px] mr-8 ">
                1
            </div>
          <div className='pt-4 pb-4 break-normal tracking-wide '> Our vision for the next two years is to create a community that will
          not only assist students in obtaining better placements and assisting
          them in their path, but will also give confidence in them to achieve
          future milestones.</div>
        </div>
        <div className="shadow-md mb-4 lg:mt-0 mt-4 flex flex-row  lg:mb-0 p-4 rounded-2xl ">
            <div className="rounded-xl p-4 ml-2 text-white text-center font-semibold pt-1 text-xl mt-4 bg-[#FFC700] w-[100px] h-[40px] mr-8 ">
                2
            </div>
          <div className='pt-4 pb-4 break-normal tracking-wide '> Our vision for the next two years is to create a community that will
          not only assist students in obtaining better placements and assisting
          them in their path, but will also give confidence in them to achieve
          future milestones.</div>
        </div>
      </div>
      <div className="shadow-md ml-8 mr-8 flex  lg:ml-16 lg:mr-16 p-4 rounded-2xl  mb-16">
            <div className="rounded-xl p-4 ml-2 text-white text-center font-semibold pt-1 text-xl mt-4 bg-[#47FFA7] w-[60px] h-[40px] mr-8  ">
                3
            </div>
          <div className='pt-4 pb-4 tracking-wide '> Our vision for the next two years is to create a community that will
          not only assist students in obtaining better placements and assisting
          them in their path, but will also give confidence in them to achieve
          future milestones.</div>
        </div>
      
    </>
  );
}

export default Vision