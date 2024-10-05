import React from "react";
import { FaStar } from "react-icons/fa";

const MyDevice = () => {
  return (
    <>
      <section>
        <div className="container px-5 py-24">
          <div className="flex justify-center p-4">
            <div className="flex flex-col   ">
              <h1 className="text-[40px] font-bold text-[#E67D4B] max-sm:text-2xl">
                My Device
              </h1>
              <div className="h-[12px] w-[110px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] "></div>
              <p className="text-[16px] text-gray-600 mt-3">
                You areSigned with in these Device:{" "}
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/2 mx-auto w-full">
            <div className="h-full bg-[#F4BD50] p-8 rounded-2xl shadow-2xl">
              <p className="flex justify-end items-center text-gray-900 font-bold mb-3">
                The Same Device{" "}
                <span className="pl-5 text-xl text-[#E67D4B]">
                  <FaStar />
                </span>
              </p>
              <h1>
                {" "}
                <span className="text-gray-900 font-bold">
                  Desktop Windows /{" "}
                </span>
                Google Chrome
              </h1>
              <div className="flex justify-between text-gray-900 font-bold my-10 text-sm sm:text-md">
                <ul className="space-y-3">
                  <li>IP Address:</li>
                  <li>Date Of First Activity:</li>
                  <li>Date Of Last Activity:</li>
                </ul>

                <ul className="space-y-3">
                  <li>172.548.472.9</li>
                  <li>172.548.472.9</li>
                  <li>Date Of Last Activity:</li>
                </ul>
              </div>
              <div className="text-center">
                <button className="bg-[#E67D4B] px-7 sm:px-20 py-4 font-bold rounded-lg text-sm sm:text-md">
                  Exit this device
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/2  mx-auto w-full">
            <div className="h-full bg-[#F4BD50] p-8 rounded-2xl shadow-2xl">
              <p className="flex justify-end items-center text-gray-900 font-bold mb-3">
                The Same Device{" "}
                <span className="pl-5 text-xl text-[#E67D4B]">
                  <FaStar />
                </span>
              </p>
              <h1>
                {" "}
                <span className="text-gray-900 font-bold">
                  Desktop Windows /{" "}
                </span>
                Google Chrome
              </h1>
              <div className="flex justify-between text-gray-900 font-bold my-10 text-sm sm:text-md">
                <ul className="space-y-3">
                  <li>IP Address:</li>
                  <li>Date Of First Activity:</li>
                  <li>Date Of Last Activity:</li>
                </ul>

                <ul className="space-y-3">
                  <li>172.548.472.9</li>
                  <li>172.548.472.9</li>
                  <li>Date Of Last Activity:</li>
                </ul>
              </div>
              <div className="text-center">
                <button className="bg-[#E67D4B] px-7 sm:px-20 py-4 font-bold rounded-lg text-sm sm:text-md">
                  Exit this device
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyDevice;
