

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { carouselData } from "@/utils/arrays/Home/carouselData";

const CarouselRow3 = ({ summerCourse }) => {
  const courses = summerCourse?.map((item) => item);

  return (
    <div className="section-width max-w-screen-2xl mx-auto max-2xl:px-36 max-md:px-14 max-sm:px-5 mt-8 md:mt-14 lg:mt-20">
      <div className="marquee-wrapper">
        <div className="marquee-container">
          <Marquee direction="left" speed={120} delay={2}>
            {courses?.map((res, index) => (
              <div key={index}>
                <div className="flex flex-col justify-start items-center gap-2 w-[110px] md:w-[140px] h-[220px]">
                  <div className="w-[90px] md:w-[120px] h-[90px] md:h-[140px]">
                    <img
                      src={
                        res?.image?.startsWith("http")
                          ? res.image
                          : `${process.env.NEXT_PUBLIC_BASE_URL}/${res.image}`
                      }
                      width={120}
                      height={120}
                      className="rounded-xl object-cover  md:h-[120px] max-sm:h-[100px]"
                      alt="img"
                    />
                  </div>
                  <p className="text-[16px] text-gray-700 font-bold text-center max-md:text-sm flex-grow line-clamp-1 ">
                    {res?.title}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CarouselRow3;