import Image from "next/image";
import React from "react";
import star from "../../../../assets/dashboard/courses/Star.png"
const Allcourses = ({ data }) => {
  const { image, name, subject, price, rating } = data;
  return (
    <div  className="flex flex-col bg-white">
      <div>
        <Image src={image} className="w-full" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[#342F98] bg-[#EBEBFF] font-medium px-4">{subject}</h2>
          <p className="text-[#FF6636] font-semibold text-[20px]">${price}</p>
        </div>
        <h2 className="font-medium pb-4 pt-4 text-[24px]">{name}</h2>
        <hr />
        <div className="flex justify-between items-center pt-4 ">
          <div className="flex items-center gap-2">
            <Image src={star} className="object-cover w-full "/>
            <p>{rating}</p>
          </div>
          <button className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white px-6 py-4 max-md:px-4 max-md:py-2 max-sm:text-sm font-medium rounded-full" >Purcahse</button>
        </div>
      </div>
    </div>
  );
};

export default Allcourses;
