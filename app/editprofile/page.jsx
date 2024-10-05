'use client'
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { BiSolidEditAlt } from "react-icons/bi";
import { PiPencilSimpleLine } from "react-icons/pi";
import { FiLock } from "react-icons/fi";
import { CgImage } from "react-icons/cg";
import Link from "next/link";

const page = () => {
  return (
    <section className="max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5 my-10 sm:my-20">
      <div className="flex justify-center">
        <div className="w-fit flex flex-col items-start px-4 mx-auto mt-4 ">
          <h1 className="lg:text-[40px] md:text-[30px] max-[765px]:text-[30px] font-bold max-sm:text-2xl text-[#E67D4B]">
            Edit Profile
          </h1>
          <div className="h-[12px]  w-[70px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] "></div>
        </div>
      </div>
      <div className=" flex flex-col gap-6 mt-10">
        <Link href="/editstudent">
          <div className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px] max-lg:w-full mx-auto rounded-3xl flex justify-between items-center  px-10  py-2 max-sm:py-1">
            <div className="flex items-center text-gray-700">
              <span className=" text-[28px] text-gray-400  max-sm:text-[16px] rounded-full p-2">
              <PiPencilSimpleLine className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">
                Changing the name of the student
              </p>
            </div>

            000<span className="text-[#F4BD50]  group-hover:translate-x-2 transition-all">
              <IoIosArrowForward className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        <Link href="/educationbase">
          <div className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px] max-lg:w-full mx-auto rounded-3xl flex justify-between items-center  px-10 py-2 max-sm:py-1">
            <div className="flex items-center text-gray-700">
              <span className="text-[28px] text-gray-400  max-sm:text-[16px] rounded-full p-2">
                <PiStudentBold className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Change of education base</p>
            </div>

            <span className="text-[#F4BD50] group-hover:translate-x-2 transition-all">
              <IoIosArrowForward className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        <Link href="/passwordchangev">
          <div className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px] max-lg:w-full mx-auto rounded-3xl flex justify-between items-center  px-10 py-2 max-sm:py-1">
            <div className="flex items-center text-gray-700">
              <span className="text-[28px] text-gray-400  max-sm:text-[16px] rounded-full p-2">
              <FiLock className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Change password</p>
            </div>

            <span className="text-[#F4BD50]  group-hover:translate-x-2 transition-all">
              <IoIosArrowForward className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        <Link href="/avatar">
          <div className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px] max-lg:w-full mx-auto rounded-3xl flex justify-between items-center  px-10 py-2 max-sm:py-1">
            <div className="flex items-center text-gray-700">
              <span className="text-[28px] text-gray-400  max-sm:text-[16px] rounded-full p-2">
              <CgImage className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Change profile picture</p>
            </div>

            <span className="text-[#F4BD50] group-hover:translate-x-2 transition-all">
              <IoIosArrowForward className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        {/* <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-6 w-[700px] max-lg:w-full mx-auto rounded-3xl flex justify-between items-center  px-10 py-2 max-sm:py-1">
          <div className="flex items-center text-gray-700">
            <span className="bg-[#F4BD50] text-[24px] max-sm:text-[16px] rounded-full p-2">
              <FaLocationDot />
            </span>
            <p className="font-bold text-[24px] max-sm:text-[16px] px-4 py-4">Change of province and city</p>
          </div>
          <span className="text-[#F4BD50] w-[12px] group-hover:translate-x-2 transition-all">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="flex max-lg:flex-col max-lg:w-full w-[700px] mx-auto gap-6 ">
            <select
              id="options1"
              name="options1"
              className="border w-[50%] max-lg:w-full text-[26px] max-md:text-[20px] max-sm:text-[15px] bg-[#E67D4B] border-none text-white border-gray-300 rounded-lg px-4 py-6 text-lg  focus:outline-none "
            >
            <option value="option1">choose an option</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>

          <select
            id="options2"
            name="options2"
            className="border w-[50%] max-lg:w-full text-[26px] max-md:text-[20px] max-sm:text-[15px] bg-[#E67D4B] border-none text-white border-gray-300 rounded-lg px-4 py-6 text-lg focus:outline-none"
          >
            <option value="option1">Choose the province</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div> */}
      </div>
    </section>
  );
};

export default page;