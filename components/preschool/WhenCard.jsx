import Image from 'next/image'
import React from 'react'
import image from "@/assets/subcard/subcard.png"
const WhenCard = () => {
  return (

    <div dir='rtl' className='w-full text-gray-700 section-width max-2xl:px-36 max-md:px-14 max-sm:px-8'>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10  pt-16 max-w-screen-2xl m-auto gri justify-items-stretch'>
            <Image src={image} alt='img' className='h-[400px] w-[600px] max-2xl:w-full max-2xl:h-full'/>
            
            <div className='text-gray-700 max-sm:row-start-1 place-self-center justify-self-end max-lg:justify-self-center max-lg:pb-10'>
                <h1 className='text-[40px] font-bold'>Whenever you want,</h1>
                <div className='h-[12px]  w-[130px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]'></div>
                <h2 className='text-[30px] text-bold'>wherever you are!</h2>
                <p className='text-[16px] '>Just pick up your laptop, mobile phone or tablet & enter the movie school.</p>
            </div>
        </div>
    </div>
  )
}

export default WhenCard