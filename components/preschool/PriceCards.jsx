import Image from 'next/image'
import React from 'react'

const PriceCards = ({data}) => {
  const  {head1,para1,head2,para2,img,head3,head4,para3,para4,img2,img3,img4} = data


  return (
    <div>
      <div className='w-full px-4 pb-6 '>
        <div className='flex justify-between items-center text-center bg-[#F4BD50] p-[30px] mb-[51px] max-sm:flex-wrap max-sm:justify-center'>
          <div>
            <p className='text-[16px]'>{head1}</p>
            <h1 className='text-[20px] text-white font-semibold mb-[20px]'>{para1}</h1>
            <p  className='text-[16px]'>{head2}</p>
            <h1 className='text-[20px] font-semibold text-white'>{para2}</h1>
          </div>
          <Image src={img} height={150} width={150} alt='img'/>
        </div>
        <div className='border-4 border-[#E67D4B] max-sm:pt-0  p-[20px]'>
          <div className='flex justify-center'>
            <div className='border-4 border-[#E67D4B] px-2 max-md:w-60 relative max-sm:-top-4 -top-9 flex justify-center items-center bg-white '><p>{head3}</p></div>
          </div>
          <div className='flex max-sm:flex-wrap max-sm:justify-center justify-center gap-[10px] items-start'>
           <Image src={img2} alt='img' height={70} width={70} />
            <div className='flex flex-col '>
            <h1 className='text-[20px] font-semibold text-[#E67D4B] '>{head4}</h1>
            <div className='flex mb-[19px]'>
              <p className='text-[20px] font-semibold text-[#F4BD50]'>{para3}</p>
                <Image src={img3} height={20} width={20} alt='img'/> 
            </div>
            <div className='flex justify-between gap-20  items-center w-full'>

            <p className='text-[16px] '>{para4}</p>
            {img4 && <Image src={img4} alt='img' height={100} width={100}/>}
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCards