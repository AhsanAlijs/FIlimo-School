"use client";
import Header from "@/components/lessons/Header";
import React, { useEffect, useState } from "react";
import headerimg from "@/assets/lesson/headerimg.png";
import secondterm1 from "../../../public/Rectangle201.png";
import secondterm2 from "../../../public/secterm2.png";
import secondterm3 from "../../../public/secterm3.png";
import secondterm4 from "../../../public/secterm4.png";
import secondterm5 from "../../../public/secterm5.png";
import TrainingCards from "@/components/trainingcards/TrainingCards";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner/Spinner";
import { useUserAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CardContext";
const page = () => {
  const [selectedFilter, setSelectedFilter] = useState("first");



  const params = useParams();

  const [data, setData] = useState([]);
  const [exam, setExam] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [headerData, setHeaderData] = useState()
  const { user, token } = useUserAuth()

  const fetchData = async () => {
    setLoading(true); // Assuming you have a setLoading function

    try {
      const response = await fetch(`${BaseUrl}/courses/${params?.id}`);
      const responseExam = await fetch(`${BaseUrl}/exams/course/${params?.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      // if (!response.ok) {
      //   // throw new Error("Course data fetch failed");
      //   return
      // }

      // if (!responseExam.ok) {
      //   // throw new Error("Exam data fetch failed");
      //   return
      // }

      const booksData = await response.json();
      const examData = await responseExam.json();
      console.log(examData);
      
      setData(booksData?.body?.course.lessons);
      setHeaderData(booksData?.body?.course);
      setExam(examData?.body?.exams); // Assuming setExam needs exam data

    } catch (error) {
      setError(error.message || "Data not found!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Current Data", exam);



  const filterData = (data, semester) => {
    if (semester === "All") return data;
    return data.filter((item) => item.semester === semester);
  };

  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="flex items-center justify-center h-screen text-3xl font-extrabold text-[#ff7536] ">
        {error}
      </p>
    );


  const { addToCart } = useCart()

  return (
    <div>
      <Header headerData={headerData} />
      {!user?.body?.user.coursesPurchased.includes(headerData.id) &&
        <div className="flex justify-center mt-4">
          <button onClick={() => addToCart(headerData)} className='bg-[#F4BD50] px-6 mb-4 py-2 text-lg font-semibold rounded-2xl shadow mx-auto'>
            Buy course
          </button>
        </div>
      }
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-10 sticky top-0 z-[1000] bg-[#f5f4f4] py-5 mt-0">
        <button
          className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)]  rounded-full p-2 px-6 ${selectedFilter === "first"
            ? "border-[#E67D4B] text-[#343534]"
            : "text-gray-600  border-gray-200 hover:bg-gray-200 transition-all"
            }`}
          onClick={() => setSelectedFilter("first")}
        >
          First term
        </button>
        <button
          className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)]  rounded-full p-2 px-6 ${selectedFilter === "second"
            ? "border-[#E67D4B] text-[#343534]"
            : "text-gray-600  border-gray-200 hover:bg-gray-200 transition-all"
            }`}
          onClick={() => setSelectedFilter("second")}
        >
          Second semester
        </button>
        <button
          className={`border-2 border-[1px solid bg-white rgb(230, 230, 230)]  rounded-full p-2 px-6 ${selectedFilter === "descriptive questions"
            ? "border-[#E67D4B] text-[#343534]"
            : "text-gray-600  border-gray-200 hover:bg-gray-200 transition-all"
            }`}
          onClick={() => setSelectedFilter("descriptive questions")}
        >
          Descriptive questions
        </button>
      </div>
      <div className=" px-5 max-sm:px-4 py-24 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {data ?
            (filterData(data, selectedFilter).map((data, index) => {
              return <TrainingCards lessons={data} key={index} number={index} />;
            })) :
            (<Spinner />)
          }
        </div>

        <div className="exam-list">
          {selectedFilter === 'descriptive questions' && exam && exam.length > 0 ? (
            exam.map((item) => (
              <ExamCard key={item._id} exam={item} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

const ExamCard = ({ exam }) => {
  return (
    <div className="exam-card border-2 rounded-2xl border-gray-200 shadow-xl max-w-96 w-full p-6 ">
      <h2 className="text-xl capitalize  font-semibold">{exam.title}</h2>
      <p className="text-xs px-3 p-1 mt-4 rounded-full bg-[#f4bd506c] max-w-max  capitalize">{exam.semester} semester</p>
      <p className="mt-4">{exam.timeDuration}</p>
      <p className="mb-4">{exam.description}</p>
      <a className="text-white mb-2 p-2 px-4 rounded-full text-sm mt-6 bg-[#F4BD50] shadow-lg" href={process.env.NEXT_PUBLIC_BASE_URL + '/' + exam.examFile} download>Download Exam File</a>
    </div>
  );
};