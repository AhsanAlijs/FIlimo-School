import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carouselDouble";
import Image from "next/image";
import Link from "next/link";

const CarouselCardHome2 = (props) => {
  return (
    <>
      <Carousel className="w-full mb-20 ">
        <CarouselContent className=" ">
          {props.allData?.map((item, index) => {
            return (
              <div className="grid gap-6  ">
                <CarouselItem className=" w-fit max-md:pr-0 transition-all p-0">
                <Link href={`/language/${item?.id}`}>
                  <div className="flex flex-col justify-center items-center gap-4 max-sm:gap-2 w-[160px] max-sm:w-[120px]">
                    <div className="h-[140px] w-[140px] max-sm:h-[100px] max-sm:w-[100px] max-md:w-36 max-md:h-36 transition-all">
                      <Image
                        src={item?.image?.startsWith("http") ? item?.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item?.image}`}
                        width={140}
                        height={140}
                        className="rounded-[30px] h-[140px] w-[140px] max-sm:h-[100px] max-sm:w-[100px] object-cover max-md:w-36 max-md:h-36"
                      />
                    </div>
                    <p className="text-[16px] text-gray-700 font-bold text-center max-md:text-sm line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                  </Link>
                </CarouselItem>

              </div>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext/>
      </Carousel>
    </>
  );
};



export default CarouselCardHome2;