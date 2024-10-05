import Image from 'next/image'
import React from 'react'


const CarouselCard = (props) => {
  return (
    <>
        <div className='flex flex-col justify-center items-center gap-6 w-[210px]'>
            <div className='h-[209px] w-[209px] max-md:w-36 max-md:h-36'>
                <Image src={props.image} width={209} height={209} className='rounded-[30px] h-[209px] w-[209px] object-cover max-md:w-36 max-md:h-36' alt="img"/>
            </div>
            <p className='text-[21px] font-bold text-center max-md:text-sm'>{props.text}</p>
        </div>
    </>
  )
}

export default CarouselCard