import React from "react";
import { CourseProgress } from "./CourseProgress";
import Image from "next/image";

const CurrentCourses = ({ data }) => {
  const { image, name, date, perc, subject } = data;

  return (
    <div className="bg-white">
      <div className="flex max-sm:flex-col gap-6 h-full items-center justify-between">
        {/* Image Section */}
        <div className="max-sm:pt-2">
          <Image src={image} width={200} alt="image" />
        </div>
        
        {/* Details and Progress Section */}
        <div className="flex flex-1 items-center justify-between max-sm:flex-col max-sm:w-full max-sm:px-4">
          {/* Details Section */}
          <div className="flex py-10 flex-col justify-between h-full max-sm:w-full">
            <div className="">
              <h2 className="font-bold text-[20px]">{name}</h2>
              <p className="text-[#B7B7B7]">Start Date: {date}</p>
            </div>
            <div>
              <p>
                Subject: <span className="text-[#E67D4B]"> {subject}</span>
              </p>
            </div>
          </div>

          {/* Progress Section */}
          <div className="max-sm:mt-4">
            <CourseProgress perc={perc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourses;
