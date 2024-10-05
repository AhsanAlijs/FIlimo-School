"use client";
import React, { useState, useEffect } from "react";
import HeaderText from "./HeaderText";
import Card from "./Card";
import { Planning, PriceCards, StudyPoints, WhenCard } from ".";
import ArDiv2 from "../arcomponent/ArDiv2";
import Link from "next/link";
import { useUserAuth } from "@/context/AuthContext";

const MainComp = ({
  cardDatas,
  planning,
  studyPoints,
  subCard,
  wantCard,
  isHide,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [courseData, setCourseData] = useState([]);
  const { siteSettings } = useUserAuth();

  // Function to fetch course data
  const fetchCourseData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/summer`
      );
      const data = await response.json();
      const courses = data.body?.courses || [];
      setCourseData(Array.isArray(courses) ? courses : []);
    } catch (error) {
      console.error("Error fetching course data:", error);
      setCourseData([]); // Ensure courseData remains an empty array on error
    }
  };

  useEffect(() => {
    fetchCourseData(); // Fetch course data on component mount
  }, []);

  // Filter data based on the selected filter
  const filterData = (data, category) => {
    if (category === "All") return data;
    return data.filter((item) => item.category === category);
  };

  // Combine cardDatas and courseData for the "All" filter
  const combinedData =
    selectedFilter === "All"
      ? [
          ...(Array.isArray(cardDatas) ? cardDatas : []),
          ...(Array.isArray(courseData) ? courseData : []),
        ]
      : filterData(cardDatas, selectedFilter);

  console.log("is bookall", cardDatas);

  return (
    <>
      {/* Filter Buttons */}
      {!isHide ? (
        <div
          dir="rtl"
          className="flex flex-wrap justify-center gap-10 sticky top-[4.2rem] z-[1000] bg-[#f5f4f4] py-5 mt-0"
        >
          <button
            className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)]  rounded-full p-2 px-6 ${
              selectedFilter === "All"
                ? " border-[#E67D4B] text-[#343534]"
                : "text-gray-600  border-gray-200 hover:bg-gray-200 transition-all"
            }`}
            onClick={() => setSelectedFilter("All")}
          >
            All
          </button>
          <button
            className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)]  rounded-full p-2 px-6 ${
              selectedFilter === "course"
                ? " border-[#E67D4B] text-[#343534]"
                : "text-gray-600 border-gray-200 hover:bg-gray-200 transition-all"
            }`}
            onClick={() => setSelectedFilter("course")}
          >
            Skill Courses
          </button>
          <button
            className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)]  rounded-full p-2 px-6 ${
              selectedFilter === "class"
                ? " border-[#E67D4B] text-[#343534]"
                : "text-gray-600 border-gray-200 hover:bg-gray-200  transition-all"
            }`}
            onClick={() => setSelectedFilter("class")}
          >
            Educational Books
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="max-w-screen-2xl mx-auto w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
        {wantCard &&
          wantCard.map((data, index) => {
            return <HeaderText data={data} key={index} />;
          })}

        <div className="grid grid-cols-5 w-fit mx-auto max-2xl:grid-cols-4 max-xl:grid-cols-3 justify-items-center max-sm:grid-cols-2 gap-[30px] px-4 mt-[60px]">
          {!isHide
            ? selectedFilter === "course"
              ? courseData.map((data, index) => (
                  <Link key={index} href={`/preschool/${data.id}`}>
                    {siteSettings?.data?.settings?.hideSummerCourses ===
                    false ? (
                      <Card cardDatas={data} />
                    ) : (
                      ""
                    )}
                  </Link>
                ))
              : siteSettings?.data?.settings?.hideSummerCourses === false
              ? combinedData.map((data, index) => (
                  <Link
                    key={index}
                    href={
                      data.category === "class"
                        ? `/secondterm/${data.id}`
                        : `/preschool/${data.id}`
                    }
                  >
                    <Card cardDatas={data} />
                  </Link>
                ))
              : cardDatas.map((item, index) => (
                  <Link
                    key={index}
                    href={
                      item.category === "class"
                        ? `/secondterm/${item.id}`
                        : `/preschool/${item.id}`
                    }
                  >
                    <Card cardDatas={item} />
                  </Link>
                ))
            : // combinedData.map((data, index) =>
              //     siteSettings?.data?.settings?.hideSummerCourses === true ? (
              //       <Link
              //         key={index}
              //         href={
              //           data.category === "class"
              //             ? `/secondterm/${data.id}`
              //             : `/preschool/${data.id}`
              //         }
              //       >
              //         <Card cardDatas={data} />
              //       </Link>
              //     ) : (
              //       cardDatas.map((item, key) => (
              //         <Link
              //           key={index}
              //           href={
              //             item.category === "class"
              //               ? `/secondterm/${item.id}`
              //               : `/preschool/${item.id}`
              //           }
              //         >
              //           <Card cardDatas={item} />
              //         </Link>
              //       ))
              //     )
              //   )

              courseData.map((data, index) => (
                <Link
                  key={index}
                  href={
                    data.category === "class"
                      ? `/secondterm/${data.id}`
                      : `/preschool/${data.id}`
                  }
                >
                  {console.log(data)}
                  <Card cardDatas={data} />
                </Link>
              ))}
        </div>

        <div>
          {planning &&
            planning.map((data, index) => {
              return <Planning data={data} key={index} />;
            })}
        </div>

        <div className="flex flex-wrap justify-evenly items-center mt-[100px]">
          <div>
            {studyPoints &&
              studyPoints.map((data, index) => {
                return <StudyPoints data={data} key={index} />;
              })}
          </div>

          <div className="max-md:mt-[50px] max-xl:w-full">
            {subCard &&
              subCard.map((data, index) => {
                return <PriceCards key={index} data={data} />;
              })}
          </div>
        </div>
      </div>
      <WhenCard />
      <ArDiv2 />
    </>
  );
};

export default MainComp;
