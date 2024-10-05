"use client";
import PrizeBanner from "@/components/price/PrizeBanner";
import WinnerBanner from "@/components/price/WinnerBanner";
import Link from "next/link";
import React, { useState } from "react";
import { priceCard } from "@/utils/arrays/Prize/PriceCard";
import List from "@/components/price/List";
import { FaChevronRight } from "react-icons/fa";
const page = () => {
  const [selectedFilter, setSelectedFilter] = useState("This Week");

  // Filter data based on the selected filter
  const filterData = (data, type) => {
    //   if (type === 'All') return data;
    return data.filter((item) => item.type === type);
  };
  return (
    <div className="w-full flex justify-center flex-col items-center mb-32 ">
      <div className="flex flex-wrap gap-6 max-w-screen-2xl mx-auto justify-between items-center w-full my-20 max-sm:my-10">
        <div className="max-2xl:px-24 max-md:px-14 max-sm:px-5 mx-auto">
          <p className="text-3xl max-md:text-xl max-sm:text-lg font-bold text-gray-700">
            The privileges of the first base
          </p>
          {/* <div className="bg-[#F4BD50] border-b-2 border-[#E67D4B] h-[12px] w-[75px]"></div> */}
        </div>

        <Link
          href="/points"
          className="  mx-auto  px-6 text-[14px] sm:text-[20px] text-[#F4BD50] font-semibold flex items-center gap-2"
        >
          How do I collect points? <FaChevronRight className="text-lg"/>
        </Link>
      </div>
      <div className="flex w-full lg:w-[60%] mx-auto flex-wrap justify-center gap-10 pb-0 py-5 mt-0 border-b-2 border-gray-300">
        <button
          className={`text-gray-700 transition-all p-2 px-6 ${
            selectedFilter === "This Week"
              ? "border-b-4 border-[#F4BD50]"
              : "text-[#F4BD50]"
          }`}
          onClick={() => setSelectedFilter("This Week")}
        >
          This Week(week of August 3 )
        </button>
        <button
          className={`text-gray-700 transition-all p-2 px-6 ${
            selectedFilter === "last week"
              ? "border-b-4 border-[#F4BD50]"
              : "text-[#F4BD50]"
          }`}
          onClick={() => setSelectedFilter("last week")}
        >
          last week
        </button>
      </div>

      <div className="my-10 md:my-14 lg:my-20 px-4 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-4 max-sm:px-5">
        {selectedFilter === "last week" ? <WinnerBanner /> : <PrizeBanner />}
      </div>
      {/* lsits filterData(priceCard, selectedFilter) */}
      <div className=" w-full px-4 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5">
        <div className="max-lg:w-full max-w-screen-lg mx-auto flex flex-col rounded-3xl border-2 border-gray-200 shadow-xl">
          {priceCard &&
            filterData(priceCard, selectedFilter).map((data, index) => (
              <List key={index} data={data} rank={index} />
            ))}
        </div>
        <div className="  w-full mx-auto flex justify-center mt-10 text-white">
          <button className=" bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] p-4 px-8 rounded-full md:text-[20px] text-[16px] font-semibold">
            where am I in the table
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
