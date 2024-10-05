import Image from 'next/image'
import React from 'react'

const Profile = ({data}) => {
    const {img, name, desig} = data
  return (
    <div className='flex justify-center items-center  w-full mx-auto flex-col'>
        <div className='flex justify-center items-center p-2   rounded-full w-[120px] bg-gradient-to-r from-[#E67D4B] to-[#F4BD50]'>
            <Image src={img} height={96} width={96}  alt='img' className='rounded-full '/>
        </div>
        <h1 className='text-[22px] '>{name}</h1>
        <h1 className='text-[16px] text-[#7E7E7E]'>{desig}</h1>
    </div>
  )
}

export default Profile