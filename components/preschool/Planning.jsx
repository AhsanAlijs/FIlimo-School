import Image from 'next/image';
import React from 'react'
import star from "@/assets/subcard/star.svg"
import Link from 'next/link';
const Planning = ({ data }) => {
  const { head1, para1, head2, head3, head4, para2, head5, para3, head6, para2b, para3b } = data;
  return (
    <div>
      <div className='px-4 mt-[100px]'>
        <div className='m-auto'>
          <h1 className='lg:text-[40px] md:text-[30px] max-[765px]:text-[30px] font-bold max-sm:text-2xl text-[#E67D4B]'>{head1 && head1}</h1>
          <div className='h-[12px]  w-[130px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] '></div>
          <p className='text-[16px]  max-[765px]:text-[14px] mt-[10px]'>{para1 && para1}</p>
        </div>
        <div className='flex max-xl:gap-y-5 max:md:w-full max-xl:justify-center flex-wrap justify-between items-center w-full mt-[80px]'>
          <div className='border-4 border-[#E67D4B] max-xl:w-full w-[500px] h-full border-b-0 '>
            <div className='border-b-4 border-[#E67D4B] p-[30px]'>
              <div className='flex gap-3 items-center'>
                <p className='text-[20px] font-semibold text-[#E67D4B]'>{head2}</p>
                <div className='h-[20px] w-[4px] border-r-4 border-[#818181]'></div>
                <p>{head3}</p>
              </div>
              <div className='flex'>
                <p><span className='font-semibold'>{para2b}</span>{para2}</p>
                <Image src={star} alt='img' height={20} width={20} />
              </div>
            </div>
            <div className='p-[30px]'>
              <div className='flex gap-3 items-center'>
                <p className='text-[20px] font-semibold text-[#E67D4B]'>{head4}</p>
                <div className='h-[20px] w-[4px] border-r-4 border-[#818181]'></div>
                <p>{head5}</p>
              </div>
              <div className='flex'>
                <p><span className='font-semibold'>{para3b}</span>{para3}</p>
                <Image src={star} alt='img' height={20} width={20} />
              </div>

            </div>
            <Link href="/signup">
              <p className='h-[83px] max-xl:w-full px-2 max-sm:text-lg w-full text-[20px] font-semibold mt-[10px] flex items-center justify-center bg-[#F4BD50] border-b-4 border-transparent border-b-[#E67D4B]'>{head6 && head6}</p>
            </Link>
          </div>
          <div className='max-xl:w-full max-xl:mt-10 w-[700px]'>
            <video src="/planning.mp4" type="video/mp4" controls className='h-[400px] w-full  max-xl:w-full '  ></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planning