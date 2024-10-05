"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { QuizTable } from "../../components/QuizTable";
import { useParams } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Function to handle outside clicks
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of the element
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle the visibility of the modal
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const arr = ["UX/ UI design", "Web design", "Design system", "Other"];

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };
  const params = useParams().id;
  const { user, token } = useUserAuth()

  const [quizes, setQuizes] = useState([]);

  const fetchQuizes = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setQuizes(result?.body?.lesson);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchQuizes();
  }, []);

  console.log(quizes.quiz);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteModalOpen = () => {
    setIsDeleted(true);
  };
  const handleCloseModal = () => {
    setIsDeleted(false);
  };

  const deleteCourse = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/quizzes/${quizes.quiz?.id}`,
        {
          method: "Delete",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setIsDeleted(false)
        fetchQuizes();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="relative min-h-screen border p-2 rounded-xl shadow-lg">
      <div className="grid mt-6 p-4 rounded-3xl overflow-y-auto">

        {
          quizes?.quiz?.questions?.map((item, index) => (
            <>
              <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
                <div className="flex gap-6">
                  <h3 className="text-lg font-semibold mb-2">{`Question ${index + 1}`}</h3>
                  <p className="text-base mb-4">{item.question}</p>
                </div>
                <ul className="space-y-2">
                  {
                    item?.options?.map((option, idx) => (
                      <li key={idx} className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
                        Options:{" "}{option}
                      </li>
                    ))
                  }
                </ul>
                <p className="mt-4 text-sm text-green-600 font-medium">Correct Answer: {item.answer}</p>
              </div>

            </>
          ))

        }
        {
          quizes?.quiz?.questions.length > 0 ?
            <button
              onClick={deleteModalOpen}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete Quiz
            </button> : ""
        }
      </div>

      {isDeleted && (
        <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
          {/* Overlay */}
          <div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
            onClick={handleCloseModal}
          />

          {/* Modal */}
          <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
            <div className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
              <button
                type="button"
                className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                onClick={handleCloseModal}
              >
                <svg
                  title="Close"
                  className="h-4 w-4 cursor-pointer text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>

              <div className="space-y-2 p-2">
                <div className="p-4 space-y-2 text-center dark:text-white">
                  <p className="text-gray-500">
                    Are you sure you want to delete the quiz?
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div
                  aria-hidden="true"
                  className="border-t dark:border-gray-700 px-2"
                ></div>
                <div className="px-6 py-2">
                  <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800"
                      onClick={handleCloseModal}
                    >
                      <span className="flex items-center gap-1">Cancel</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700"
                      onClick={deleteCourse}
                    >
                      <span className="flex items-center gap-1">Confirm</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page;
