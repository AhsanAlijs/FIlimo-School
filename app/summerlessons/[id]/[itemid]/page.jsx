"use client";

import { WhenCard } from "@/components/preschool";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  const params = useParams();

  const [courses, setcourses] = useState([]);

  const lessonsFetch = async () => {
    try {
      const courseData = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}`
      );

      if (!courseData.ok) {
        throw new Error("Network response was not ok");
      }

      const lesson = await courseData.json();
      setcourses(lesson);
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    lessonsFetch();
  }, []);

  const lesson = courses?.body?.course?.lessons?.find(
    (item) => item.id === params.itemid
  );

  console.log("video", lesson);

  return (
    <div dir="rtl" className="max-w-screen-2xl mx-auto p-6">
      {/* Intro Headers */}
      <section className="flex items-center justify-center flex-col-reverse gap-4">
        <div>
          {courses?.body?.course?.title ? (
            <p className="font-medium text-lg">{courses.body.course.title}</p>
          ) : (
            <Skeleton width={200} height={24} /> // Adjust width and height as needed for the title
          )}
        </div>
        <div>
          {courses?.body?.course?.image ? (
            <img
              src={
                courses.body.course.image.startsWith("http")
                  ? courses.body.course.image
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/${courses.body.course.image}`
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

      {/* Video player */}

      <section className="max-w-screen-sm mx-auto items-center justify-center flex-col w-full mt-6 mb-10">
        <div className="w-full">
          <video
            controls
            width="" // Adjust width as needed
            height="auto" // Adjust height as needed
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${lesson?.videoUrlShort}`}
            poster={`${process.env.NEXT_PUBLIC_BASE_URL}/${lesson?.thumbnail}`}
            alt="Video thumbnail"
            className="w-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="description-container mt-2">
          <p className="font-medium lg:text-xl max-md:text-lg max-sm:text-sm " >{lesson?.description}</p>
        </div>
      </section>

      {/* Video player */}
      <WhenCard />
    </div>
  );
};

export default page;
