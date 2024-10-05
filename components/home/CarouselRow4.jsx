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

const CarouselRow4 = ({ summerCourse }) => {
  const courses = summerCourse?.map((item) => item);
  return (
    <>
    {/* md:h-[120px] max-sm:h-[100px] */}
      <Carousel className="w-full ">
        <CarouselContent className="">
          {courses.map((item, index) => {
            return (
              <div key={index} className="grid grid-rows-2 gap-6 max-sm:gap-0">
                <Link href={`/summerlessons/${item.id}`}>
                  <CarouselItem className="w-fit max-md:pr-0 transition-all">
                    <div className="flex flex-col justify-center items-center gap-4 max-sm:w-[100px] w-[160px]">
                      <div className="max-sm:h-[100px] max-sm:w-[100px] max-md:w-36 max-md:h-36 transition-all">
                        <Image
                          src={
                            item?.image?.startsWith("http")
                              ? item.image
                              : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`
                          }
                          width={140}
                          height={140}
                          className="max-sm:rounded-lg rounded-xl max-sm:h-[100px]  max-sm:w-[180px] md:h-[140px] object-cover max-md:w-36 
                          max-md:h-36"
                          alt="img"
                        />
                      </div>
                      <p className="text-[16px] line-clamp-1 text-gray-700 font-bold text-center max-md:text-sm">
                        {item?.title}
                      </p>
                    </div>
                  </CarouselItem>
                </Link>
                <Link href={`/summerlessons/${item.id}`}>
                <CarouselItem className=" w-fit  max-md:pr-0 transition-all">
                  <div className="flex flex-col justify-center items-center gap-4 max-sm:w-[100px] w-[160px]">
                    <div className="max-sm:h-[100px] max-sm:w-[100px] max-md:w-36 max-md:h-36 transition-all">
                      <Image
                        src={
                          item?.image?.startsWith("http")
                            ? item.image
                            : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`
                        }
                        width={140}
                        height={140}
                        className="max-sm:rounded-lg rounded-xl max-sm:h-[100px] max-sm:w-[100px] md:h-[140px] object-cover max-md:w-36 max-md:h-36"
                        alt="img"
                      />
                    </div>
                    <p className="text-[16px] line-clamp-1 text-gray-700 font-bold text-center max-md:text-sm">
                      {item?.title}
                    </p>
                  </div>
                </CarouselItem>
                </Link>
              </div>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="disabled:opacity-0" />
        <CarouselNext className="disabled:opacity-0" />
      </Carousel>
    </>
  );
};

const logoArrDouble = carouselData.reduce((acc, current, index, arr) => {
  if (index % 2 === 0) {
    acc.push([current, arr[index + 1]]);
  }
  return acc;
}, []);

export default CarouselRow4;
