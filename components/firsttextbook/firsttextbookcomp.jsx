import React from "react";
import { FaStar } from "react-icons/fa6";

const firsttextbookcomp = () => {
  const progress = 20; // Example progress value

  return (
    <>
      <div className="text-center my-10 sm:my-20 flex justify-center items-center gap-2 sm:gap-10">
        <div className="flex items-center gap-2 font-medium text-sm sm:text-lg">
          0<FaStar className="text-[#F4BD50] text-2xl" />{" "}
        </div>

        <div className="relative w-2/4 h-5 sm:h-7 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-[#E67D4B] rounded-full"
            style={{ width: `${progress}%` }}
          >
            {" "}
          </div>
        </div>
        <p className="font-medium text-sm sm:text-lg">1 Out of 10</p>
      </div>

      <div className="w-4/5 sm:w-4/6 mx-auto">
        <div className="text-center mb-5 sm:mb-20">
          <h1 className="text-[#F4BD50] font-bold text-2xl">
            The First Text Book
          </h1>
          <p className="font-bold text-gray-800 text-md">Composite Number</p>
        </div>
        <ul className=" space-y-5 text-gray-700">
          <li>Have you ever heard the name compound number?</li>
          <li>
            A composite number is a number that consists of several parts with
            different units.
          </li>
          <li>Like 2 hours 46 minutes and 53 seconds.</li>
          <li>
            - Did you know that you can add and subtract composite numbers like
            other numbers?
          </li>
          <li>
            {" "}
            As you always did the calculations, start the calculations from the
            smallest place, i.e. seconds. You know that every hour is 60 minutes
            and every minute is 60 seconds. So be careful, our answers should
            not be greater than 60.
          </li>
          <li> Second by second, minute by minute and hour by hour.</li>
          <li>
            A composite number is a number that consists of several parts with
            different units.
          </li>
          <li>Like 2 hours 46 minutes and 53 seconds.</li>
          <li>
            - Did you know that you can add and subtract composite numbers like
            other numbers?
          </li>
        </ul>

        <div className="flex justify-center">
          <button className="px-16 py-3 mt-14 rounded-lg text-gray-100 bg-[#E67D4B] transition-opacity duration-300 ">
            Understand Let's Go
          </button>
        </div>
      </div>
    </>
  );
};

export default firsttextbookcomp;
