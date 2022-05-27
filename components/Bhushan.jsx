import React from 'react'
import ques_mark from "./assets/ques_mark.png"
import Image from "next/image"; 
const Bhushan = () => {
  return (
    <div className="footer flex items-center justify-between bg-[#FFA701]  h-[35vh]" >
        <div className="footer_name pl-[35rem] leading-[4rem]  ">
            <h1 className="text-[48px] text-slate-50 font-[600] normal font-['Open_Sans']">Have some more questions?</h1>
            <button className="ml-[13rem] mt-[2rem]  px-[25px] rounded-[12px] text-[36px] bg-[white] font-['Raleway'] font-[700] text-[#469697] ">Contact us</button>
        </div>
        <div className="footer_img ">
            <Image src={ques_mark} alt="down" width={"300px"} height={"260px"} />
        </div>
    </div>
  )
}

export default Bhushan