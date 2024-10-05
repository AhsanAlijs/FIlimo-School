"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import learning1 from "../../public/start learning1.png";
import playBtn from "../../assets/home/PlayBtn.svg";
import { FaStar } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import closeIcon from "@/assets/modals/cross.svg";
import Link from "next/link";
import { useParams } from "next/navigation";

const StartLearning1 = ({exameVideo,itemid}) => {
  const params = useParams()
  console.log(params.id);
  
  const progress = 20; // Example progress value

  console.log(exameVideo);
  

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0); // Track video progress percentage
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const videoRef = useRef(null); // Ref to the video element

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnded = () => {
    setVideoProgress(100); // Set progress to 100% when the video ends
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      const progressPercentage = (currentTime / duration) * 100;
      setVideoProgress(progressPercentage);
    }
  };

  const handleButtonClick = () => {
    if (videoProgress <= 50) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-center my-20 flex justify-center items-center gap-2 sm:gap-10">
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

      <div className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/3 text-center mx-auto">
        <h2 className="text-gray-700 sm:text-2xl font-bold">
          Numerology and patterns (2/6)
        </h2>
        <div className="flex items-center justify-center relative rounded-[22px] py-10">
          {isVideoPlaying ? (
            <video
              ref={videoRef} // Attach ref to the video element
              width="750"
              height="422"
              className="rounded-[22px] transition-all object-cover max-xl:h-[15rem] max-xl:w-full max-lg:w-[50rem] drop-shadow-[-7px_7px_5.5px_rgba(0,0,0,0.25)]"
              controls
              autoPlay
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${exameVideo?.videoUrl ?exameVideo?.videoUrl :exameVideo?.videoUrlShort}`}
              type="video/mp4"
              onEnded={handleVideoEnded} // Trigger handler when the video ends
              onTimeUpdate={handleTimeUpdate} // Trigger handler on time update
            />
          ) : (
            <div
              className="relative cursor-pointer"
              onClick={handleThumbnailClick}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${exameVideo.thumbnail}`}
                height={422}
                width={750}
                className="rounded-[22px] transition-all object-cover w-[450px] h-[222px] max-xl:h-[15rem] max-xl:w-full max-lg:w-[50rem] drop-shadow-[-7px_7px_5.5px_rgba(0,0,0,0.25)]"
                alt="Thumbnail"
              />
              <Image
                className="absolute inset-0 m-auto"
                src={playBtn}
                alt="Play Button"
              />
            </div>
          )}
        </div>
        <p className="text-gray-600 text-md">
          Be careful! The answer to the questions is in this video.
        </p>

      
      </div>
   <div className="flex justify-center">
      {/* Modal */}
      <Dialog className="w-full">
        {
          videoProgress==100?
        <DialogTrigger className="px-10 py-3 mt-14 rounded-lg text-gray-100 bg-[#E67D4B] transition-opacity duration-300">
          {" "}
          You said right
        </DialogTrigger>
        :
        <DialogTrigger disabled className="px-10 py-3 mt-14 rounded-lg text-gray-800 border bg-gray transition-opacity duration-300">
          {" "}
          You said right
        </DialogTrigger>
        
        }
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="w-[1010px] mx-4 max-xl:w-[90vw]  bg-white rounded-[50px] p-8 pb-12 ">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="border-[12px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 absolute -top-40  border-white  bg-[#F14E53] h-[250px] max-md:w-[150px] max-md:h-[150px] w-[250px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                    <Image
                      className="max-md:w-[90px] max-sm:w-[50px]"
                      src={closeIcon}
                    />
                  </div>
                </div>

                <h2 className="text-[30px] font-bold text-[#F4BD50] text-center mt-32 max-md:mt-20 max-md:text-xl max-sm:mt-12">
                  You don't get points for this video!{" "}
                </h2>

                <p className="text-[26px] max-md:text-lg text-center leading-10 mt-6 text-[#343534]">
                  To get points, you have to watch the entire lesson video.
                </p>

                <div className="flex justify-center mt-6 gap-4">
                  <DialogClose>
                    <button className="p-4 px-6 text-[26px] max-md:text-xl max-sm:text-sm font-medium text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all">
                    Back to video
                    </button>{" "}
                  </DialogClose>
                  <DialogClose>
                    <Link href={`/questionanswer/${params.id}?itemid=${itemid}`}>  
                    <button className="p-4 px-6 text-[26px] max-md:text-xl max-sm:text-sm font-medium text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all">
                    Continue without points
                    </button>{" "}
                    </Link>
                  
                  </DialogClose>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    </>
  );
};

export default StartLearning1;