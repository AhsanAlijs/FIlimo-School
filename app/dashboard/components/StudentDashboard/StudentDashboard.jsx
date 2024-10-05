"use client";
import React, { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import Profile from "../Profile";
import profile from "@/assets/dashboard/prodile.svg";
import { Calender } from "../Calendar";
import Timeline from "../Timeline/Timeline";
import { Chart } from "./Chart";
import { Assignments } from "./Assignments";
import { Quizzes } from "./Quizzes";
const data = [
  {
    name: "Monica Alice",
    desig: "Maths Teacher",
    img: profile,
  },
];

const StudentDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Annual"); // Default selected option

  const handleToggle = (option) => {
    setSelectedOption(option);
    console.log(option)
  };
  return (
    <>
      <div className="grid grid-cols-[70%_auto] gap-16 max-2xl:grid-cols-1">
        {/* left comp  */}
        <div className="">
          <h1 className="text-[30px] font-bold max-md:ml-12">
            Good Morning Monica!
          </h1>
          <div className="flex justify-center w-full flex-col items-start bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white p-5 font-medium rounded-2xl my-5">
            <p className="mt-5">Test progress</p>
            <h2 className="text-[26px] font-normal my-5">
              Your students are doing great, 60% of the students have competed
              the test.
            </h2>
          </div>
          <div className="shadow-lg flex flex-col justify-center items-end rounded-2xl  bg-white">
            <div className="flex bg-[#F5F5FA] p-2 m-2 rounded-full">
              <button
                onClick={() => handleToggle("Mids")}
                className={`px-4 py-2 rounded-full ${
                  selectedOption === "Mids"
                    ? "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                    : "text-gray-500"
                }`}
              >
                Mids
              </button>
              <button
                onClick={() => handleToggle("Annual")}
                className={`px-4 py-2 rounded-full ml-2 ${
                  selectedOption === "Annual"
                    ? "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                    : "text-gray-500"
                }`}
              >
                Annual
              </button>
            </div>
            <div className="w-full">

            <Chart />
            </div>

          </div>
          <div className='flex justify-start  items-center gap-5 w-full max-xl:flex-wrap mt-5 '>
            <div className="h-[400px] overflow-y-auto">
                  <Assignments/>

            </div>
            <div className="h-[400px] overflow-y-auto">

                  <Quizzes/>
            </div>
                </div>
        </div>
        {/* right comp */}
        <div className="bg-white">
          <div className="flex justify-between items-center p-6">
            <h1 className="text-[22px]">Your Profile</h1>
            <TbDotsVertical className="text-[22px]" />
          </div>
          <div>
            {data &&
              data.map((data, index) => <Profile key={index} data={data} />)}
          </div>
          <div className="border-none">
            <Calender />
          </div>
          <div>
            <Timeline />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
