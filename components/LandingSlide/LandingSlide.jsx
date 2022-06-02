import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import down_arrow from "../assets/downArrow.svg";
import Logo from "../assets/CPMC.svg";
import classes from "./LandingSlide.module.css";

import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const LandingSlide = () => {
  return (
    <>
      <div className="pt-5 flex flex-col justify center items-center bg-[#091E32] rounded-b-[16%]">
        <div>
          <Image src={Logo} height="60px" alt="logo" />
        </div>
        <div className="lg:text-7xl  md:text-4xl text-2xl font-semibold pt-16 justify-center   lg:pb-[2.5rem]  ">
          <div>
            <h1 className="text-[#89BAEE] text-center">
              Competetive Programming
            </h1>
            <h1 className="text-white text-center pt-4">
              and Mentorship Club.
            </h1>
            <h1 className="text-[#89BAEE] text-center pt-4">
              DYPCOE, <span className="text-white text-center"> Pune.</span>{" "}
            </h1>
          </div>

          <div className="lg:pt-12 pt-0">
            <Link href="#joinclub">
              <button className={classes.btn}>
                <span className={classes.span}>JOIN NOW</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>

            <a href="#timeline">
              <div
                href
                className="transition delay-150  hover:-translate-x-1 hover:scale-50 duration-300 flex relative lg:top-[60px] top-[20px] justify-center items-center"
              >
                <Image src={down_arrow} alt="down" width={50} height={50} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSlide;
