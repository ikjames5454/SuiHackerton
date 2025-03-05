import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="xl:px-48 lg:px-16 md:px-1  mt-20 md:mt-36 flex flex-col md:flex-row gap-24  items-center  md:items-start">
    <div>
    <div className="bg-[#05122C] rounded-full lg:w-80 lg:h-80 h-72 w-72 overflow-hidden  ">
    <Image src="/images/sui-image.svg" alt="image" width={900} height={900} className="object-cover w-full h-full " />
    </div>
    <div className='absolute'>
      <div className='bg-[#ECECEC] w-[11vh] flex items-center py-1 justify-center rounded-lg relative bottom-56 md:right-4 right-6 opacity-90 '>
        <div><Image alt="image" height={25} width={25} src='/images/displayIcon.png'/></div>
        <p className='text-[10px]'>Web 3.0</p>
      </div>
      <div className='bg-[#ECECEC] md:w-[14vh] flex items-center py-1 justify-center rounded-lg pr-2  relative  bottom-16 left-52 opacity-90 '>
        <div><Image alt="image" height={25} width={25} src='/images/displayIcon.png'/></div>
        <p className='text-[10px]'>Blockchain Tech</p>
      </div>
    </div>
    </div>
    <div className=' grid md:grid-cols-1 gap-y-6  md:px-0 px-4 relative bottom-16 md:bottom-0'>
        <p className='text-[#1B7EF6] font-bold text-xl flex items-center justify-center md:justify-start'>About SUI Lagos Hacker House</p>
        <p> <span className='font-bold text-blue-800 '>Sui Lagos Hacker House</span> is a 6-day event that is designed to bring together
            developers, engineers, builders, innovators, and blockchain enthusiasts who
            are interested in buildiing on the <span className='font-bold '>Sui blockchain.</span></p>
        
        <p>The event will feature workshops, mentorship and coaching sessions, hacking,
            and networking opportunities to encourage innovation and collaboration
            during and after the event. It is aimed at helping Nigerian participants build
            robust solutions using Sui and prepare for the <a href='https://sui.io/about' className='underline'><span className='font-bold text-blue-800'>Sui Overflow 2025 Hackathon,</span></a>
            a virtual global competition with over $500,000 in combined prizes.    
        </p>
            
        <p>
        The Sui Lagos Hacker House is implemented by <a href='https://semicolon.africa/.' className='underline'><span className='font-bold'>Semicolon</span></a> and sponsored by
        the <a href='https://sui.io/about' className='underline'><span className='font-bold'>Sui Foundation.</span></a>
        </p>
    </div>
    
  </div>
  )
}

export default Hero
