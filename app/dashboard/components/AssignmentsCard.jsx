import Image from 'next/image'
import React from 'react'
import folder from '@/assets/dashboard/folder-open.svg'

const AssignmentsCard = (props) => {
  return (
    <>
      <div className='bg-white drop-shadow-[0px_26px_78px_rgba(0,0,0,0.06)] w-full h-[187px] justify-center rounded-[22px] flex items-center gap-8'>
        <div className='p-[22px] rounded-full bg-[#E67D4B] bg-opacity-20'>
          <Image src={folder} width={29} height={29} alt="img"/>
        </div>

        <div className='flex flex-col gap-4 max-md:gap-2'>
          <h4 className='text-[24px] max-md:text-lg'>{props.head}</h4>
          <h2 className='text-[50px] font-semibold max-md:text-4xl'>{props.count}</h2>
        </div>
      </div>
    </>
  )
}

export default AssignmentsCard