import Image from "next/image";
import React from "react";
import winnerPhoto from "@/assets/winer/winnerPhoto.svg";
import winnersub from "@/assets/winer/winnersub.svg";
import start from "@/assets/winer/star.svg";
const WinnerBanner = () => {
  return (
    <div className="border-4 rounded-3xl border-[#E67D4B] bg-[#FFECE2] max-lg:w-[85%] mx-auto w-[810px]">
      <div className="w-[138px] text-[20px] text-[#343534] bg-[#867045] p-2 h-[40px] rounded-lg px-2 max-md:w-50 relative max-sm:-top-4 -top-5 left-10 flex justify-center items-center">
        <p>First Winner</p>
      </div>
      <div className="flex justify-center max-md:flex-wrap max-md:p-5 max-md:items-center items-start gap-5 p-10 max-sm:p-2 max-sm:gap-1">
        <Image
          src={winnerPhoto}
          alt="img"
          height={150}
          width={150}
          className="max-lg:h-[110px] max-lg:w-[110px] max-sm:h-[80px] max-sm:w-[80px]"
        />
        <div className="flex justify-center items-center flex-col max-lg:mr-10 max-sm:mr-0 max-sm:w-full mr-10">
          <h1 className="text-[33px] text-[#E67D4B] font-semibold max-lg:text-[25px]">
            Elena Ramezani
          </h1>
          <div className="flex justify-center items-center ">
            <Image
              src={winnersub}
              alt="img"
              className="h-[60px] w-[60px]"
              height={60}
              width={60}
            />
            <p className="text-[18px] max-lg:text-[16px] max-sm:text-[15px]">
              1 month Fidibo subscription
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-start ">
          <p className="text-[#E67D4B] text-[25px] font-semibold max-lg:text-[25px]">
            761
          </p>
          <Image
            src={start}
            alt="img"
            height={50}
            width={50}
            className="max-lg:h-[35px] max-lg:w-[35px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerBanner;
