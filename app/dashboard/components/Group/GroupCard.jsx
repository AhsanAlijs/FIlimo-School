import Image from 'next/image'
import React from 'react'
import { AiOutlinePaperClip } from "react-icons/ai";

const GroupCard = ({data}) => {
    const {img ,lesson, title } = data
  return (
    <div className='flex gap-5 items-center justify-start bg-[#F9F8FE] m-5 rounded-lg p-5 max-md:p-2'>
        <Image src={img} alt='img' height={80} width={80}/>
        <div>
            <h1 className='text-[22px] font-semibold max-md:text-[18px]'>{title}</h1>
            <h1 className='text-[#B0B0B0] text-[20px] max-md:text-[15px]'>
  {lesson ? (
    <div className='flex items-center justify-center gap-2 max-md:text-[15px]'>
      You: <AiOutlinePaperClip /> Lesson {lesson}
    </div>
  ) : (
    "Wade Warren: I’m facing issues in downloading..."
  )}
</h1>
        </div>
    </div>
  )
}

export default GroupCard