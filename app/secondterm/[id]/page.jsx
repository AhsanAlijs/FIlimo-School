"use client";
import React, { useEffect, useState } from "react";
// import secondterm1 from "@/public/Rectangle201.png";
// import secondterm2 from "../../public/secterm2.png";
// import secondterm3 from "../../public/secterm3.png";
// import secondterm4 from "../../public/secterm4.png";
// import secondterm5 from "../../public/secterm5.png";
import WhenCard from "../../../components/preschool/WhenCard";
import IntroBanner from "../../../components/introbanner/IntroBanner";
import sectermbanner from "../../../public/Rectangle 199.png";
import farsiBook from "../../../public/farsi-book.png";
import TrainingCards from "../../../components/trainingcards/TrainingCards";
import ArDiv2 from "../../../components/arcomponent/ArDiv2";
import { btnData, btnToggle3, btnToggle2 } from "@/utils/arrays/btntoggle";
import BtnToggle from "@/components/BtnToggle";
import { useParams } from "next/navigation";
const bannerContent = [
  {
    primaryImageSrc: farsiBook,
    secondaryImageSrc: sectermbanner,
    title:
      "First grade math - complete first grade math training from garlic to onion with sample questions",
    type: "descriptive questions",
  },
];

const page = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}`
        );
        const data = await response.json();
        setLessons(data.body.course.lessons);
        setCourse([data.body.course]);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);
  // console.log('this is lessons ',lessons.filter((item)=>item.semester==='second'))
  // Filter data based on the selected filter
  const filterData = (data, semester) => {
    if (semester === "All") return data;
    return data.filter((item) => item.semester === semester);
  };

  return (
    <>
      {course &&
        course.map((data, index) => {
          return <IntroBanner bannerContent={data} key={index} />;
        })}
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center lg:gap-10 max-md:gap-10 max-sm:gap-2 mt-0">
        <button
          className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)] transition-all rounded-full max-sm:text-xs p-2 px-6 ${
            selectedFilter === "All"
              ? " border-[#E67D4B] text-[#343534] bg-[#fff6e3]"
              : "text-gray-600  border-gray-200 hover:bg-gray-200 "
          }`}
          onClick={() => setSelectedFilter("All")}
        >
          All
        </button>
        <button
          className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)] transition-all rounded-full max-sm:text-xs p-2 px-6 ${
            selectedFilter === "first"
              ? " border-[#E67D4B] text-[#343534] bg-[#fff6e3]"
              : "text-gray-600  border-gray-200 hover:bg-gray-200 "
          }`}
          onClick={() => setSelectedFilter("first")}
        >
          First term
        </button>
        <button
          className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)] transition-all rounded-full max-sm:text-xs p-2 px-6 ${
            selectedFilter === "second"
              ? " border-[#E67D4B] text-[#343534] bg-[#fff6e3]"
              : "text-gray-600  border-gray-200 hover:bg-gray-200 "
          }`}
          onClick={() => setSelectedFilter("second")}
        >
          Second semester
        </button>
        {/* <button
          className={`border-4 border-[#F4BD50] p-2 px-6 ${
            selectedFilter === "descriptive questions"
              ? "bg-[#F4BD50] text-[#343534]"
              : "text-[#F4BD50]"
          }`}
          onClick={() => setSelectedFilter("descriptive questions")}
        >
          Descriptive questions
        </button> */}
      </div>
      <div className="w-[100%] max-[1760px]:w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5 px-5 py-14 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 w-full">
          {lessons &&
            filterData(lessons, selectedFilter).map((data, index) => {
              return (
                <TrainingCards lessons={data} key={index} number={index} />
              );
            })}
        </div>
      </div>

      <WhenCard />
      {selectedFilter === "All" ? (
        <BtnToggle btnToggle={btnToggle2} btnData={btnData} />
      ) : selectedFilter === "first" ? (
        <BtnToggle btnToggle={btnToggle3} btnData={btnData} />
      ) : (
        ""
      )}

      <ArDiv2 />
    </>
  );
};

export default page;
