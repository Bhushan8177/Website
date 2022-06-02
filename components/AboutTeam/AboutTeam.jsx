import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../LandingSlide/LandingSlide.module.css";
import t4 from "../assets/t4.svg";
import styles from "./AboutTeam.module.css";


const AboutTeam = () => {
  return (
    <>
      <div className={styles.mainabout}>
        <div className={styles.leftcolumnteam}>
          <div className={styles.teammainhead}>
            <h2 className={styles.aboutteamhead}>
              About the Team
            </h2>
            <h1 className={styles.teamhead1}>
              <span className={styles.teamhead2}>MEET OUR</span>
              TEAM
            </h1>
          </div>
          <p className={styles.teammssg}>
            Our primary goal is to promote CP in our college community and help
            students enhance their problem-solving abilities. Our primary goal
            is to promote CP in our college community and help students enhance
            their
          </p>
        </div>
        <div>
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
          <Image src={t4} width={600} height={450} />
        </div>
      </div>
      <div className={styles.teambtn}>
        <Link href="team">
          <button className={classes.btn}>
            <span className={classes.span}>OUR TEAM</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
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
