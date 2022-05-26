import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='h-screen'>
    <h1 className="pt-32 text-5xl text-center font-semibold text-[#004445]">
        Contact Us
    </h1>
    <div className='flex flex-row  justify-center '>
        <div className="pl-8 m-2 rounded-full p-0.5 bg-[#004445]"></div>
        <h1 className='text-sm font-semibold text-[#469697]'>Get in Touch</h1>
        <div className="pl-8 m-2 rounded-full p-0.5 bg-[#004445]"></div>

    </div>
    <div className="flex flex-col pl-4 pr-4">
        <h1 className="font-semibold text-2xl text-[#469697]">Messsage us</h1>
        

        <input type="text" placeholder='name' className='p-4 border-2 rounded-xl mb-2 mt-4' />
        <input type="text" placeholder='email' className='p-4 border-2 rounded-xl mb-2 ' />
       
        <input type="text" placeholder='contact' className='p-4 border-2 rounded-xl mb-2' />
        <textarea name="message" placeholder='message...' cols="30" rows="10" className='p-4 border-2 rounded-xl'></textarea>
    </div>
    </div>
    </>
  )
}

export default Contact