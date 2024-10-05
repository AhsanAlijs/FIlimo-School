import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderText = ({ data,grade }) => {
  const { header, para} = data;
  const pathname  = usePathname()
  console.log(grade)
  console.log(pathname)
  return (
    <>
      <div dir='rtl' className={`flex justify-end items-end p-4 mt-5 ${pathname  === '/preschool' || '/textbook' ? 'justify-center' : 'justify-end'}`}>
        <div className='flex flex-col   '>
          <h1 className='text-[40px] font-bold text-[#000000] max-sm:text-2xl'>{grade?.grade} Grade Lesson</h1>
          <div className='h-[12px] w-[110px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] '></div>
          <p className='text-[16px] text-gray-600 timt-3'>{para}</p>
        </div>
      </div>
    </>
  )
}

export default HeaderText