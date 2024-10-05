"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import studencourse1 from "../../../public/studencourse1.png";
import studencourse2 from "../../../public/studencourse2.png";
import studencourse3 from "../../../public/studencourse3.png";
import studencourse4 from "../../../public/studencourse4.png";
import studencourse5 from "../../../public/studencourse5.png";
import studencourse6 from "../../../public/studencourse6.png";
import studencourse7 from "../../../public/studencourse7.png";
import studencourse8 from "../../../public/studencourse8.png";

const StudentCourse = () => {
  const [viewProgress, setViewProgress] = useState({});

  const posts = [
    {
      id: 1,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse1,
    },
    {
      id: 2,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse2,
    },
    {
      id: 3,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse3,
    },
    {
      id: 4,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse4,
    },
    {
      id: 5,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse5,
    },
    {
      id: 6,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse6,
    },
    {
      id: 7,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse7,
    },
    {
      id: 8,
      category: "Subject Name - Class Name",
      title: "Course Name",
      image: studencourse8,
    },
  ];

  const handleLearnMore = (id) => {
    console.log(`Learn more clicked for course ${id}`);
  };

  const handleAnotherAction = (id) => {
    console.log(`Another action clicked for course ${id}`);
  };

  // Simulated function to update view progress
  const updateViewProgress = (id, percentage) => {
    setViewProgress((prevProgress) => ({
      ...prevProgress,
      [id]: percentage,
    }));
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={400}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {post.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {post.title}
                    </h1>
                    <div className="flex justify-between text-sm sm:text-md pt-4 border-t-2">
                      <button
                        onClick={() => handleLearnMore(post.id)}
                        className="text-[#FF6636] inline-flex items-center bg-[#ffeee8] py-3 px-3 sm:px-8 font-bold"
                      >
                        Watch Lecture
                      </button>
                      <button
                        onClick={() => handleAnotherAction(post.id)}
                        className="text-[#23BD33] font-medium inline-flex items-center"
                      >
                        {viewProgress[post.id] || 20}% Completed
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="absolute bottom-0 left-0 border-b-4 border-[#FF6636]"
                    style={{
                      width: `${viewProgress[post.id] || 20}%`,
                      height: "4px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCourse;
