import React from 'react'
import Image from 'next/image'

const ProfileCard = ({data}) => {
    const {img , name , score} = data ;
  return (
    <div className='flex items-center justify-start  bg-[#F9F8FE] rounded-lg gap-5 m-5 p-5'>
     
            <Image src={img} alt='img' height={80} width={80} className='max-md:h-[50px] max-md:w-[50px]'/>
            <div>
                <h1 className='text-[22px] font-semibold max-md:text-[18px]'>{name}</h1>
                <h2 className='text-[20px] font-semibold text-[#E67D4B] max-md:text-[15px]'>Allover score: {score}%</h2>
            </div>
      
    </div>
  )
}

export default ProfileCard