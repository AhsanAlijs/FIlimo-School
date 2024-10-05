import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import card1 from '../../assets/home/carousel-2/card1.png'
import Image from 'next/image'
import { carouselCard2 } from '@/utils/arrays/Home'

const CarouselCard2 = ({rating, head, para, image}) => {
  const totalStars = 5; 


  const getStars = (rating) => {
    return Array.from({length: totalStars} , (_ , index)=> index < rating)
  }

  return (
    <>
        <div>
        <Carousel className="rounded-[20px]">
            <CarouselContent className=" w-[976px] max-md:w-full max-sm:h-full h-[300px] flex gap-8">
            {carouselCard2.map((item, index) => {
            const bgColor = index % 2 === 0 ? 'bg-[#FFECC5]' : 'bg-[#EBF6FD]';
            return (
              <CarouselItem className={`${bgColor} p-8 max-sm:p-6 basis-1/2 max-sm:basis-[100%] flex  items-center`} key={index}>
                <div>
                  <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-center max-sm:text-center">
                    <Image src={item.image} width={60} height={60} alt="card image" />
                    <div>
                      <h3 className="text-[27px] font-semibold ml-2 mb-2 max-sm:text-lg">{item.head}</h3>
                      <div className="flex items-center">
                        {getStars(item.stars).map((isFilled, starIndex) => (
                          <svg
                            key={starIndex}
                            className={`w-6 h-6 max-sm:h-4 max-sm:w-4 ms-1 ${isFilled ? 'text-[#42C686]' : 'text-[#42c68659] dark:text-gray-500'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-8 text-[20px] max-sm:text-sm ">{item.para}</p>
                </div>
              </CarouselItem>
            );
          })}
                
            </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
        </Carousel>

        </div>
    </>
  )
}

export default CarouselCard2