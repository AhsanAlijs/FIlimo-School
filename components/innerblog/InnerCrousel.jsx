import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel2";
import Image from "next/image";
import { blogcrousel } from "@/utils/arrays/innerblog";

const InnerCrousel = () => {
  return (
    <>
      <div>
        <Carousel className="rounded-[20px]">
          <CarouselContent className=" w-full  ">
            {blogcrousel.map((item, index) => (
              <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-auto "  key={index}>
                <div className="relative">
                  <div className="flex w-full">
                    <Image src={item.imgSrc} className="max-sm:w-full" width={490} alt="card image" />
                    <div className="absolute flex justify-center self-center  w-full">
                      <div className="bg-[#343534] text-white rounded-2xl px-2 py-2 opacity-80  ">
                      <h3 className="text-[20px] max-lg:text-[14px] text-center  font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default InnerCrousel;
