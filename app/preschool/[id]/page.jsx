"use client";

import Spinner from "@/components/Spinner/Spinner";
import TrainingCards from "@/components/trainingcards/TrainingCards";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}`
        );
        const result = await response.json();
        setData(result);
        setLessons(result.body.course.lessons); // Assuming lessons come from the API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!data) return <Spinner />;

  return (
    // max-w-screen-lg
    <>
      <div
        dir="rtl"
        className="flex justify-strat items-center max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center   mt-8 px-5  mx-auto  max-xl:max-w-screen-2xl max-lg:max-w-screen-lg section-width max-2xl:px-36 max-md:px-14 max-sm:px-5"
      >
        <Image
          // src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.body.course.image}`}
          // src={data.body.course.image}
          src={
            data?.body?.course?.image?.startsWith("http")
              ? data.body.course.image
              : `${process.env.NEXT_PUBLIC_BASE_URL}/${data.body.course.image}`
          }
          width={130}
          height={173}
          alt="Card Image"
          className="w-[120px] h-[144px] border rounded-md object-cover"
        />
        <div className="w-fit flex flex-col px-4 mt-4">
          <h1 className="lg:text-[30px] text-end md:text-[30px] max-[765px]:text-[30px] font-bold max-sm:text-2xl text-[#E67D4B]">
            {data.body.course.title}
          </h1>
          {/* <div className="h-[12px] w-[130px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]"></div> */}
        </div>
      </div>

      <div className="px-5 mt-6 py-16 mx-auto max-w-screen-2xl w-[100%]  section-width max-2xl:px-36 max-md:px-14 max-sm:px-5">
        <div className="grid grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 w-fit mx-auto justify-items-center">
          {lessons.map((item, index) => (
            <TrainingCards lessons={item} number={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
//
