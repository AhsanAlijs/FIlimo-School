"use client";

import { useUserAuth } from "@/context/AuthContext";
// import { useUserAuth } from "@/context/AuthContext";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Spinner from "../Spinner/Spinner";
import closeIcon from "@/assets/modals/cross.svg";
import correct from "@/assets/modals/green-tick.svg";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'

const QuestionsAnswers = () => {
  const [quizData, setQuizData] = useState([]);
  const [quizId, setQuizId] = useState([]);
  const [lessonId, setLessonId] = useState([]);
  const [quizDataIncorrect, setQuizDataIncorrect] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const {token} = useUserAuth()
  const searchParams = useSearchParams()
 
  const search = searchParams.get('itemid')
  // const { token, user } = useUserAuth();

  const params = useParams().id;
  const router = useRouter()

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${params}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLessonId(data?.body?.lesson)
        
        setQuizData(data?.body?.lesson?.quiz.questions);
        // console.log('Quiz Data',data);
        setQuizId(data?.body?.lesson?.quiz)
        
        setQuizDataIncorrect(data?.body?.lesson?.quiz.questions);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, []);

  

  const progress = 20; // Example progress value

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const openModal = () => {
    if (selectedValue) {
      setIsModalOpen(true);
    } else {
      setIsAlertModalOpen(true); // Show alert modal if no radio button is selected
    }
  };

  const closeModal = async () => {
    setIsModalOpen(false);

    if (selectedValue === quizDataIncorrect[selectedIndex].answer) {
      console.log(quizDataIncorrect);

      if (quizDataIncorrect.length === 1) {
        const getId = localStorage.getItem("user") ?? user.child[0]
        const getStudent = JSON.parse(getId)
        // console.log(quizId)
        
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/quizzes/${quizId?.id}/quiz-activity`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                studentId: getStudent,

              }),
            }
          );

          if (response.ok) {
            setIsAlertModalOpen(true);
            setQuizCompleted(true);
            router.push(`/lesson/${search}`)
            
          }
        } catch (error) {}
      } else {
        setScore(score + 1);
        const a = quizDataIncorrect.filter((el, i) => i !== selectedIndex);
        setQuizDataIncorrect(a);
        setSelectedIndex(Math.floor(Math.random() * a.length));
      }
    } else {
      let newIndex = selectedIndex;

      while (quizDataIncorrect.length !== 1 && newIndex === selectedIndex) {
        newIndex = Math.floor(Math.random() * quizDataIncorrect.length);
      }

      setSelectedIndex(newIndex);
    }
  };

  const closeAlertModal = () => {
    setIsAlertModalOpen(false);
  };

  return (
    <>
      <div className="text-center my-10 sm:my-20 flex justify-center items-center gap-2 sm:gap-10">
        <div className="flex items-center gap-2 font-medium text-sm sm:text-lg">
          0<FaStar className="text-[#F4BD50] text-2xl" />
        </div>

        <div className="relative w-2/4 h-5 sm:h-7 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-[#E67D4B] rounded-full transition-all"
            // style={{ width: `${progress}%` }}
            style={{ width: `${((score + 1) / quizData.length) * 100}%` }}
          />
        </div>
        <p className="font-medium text-sm sm:text-lg">
          {score + 1} out of {quizData.length}
        </p>
      </div>

      <div className="w-4/5 sm:w-4/6 mx-auto">
        {quizData && quizData.length > 0 ? (
          <div className="mb-10">
            <div className="text-center mb-5 sm:mb-20 ">
              <p className="text-gray-700 text-md">
                {quizDataIncorrect[selectedIndex].question}
              </p>

              <form>
                <div className="grid grid-cols-2 justify-items-center gap-3 mt-5 w-full">
                  {quizDataIncorrect[selectedIndex].options.map(
                    (option, oIndex) => (
                      <span key={oIndex}>
                        <label
                          htmlFor={option}
                          className={`bg-[#F2F2F2] border-2 transition-all rounded-md flex justify-center text-gray-700 gap-2 items-center cursor-pointer shadow-2xl px-3 md:w-[18rem] lg:w-[22rem] xl:w-[25rem]  py-4 ${
                            selectedValue === option
                              ? "border-2 border-[#E67D4B] font-semibold"
                              : ""
                          }`}
                        >
                          <input
                            type="radio"
                            id={option}
                            name={`question-${selectedIndex}`}
                            value={option}
                            onChange={handleRadioChange}
                            checked={selectedValue === option}
                            className="accent-[#E67D4B]"
                          />
                          {option}
                        </label>
                      </span>
                    )
                  )}
                </div>
              </form>
            </div>
          </div>
        ) : (
          <Spinner />
        )}

        <div className="flex justify-center">
          <button
            onClick={openModal}
            className={`px-16 py-3 mt-14 rounded-lg text-gray-100 bg-[#E67D4B] transition-opacity duration-300 ${
              selectedValue ? "opacity-100" : "opacity-50"
            }`}
          >
            {selectedValue === ""
              ? "Choose the correct answer"
              : "Confirm answer"}
          </button>
        </div>
      </div>

      {/* Main Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8  rounded-lg shadow-lg relative lg:w-[40%]">
            {selectedValue === quizDataIncorrect[selectedIndex].answer ? (
              <div className="flex justify-center">
                <div
                  className="border-[8px] max-md:border-[6px]  max-md:-top-[20%] max-sm:-top-[10%]    absolute lg:-top-[40%]  border-white  bg-[#61dd9d] h-[150px]  
                w-[150px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]"
                >
                  <Image
                    className="w-[24%]"
                    src={correct}
                    alt="ll"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div
                  className="border-[8px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 top-[28%]  absolute lg:-top-[40%]  border-white  bg-[#F14E53] h-[130px] max-md:w-[150px] max-md:h-[150px] 
                w-[130px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]"
                >
                  <Image className="w-[24%]" src={closeIcon} alt="dd" />
                </div>
              </div>
            )}

            <div className="lg:mt-10">
              <h2 className="text-xl font-bold mb-2 text-center">
                See the correct Answer
              </h2>
              <p className="text-gray-700 text-center">
                {selectedValue === quizDataIncorrect[selectedIndex].answer ? (
                  <div>
                    <p>"Correct answer"</p>
                    <button
                      onClick={closeModal}
                      className="text-gray-600 bg-[#fec23b] border shadow-lg px-6 py-2 rounded-lg  hover:text-gray-900 mt-2"
                    >
                      go to next
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>"Incorrect answer"</p>
                    <div className="flex items-center justify-evenly mt-2">
                      {/* <div>
                        <button
                          className=" text-black bg-[#e6e6e6] border shadow-lg px-6 py-2 rounded-lg  hover:text-gray-900"
                        >
                          <Link href={''}>
                          </Link>
                          video play back
                        </button>
                      </div> */}

                      <div>
                        <button
                          onClick={closeModal}
                          className=" text-gray-600 bg-[#fec23b] border shadow-lg px-6 py-2 rounded-lg  hover:text-gray-900"
                        >
                          Now I Understand
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Alert Modal */}
      {isAlertModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg relative max-w-lg mx-auto">
            <button
              onClick={closeAlertModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Alert</h2>
            <p className="text-gray-700">
              {quizCompleted ? "Quiz completed!" : "Please select an answer."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionsAnswers;