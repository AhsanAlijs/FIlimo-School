'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Data } from "@/utils/arrays/Degree";
import Card from "@/components/Degree/Card";
import playBtn from "../../assets/home/PlayBtn.svg";
import Spinner from "@/components/Spinner/Spinner";
import { useUserAuth } from "@/context/AuthContext";

const Page = () => {
  const { siteSettings } = useUserAuth()
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Reference to the video element

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
      setIsPlaying(true); // Hide the play button
    }
  };


  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/summer`);
      const result = await res.json();
      console.log(result.body.courses);

      setData(result.body.courses);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center max-2xl:px-24 max-md:px-14 max-sm:px-5 pb-10 items-center max-w-screen-2xl mx-auto pb-8">
      <div className="mb-10 mt-20">
        <h1 className="text-[40px] max-md:text-[30px] text-[#E67D4B] font-bold">
          Skill certificate
        </h1>
        <div className="bg-[#F4BD50] h-[12px] w-[91px] border-b-2 border-[#E67D4B]"></div>
        <p className="mt-4  max-sm:text-[14px]">Watch the complete videos of the skill courses and get a certificate.</p>
      </div>
      <div className="relative cursor-pointer">
        <video
          ref={videoRef} // Attach the ref to the video element
          src="/planning.mp4"
          type="video/mp4"
          className="rounded-3xl max-sm:rounded-2xl  max-sm:w-[400px]  max-sm:h-[200px] w-[500px] h-[250px] object-cover"
          controls
          onPlay={() => setIsPlaying(true)} // Automatically hide play button on video play
        ></video>


        {!isPlaying && (
          <Image
            className="absolute inset-0 m-auto cursor-pointer" // Make the image clickable
            src={playBtn}
            alt="Play Button"
            onClick={handlePlay} // Trigger video play on click
          />
        )}
      </div>
      <div>
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-[40px] text-[#E67D4B] max-sm:text-[20px] font-bold">Courses</h1>
          <div className="bg-[#F4BD50] h-[12px] w-[170px] border-b-2 border-[#E67D4B]"></div>
        </div>
        <div className="grid grid-cols-2 justify-items-center max-xl:grid-cols-1 gap-x-20 gap-y-7 max-lg:gap-y-12 ">

          {data ? data.slice(0, 10).map((item, index) => {


            return (
              siteSettings?.data?.settings?.hideSummerCourses !==true?
                <Card image={item?.image} heading={item?.title} link={index} key={index} studno={index} />
                :
                ""
            )
          }) : (<Spinner />)}
        </div>
      </div>
    </div>
  );
};

export default Page;