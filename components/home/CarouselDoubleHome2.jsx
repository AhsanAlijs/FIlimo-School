import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carouselDouble";
// import { carouselData } from '@/app/utils/arrays/Home'
import Image from "next/image";
import { carouselData } from "@/utils/arrays/Home/carouselData";
import Link from "next/link";

const CarouselDoubleHome2 = (props) => {
    console.log(props.allData);



    const logoArrDouble = props.allData?.reduce((acc, current, index, arr) => {
        if (index % 2 === 0) {
          acc.push([current, arr[index + 1]]);
        }
        return acc;
      }, []);
    
  return (
    <>
      <Carousel className="w-full ">
        <CarouselContent className="">
          {logoArrDouble.map((item, index) => {
            return (
              <div className="grid grid-rows-2 gap-6 max-sm:gap-0">
                <CarouselItem className=" w-fit  max-md:pr-0 transition-all  p-0">
                <Link href={`/language/${item[0]?.id}`}>
                  <div className="flex flex-col justify-center items-center gap-4  max-sm:gap-2 max-sm:w-[120px] w-[160px]">
                    <div className="h-[140px] w-[140px] max-sm:h-[100px] max-sm:w-[100px] max-md:w-36 max-md:h-36 transition-all">
                      <Image
                        src={item[0]?.image?.startsWith("http") ? item[0].image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item[0]?.image}`}
                        width={140}
                        height={140}
                        className="rounded-[30px] max-sm:w-[100px] max-sm:h-[100px] h-[140px] w-[140px] object-cover max-md:w-36 max-md:h-36"
                      />
                    </div>
                    <p className="text-[16px] text-gray-700 font-bold text-center max-md:text-sm line-clamp-1">
                      {item[0].title}
                    </p>
                  </div>
                  </Link>
                </CarouselItem>
                <CarouselItem className=" w-fit  max-md:pr-0 transition-all p-0">
                <Link href={`/language/${item[1]?.id}`}>
                  <div className="flex flex-col justify-center items-center gap-4 max-sm:gap-2 max-sm:w-[120px] w-[160px]">
                    <div className="h-[140px] w-[140px] max-sm:h-[100px] max-sm:w-[100px] max-md:w-36 max-md:h-36 transition-all">
                      <Image
                        src={item[1]?.image?.startsWith("http") ? item[1].image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item[1]?.image}`}
                        width={140}
                        height={140}
                        className="rounded-[30px] max-sm:w-[100px] max-sm:h-[100px] h-[140px] w-[140px] object-cover max-md:w-36 max-md:h-36"
                      />
                    </div>
                    <p className="text-[16px] text-gray-700 font-bold text-center max-md:text-sm line-clamp-1">
                      {item[1]?.title}
                    </p>
                  </div>
                  </Link>
                </CarouselItem>
              </div>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};



export default CarouselDoubleHome2;