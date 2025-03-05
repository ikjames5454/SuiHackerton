import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

function IndividualTeam() {
  return (
    <div className='mt-12 md:mt-0'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 bg-[#EBF2FF] max-h-[70vh] md:pt-0 pt-24  md:max-h-48'>
          <div className='bg-[#F7FAFF] max-w-[44vh] rounded-4xl relative bottom-10 md:bottom-0'>
            <Card className='flex items-center justify-center pl-10 pr-10 pt-10 pb-10 border-none border-white shadow-none'>
              <CardHeader><div><Image height={52} width={52} alt='image' src={'/images/individual.png'}/></div></CardHeader>
              <CardDescription className='w-40 text-center'>To apply as an <span className='font-bold'>Individual,</span> click here</CardDescription>
               <CardFooter><a href='https://docs.google.com/forms/d/1dcsPfOPBPyt2qL7ZDPpt5vZJp96Md3kOmcvbePIdWkM/viewform?edit_requested=true' className='cursor-pointer'><button className='bg-[#05122C] cursor-pointer text-white p-3 flex gap-3 items-center rounded-3xl pr-6 pl-6'>Individual <div className='border-white border-2 rounded-full h-5 w-5 flex items-center justify-center text-[12px]'>{"->"}</div></button></a></CardFooter>
            </Card>
          </div>
          <div className='bg-[#F7FAFF] max-w-[40vh] rounded-4xl relative md:bottom-0 bottom-14'>
            <Card className='flex items-center justify-center pl-14 pr-14 pt-10 pb-10  border-none border-white shadow-none'>
              <CardHeader><div><Image height={100} width={100} alt='image' src={'/images/group.png'}/></div></CardHeader>
              <CardDescription className='w-40 text-center'>To apply as an <span className='font-bold'>Team,</span> click here</CardDescription>
               <CardFooter><a href='https://docs.google.com/forms/d/1dcsPfOPBPyt2qL7ZDPpt5vZJp96Md3kOmcvbePIdWkM/viewform?edit_requested=true' className='cursor-pointer'><button className='bg-[#05122C] cursor-pointer text-white p-3 flex gap-3 items-center rounded-3xl pr-6 pl-6'>Team <div className='border-white border-2 rounded-full h-5 w-5 flex items-center justify-center text-[12px]'>{"->"}</div></button></a></CardFooter>
            </Card>
          </div>
        </div>
        <div className='mt-20  md:mt-28 flex items-center justify-center md:px-0 px-4 md:py-0 py-12'>
        <p className='text-center'>We will inform applicants if they were selected by <span className='font-bold ml-1'> Monday, March 17, 2025.</span> </p>
        </div>
        
    </div>
  )
}

export default IndividualTeam
