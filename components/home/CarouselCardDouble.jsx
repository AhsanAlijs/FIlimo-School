import React from 'react'
import CarouselCard from './CarouselCard'
import { carouselData } from '@/utils/arrays/Home/carouselData'

const CarouselCardDouble = () => {
  return (
    <>
         <div className=' max-w-screen-2xl mx-auto'>
            <div className='flex items-start gap-10 overflow-x-auto pb-4 w-[100%] justify-start max-md:w-full '>
              {carouselData.map((item, index)=>{
                return <CarouselCard key={index} image={item.image} text={item.text}/>
              })}
            </div>
          </div>
    </>
  )
}

export default CarouselCardDouble