"use client";
import React, { useState } from "react";

const Password2 = () => {
  // State to store the input value
  const [password, setPassword] = useState("");

  // Handler function to log the input value
  const handleButtonClick = () => {
    console.log(password);
  };

  return (
    <>
      <section>
        <div className="container px-5 py-24">
          <div className="flex justify-center p-4">
            <div className="flex flex-col">
              <h1 className="text-[40px] font-bold text-[#E67D4B] max-sm:text-2xl">
                Change Password
              </h1>
              <div className="h-[12px] w-[110px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]"></div>
              <p className="text-[16px] text-gray-600 mt-3">
                Device you are signed in with:
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/2 mx-auto w-full">
            <div className="h-full bg-[#F4BD50] p-8 rounded-2xl shadow-2xl">
              <div className="md:w-2/3 py-5 sm:py-10 mx-auto">
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-gray-700 pb-5 font-medium text-lg"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="rounded-full border-2 border-orange-600 bg-transparent py-2 px-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mx-auto pt-10 text-center">
                  <button
                    className="bg-[#E67D4B] text-white py-4 font-bold rounded-2xl"
                    onClick={handleButtonClick} // Log input value on click
                  >
                    Verify Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Password2;
