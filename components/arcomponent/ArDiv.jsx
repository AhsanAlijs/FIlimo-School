import Image from "next/image";
import React from "react";

const ArDiv = ({ cardData }) => {
  // console.log(head);

  return (
    <section className="px-4 pb-6">
      <div className="w-[1010px] max-xl:w-full mx-auto  py-4 ">
        <div className="w-[22%] max-md:w-full mx-auto">
          <h1 className="text-[#E67D4B] text-[40px]  max-md:text-[20px] font-bold text-center ">
            {cardData.head}
          </h1>
          <div className="bg-[#F4BD50] h-2 max-md:w-[40%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
        <p className="text-center pt-10 text-[16px]">{cardData.paraline}</p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-sm:gap-10 pt-20 max-sm:pt-10">
          <div className="flex flex-col items-center">
            <Image src={cardData.img1} alt="hello" className="w-[100px] max-sm:w-[80px]" />
            <button className="mt-12 max-sm:mt-6 font-semibold bg-[#F4BD50] px-6 py-4 border-b-[#E67D4B] border-r-0 border-t-0 border-l-0 border-4 text-[#343534] hover:bg-[#daa948] hover:border-b-0 transition-all">
              {cardData.btntext1}
            </button>
          </div>

          <div className="flex flex-col items-center">
            <Image src={cardData.img2} alt="hello1" className="w-[100px] max-sm:w-[80px]" />
            <button className="mt-12 max-sm:mt-6  font-semibold bg-[#F4BD50] px-6 py-4 border-b-[#E67D4B] border-r-0 border-t-0 border-l-0 border-4 text-[#343534] hover:bg-[#daa948] hover:border-b-0 transition-all">
              {cardData.btntext2}
            </button>
          </div>

          <div className="flex flex-col items-center">
            <Image src={cardData.img3} alt="hello2" className="w-[100px] max-sm:w-[80px]" />
            <button className="mt-12 max-sm:mt-6  font-semibold bg-[#F4BD50] px-6 py-4 border-b-[#E67D4B] border-r-0 border-t-0 border-l-0 border-4 text-[#343534] hover:bg-[#daa948] hover:border-b-0 transition-all">
              {cardData.btntext3}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArDiv;
