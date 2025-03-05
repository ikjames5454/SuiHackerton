import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <div className='bg-[#05122C] px-3 py-14 rounded-bl-[90px] flex md:items-center justify-center'>
        <div>
        <div className='grid grid-cols-1 space-y-12'>
        <div className='flex items-center justify-center gap-4'>
        <Image src={"/images/Screenshot 2025-03-04 at 10.59.03.png"} alt='image' width={150}  
        height={150}/>
        <p className='text-white text-3xl'>|</p>
        <Image src={"/images/sui-logo.svg"} alt='image' width={60}  
        height={60}/>
      </div>
      <div className='flex items-center justify-center gap-4 '>
        <div>
        <Image src={"/images/HackerHouseNew.svg"} alt='image' width={500}  
        height={500}/>
         <p className='text-[#22D3EE] text-2xl font-bold italic mt-5 flex items-center justify-center'>Road to Sui Overflow</p>
        </div>
      </div>
        </div>
        <div className='md:flex  items-center justify-center md:w-[800px] h-48   md:h-32  bg-white rounded-2xl relative top-24 md:py-0'>
        <div className='md:flex md:mt-3  md:gap-16 ml-10 md:ml-0 grid grid-cols-1 gap-2 relative md:top-0 top-4 '>
            <div className='flex '>
               <div><Image src={"/images/calender.png"} width={40} height={40} alt='image' /></div> 
                <p className='font-bold text-[14px]'>March 24-29,<br/> 2025</p>
            </div>
            <div className='flex'>
               <div> <Image src={"/images/icon.png"} width={40} height={40} alt='image' /></div>
                <p className='font-bold text-[14px]'>312 Herbert Macaulay, <br/>Sabo, Yaba, Lagos,<br/>Nigeria</p>
            </div>
            <div className='flex '>
                <div><Image src={"/images/timer.png"} width={40} height={40} alt='image' /></div>
                <p className='text-[14px]'>Application Deadline:<br/> <span className='font-bold'>March 12, 2025</span> </p>
            </div>
        </div>
        </div>  
        </div>  
    </div>
  )
}

export default Header
