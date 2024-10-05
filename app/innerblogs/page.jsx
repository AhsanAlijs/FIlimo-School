"use client"
import React, { useRef } from "react";
import madarsa from "../../assets/ar/Rectangle3.png";
import math from "../../assets/ar/image.png";
import paint from "../../assets/ar/image1.png";
import icon from "../../assets/ar/image13.png";
import { blogbtn, blocks } from "@/utils/arrays/innerblog";
import Blogsbtn from "@/components/innerblog/Blogsbtn";
import BlogCard from "@/components/innerblog/BlogCard";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import InnerCrousel from "@/components/innerblog/InnerCrousel";

const page = () => {
  const refs = useRef({});

  blocks.forEach((block) => {
    refs.current[block.id] = React.createRef();
  });

  // Scroll to the section
  const scrollToSection = (id) => {
    if (refs.current[id]) {
      refs.current[id].current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="w-[28%] max-md:w-full mx-auto">
        <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[24px] font-bold text-center">
          Sample Questions
        </h1>
        <div className="bg-[#F4BD50] h-3 max-md:w-[50%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
      </div>

      {/* {} */}

      <div className="flex max-lg:flex-col-reverse justify-between items-center pt-10  gap-10 pb-6">
        <div className=" ">
          <div className="flex gap-6 max-md:gap-3 items-center  ">
            <div>
              <img
                src={madarsa.src}
                alt="img"
                className="w-[230px] rounded-3xl max-md:rounded-xl"
              />
            </div>
            <div className="py-8 max-sm:py-1 ">
              <h2 className="text-[16px] max-md:text-[14px] max-sm:text-[12px]">
                Download the sample questions of the 9th Arabic lesson with
                answers
              </h2>
              <p className="text-[12px] max-md:text-[10px] ">June 13, 1403</p>
            </div>
          </div>

          {/* 2 */}

          <div className="flex gap-6 max-md:gap-3 items-center pt-4 ">
            <div>
              <img
                src={madarsa.src}
                alt="img"
                className="w-[230px] rounded-3xl max-md:rounded-xl"
              />
            </div>
            <div className="py-8  max-sm:py-1">
              <h2 className="text-[16px] max-md:text-[14px] max-sm:text-[12px]">
                Download the sample questions of the 9th Arabic lesson with
                answers
              </h2>
              <p className="text-[12px] max-md:text-[10px]">June 13, 1403</p>
            </div>
          </div>

          {/* 3 */}

          <div className="flex gap-6 max-md:gap-3 items-center pt-4 ">
            <div>
              <img
                src={madarsa.src}
                alt="img"
                className=" w-[230px] rounded-3xl max-md:rounded-xl "
              />
            </div>
            <div className="py-8  max-sm:py-1 ">
              <h2 className="text-[16px] max-md:text-[14px] max-sm:text-[12px]">
                Download the sample questions of the 9th Arabic lesson with
                answers
              </h2>
              <p className="text-[12px] max-md:text-[10px]">June 13, 1403</p>
            </div>
          </div>
        </div>

        <div className="">
          <img src={madarsa.src} alt="img" className="w-[780px]" />
        </div>
      </div>
      <div className="text-[#818181] flex gap-4 pl-10 pb-10 max-lg:justify-center">
        <button className="rounded-2xl px-2 py-1 border-2 border-[#818181]">
          Previous
        </button>
        <button className="rounded-2xl px-2 py-1 border-2 border-[#818181]">
          Next one
        </button>
      </div>
      {/* sample question 2 */}

      <div className="w-[28%] max-md:w-full mx-auto">
        <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[24px] font-bold text-center">
          Sample Questions
        </h1>
        <div className="bg-[#F4BD50] h-3 max-md:w-[50%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
      </div>

      {/* {sample question2 reverse} */}

      <div className="flex max-lg:flex-col justify-between gap-10 items-center pt-10 pb-6 ">
        <div className=" ">
          <img src={math.src} alt="img" className="w-[780px]" />
        </div>

        <div className="  w-full flex flex-col max-sm:px-4  items-end">
          <div className="flex gap-6 max-sm:gap-4 items-center ">
            <div>
              <h2 className=" text-[16px]  max-sm:text-[14px]">
                Mathematics VIII, page 148
              </h2>
              <p className="text-[12px] max-md:text-[10px] ">June 13, 1403</p>
            </div>
            <div className="">
              <img
                src={math.src}
                alt="img"
                className=" w-[230px] rounded-3xl  "
              />
            </div>
          </div>

          {/* 2 */}

          <div className="flex gap-6 max-sm:gap-4 items-center  pt-6 ">
            <div>
              <h2 className=" text-[16px]  max-sm:text-[14px]">
                Mathematics VIII, page 148
              </h2>
              <p className="text-[12px] max-md:text-[10px] ">June 13, 1403</p>
            </div>
            <div>
              <img
                src={math.src}
                alt="img"
                className="  w-[230px] rounded-3xl "
              />
            </div>
          </div>

          {/* 3 */}

          <div className="flex gap-6 max-sm:gap-4 items-center pt-6">
            <div>
              <h2 className=" text-[16px]  max-sm:text-[14px]">
                Mathematics VIII, page 148
              </h2>
              <p className="text-[12px] max-md:text-[10px] ">June 13, 1403</p>
            </div>
            <div>
              <img
                src={math.src}
                alt="img"
                className="  w-[230px] rounded-3xl "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#818181] flex gap-4 pr-6 justify-end max-lg:justify-center  pb-10 ">
        <button className="rounded-2xl px-2 py-1 border-2 border-[#818181]">
          Previous
        </button>
        <button className="rounded-2xl px-2 py-1 border-2 border-[#818181]">
          Next one
        </button>
      </div>
      {/* Video compression program for Windows */}
      <div className="w-[60%] max-md:w-full mx-auto ">
        <h1 className="text-[#E67D4B] text-[40px] max-sm:text-[16px] text-center max-md:text-[20px] max-lg:text-[22px] font-bold">
          Video compression program for Windows
        </h1>
        <div className="bg-[#F4BD50] h-2 max-md:w-[90%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        <p className="max-md:text-sm max-sm:text-[10px]">
          <span className="text-[#343534] font-semibold mr-2 max-md:text-sm max-sm:text-[10px]">
            Darsa Momenikhah
          </span>
          On August 10, 1403
        </p>
      </div>

      <div className="px-10 py-10 max-md:px-10 max-sm:py-10 ">
        <img src={paint.src} alt="" />
      </div>

      <div className="flex gap-6 max-sm:gap-4 max-lg:flex-col">
        <div className="font-bold px-10  border-[#E67D4B] ">
          <h1 className="text-[#343534]">In the following, you will read</h1>
        </div>

        <div className="bg-[#E67D4B] h-30 w-2 max-sm:h-2 max-sm:w-full"></div>

        <div className="flex items-center flex-wrap gap-6">
          {blogbtn &&
            blogbtn.map((item, index) => (
              <Blogsbtn key={index} cardData={item} onClick={() => scrollToSection(item.id)} />
            ))}
        </div>
      </div>
      <section>
        <div className="w-[22%] max-md:w-full mx-auto mt-10">
          <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[30px] font-bold text-center">
            Introduction
          </h1>
          <div className="bg-[#F4BD50] h-3 max-md:w-[40%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
        <div>
          <p className="text-center mt-6">
            Movies and videos usually take up a lot of space on our devices. For
            this reason, it is better to use special programs to reduce their
            size. By using video compression programs, you can store or transfer
            files more easily. In this article, we want to introduce the best
            video compression programs for Windows. Stay with us.
          </p>
        </div>
      </section>

      <section>
        {blocks.map((item, index) => (
          <div ref={refs.current[item.id]} key={index}>
            <BlogCard cardData={item} />
          </div>
        ))}
      </section>

      <section className="bg-[#F5FFF1] w-full px-10 py-8 mt-16 max-sm:px-4 rounded-3xl">
        <div className=" flex justify-between items-center max-md:flex-col-reverse">
          <div className="w-[16%] max-md:w-full ">
            <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[30px] font-bold  max-md:mt-4 ">
              last word
            </h1>
            <div className="bg-[#F4BD50] h-2  border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          </div>
          <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center    ">
            <img src={icon.src} alt="" className=" " />
            <h2 className="text-[#E67D4B] text-[20px] font-semibold">
              Darsa Momenikhah
            </h2>
          </div>
        </div>

        <div className="w-[50%] max-md:w-full pt-6">
          <p>
            In this article, we introduced 10 of the best video compression
            programs for Windows. The introduced programs support many formats
            and are easy to use. If you want to transfer and share your videos
            more easily or are concerned about the space they take up, you can
            simply reduce their size by using compression programs. What do you
            think about this? Please share your opinions, suggestions and
            experiences with us in the comment section. 
          </p>
        </div>
        <div className="flex items-center gap-4 pt-6">
          <button className="border-2 border-black px-6 py-1 rounded-3xl">
            share
          </button>
          <BsTwitterX className="text-[30px]" />
          <FaTelegramPlane className="text-[30px]" />
        </div>
      </section>

      <section className="mt-16">
        <div className="w-[28%] max-md:w-full mx-auto">
          <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[26px] font-bold text-center">
            You May Like
          </h1>
          <div className="bg-[#F4BD50] h-2 max-md:w-[40%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
        <div className="mt-10 max-sm:mt-6">
          <InnerCrousel />
        </div>
      </section>

      <section className="pb-10 pt-6">
        <div className="w-[28%] max-md:w-full mx-auto">
          <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[26px] font-bold text-center">
            Post a comment
          </h1>
          <div className="bg-[#F4BD50] h-2 max-md:w-[40%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          <p className="mt-2 max-lg:text-[16px] text-center">
            Your email address will not be published.
          </p>
        </div>
        <div className="text-center mt-4">
          <textarea
            className="w-[722px] max-md:w-[600px] h-[200px] max-sm:w-[350px]  border-4  border-[#E67D4B] focus:outline-none p-6 text-[#818181] rounded-3xl"
            placeholder="Comment"
          ></textarea>
        </div>
        <div className="flex  justify-center mt-4">
          <input
            className="w-[540px] max-md:w-[500px] max-md:h-[56px] h-[60px]  max-sm:w-[200px]  border-4  border-[#E67D4B] focus:outline-none p-6 max-sm:p-4 text-[#818181] rounded-l-full "
            type="text"
          />
          <button className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] px-3 py-4 max-md:px-2   rounded-r-full text-white max-md:text-[16px] max-sm:text-sm text-[20px]">
            Post A Comment
          </button>
        </div>
        <p className="text-center mt-4">
          Save my information so that I do not need to enter information in the
          future
        </p>
      </section>
    </div>
  );
};

export default page;
