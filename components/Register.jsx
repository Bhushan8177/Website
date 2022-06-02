import React from "react";
import Image from "next/image";
import Link from "next/link";
import MentorForm from "./assets/mentorForms.svg";
import MentorFormStep2 from "./assets/step2MentorRegistration.svg";
import MentorFormStep3 from "./assets/step3MentorRegistration.svg";
import MenteeFormStep1 from "./assets/step1MenteeRegistration.svg";
import MenteeFormStep2 from "./assets/step2MenteeRegistration.svg";
import MenteeFormStep3 from "./assets/step3MenteeRegistration.svg";
import ques_mark from "./assets/ques_mark.png";

const Register = () => {
  return (
    <>
      <div className="lg:pl-32 lg:pr-32 pt-20">
        <div className=" font-Paytone font-semibold text-4xl text-[#fff] mt-0 ml-12">
          MENTOR <span className="text-[#f32053]">REGISTRATION</span>
        </div>
        <div className="lg:flex lg:fex-row mt-8 justify-center ml-8 mr-8 lg:ml-0 lg:mr-0">
          <div className="lg:flex lg:flex-col lg:mr-4 p-4 lg:pt-12 rounded-2xl bg-[#0b1c2b] shadow-abc  lg:w-[447px] lg:h-[459px] mb-8">
            <div className="">
              <Image alt="xyz" src={MentorForm} width="410px" height="256px" />
            </div>
            <div className="p-2 pt-4 lg:w-[412px]  text-white break-words">
              Fill out the form :{" "}
              <Link href="/">
                <h1 className="text-blue-300"> Coming Soon</h1>
              </Link>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:mr-4 p-4 lg:pt-12 rounded-2xl bg-[#0b1c2b] shadow-abc   lg:w-[363px] lg:h-[459px] mb-8">
            <div className="">
              <Image
                alt="xyz"
                src={MentorFormStep2}
                width="330px"
                height="256px"
              />
            </div>
            <div className="p-2 pt-4 lg:w-[330px] text-white break-words">
              Once we find your profile perfect for a mentor, we let you know
              about it through a mail. Then you can join our discord server.
            </div>
          </div>
          <div className="lg:flex lg:flex-col  p-4 lg:pt-12 rounded-2xl bg-[#0b1c2b] shadow-abc   lg:w-[328px] lg:h-[459px] mb-8">
            <div className=" pt-8 ">
              <Image
                alt="xyz"
                src={MentorFormStep3}
                width="301px"
                height="219px"
              />
            </div>
            <div className="p-2 pt-4 lg:w-[301px] text-white break-words">
              We will let you know of your allotted mentees and the discord
              could also be used to establish meaningful connection.
            </div>
          </div>
        </div>

        <div className=" font-Paytone font-semibold text-4xl text-[#fff] mt-16  ml-12">
          MENTEE <span className="text-[#f32053]">REGISTRATION</span>
        </div>
        <div className="lg:flex lg:fex-row mt-8 justify-center ml-8 mr-8 lg:ml-0 lg:mr-0 pb-16">
          <div className="lg:flex lg:flex-col lg:mr-4 p-4 lg:pt-12 rounded-2xl bg-[#0b1c2b] shadow-abc   lg:w-[447px] lg:h-[459px] mb-8">
            <div className="">
              <Image
                alt="xyz"
                src={MenteeFormStep1}
                width="410px"
                height="256px"
              />
            </div>
            <div className="p-2 text-white pt-4  lg:w-[412px] break-words">
              Fill out the form :{" "}
              <Link href="/">
                <h1 className="text-blue-300"> Coming Soon</h1>
              </Link>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:mr-4 p-4 lg:pt-12 rounded-2xl bg-[#0b1c2b] shadow-abc   lg:w-[363px] lg:h-[459px] mb-8">
            <div className="">
              <Image
                alt="xyz"
                src={MenteeFormStep2}
                width="330px"
                height="256px"
              />
            </div>
            <div className="p-2 pt-4 lg:w-[330px] text-white break-words">
              Once we find your profile perfect for a mentor, we let you know
              about it through a mail. Then you can join our discord server.
            </div>
          </div>
          <div className="lg:flex lg:flex-col  p-4 lg:pt-12 rounded-2xl bg-[#0b1c2b] shadow-abc   lg:w-[328px] lg:h-[459px] mb-8">
            <div className=" pt-8 ">
              <Image
                alt="xyz"
                src={MenteeFormStep3}
                width="301px"
                height="219px"
              />
            </div>
            <div className="p-2 pt-4 lg:w-[301px] text-white break-words">
              We will let you know of your allotted mentees and the discord
              could also be used to establish meaningful connection.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
