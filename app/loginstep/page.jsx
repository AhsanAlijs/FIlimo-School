'use client'
import React from "react";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4">
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center mt-8 mb-6 max-sm:mt-0">
            <div className="pt-10">
              <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
                2 steps to points
              </h1>
              <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <span className="text-[40px]">
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>

      <div className="bg-[#F9F9F9] w-[750px] max-lg:w-full mx-auto p-10 max-sm:p-4 rounded-3xl ">
        <div className="flex items-center gap-6 text-[30px] max-md:text-[20px] font ">
          <span className="text-[#F4BD50] bg-black rounded-full border-none">
            <PiNumberCircleOneFill />
          </span>
          <span className="font-semibold">Send an invitation</span>
          <BsSend />
        </div>
        <p className="mt-2 pl-14 max-sm:pl-10  max-sm:text-[14px]">
          Send your own exclusive invitation to your friends.
        </p>
      </div>
      <div className="bg-[#F9F9F9] w-[750px] max-lg:w-full mx-auto p-10 max-sm:p-4 rounded-3xl mt-8 ">
        <div className="flex items-center gap-6 text-[30px] max-md:text-[20px]  font ">
          <span className="text-[#F4BD50] bg-black rounded-full border-none">
            <PiNumberCircleTwoFill />
          </span>
          <span className="font-semibold">Successful invitation</span>
          <FaRegCircleCheck />
        </div>
        <p className="mt-2 pl-14 max-sm:pl-10  max-sm:text-[14px]">
          Each of your friends who registers and completes a lesson , you will
          also get 30 points.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-8 items-center mt-10">
          <video
            controls
            autoPlay
            width={1010}
            className="rounded-3xl max-md:w-[90%] object-cover h-[400px]  max-md:h-[200px]"
          >
            <source src="/planning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        <p className="text-[20px] max-sm:text-[14px] font-medium text-center">
          You haven't invited anyone yet or your friends haven't registered with
          your invitation link.
        </p>
        <button className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white px-8 p-2 max-sm:px-4 max-sm:text-[14px] rounded-full font-semibold text-[20px]">
          Send invitations to friends
        </button>
      </div>
    </section>
  );
};

export default page;
