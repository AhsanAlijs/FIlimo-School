"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import star from "../../assets/profile/star11.png";
import video from "../../assets/profile/image281.png";
import { MdArrowForwardIos } from "react-icons/md";

const page = () => {
  const [activeButton, setActiveButton] = useState(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="max-w-screen-2xl mx-auto px-4">
      <div className="flex justify-center mt-4 max-sm:mt-0">
        <div className=" pt-10 ">
          <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px]  max-md:text-[20px]  max-lg:text-[26px] font-bold  ">
            Learning program for the week of October 1
          </h1>
          <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
      </div>
      <div className="flex justify-center mt-6 h-[400px]  max-md:h-[200px]  relative">
        <video
          ref={videoRef}
          className="max-md:w-[90%] object-cover rounded-2xl"
          width={1010}
          src="/planning.mp4"
          type="video/mp4"
          controls={isPlaying} // Show controls only if the video is playing
        />
        {!isPlaying && (
          <Image
            src={video} // Replace with the actual icon image path
            className="absolute rounded-full inset-0 m-auto max-md:w-[100px] max-sm:w-[60px] cursor-pointer"
            alt="Play Video"
            onClick={handlePlayPause}
          />
        )}
      </div>

      <p className="text-center mt-8 text-[20px] max-md:text-[16px] font-medium">
        In the first week of Mehr, you should watch three Farsi episodes, two
        math episodes and one science episode.
      </p>
      <div className="w-[1070px] max-lg:w-full shadow-lg bg-[#E67D4B] bg-opacity-10 box-shadow mt-14 max-lg:px-6 rounded-3xl py-6 mx-auto ">
        <h2 className="text-[20px] text-center">Let's go study!</h2>
        <div className="flex justify-center mt-4">
          <h2 className="text-[30px] font-semibold text-[#E67D4B]">
            out of 62 points
          </h2>
          <Image src={star} className="object-cover" width={30} alt="img"/>
        </div>
        <div className="flex gap-10 max-lg:gap-4 justify-evenly max-lg:justify-center  mt-6 flex-wrap">
          <div className="bg-white w-[40%] max-lg:w-full flex flex-col gap-4 py-4 p-4">
            <div className="flex gap-2 items-center mt-2 max-lg:justify-center max-lg:text-center">
              <p className="text-[#818181]">Science</p>
              <div className="bg-[#E67D4B] h-6 w-1"></div>
              <p className="text-[20px] font-semibold max-md:text-[16px]  max-sm:text-[14px]">
                science bell (curiosity)
              </p>
            </div>
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="max-md:text-[14px] max-sm:text-[12px] ">
                <span className="text-[16px] max-md:text-[14px] max-sm:text-[12px] font-semibold">
                  You will get 11 points 
                </span>
                by learning this lesson .
              </p>
              <Image src={star} className="object-cover" width={20} alt="img"/>
              <MdArrowForwardIos />
            </div>
          </div>

          <div className="bg-white w-[40%] max-lg:w-full flex flex-col gap-4 py-4   p-4">
            <div className="flex gap-2 items-center mt-2 max-lg:justify-center max-lg:text-center">
              <p className="text-[#818181]">Math</p>
              <div className="bg-[#E67D4B] h-6 w-1"></div>
              <p className="text-[20px] font-semibold max-md:text-[16px] max-sm:text-[14px]">
                Tools for displaying numbers
              </p>
            </div>
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="max-md:text-[14px]  max-sm:text-[12px]">
                <span className="text-[16px]  max-sm:text-[12px] max-md:text-[14px] font-semibold">
                  You will get 11 points 
                </span>
                by learning this lesson .
              </p>
              <Image src={star} className="object-cover" width={20} alt="img"/>
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="bg-white w-[40%] max-lg:w-full flex flex-col gap-4 py-4   p-4">
            <div className="flex gap-2 items-center mt-2 max-lg:justify-center max-lg:text-center">
              <p className="text-[#818181]">Farsi</p>
              <div className="bg-[#E67D4B] h-6 w-1"></div>
              <p className="text-[20px] font-semibold max-md:text-[16px] max-sm:text-[14px]">
                Kids, ready for school
              </p>
            </div>
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="max-md:text-[14px]  max-sm:text-[12px]">
                <span className="text-[16px]  max-sm:text-[12px] max-md:text-[14px] font-semibold">
                  You will get 11 points 
                </span>
                by learning this lesson .
              </p>
              <Image src={star} className="object-cover" width={20} alt="img"/>
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="bg-white w-[40%] max-lg:w-full flex flex-col gap-4 py-4   p-4">
            <div className="flex gap-2 items-center mt-2 max-lg:justify-center max-lg:text-center">
              <p className="text-[#818181]">Math</p>
              <div className="bg-[#E67D4B] h-6 w-1"></div>
              <p className="text-[20px] font-semibold max-md:text-[16px] max-sm:text-[14px]">
                Number and count to 5
              </p>
            </div>
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="max-md:text-[14px]  max-sm:text-[12px]">
                <span className="text-[16px]  max-sm:text-[12px] max-md:text-[14px] font-semibold">
                  You will get 11 points 
                </span>
                by learning this lesson .
              </p>
              <Image src={star} className="object-cover" width={20} alt="img"/>
              <MdArrowForwardIos />
            </div>
          </div>

          <div className="bg-white w-[40%] max-lg:w-full flex flex-col gap-4 py-4   p-4">
            <div className="flex gap-2 items-center mt-2 max-lg:justify-center max-lg:text-center">
              <p className="text-[#818181]">Farsi</p>
              <div className="bg-[#E67D4B] h-6 w-1"></div>
              <p className="text-[20px] font-semibold max-md:text-[16px] max-sm:text-[14px]">
                Welcome to our home
              </p>
            </div>
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="max-md:text-[14px]  max-sm:text-[12px]">
                <span className="text-[16px]  max-sm:text-[12px] max-md:text-[14px] font-semibold">
                  You will get 11 points 
                </span>
                by learning this lesson .
              </p>
              <Image src={star} className="object-cover" width={20} alt="img"/>
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="bg-white w-[40%] max-lg:w-full flex flex-col gap-2 py-4   p-4">
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="text-[#818181]">Farsi</p>
              <div className="bg-[#E67D4B] h-6 w-1"></div>
              <p className="text-[20px] font-semibold max-md:text-[16px] max-sm:text-[14px] flex justify-start ">
                One, two and three, on the way to the school
              </p>
            </div>
            <div className="flex gap-2 items-center max-lg:justify-center max-lg:text-center">
              <p className="max-md:text-[14px]  max-sm:text-[12px]">
                <span className="text-[16px]  max-sm:text-[12px] max-md:text-[14px] font-semibold">
                  You will get 11 points 
                </span>
                by learning this lesson .
              </p>
              <Image src={star} className="object-cover" width={20} alt="img"/>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <p className="text-center font-medium text-[20px] max-md:text-[16px] mt-4">
          You have reached the beginning of the program of the year.
        </p>
      </div>
      <div className="flex gap-4 mt-6 w-[50%] max-md:w-full justify-center  ">
        <button
          className={`px-8 max-sm:px-4 max-sm:py-2 py-4 rounded-full text-black transition-all duration-300 ease-in-out ${
            activeButton === "lastWeek"
              ? "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] border-2 border-[#E67D4B] text-white"
              : "bg-transparent border-2 border-[#E67D4B]"
          }`}
          onClick={() => setActiveButton("lastWeek")}
        >
          Last Week
        </button>
        <button
          className={`px-8 max-sm:px-4 max-sm:py-2 py-4 rounded-full text-black transition-all duration-300 ease-in-out ${
            activeButton === "nextWeek"
              ? "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white border-2 border-[#E67D4B]"
              : "bg-transparent border-2 border-[#E67D4B]"
          }`}
          onClick={() => setActiveButton("nextWeek")}
        >
          Next Week
        </button>
      </div>
    </section>
  );
};

export default page;
