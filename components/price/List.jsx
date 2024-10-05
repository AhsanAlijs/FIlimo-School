import Image from "next/image";
import React from "react";
import star from "@/assets/winer/star.svg";
import unknown from "@/assets/winer/unknown.svg";
const List = ({ data, rank }) => {
  const { img, name, stars } = data;
  return (
    <>
    <div className="flex justify-between px-8 max-md:px-5 p-3 items-center">
      <div className="flex justify-center gap-7 items-center ">
        <p className="text-[19px] font-semibold max-md:text-[15px] max-md:mr-5">
          {rank + 1}
        </p>
        <Image
          src={img ? img : unknown}
          alt="img"
          height={50}
          width={50}
          className="max-lg:h-[50px] max-lg:w-[50px] border-2 rounded-full border-gray-300"
          />
        <p className="text-[19px] font-semibold  max-md:text-[12px] max-md:mr-5">
          {name}
        </p>
      </div>
      <div className="flex justify-center gap-5 items-center">
        <p className="text-[16px] font-semibold max-md:text-[14px]">
          {stars}
        </p>
        <Image src={star} alt="img" height={30} width={30} />
      </div>
    </div>
    <hr className="border-2"/>
      </>
  );
};

export default List;
