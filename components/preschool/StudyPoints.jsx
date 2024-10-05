import Link from 'next/link';
import React from 'react'

const StudyPoints = ({data}) => {
  const {head1,para1,head2} = data; 
  return (
    <div dir='rtl'>
      <div className='w-[530px] max-xl:w-full max-2xl:px-5 max-md:px-14 max-sm:px-5'>
        <h1 className='lg:text-[35px] md:text-[28px] max-[765px]:text-[28px] font-bold max-sm:text-2xl text-[#000000]'>{head1&& head1}</h1>
        <div className='h-[12px]  w-[130px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] '></div>
        <p className='text-[16px]  max-[765px]:text-[14px] mt-[10px]'>{para1 && para1}</p>
        <Link href='/signin'>
        <p className='h-[63px] max-2xl:w-full px-2 max-sm:text-lg w-[435px] text-[16px] text-gray-800 font-semibold mt-[10px] flex items-center justify-center bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]'>{head2&& head2}</p>
        </Link>
        
      </div>
    </div>
  )
}

export default StudyPoints