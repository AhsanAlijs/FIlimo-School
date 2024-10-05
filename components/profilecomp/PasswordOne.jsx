"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";

const PasswordOne = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Handler function to log the input value
  const handleButtonClick = () => {
    console.log(inputValue);
  };

  return (
    <>
      <section>
        <div className="container px-4 py-24 max-sm:py-14">
          <div className="flex justify-center p-4">
            <div className="flex flex-col">
              <h1 className="text-[40px] font-bold text-[#E67D4B] max-sm:text-2xl">
                Change Password
              </h1>
              <div className="h-[12px] w-[110px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]"></div>
              <p className="text-[16px] text-gray-600 mt-3">
                You are signed in on these devices:
              </p>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 mx-auto w-full">
            <div className="h-full bg-[#F4BD50] p-8 rounded-2xl shadow-2xl">
              <div className="lg:w-2/3 py-5 sm:py-10 mx-auto">
                <div className="flex flex-col">
                  <label
                    htmlFor="code-verification"
                    className="text-gray-700 pb-5 font-medium text-lg"
                  >
                    Code Verification
                  </label>
                  <input
                    type="number"
                    id="code-verification"
                    className="rounded-full border-2 border-orange-600 bg-transparent py-2 px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p className="flex justify-end mt-3 font-medium text-md">
                    <time>01 : 30</time>
                  </p>
                </div>

                <div className="flex flex-col mx-auto pt-5 text-center text-sm sm:text-xl">
                  <button
                    className="bg-[#E67D4B] py-4 font-bold rounded-2xl"
                    onClick={handleButtonClick}
                  >
                    <Link href="/passwordchange2">Code verification</Link>
                  </button>

                  <button className="bg-white py-4 font-bold rounded-2xl mt-3">
                    Resend the Password
                  </button>
                </div>
                <p className="flex justify-end mt-8 font-medium text-sm sm:text-md items-center">
                  Receive the code by phone{" "}
                  <span className="text-4xl flex">
                    <IoIosPhonePortrait />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordOne;
