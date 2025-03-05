import React from 'react'
import Image from 'next/image'

function IndividualTeam() {
  return (
    <div>
    <div className='bg-[#EBF2FF] grid md:grid-cols-2 space-y-4 md:max-h-48 lg:px-52 md:pt-0 pt-5  lg:gap-6 xl:gap-0'>
        
        <div className='bg-[#F7FAFF] flex flex-col space-y-3 items-center max-w-7xl pl-16 pr-16 mx-auto rounded-[50px] h-80 justify-center relative md:bottom-[7.40vh]'>
         <div><Image height={52} width={52} alt='image' src={'/images/individual.png'}/></div>
         <p className='w-44 text-center'>To apply as an <span className='font-bold'>Individual,</span> click here</p>
           <a href='https://docs.google.com/forms/d/1dcsPfOPBPyt2qL7ZDPpt5vZJp96Md3kOmcvbePIdWkM/viewform?edit_requested=true' className='cursor-pointer'><button className='bg-[#05122C] cursor-pointer text-white p-3 flex gap-3 items-center rounded-3xl pr-6 pl-6'>Individual <div className='border-white border-2 rounded-full h-5 w-5 flex items-center justify-center text-[12px]'>{"->"}</div></button></a>
        </div>
        <div className='bg-[#F7FAFF] flex flex-col space-y-3 items-center max-w-7xl pl-16 pr-16 mx-auto rounded-[50px] h-80 justify-center relative md:bottom-[7.40vh]'>
         <div><Image height={100} width={100} alt='image' src={'/images/group.png'}/></div>
         <div className='w-44 text-center'>To apply as an <span className='font-bold'>Team,</span>  click here</div>
          <a href='https://docs.google.com/forms/u/0/d/1IF7HY2Sa3FL9WSS5zZbLgA6jJ-sp-Hgkw7OCeb-8zrI/viewform?edit_requested=true'><button  className='bg-[#05122C] text-white p-3 flex gap-3 items-center rounded-3xl pr-6 pl-6 cursor-pointer'>Team <div className='border-white border-2 rounded-full h-5 w-5 flex items-center justify-center text-[12px]'>{"->"}</div></button></a>
        </div>
        <div>

        </div>
        </div>
        <div className='md:mt-28 flex items-center justify-center md:px-0 px-4 md:py-0 py-12'>
        <p className='text-center'>We will inform applicants if they were selected by <span className='font-bold ml-1'> Monday, March 17, 2025.</span> </p>
        </div>
        
    </div>
  )
}

export default IndividualTeam
