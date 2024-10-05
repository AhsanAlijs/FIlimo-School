"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import playBtn from "@/assets/home/lesson/playBtn.svg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Spinner from "@/components/Spinner/Spinner";

const page = ({}) => {
  const { token } = useUserAuth();
  const params = useParams();
  const [summerLessons, setSummerLessons] = useState([]);

  const lessonsFetch = async () => {
    try {
      const lessonsData = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}`
      );

      if (!lessonsData.ok) {
        throw new Error("Network response was not ok");
      }

      const lesson = await lessonsData.json();
      setSummerLessons(lesson);
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    lessonsFetch();
  }, []);
  summerLessons?.body?.course?.lesoons?.map((item) => {
    console.log("New Summer lessons", item.id);
  });

  return (
    <div className="max-w-screen-2xl mx-auto p-6 ">
      {/* Intro Headers */}
      <section className="flex items-center justify-end gap-4">
        <div>
          {summerLessons?.body?.course?.title ? (
            <p className="font-medium text-lg">
              {summerLessons.body.course.title}
            </p>
          ) : (
            <Skeleton width={200} height={24} /> // Adjust width and height as needed for the title
          )}
        </div>
        <div>
          {summerLessons?.body?.course?.image ? (
            <img
              src={
                summerLessons.body.course.image.startsWith("http")
                  ? summerLessons.body.course.image
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/${summerLessons.body.course.image}`
              }
              alt="Course"
              className="lg:w-32 lg:h-40 rounded-lg max-md:w-20 max-md:h-28  object-cover" // Add your preferred image styles
            />
          ) : (
            <Skeleton width={128} height={128} /> // Adjust width and height as needed for the image
          )}
        </div>
      </section>
      {/* Intro Headers */}

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-2  max-md:grid-cols-1">
        {/* Cards  */}
        {summerLessons?.body?.course?.lessons ? (
          summerLessons?.body?.course?.lessons?.map((lessons, index) => (
            <div className="lg:p-2 max-sm:mt-1 w-full">
              <div dir="rtl" key={lessons.id} className="border rounded-3xl">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden shadow-2xl max-xl:w-full max-sm:w-full">
                  <Link href={`/summerlessons/${params.id}/${lessons.id}`}>
                    <div className="relative">
                      <Image
                        className="object-cover object-center w-full h-48"
                        // src={
                        //   lessons?.thumbnail?.startsWith("http")
                        //     ? lessons.thumbnail
                        //     : `${process.env.NEXT_PUBLIC_BASE_URL}/${lessons.thumbnail}`
                        // }
                        src={"https://app.filimo.school/assets/2023/09/15/a15359f11d92d1d2a172_250px.webp"}
                        alt="lesson thumbnail"
                        objectFit="cover"
                        height={200}
                        width={500}
                      />

                      {/* Play button and free time label */}
                      <div className="flex justify-end items-start">
                        <Image
                          src={playBtn}
                          className={`${
                            lessons.type === "lock" ? "hidden" : ""
                          } absolute top-4 right-4 w-12`}
                          alt="play button"
                        />

                        <div className="bg-[#64de9d] rounded-full px-3 py-1 font-semibold absolute bottom-4 right-4 text-gray-700">
                          90 seconds free
                        </div>
                      </div>

                      {/* Lesson type label */}
                      <p
                        className={`${
                          lessons.type === "lock"
                            ? "bg-[#F14E53]"
                            : "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50]"
                        } absolute top-2 left-2 flex justify-center items-center text-sm text-white p-2 rounded`}
                      >
                        {lessons.timeLine ? lessons.timeLine : ""}
                      </p>
                    </div>
                  </Link>

                  <div className="p-4 pt-2">
                    <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                      Lesson {index + 1}
                    </h2>

                    <div className="bg-[#F4BD50] h-1 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-2"></div>

                    <h1 className="text-md font-bold text-gray-900 mb-2">
                      {lessons.title}
                    </h1>

                    <p className="mb-3 text-gray-600 line-clamp-2">
                      {lessons.description || ""}
                    </p>

                    <div className="flex justify-center">
                      <Link href={`/summerlessons/${params.id}/${lessons.id}`}>
                        <button
                          className={`${
                            lessons.type === "lock"
                              ? "border-2 border-[#818181] text-[#818181]"
                              : "bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
                          } p-3 font-semibold px-4 py-2 rounded-full text-sm w-full`}
                        >
                          {lessons.type === "lock"
                            ? "Show more"
                            : "Show lesson sample"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full ">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
