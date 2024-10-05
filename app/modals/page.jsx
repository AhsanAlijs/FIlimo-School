'use client'
import React from "react";
import giftbox from "@/assets/points/giftbox.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoStarFill } from "react-icons/go";
import Image from "next/image";
import closeIcon from "@/assets/modals/cross.svg";
import greenTick from "@/assets/modals/green-tick.svg";
import clap from "@/assets/modals/clap.png";
import tick from "@/assets/modals/tick.svg";
import { IoReload } from "react-icons/io5";
import { RxTrackNext } from "react-icons/rx";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* payment failed */}

      <Dialog className="w-full">
        <DialogTrigger className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[20px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full">
          {" "}
          payment
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="w-[1010px] mx-4 max-xl:w-[90vw]  bg-white rounded-[50px] p-8 pb-12 ">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="border-[12px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 absolute -top-40  border-white bg-[#F14E53] h-[250px] max-md:w-[150px] max-md:h-[150px] w-[250px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                    <Image
                      className="max-md:w-[90px] max-sm:w-[50px]"
                      src={closeIcon}
                      alt="img"
                    />
                  </div>
                </div>

                <h2 className="text-[30px] font-bold text-[#F4BD50] text-center mt-32 max-md:mt-20 max-md:text-xl max-sm:mt-12">
                  See the correct answer{" "}
                </h2>

                <p className="text-[26px] max-md:text-lg text-center leading-10 mt-6 text-[#343534]">
                  We add 7 seconds to 10 seconds, which becomes 17 seconds. 10
                  minutes to 30 minutes becomes 40 minutes. 1 hour to 1 hour
                  becomes 2 hours. So, in total, he ran for 2 hours, 40 minutes
                  and 17 seconds.
                </p>

                <div className="flex justify-end mt-4">
                  <p className="flex items-center justify-center gap-2 text-[26px] font-medium">
                    Correct answer:{" "}
                    <span>
                      <Image
                        className="w-[40px] h-[40px]"
                        src={greenTick}
                        width={40}
                        height={40}
                        alt="img"
                      />
                    </span>
                  </p>
                </div>

                <div className="border-2 border-[#F4BD50] text-black p-6 rounded-[20px] mt-4">
                  <p className="text-[16px] font-medium">
                    5 hours 40 minutes and 7 seconds
                  </p>
                </div>

                <div className="flex justify-center mt-6 gap-4">
                  <DialogClose>
                    <button className="p-4 px-6 text-[26px] max-md:text-xl max-sm:text-sm font-medium text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all">
                      Video playback
                    </button>{" "}
                  </DialogClose>
                  <DialogClose>
                    <button className="p-4 px-6 text-[26px] max-md:text-xl max-sm:text-sm font-medium text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all">
                      Now I understand
                    </button>{" "}
                  </DialogClose>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* You said right! */}

      <Dialog className="w-full">
        <DialogTrigger className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[20px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full">
          {" "}
          You said right
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="w-[1010px] mx-4 max-xl:w-[90vw]  bg-white rounded-[50px] p-8 pb-12 ">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="border-[12px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 absolute -top-40  border-white  bg-[#F14E53] h-[250px] max-md:w-[150px] max-md:h-[150px] w-[250px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                    <Image
                      className="max-md:w-[90px] max-sm:w-[50px]"
                      src={closeIcon}
                      alt="img"
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
                    <button className="p-4 px-6 text-[26px] max-md:text-xl max-sm:text-sm font-medium text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all">
                    Continue without points
                    </button>{" "}
                  </DialogClose>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* You said right! */}

      <Dialog className="w-full">
        <DialogTrigger className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[20px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full">
          {" "}
          You said right
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="w-[1010px] mx-4 max-xl:w-[90vw]  bg-white rounded-[50px] p-8 pb-12 ">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="border-[12px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 absolute -top-40  border-white bg-[#42C686] h-[250px] max-md:w-[150px] max-md:h-[150px] w-[250px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                    <Image
                      className="max-md:w-[90px] max-sm:w-[50px]"
                      src={tick}
                      alt="img"
                    />
                  </div>
                </div>

                <h2 className="text-[30px] font-bold text-[#F4BD50] text-center mt-32 max-md:mt-20 max-md:text-xl max-sm:mt-12">
                  You said right!{" "}
                </h2>

                <p className="text-[26px] max-md:text-lg text-center leading-10 mt-6 text-[#343534]">
                  Well done! You gave the right answer. Let's go to the next
                  question?
                </p>

                <div className="flex justify-center mt-6 gap-4 w-full ">
                  <DialogClose>
                    <button className="p-4 px-6 text-[26px] w-[650px] max-lg:w-full max-md:text-xl max-sm:text-lg font-medium text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all">
                      Go next
                    </button>{" "}
                  </DialogClose>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Congratulations! */}

      <Dialog className="w-full">
        <DialogTrigger className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[20px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full">
          {" "}
          Congratulations
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="w-[1010px] mx-4 max-xl:w-[90vw]  bg-white rounded-[50px] p-8 pb-12 ">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="border-[12px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 absolute -top-40  border-white bg-[#F4BD50] h-[250px] max-md:w-[150px] max-md:h-[150px] w-[250px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]">
                    <Image
                      className="max-md:w-[90px] max-sm:w-[50px]"
                      src={clap}
                      alt="img"
                    />
                  </div>
                </div>

                <h2 className="text-[30px] font-bold text-[#F4BD50] text-center mt-32 max-md:mt-20 max-md:text-xl max-sm:mt-12">
                  Congratulations! You have finished this lesson
                </h2>

                <p className="text-[26px] max-md:text-lg text-center leading-10 mt-6 text-[#343534]">
                  You can take this course whenever you want. In addition, you
                  can go to the new lesson:
                </p>

                <div className="flex justify-center mt-6 gap-4 w-full max-sm:flex-wrap ">
                  <DialogClose className="w-full">
                    <button className="p-4 px-6 text-[26px] w-full max-lg:w-full max-md:text-xl max-sm:text-lg font-medium justify-center text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all flex items-center gap-2">
                      See again <IoReload />
                    </button>{" "}
                  </DialogClose>
                  <DialogClose className="w-full">
                    <button className="p-4 px-6 text-[26px] w-full max-lg:w-full max-md:text-xl max-sm:text-lg font-medium justify-center text-black bg-[#F4BD50] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all flex items-center gap-2">
                      Next lesson <RxTrackNext />
                    </button>{" "}
                  </DialogClose>
                </div>
                <div className="flex justify-center mt-6 gap-4 w-full ">
                  <DialogClose className="w-full">
                    
                    <button className="p-4 px-6 text-[26px] w-full max-lg:w-full max-md:text-xl max-sm:text-lg font-medium justify-center text-[#E67D4B] bg-[#F4F4F4] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all flex items-center gap-2">
                      Back to books <IoReload />
                    </button>{" "}
                   
                  </DialogClose>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default page;
