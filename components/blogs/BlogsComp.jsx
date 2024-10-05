"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import blogsbanner from "../../public/blogs-banner-img.png";
import childimg from "../../public/childimg.png";
import teenager from "../../public/teenager.png";
import entertainment from "../../public/entertainment.png";
import logo from "../../public/logo.png";
import instagram from "../../public/instagram.png";
import xlogo from "../../public/xlogo.png";
import arrowicon from "../../public/arrowicon.png";
import entertainmentone from "../../public/entertainment-one.png";
import entertainmenttwo from "../../public/entertainment-two.png";
import entertainmentthree from "../../public/entertainment-three.png";
import teenager1 from "../../public/teenager-1.png";
import teenager3 from "../../public/teenager-3.png";
import Link from 'next/link';


const blogData = [
  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT"
  },
];

const blogDataEntertainment = [

  {
    imgSrc: entertainmentone,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: entertainmenttwo,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: entertainmentthree,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER"
  },

  {
    imgSrc: teenager,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    // paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager3,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    // paraText: "Darsa Momenikhah  July 30, 1403"
  },

];

const blogDataTeenager = [

  {
    imgSrc: teenager1,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager3,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager3,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    // paraText: "Darsa Momenikhah  July 30, 1403"
  },

];

const blogDataStepbystep = [

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
  {
    imgSrc: teenager3,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "Darsa Momenikhah  July 30, 1403"
  },
];

const blogDataSampleQuestions = [

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT"
  },
];

const blogDataTheatest = [

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"

  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"

  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
];

const blogDataScientificgame = [

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD",
    paraText: "August 1, 1401"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "August 1, 1401"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "August 1, 1401"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "August 1, 1401"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "August 1, 1401"
  },
];

const blogDatachild = [

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD",
    paraText: "August 1, 1401",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "August 1, 1401",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "August 1, 1401",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "August 1, 1401",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "August 1, 1401",
    ParaText: "Introduction You can make beautiful solids using simple and even disposable supplies and a little creativity. In this article, we want to teach the methods of making solid crafts for school. Follow us by continuing this article. making a Read more"
  },
];

const blogDataTeachers = [

  {
    imgSrc: childimg,
    title: "The most difficult languages ​​in the world",
    buttonText: "CHILD",
    paraText: "August 1, 1401",

  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "August 1, 1401",

  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "August 1, 1401",

  },
  {
    imgSrc: teenager,
    title: "The most challenging teenage years",
    buttonText: "TEENAGER",
    paraText: "August 1, 1401",

  },
  {
    imgSrc: entertainment,
    title: "Entertainment options for all ages",
    buttonText: "ENTERTAINMENT",
    paraText: "August 1, 1401",

  },
];




const BlogsComp = () => {

  // State management for each carousel
  const [currentIndexBlogData, setCurrentIndexBlogData] = useState(0);
  const [currentIndexEntertainment, setCurrentIndexEntertainment] = useState(0);
  const [currentIndexTeenager, setCurrentIndexTeenager] = useState(0);
  const [currentIndexStepbystep, setCurrentIndexStepbystep] = useState(0);
  const [currentIndexSampleQuestions, setCurrentIndexSampleQuestions] = useState(0);

  const [currentIndexTheLatest, setCurrentIndexTheLatest] = useState(0);
  const [currentIndexScientificGame, setCurrentIndexScientificGame] = useState(0);
  const [currentIndexChild, setCurrentIndexChild] = useState(0);
  const [currentIndexTeachers, setCurrentIndexTeachers] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Set initial value based on the current window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle navigation for each carousel
  const handleNext = (type) => {
    if (type === 'entertainment') {
      if (currentIndexEntertainment + itemsPerPage < blogDataEntertainment.length) {
        setCurrentIndexEntertainment(currentIndexEntertainment + 1);
      }
    } else if (type === 'blogdata') {
      if (currentIndexBlogData + itemsPerPage < blogData.length) {
        setCurrentIndexBlogData(currentIndexBlogData + 1);
      }
    } else if (type === 'teenager') {
      if (currentIndexTeenager + itemsPerPage < blogDataTeenager.length) {
        setCurrentIndexTeenager(currentIndexTeenager + 1);
      }
    } else if (type === 'stepbystep') {
      if (currentIndexStepbystep + itemsPerPage < blogDataStepbystep.length) {
        setCurrentIndexStepbystep(currentIndexStepbystep + 1);
      }
    } else if (type === 'samplequestions') {
      if (currentIndexSampleQuestions + itemsPerPage < blogDataSampleQuestions.length) {
        setCurrentIndexSampleQuestions(currentIndexSampleQuestions + 1);
      }
    } else if (type === 'thelatest') {
      if (currentIndexTheLatest + itemsPerPage < blogDataTheatest.length) {
        setCurrentIndexTheLatest(currentIndexTheLatest + 1);
      }
    } else if (type === 'scientificgame') {
      if (currentIndexScientificGame + itemsPerPage < blogDataScientificgame.length) {
        setCurrentIndexScientificGame(currentIndexScientificGame + 1);
      }
    } else if (type === 'child') {
      if (currentIndexChild + itemsPerPage < blogDatachild.length) {
        setCurrentIndexChild(currentIndexChild + 1);
      }
    } else if (type === 'teachers') {
      if (currentIndexTeachers + itemsPerPage < blogDataTeachers.length) {
        setCurrentIndexTeachers(currentIndexTeachers + 1);
      }
    }

  };

  const handlePrevious = (type) => {
    if (type === 'entertainment') {
      if (currentIndexEntertainment > 0) {
        setCurrentIndexEntertainment(currentIndexEntertainment - 1);
      }
    } else if (type === 'blogdata') {
      if (currentIndexBlogData > 0) {
        setCurrentIndexBlogData(currentIndexBlogData - 1);
      }
    } else if (type === 'teenager') {
      if (currentIndexTeenager > 0) {
        setCurrentIndexTeenager(currentIndexTeenager - 1);
      }
    } else if (type === 'stepbystep') {
      if (currentIndexStepbystep > 0) {
        setCurrentIndexStepbystep(currentIndexStepbystep - 1);
      }
    } else if (type === 'samplequestions') {
      if (currentIndexSampleQuestions > 0) {
        setCurrentIndexSampleQuestions(currentIndexSampleQuestions - 1);
      }
    } else if (type === 'thelatest') {
      if (currentIndexTheLatest > 0) {
        setCurrentIndexTheLatest(currentIndexTheLatest - 1);
      }
    } else if (type === 'scientificgame') {
      if (currentIndexScientificGame > 0) {
        setCurrentIndexScientificGame(currentIndexScientificGame - 1);
      }
    }  
    else if (type === 'child') {
      if (currentIndexChild > 0) {
        setCurrentIndexChild(currentIndexChild - 1);
      }
    } else if (type === 'teachers') {
      if (currentIndexTeachers > 0) {
        setCurrentIndexScientificGame(currentIndexTeachers - 1);
      }
    }
  };

  
  return (
    <> 
    <section className='px-4 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5
'>
      <div className='relative'>
        <div className='relative max-md:h-80 bg-gray-900 rounded-2xl ' >
          <Image
            className="object-cover object-center w-full h-full  opacity-70"
            src={blogsbanner}
            alt="blog"
            objectFit="cover"
          />
        </div>
        <div className='absolute text-gray-200 bottom-10 ml-8'>
          <h1 className='text-lg md:text-4xl font-bold'>A solid craft for school</h1>
          <p className='title-font text-sm md:text-lg font-medium'>Darsa Momenikhah On August 16, 1403</p>
        </div>
      </div>

      <section>
        {/* Blog Data Carousel */}
        <div className="  py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">

            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexBlogData * (100 / itemsPerPage)}%)` }}
            >
              {blogData.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Link href="/innerblogs">
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      </Link>
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 text-sm md:text-base rounded-tl-3xl rounded-br-3xl'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {blog.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('blogdata')}
                disabled={currentIndexBlogData === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('blogdata')}
                disabled={currentIndexBlogData + itemsPerPage >= blogData.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>


        {/* Entertainment Carousel */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className="text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1">entertainment</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexEntertainment * (100 / itemsPerPage)}%)` }}
            >
              {blogDataEntertainment.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {blog.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('entertainment')}
                disabled={currentIndexEntertainment === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('entertainment')}
                disabled={currentIndexEntertainment + itemsPerPage >= blogDataEntertainment.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Teenager Carousel */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className='overflow-hidden'>
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Teenager</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexTeenager * (100 / itemsPerPage)}%)` }}
            >
              {blogDataTeenager.map((bloge, indextwo) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={indextwo}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={bloge.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {bloge.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {bloge.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {bloge.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-end pt-5'>
              <button
                onClick={() => handlePrevious('teenager')}
                disabled={currentIndexTeenager === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('teenager')}
                disabled={currentIndexTeenager + itemsPerPage >= blogDataTeenager.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Step by Step Carousel */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Step by step</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexEntertainment * (100 / itemsPerPage)}%)` }}
            >
              {blogDataStepbystep.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {blog.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('entertainment')}
                disabled={currentIndexEntertainment === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('entertainment')}
                disabled={currentIndexEntertainment + itemsPerPage >= blogDataEntertainment.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Simple quetions */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Sample Questions</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexSampleQuestions * (100 / itemsPerPage)}%)` }}
            >
              {blogDataSampleQuestions.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {blog.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('samplequestions')}
                disabled={currentIndexSampleQuestions === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('samplequestions')}
                disabled={currentIndexSampleQuestions + itemsPerPage >= blogDataSampleQuestions.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* The Latest */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>The Latest</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexTheLatest * (100 / itemsPerPage)}%)` }}
            >
              {blogDataTheatest.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                      </div>
                    </div>
                    <p className="title-font text-sm md:text-md font-medium mt-3 text-gray-700">
                      {blog.ParaText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('thelatest')}
                disabled={currentIndexTheLatest === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('thelatest')}
                disabled={currentIndexTheLatest + itemsPerPage >= blogDataTheatest.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* ----Scientific game----- */}

        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Scientific game</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexScientificGame * (100 / itemsPerPage)}%)` }}
            >
              {blogDataScientificgame.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {blog.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('scientificgame')}
                disabled={currentIndexScientificGame === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('scientificgame')}
                disabled={currentIndexScientificGame + itemsPerPage >= blogDataScientificgame.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* ----Child----- */}

        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Child</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexChild * (100 / itemsPerPage)}%)` }}
            >
              {blogDatachild.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>

                      </div>
                    </div>
                    <p className="title-font text-sm md:text-md font-medium mt-3 text-gray-700">
                      {blog.ParaText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('child')}
                disabled={currentIndexChild === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('child')}
                disabled={currentIndexChild + itemsPerPage >= blogDatachild.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Entertainment Carousel */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className="overflow-hidden">
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>entertainment</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexEntertainment * (100 / itemsPerPage)}%)` }}
            >
              {blogDataEntertainment.map((blog, index) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={blog.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {blog.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {blog.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {blog.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-right pt-5'>
              <button
                onClick={() => handlePrevious('entertainment')}
                disabled={currentIndexEntertainment === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('entertainment')}
                disabled={currentIndexEntertainment + itemsPerPage >= blogDataEntertainment.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Teenager Carousel */}
        <div className=" py-5 sm:py-0 mx-auto">
          <div className='overflow-hidden'>
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Teenager</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexTeenager * (100 / itemsPerPage)}%)` }}
            >
              {blogDataTeenager.map((bloge, indextwo) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={indextwo}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={bloge.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {bloge.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {bloge.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {bloge.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-end pt-5'>
              <button
                onClick={() => handlePrevious('teenager')}
                disabled={currentIndexTeenager === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('teenager')}
                disabled={currentIndexTeenager + itemsPerPage >= blogDataTeenager.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* -----Teachers------ */}

        <div className=" py-5 sm:py-0 mx-auto">
          <div className='overflow-hidden'>
            <h1 className='text-orange-500 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>Teachers</h1>
            <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[15%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexTeachers * (100 / itemsPerPage)}%)` }}
            >
              {blogDataTeachers.map((bloge, indextwo) => (
                <div className="py-4 md:w-1/3 sm:w-full flex-shrink-0" style={{ width: `${100 / itemsPerPage}%` }} key={indextwo}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='relative h-56 w-full'>
                      <Image
                        className="object-cover object-center"
                        src={bloge.imgSrc}
                        alt="blog"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className='absolute top-4 right-4'>
                        <button className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-sm md:text-base'>
                          {bloge.buttonText}
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-gray-200">
                        <h1 className="title-font text-sm md:text-lg font-medium">
                          {bloge.title}
                        </h1>
                        <p className="title-font text-sm md:text-md font-medium">
                          {bloge.paraText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-4 float-end pt-5'>
              <button
                onClick={() => handlePrevious('teachers')}
                disabled={currentIndexTeachers === 0}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Previous
              </button>
              <button
                onClick={() => handleNext('teachers')}
                disabled={currentIndexTeachers + itemsPerPage >= blogDataTeachers.length}
                className='bg-gradient-to-r text-gray-200 from-[#E67D4B] to-[#F4BD50] px-4 py-2 rounded-xl text-sm md:text-base disabled:opacity-50'>
                Next
              </button>
            </div>
          </div>
        </div>

      </section>

      </section>


      {/* ------ */}

      {/* <div className='flex flex-wrap gap-14 justify-evenly mt-10 sm:mt-20'>
        <div>
          <Image
            className="object-cover object-center w-72"
            src={logo}
            alt="blog"
            objectFit="cover"
          />
        </div>
        <div className='text-gray-600 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1'>
          <h1>CONTACT US</h1>
          <div className="bg-[#F4BD50] h-2 max-md:w-[40%]  border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
          <p className='text-sm'>0334573908764</p>
        </div>
        <div className='text-gray-600 uppercase text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-2xl font-bold mb-1'>
          <h1>Filmo school social media</h1>
          <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[60%]  border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
          <div className='flex gap-7 mt-5 justify-center'>
            <Image
              className="object-cover object-center w-10"
              src={instagram}
              alt="blog"

              objectFit="cover"
            />
            <Image
              className="object-cover object-center  w-10"
              src={xlogo}
              alt="blog"

              objectFit="cover"
            />
            <Image
              className="object-cover object-center  w-10"
              src={arrowicon}
              alt="blog"

              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div class="bg-gray-100 mt-14">
        <div class=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-center">
          <p className='text-gray-600 mx-auto'>All rights belong to <span className='text-orange-600'>Filmo Madrasa</span> and its reproduction is allowed only by mentioning the name and link to the source.</p>
        </div>
      </div> */}


    </>
  );
};

export default BlogsComp;
