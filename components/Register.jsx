import React from "react";
import Image from "next/image";
import MentorForm from './assets/mentorForms.svg'
import MentorFormStep2 from './assets/step2MentorRegistration.svg'
import MentorFormStep3 from './assets/step3MentorRegistration.svg'


const Register = () => {
  return (
    <div className="lg:pl-32 lg:pr-32 bg-[#DDF7F1]">
      <div className="font-bold text-5xl text-center pt-16 text-[#469697] lg:ml-0 lg:mr-0 ml-2 mr-2 pb-12 ">
        How to Register?
      </div>
      <div className="font-semibold text-4xl text-[#469697] mt-16 ml-12">
        Mentor Registration
      </div>
      <div className="lg:flex lg:fex-row mt-8 justify-center ml-8 mr-8 lg:ml-0 lg:mr-0">
        <div className="lg:flex lg:flex-col lg:mr-4 p-4 lg:pt-12 rounded-2xl bg-white lg:w-[447px] lg:h-[459px] mb-8">
          <div className="">
              <Image src={MentorForm} width='410px' height='256px'/>
          </div>
          <div className="p-2 pt-4 lg:w-[412px] break-words">
          fill out the form : <a href="https://docs.google.com/forms/d/e/1FAIpQLSetPmIxGa04RvRXWA22MhW9AlmYWGxhVG8eNbOLKXlWyHHpiQ/viewform?usp=sf_link" className="text-blue-300">https://docs.google.com/forms/d/e/1FAIpQLSetPmIxGa04RvRXWA22MhW9AlmYWGxhVG8eNbOLKXlWyHHpiQ/viewform?usp=sf_link</a> 
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:mr-4 p-4 lg:pt-12 rounded-2xl bg-white lg:w-[363px] lg:h-[459px] mb-8">
          <div className="">
              <Image src={MentorFormStep2} width='330px' height='256px'/>
          </div>
          <div className="p-2 pt-4 lg:w-[330px] break-words">
          Once we find your profile perfect for a mentor,
           we let you know about it through a mail.
            Then you can join our discord server.
          </div>
        </div>
        <div className="lg:flex lg:flex-col  p-4 lg:pt-12 rounded-2xl bg-white lg:w-[328px] lg:h-[459px] mb-8">
          <div className=" pt-8 ">
              <Image src={MentorFormStep3} width='301px' height='219px'/>
          </div>
          <div className="p-2 pt-4 lg:w-[301px] break-words">
          We will let you know of your allotted mentees and the discord could also be used to establish meaningful connection.
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
