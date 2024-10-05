import React from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'

const SessionCard = (props) => {
  return (
    <>
      <div className='bg-[#F9F8FE] p-4 rounded-[10px] flex justify-between items-center max-lg:flex-col'>
        <div className='flex items-center gap-4 max-lg:flex-col'>
          <Image src={props.image} width={80} height={80} alt='img'/>
          <div className='flex flex-col gap-4 max-lg:gap-2 max-md:text-center'>
            <h3 className='text-[26px] font-semibold max-lg:text-lg'>{props.head}</h3>
            <h2 className='text-[20px] font-medium text-[#E67D4B] max-lg:text-lg'>{props.timeLine}</h2>
          </div>
        </div>

        <div className='flex gap-4 items-center max-lg:mt-4 max-md:w-full'>
          <button className='text-[16px] max-md:w-full font-medium text-white p-3 px-4 rounded-full bg-gradient-to-r from-[#E67D4B] to-[#F4BD50]'>View Recording</button>
          <RiDeleteBin6Line className='text-[26px] text-[#FF0000] cursor-pointer' />
        </div>

      </div>
    </>
  )
}

export default SessionCard