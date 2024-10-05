import React from "react";
import Image from "next/image";

const BlogCard = ({ cardData }) => {
  return (
    <section id={cardData.id} className="mt-10">
      <div className="w-[80%] max-md:w-full mx-auto text-center">
        <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[30px] font-bold">
          {cardData.heading}
        </h1>
        <div className="bg-[#F4BD50] h-2 w-1/2 mx-auto mt-2 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
      </div>
      <p className="text-center pt-10 max-sm:text-sm">{cardData.para}</p>
      <div className="flex justify-center pt-10 w-full mx-auto text-sm gap-2 max-md:gap-2">
        {cardData.tab1 && (
          <div className="flex flex-col">
            <div className="flex gap-3 max-md:gap-2">
              <p className="text-center max-sm:text-[10px]">
                {cardData.tab1}
              </p>
              <div className="bg-[#E67D4B] h-6 w-1.5 mx-auto"></div>
            </div>
            <Image src={cardData.tabimg1} alt="img"className="w-[130px]" />
            <p className="text-[12px]">{cardData.subpara1}</p>
          </div>
        )}

        {cardData.tab2 && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 max-md:gap-0">
              <p className="text-center max-sm:text-[10px]">
                {cardData.tab2}
              </p>
              {cardData.tab3 && (
                <div className="bg-[#E67D4B] h-6 w-1.5 mx-auto"></div>
              )}
            </div>
            <Image src={cardData.tabimg2} alt="img" className="w-[130px] rounded-2xl" />
            <p className="text-[12px]">{cardData.subpara2}</p>
          </div>
        )}

        {cardData.tab3 && (
          <p className="text-center max-sm:text-[10px]">{cardData.tab3}</p>
        )}
      </div>
      <Image src={cardData.image} className="mt-4" alt="Blog Card Image" />
    </section>
  );
};

export default BlogCard;
