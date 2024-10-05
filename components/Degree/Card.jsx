import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ image, heading, studno, link }) => {


  return (

    <div className=' w-[500px] max-md:w-full  p-5 max-sm:p-2 border-2 border-gray-300 rounded-lg'>
      <div className='flex  max-sm:gap-2 pb-5 max-sm:pb-2 gap-4 '>
        <Image src={`${image}`} alt='img' className='w-[100px] max-sm:w-[80px] h-[80px] object-cover rounded-lg' height={120} width={120} />
        <div>
          <h1 className=' text-[20px] max-sm:text-[16px] font-semibold text-[#E67D4B] '>{heading}
            
          </h1>

          <Link href={`/language/${link}`} >
            <button className='bg-gradient-to-r  from-[#E67D4B] to-[#F4BD50] h-[36px] max-sm:h-[30px] mt-4  w-fit px-2 rounded-md  flex justify-center items-center'>
              <p className='text-white font-semibold max-sm:text-[14px] '>Start of the course</p>
            </button>
          </Link>
        </div>

      </div>

      <p className='text-[14px] pt-5 max-sm:pt-2 border-t-2 border-gray-300 max-sm:text-[12px] max-sm:mt-2'><span className='font-semibold mr-1 text-[16px] max-sm:text-[12px] '>{studno} Students</span>have started this course.</p>
    </div>

  )
}

export default Card