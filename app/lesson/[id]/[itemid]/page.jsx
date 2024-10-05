"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import auntii from "@/public/kidsreadybannerimg.png";
import farsibook from "@/public/farsi-book.png";
import WhenCard from "@/components/preschool/WhenCard";
import ArDiv2 from "@/components/arcomponent/ArDiv2";
// import kidsReadyBanner from "../../public/kidsReadyBanner.png";
import kidsReadyBanner from "@/public/kidsreadybannerimg.png";
import IntroBanner from "@/components/introbanner/IntroBanner";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner/Spinner";
import Intro2Banner from "@/components/intro2banner/Intro2Banner";
const bannerContent = [
  {
    primaryImageSrc: farsibook,
    secondaryImageSrc: kidsReadyBanner,
    title: "Kids, ready for school",
    para: "In this part, we learn the second version of the Persian book, which includes teaching personal items such as toothbrushes, towels, glasses, and napkins. We also talk about the manners of how to go to school and what we should and can't bring to school. Next, using word cards, we read pictures and practice writing the first pages of the book. You can find the topic of this section on pages 5 and 6 of the textbook.",
  },
];
const page = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(`${BaseUrl}/courses/${params?.id}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const booksData = await response.json();
      setData(booksData?.body?.course);
    } catch (error) {
      setError(error.message || "Data not found!");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const bannerData = data;
  const lessonData = data.lessons;


  const specificLesson = lessonData?.find(
    (lesson) => lesson.id === params.itemid
  );
  
  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="flex items-center justify-center h-screen text-3xl font-extrabold text-[#ff7536] ">
        {error}
      </p>
    );

  return (
    <>
      {bannerContent &&
        bannerContent.map((data, index) => {
          return (
            <Intro2Banner
            specificLesson={specificLesson}
              bannerData={bannerData}
              key={index}
              itemid={params.id}
            />
          );
        })}
      <WhenCard />

      <ArDiv2 />
    </>
  );
};

export default page;