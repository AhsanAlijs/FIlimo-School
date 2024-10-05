import Image from 'next/image'
import React from 'react'
import card1 from '@/assets/home2/card1.png'
import playBtn from '@/assets/home2/playBtn.png'

const VideoCard = (props) => {
  return (
    <>
      <div className='max-md:w-full'>
        <div className='relative'>
          <Image className='max-md:w-full h-[220px] object-cover rounded-2xl' alt="img" src={props?.image?.startsWith("http") ? props.image  : `${process.env.NEXT_PUBLIC_BASE_URL}/${props.image}`}  width={490} height={250}/>
              <Image className='absolute inset-0 m-auto cursor-pointer' src={playBtn} width={40} height={40} alt="img"/>
          </div>
      </div>
    </>
  )
}

export default VideoCard