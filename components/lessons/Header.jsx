import Image from 'next/image'
import React from 'react'

const Header = ({ headerData }) => {
  return (
    <div className='flex  flex-col justify-center items-center mx-auto my-20'>
        <div className=''>
            <Image height={173} width={130} src={headerData.image?.startsWith("http") ? headerData.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${headerData.image}`} alt='img'/>
        </div>
        <div>
            <h1 className='text-[#E67D4B] text-[40px] font-bold'>{headerData.title}</h1>
            {/* <div className='bg-[#F4BD50] h-[12px] w-[91px] border-b-2 border-[#E67]'>{headerData.description}</div> */}
        </div>
    </div>
  )
}

export default Header