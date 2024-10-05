"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper"; // Import Pagination module
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/home2/banner-image.png";
import bannerImage2 from "@/assets/home2/banner-image2.png";

const Slider = () => {
  const totalStars = 5; 


  const getStars = (rating) => {
    return Array.from({length: totalStars} , (_ , index)=> index < rating)
  }
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 6000, // 10 seconds
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet", // Default bullet class
        bulletActiveClass: "swiper-pagination-bullet-active", // Default active bullet class
      }}
    >
      <SwiperSlide>
        <div className="bg-[#ff8a00] pt-8 pl-8 max-lg:px-6 max-lg:pt-6 w-full section-width max-2xl:px-20 max-md:px-14 max-sm:px-5 h-[300px]">
          <div className=" flex items-center justify-around max-2xl:justify-between h-full max-md:flex-col max-lg:items-center">
            {/* Text on the left side */}
            <div className="flex flex-col justify-center h-full max-lg:flex max-lg:flex-col max-lg:items-center text-left">
              <h2 className="text-[30px] max-lg:text-3xl font-bold text-[#343534] mb-4">
                Skill courses with a valid degree!
              </h2>
              <Link href="/degree">
                <button className="px-6 max-lg:text-2xl max-sm:w-full max-sm:px-6 h-[50px] bg-white transition-all hover:bg-[#d1d1d1] text-black rounded-[10px] text-[24px] font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  Start
                </button>
              </Link>
            </div>
            {/* Image on the right side */}
            <div className="flex justify-center items-center h-full">
              <Image
                src={bannerImage}
                width={631}
                height={353}
                className="w-[400px] object-cover"
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#0189ad] pt-8 pl-8 max-lg:px-6 max-lg:pt-6 w-full section-width max-2xl:px-20 max-md:px-14 max-sm:px-5 h-[300px]">
          <div className="flex items-center justify-around max-2xl:justify-between h-full max-md:flex-col max-lg:items-center">
            {/* Text on the left side */}
            <div className="flex flex-col justify-center h-full max-lg:flex max-lg:flex-col max-lg:items-center text-left">
              <h2 className="text-[30px] max-lg:text-3xl font-bold text-[#343534] mb-4">
                Teaching Astronomy
              </h2>
              <Link href="/degree">
                <button className="px-4 max-lg:text-2xl max-sm:w-full max-sm:px-6 h-[50px] bg-white transition-all hover:bg-[#d1d1d1] text-black rounded-[10px] text-[24px] font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  Lets go to space
                </button>
              </Link>
            </div>
            {/* Image on the right side */}
            <div className="flex justify-center items-center h-full">
              <Image
                src={bannerImage2}
                width={631}
                height={353}
                className="w-[400px] object-cover"
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;