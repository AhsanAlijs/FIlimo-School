import React from "react";
import Image from "next/image";
import playBtn from "@/assets/home/lesson/playBtn.svg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";

const TrainingCards = ({ lessons, number }) => {
  const params = useParams();
  const { token } = useUserAuth();
  const route = token
    ? `/lesson/${params.id}/${lessons.id}`
    : `/preschool/${params.id}/${lessons.id}`;
  console.log("This is from Training", lessons.thumbnail);

  return (
    <>
      <div key={lessons.id} className="p-4 w-full">
        <div className="h-full border-2 border-gray-200 max-xl:w-full border-opacity-60 rounded-2xl overflow-hidden shadow-2xl">
          <Link href={route}>
            <div className="relative border-black ">
              <Image
                className="object-cover object-center w-full pb-3 h-48"
                src={
                  lessons?.thumbnail?.startsWith("http")
                    ? lessons.thumbnail
                    : `${process.env.NEXT_PUBLIC_BASE_URL}/${lessons.thumbnail}`
                }
                alt="blog"
                objectFit="cover"
                height={200}
                width={500}
              />

              <div className="flex justify-end">
                <Image
                  src={playBtn}
                  className={`${
                    lessons.type === "lock" ? "hidden" : ""
                  } absolute top-0 w-12 max-sm:w-12 pt-4 pr-4`}
                  alt="img"
                />

                <div className="bg-[#64de9d] rounded-full p-1 px-3 font-semibold absolute bottom-6 right-2 text-sm text-gray-700">seconds free 90</div>

                {/* <div
                  className={`bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] w-[50%] h-[95%] m-1 absolute right-0 top-0 text-4xl font-semibold text-white ${
                    lessons.type === "lock" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center h-full">
                    <p>Part</p>
                    <p>{number}</p>
                  </div>
                </div> */}
                <p
                  className={`${
                    lessons.type === "lock"
                      ? "bg-[#F14E53]"
                      : "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50]"
                  } absolute top-1 left-1 flex justify-center items-center text-[16px] text-white p-2`}
                >
                  {lessons.timeLine ? lessons.timeLine : ""}
                </p>
              </div>
            </div>
          </Link>
          <div dir="rtl" className="p-4 pt-0">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {"Lesson" + " " + (number + 1)}
            </h2>
            <div className="bg-[#F4BD50] h-1 max-md:w-[20%] sm:w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-1"></div>
            <h1 className="title-font text-md font-bold text-gray-900 mb-3">
              {lessons.title}
            </h1>
            <p className="mb-3 text-gray-600 line-clamp-2">
              {lessons.description ? lessons.description : ""}
            </p>
            <div className="flex flex-wrap justify-center">
              <Link href={route}>
                <button
                  className={`${
                    lessons.type === "lock"
                      ? "border-2 border-[#818181] text-[#818181]"
                      : "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                  } p-3 font-semibold px-4 py-2 rounded-full text-sm sm:text-base md:text-sm lg:text-md w-full`}
                >
                  {lessons.type === "lock"
                    ? "more information"
                    : "Show sample lesson"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingCards;