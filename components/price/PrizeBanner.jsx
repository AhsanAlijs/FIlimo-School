import Image from "next/image";
import React from "react";
import prize from "@/assets/winer/prize.svg";
const PrizeBanner = () => {
  return (
    <div className="bg-[#F4BD50] rounded-3xl max-lg:w-[85%] mx-auto w-[810px]  border-2 flex p-10">
      <div className="flex justify-center items-center max-lg:gap-5 max-lg:mr-0 gap-10 mr-5 max-sm:flex-wrap">
        <Image
          src={prize}
          alt="img"
          height={160}
          width={134}
          className="max-lg:h-[150px] max-lg:w-[150px] max-md:h-[110px] max-md:w-[110px]"
        />
        <p className="text-[33px] font-semibold text-white max-lg:text-[25px] max-md:text-[20px] max-sm:text-[16px]">
          Sin Jim Arman Farda game www.aftoys.ir
        </p>
      </div>
      <div className="flex gap-8 justify-center items-center max-sm:mt-36">
        <div className="h-[110px] w-[7px] border-r-8 border-[#E67D4B] max-md:h-[80px] max-md:w-[5px] "></div>
        <p className="text-[25px] max-lg:text-[25px] max-md:text-[16px]">
          first Prize
        </p>
      </div>
    </div>
  );
};

export default PrizeBanner;
