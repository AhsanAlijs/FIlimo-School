import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Card = ({data}) => {
    const {img , name , score} = data ;
  return (
    <div className='flex flex-wrap items-center justify-between  bg-[#F9F8FE] rounded-lg gap-5 m-5 p-5'>
     <div className='flex flex-wrap items-center gap-5'>

            <Image src={img} alt='img' height={80} width={80}/>
            <div>
                <h1 className='text-[22px] font-semibold'>{name}</h1>
                <h2 className='text-[20px] font-semibold text-[#E67D4B]'>Allover score: {score}%</h2>
            </div>
     </div>
            <Link className='bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white px-4 py-2 text-[16px] rounded-full max-sm:w-full max-sm:text-center' href="#" >View Recording</Link>
      
    </div>
  )
}

export default Card