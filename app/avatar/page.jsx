"use client"
import React, { useState } from "react";
import pics from "@/utils/arrays/profile";
import Image from "next/image";

const page = () => {
  const [selectedImage, setSelectedImage] = useState(pics[0].image); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className="max-w-screen-2xl mx-auto my-7 md:my-14 max-2xl:px-24 max-md:px-14 max-sm:px-5">
      <div className="flex justify-center mt-8 max-sm:mt-0">
        <div className="pt-10">
          <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
            Change profile picture
          </h1>
          <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6 py-6 items-center">
        <Image src={selectedImage.src} width={109} alt="Selected profile picture" height={109} />
        <p className="text-[#818181] text-[18px]">Your current photo</p>
        <p className="text-[18px] font-medium">Choose your new profile picture:</p>
      </div>
      <div className="grid grid-cols-8 gap-6 max-md:grid-cols-4 mt-12 items-center">
        {pics.map((item, index) => (
          <img
            key={index}
            src={item.image.src}
            alt={item.alt}
            onClick={() => handleImageClick(item.image)} 
            className="cursor-pointer" 
          />
        ))}
      </div>
    </section>
  );
};

export default page;
