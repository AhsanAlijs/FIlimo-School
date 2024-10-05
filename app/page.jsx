"use client";
import watchSvg from "@/assets/home/watch.svg";
import notesSvg from "@/assets/home/notes.svg";
import starSvg from "@/assets/home/scaleStars.svg";
import plantSvg from "@/assets/home/plants.svg";
import bagNew from "@/assets/home/bagNew.svg";
import BookVer from "@/assets/home/bookVerticle.svg";
import BookHor from "@/assets/home/bookHorizontal.svg";
import plantLeft from "@/assets/home/plantLeft.svg";
import starsLeft from "@/assets/home/starLeft.svg";
import gsap from "gsap";
import CarouselRow4 from "@/components/home/CarouselRow4";
import { FaArrowLeft } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import playBtn from "../assets/home/PlayBtn.svg";
import Image from "next/image";
import greenTick from "../assets/home/green-tick.svg";
import CarouselCard2 from "@/components/home/CarouselCard2";
import { schoolFilmData } from "@/utils/arrays/Home";
import certificate from "../assets/home/certificate/certificate.png";
import cloudBanner from "../assets/home/cloud-banner.svg";
import urduHead from "../assets/home/urdu-head.png";
import VideoCard from "@/components/home/VideoCard";
import { stepperData } from "@/utils/arrays/Home/stepperData";
import {
  HeaderText,
  PriceCards,
  StudyPoints,
  WhenCard,
} from "@/components/preschool";
import { stepperCard, schoolCarouselData } from "@/utils/arrays/Home";
import BothVideoCard from "@/components/home/BothVideoCard";
import BothVideo from "@/components/home/BothVideo";
import FilmVideo from "@/components/home/FilmVideo";
import ArDiv2 from "@/components/arcomponent/ArDiv2";
import CarouselRow3 from "@/components/home/CarouselRow3";
import Link from "next/link";
import mapimg from "../public/map-desktop-2.svg fill.png";
import { studyPoints, subCard } from "@/utils/arrays/PreSchool";
import { useUserAuth } from "@/context/AuthContext";
import SliderHome from "@/components/home/SliderHome";
import {
  videoData,
  schoolMoviesData,
  schoolFilmDataMain,
} from "@/utils/arrays/Home";
const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const [data, setData] = useState([{ course: null }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booksData, setBooksData] = useState([]);
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = stepRefs.current.indexOf(entry.target);

        if (entry.isIntersecting) {
          setActiveStep((prev) => (index + 1 > prev ? index + 1 : prev));
        } else if (!entry.isIntersecting && index + 1 === activeStep) {
          setActiveStep(index);
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, [activeStep]);
  const fetchSummerCourseData = async () => {
    try {
      const coursesResponse = await fetch(`${BaseUrl}/courses/summer`);

      if (!coursesResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const coursesData = await coursesResponse.json();

      setData(coursesData?.body?.courses || []);
    } catch (error) {
      setError(error.message || "Data not found!");
    } finally {
      setLoading(false);
    }
  };

  const fetchGradeCourseData = async (grade) => {
    try {
      const res = await fetch(`${BaseUrl}/courses/class/${grade}`);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      setBooksData(data?.body?.courses || []);
    } catch (error) {
      setError(error.message || "Data not found!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummerCourseData();
  }, []);

  const [selectedGrade, setSelectedGrade] = useState("first");
  const gradeListRef = useRef(null);

  const handleGradeSelection = (grade, target) => {
    const buttons = gradeListRef.current.querySelectorAll(
      "button[data-grade-selected]"
    );
    buttons.forEach((button) => button.removeAttribute("data-grade-selected"));

    target.setAttribute("data-grade-selected", "true");
    setSelectedGrade(grade);
  };

  useEffect(() => {
    fetchGradeCourseData(selectedGrade);
  }, [selectedGrade]);

  const watchRef = useRef(null);
  const notesRef = useRef(null);
  const plantRef = useRef(null);
  const starRef = useRef(null);
  const bagRef = useRef(null);
  const bookHorRef = useRef(null);
  const bookVerRef = useRef(null);
  const plantLeftRef = useRef(null);
  const starLeftRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      watchRef.current,
      { x: "-300%", y: "-10%", opacity: 1 },
      {
        x: "0%",
        y: "0%",
        duration: 0.2,
        delay: 0.2,
        opacity: 1,
      }
    )
      .fromTo(
        notesRef.current,
        { x: "-300%", rotation: -50, opacity: 1 },
        {
          x: "0%",
          rotation: 0,
          opacity: 1,
          duration: 0.3,
        }
      )
      .fromTo(
        plantRef.current,
        { x: "-100%", y: "20%", opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 0.3,
          delay: 0.2,
        },
        "-=0.2"
      )
      .fromTo(
        starRef.current,
        { x: "-10%", y: "20%", opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 0.3,
        },
        "-=0.2"
      );
  }, []);

  useEffect(() => {
    const tlnew = gsap.timeline();

    tlnew
      .fromTo(
        bagRef.current,
        { x: "900%", y: "-150%", rotation: 140, opacity: 1 },
        {
          x: "0%",
          y: "0%",
          rotation: 0,
          opacity: 1,
          duration: 0.4,
        }
      )
      .fromTo(
        bookVerRef.current,
        { x: "160%", opacity: 1 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.3,
        },
        "-=0.1"
      )
      .fromTo(
        bookHorRef.current,
        { y: "50%", opacity: 0 }, // Start position (off-screen left), rotation and invisible
        {
          y: "0%",
          opacity: 1, // Make it visible when animation completes
          duration: 0.3, // Duration of 2 seconds
        },
        "-=0.1"
      )
      .fromTo(
        plantLeftRef.current,
        { y: "10%", x: "20%", opacity: 0 }, // Start position (off-screen left), rotation and invisible
        {
          y: "0%",
          x: "0%",
          opacity: 1, // Make it visible when animation completes
          duration: 0.3, // Duration of 2 seconds
        },
        "-=0.1"
      )
      .fromTo(
        starLeftRef.current,
        { y: "20%", x: "5%", opacity: 0 }, // Start position (off-screen left), rotation and invisible
        {
          y: "0%",
          x: "0%",
          opacity: 1, // Make it visible when animation completes
          duration: 0.4, // Duration of 2 seconds
        }
      );
  }, []);

  const sectionRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const navbar = navbarRef.current;
    const x = window.matchMedia("(max-width: 600px)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Show the navbar when the section starts
            navbar.classList.remove("hidden");
            // navbar.classList.add("fixed");
          } else {
            // Hide the navbar when the section is out of view
            navbar.classList.add("hidden");
            // navbar.classList.remove("fixed");
          }
        });
      },
      { threshold: x ? 0.25 : 0.35, rootMargin: "2000px 0px 0px 0px" } // Trigger when 35% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    // Cleanup on unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const { user, siteSettings } = useUserAuth();

  console.log("Home Page Data", siteSettings);

  const getRandomColor = () => {
    const colors = [
      // Light colors
      "#FEE2E2", // Light red
      "#BFDBFE", // Light blue
      "#D1FAE5", // Light green
      "#FDE68A", // Light yellow
      "#E9D5FF", // Light purple
      "#FBCFE8", // Light pink

      // Medium and dark colors
      "#1F2937", // Dark gray
      "#4B5563", // Medium gray
      "#374151", // Dark gray
      "#6B7280", // Medium-dark gray
      "#111827", // Very dark gray
      "#1C1917", // Blackish
      "#3F3D56", // Muted purple
      "#2D3748", // Dark blue-gray
      "#2F855A", // Medium green
      "#2C7A7B", // Teal

      // Gradient colors
      "#FF9A8B", // Gradient light red to orange
      "#FEC163", // Gradient light orange to yellow
      "#F8C8DC", // Gradient pink to lavender
      "#D3B8AE", // Gradient beige to pink
      "#B9D9EB", // Gradient light blue to white
      "#A2D9CE", // Gradient light green to white

      // Additional vibrant colors
      "#FF5E57", // Coral red
      "#FFBE53", // Sunflower yellow
      "#6B5B95", // Deep purple
      "#FEBB55", // Apricot
      "#2A9D8F", // Sea green
      "#F6C6C6", // Pale pink
      "#FF7F50", // Coral
      "#FFD700", // Gold
      "#6A5ACD", // Slate blue
      "#FF6347", // Tomato
      "#90EE90", // Light green
      "#FF69B4", // Hot pink
      "#00CED1", // Dark turquoise
      "#F0E68C", // Khaki
      "#FF4500", // Orange red
      "#B22222", // Firebrick
      "#DAA520", // Goldenrod
      "#7FFF00", // Chartreuse
      "#D2691E", // Chocolate
      "#8A2BE2", // Blue violet
      "#5F9EA0", // Cadet blue
      "#FF1493", // Deep pink
      "#FF8C00", // Dark orange
      "#DDA0DD", // Plum
      "#F4A460", // Sandy brown
      "#98FB98", // Pale green
      "#FF00FF", // Magenta
      "#B0E0E6", // Powder blue
      "#F5DEB3", // Wheat
      "#C71585", // Medium violet red
      "#6A5ACD", // Slate blue
      "#8B4513", // Saddle brown
      "#D3D3D3", // Light gray
      "#F08080", // Light coral
      "#D2B48C", // Tan
      "#32CD32", // Lime green
      "#FFB6C1", // Light pink
      "#A52A2A", // Brown
      "#F5F5DC", // Beige
      "#8FBC8F", // Dark sea green
      "#20B2AA", // Light sea green
      "#C0C0C0", // Silver
      "#4682B4", // Steel blue
      "#FF6347", // Tomato
      "#E9967A", // Dark salmon
      "#D8BFD8", // Thistle
      "#D3D3D3", // Light gray
      "#F5F5F5", // White smoke
      "#FFE4E1", // Misty rose
      "#F0FFF0", // Honeydew
      "#F0F8FF", // Alice blue
      "#FAEBD7", // Antique white
      "#F5F5F5", // White smoke
      "#DCDCDC", // Gainsboro
      "#E6E6FA", // Lavender
      "#FFF0F5", // Lavender blush
      "#FAFAD2", // Light goldenrod yellow
      "#FFDAB9", // Peach puff
      "#FFEFD5", // Papaya whip
      "#F0F8FF", // Alice blue
      "#D3D3D3", // Light gray
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <section ref={sectionRef}>
        {/* banner section */}

        <div className="w-full h-[30rem] max-xl:h-[30rem] max-sm:h-[20rem]">
          <div className="h-[309px] w-full home-banner-clr max-md:h-32 transition-all max-2xl:px-24 max-md:px-14 max-sm:px-5"></div>
          <div className="flex justify-center">
            <div className="absolute top-[12rem] max-sm:top-[8rem] max-md:top-[10rem] transition-all">
              <div className="flex flex-col items-center justify-center px-4">
                <div className="flex items-end gap-10 max-xl:gap-4 section-width max-2xl:px-24 max-md:px-14 max-sm:px-5">
                  <div className="flex items-end  max-lg:hidden  transition-all">
                    <Image
                      src={starsLeft}
                      width={114}
                      height={73}
                      className="relative -top-28 opacity-0 -mr-28 z-0 transition-all max-md:hidden"
                      ref={starLeftRef}
                      alt="img"
                    />
                    <Image
                      src={plantLeft}
                      width={98}
                      height={163}
                      className="relative bottom-2 opacity-0 -mr-8 z-5 transition-all max-md:hidden"
                      ref={plantLeftRef}
                      alt="img"
                    />
                    <Image
                      src={bagNew}
                      width={107}
                      height={134}
                      className="relative bottom-0 opacity-0 -mr-4 z-20 transition-all max-md:hidden"
                      ref={bagRef}
                      alt="img"
                    />
                    <Image
                      src={BookHor}
                      width={83}
                      height={63}
                      className="relative bottom-12 opacity-0 -mr-24 right-0 z-5 transition-all max-md:hidden"
                      ref={bookHorRef}
                      alt="img"
                    />
                    <Image
                      src={BookVer}
                      width={119}
                      height={39}
                      className="relative bottom-3 opacity-0 right-0 z-10 transition-all max-md:hidden"
                      ref={bookVerRef}
                      alt="img"
                    />
                  </div>

                  <div className="flex items-center justify-center relative rounded-[22px] z-50 max-md:w-full ">
                    {isVideoPlaying ? (
                      <video
                        width="550"
                        height="322"
                        className="rounded-[22px] transition-all object-cover w-[550px] h-[322px] max-sm:h-[200px] max-lg:w-full drop-shadow-[-7px_7px_5.5px_rgba(0,0,0,0.25)]"
                        controls
                        autoPlay
                        src="/intro-video-summer2.mp4"
                        type="video/mp4"
                      />
                    ) : (
                      <div
                        className="relative cursor-pointer data-[state=active]:border-b-8 pb-4 data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
                        onClick={handleThumbnailClick}
                      >
                        <video
                          width="550"
                          height="322"
                          className="rounded-[22px] transition-all object-cover w-[550px] h-[322px] max-sm:h-[200px] max-lg:w-full drop-shadow-[-7px_7px_5.5px_rgba(0,0,0,0.25)]"
                          autoPlay
                          src="/intro-video-summer2.mp4"
                          type="video/mp4"
                          muted
                          loop
                        />
                        <Image
                          className="absolute inset-0 m-auto"
                          src={playBtn}
                          alt="Play Button"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex items-end  max-lg:hidden transition-all">
                    <Image
                      src={watchSvg}
                      width={126}
                      height={141}
                      className="relative bottom-0 left-0 opacity-0 z-20 transition-all max-md:hidden "
                      alt="img"
                      ref={watchRef}
                    />
                    <Image
                      src={notesSvg}
                      width={120}
                      height={170}
                      className="relative bottom-0 -ml-11 z-10 opacity-0 transition-all max-md:hidden"
                      alt="img"
                      ref={notesRef}
                    />
                    <Image
                      src={starSvg}
                      width={162}
                      height={149}
                      className="relative bottom-10 -ml-40 z-5 opacity-0 transition-all max-md:hidden"
                      alt="img"
                      ref={starRef}
                    />
                    <Image
                      src={plantSvg}
                      width={96}
                      height={126}
                      className="relative bottom-4 -ml-12 z-0 opacity-0 transition-all max-md:hidden"
                      alt="img"
                      ref={plantRef}
                    />
                  </div>
                </div>
                <div className="section-width -mt-7 w-[80%] h-[2.875rem]  bg-[#00000014] rounded-[50%]  max-xl:h-8 max-2xl:px-24 max-md:px-14 max-sm:px-5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <CrouslaHome />  */}

        {/* carousel section */}
        {siteSettings?.data?.settings?.hideSummerCourses !== true ? (
          <div className="px-4 max-w-screen-2xl mx-auto">
            <div className="">
              <CarouselRow3 summerCourse={data} />
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          dir="rtl"
          className="section-width max-w-screen-2xl mx-auto my-6 mb-14 md:my-20 lg:my-28  flex flex-col gap-4 max-2xl:px-36 max-md:px-14 max-sm:px-5"
        >
          <p className="text-[20px] max-sm:text-sm flex items-center gap-2">
            <Image
              src={greenTick}
              alt="green tick"
              className="max-sm:w-6"
              width={32}
              height={32}
            />
            More than 60 skill courses such as Python, Korean language,
            artificial intelligence, football and..
          </p>
          <p className="text-[20px] max-sm:text-sm flex items-center gap-2">
            <Image
              src={greenTick}
              alt="green tick"
              className="max-sm:w-6"
              width={32}
              height={32}
            />
            Obtaining a valid degree from the film school
          </p>
          <p className="text-[20px] max-sm:text-sm flex items-center gap-2">
            <Image
              src={greenTick}
              alt="green tick"
              className="max-sm:w-6"
              width={32}
              height={32}
            />
            Access to all course content for review or pre-reading
          </p>
        </div>

        {/* review */}

        <div className="section-width max-w-screen-xl mx-auto mb-12 max-2xl:px-36 max-lg:px-20 max-md:px-5">
          <h2
            dir="rtl"
            className="text-[#444444] font-bold text-[29px] mb-8 max-md:text-2xl"
          >
            Summer in the eyes of film school children
          </h2>

          {/* <CarouselCard2 /> */}
          <SliderHome />
        </div>

        <div className="section-width max-w-screen-2xl mx-auto flex justify-center items-center gap-6 py-5 md:py-16 max-lg:flex-wrap max-2xl:px-36 max-md:px-14 max-sm:px-5">
          <Image
            className="max-xl:w-full w-[700px] max-xl:h-full"
            src={certificate}
            width={517}
            height={275}
            alt="img"
          />
          <div dir="rtl" className="w-[400px]">
            <h2 className="font-bold text-[23px] sm:text-[30px] mb-6 text-end text-gray-700">
              Skill course certificate
            </h2>
            <p className="font-medium text-[16px] sm:text-[22px] mb-6 text-end text-gray-700">
              By watching each skill course, you will receive the official
              certificate of Filmom School.
            </p>
            <Link href={user ? "/buysubscription" : "/signin"}>
              <button className="mt-3  sm:mt-8 font-semibold bg-[#F4BD50] px-6 py-3 max-sm:text-sm sm:py-4 border-b-[#E67D4B]  border-r-0 border-t-0 border-l-0 border-4 text-[#343534] hover:bg-[#daa948] hover:border-b-0 transition-all">
                Receive a degree
              </button>
            </Link>
          </div>
        </div>

        {/* ****** */}

        <div className="mt-12 relative h-[700px] max-md:h-[600px] transition-all bg-white">
          <div className="bg-[#E8FCFF] h-[300px] max-md:h-[100px] max-w-full-2xl mx-auto max-2xl:w-full"></div>

          {/* Cloud banner */}
          <Image
            className="absolute top-4 z-0 max-md:w-full"
            src={cloudBanner}
            width={1916}
            height={883}
            alt="img"
          />

          {/* Section with Navbar */}
          <div className="absolute top-0 w-full">
            <div className="relative z-20 section-width max-w-screen-2xl mx-auto top-8 max-2xl:px-36 max-md:px-14 max-sm:px-5">
              {/* Navbar */}
              <div
                ref={navbarRef}
                id="navbar"
                className="hidden transition-all bg-white p-4 shadow-lg w-full fixed top-0 left-0 right-0 z-50"
              >
                {/* flex justify-center flex-row-reverse gap-10  text-gray-700 font-semibold [&_button]:cursor-pointer overflow-x-auto px-10 w-full */}
                <ul
                  ref={gradeListRef}
                  className="flex items-center flex-row-reverse [scrollbar-width:0] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-thumb]:hidden justify-evenly gap-4 overflow-x-auto max-md:gap-4 max-md:overflow-x-auto"
                >
                  {/* <li className="data-[state=active]:border-b-8 pb-4 data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold">
                    <button onClick={() => setSelectedGrade('preshool')}>
                      Preschool
                    </button>
                  </li> */}
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("first", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      The first base
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("second", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Second base
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("third", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Third grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("fourth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Fourth grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("fifth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Fifth grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("sixth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Sixth grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("seventh", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Seventh grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("eighth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Eighth grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("ninth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Ninth grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("tenth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Tenth grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("eleventh", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Eleventh grade
                    </button>
                  </li>
                  <li className="relative pb-4">
                    <button
                      onClick={(e) =>
                        handleGradeSelection("twelfth", e.currentTarget)
                      }
                      className="data-[grade-selected]:font-bold data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max"
                    >
                      Twelfth grade
                    </button>
                  </li>
                </ul>
              </div>

              {/* Content */}
              <div dir="rtl">
                <Image
                  className="max-md:w-52"
                  src={urduHead}
                  width={441}
                  height={96}
                  alt="img"
                />
                <h3 className="text-[20px] text-gray-500 font-semibold mt-6 max-md:text-lg max-md:mt-8">
                  Here you will learn skills that will always be useful to you!
                </h3>
              </div>
              {siteSettings?.data?.settings?.hideSummerCourses === false ? (
                <div className="mt-4">
                  {/* Replace this with your actual carousel component */}
                  <CarouselRow4 summerCourse={data} />
                </div>
              ) : (
                //  <p className="text " >Summer Courses Is Closed By Admin</p>
                ""
              )}
            </div>
          </div>
        </div>

        <div className="bg-white pb-10">
          <div className="section-width max-w-screen-2xl mx-auto mb-10 px-4 relative z-10 max-2xl:px-36 max-md:px-14 max-sm:px-5 ">
            <div className="" dir="rtl">
              <h2 className="text-[25px] sm:text-[30px] font-bold mb-4 text-gray-800">
                Here is another way of teaching
              </h2>
              <h3 className="text-[19px] sm:text-[19px]  text-gray-800 font-semibold max-md:font-normal mb-4">
                Examples of film school teaching method
              </h3>
            </div>

            <div className="mt-10 w-full">
              <VideoCard videoData={videoData} />
            </div>
          </div>
        </div>

        {/* map section */}
        {/* grid grid-cols-2 max-lg:grid-cols-1 max-w-screen-2xl m-auto pl-[6%] py-10 gap-10 lg:gap-0 */}
        <div className="bg-gradient-to-r from-[#57ACE9] to-[#003BAC] w-full bg-[#343534] ">
          <div className="flex items-center justify-evenly p-4 w-full">
            <Image
              src={mapimg}
              alt="img"
              className="max-sm:w-32 max-md:w-[30%] max-w-[50%] w-[30%] "
            />

            <div className="w-full md:w-[400px] text-center lg:text-start flex items-center text-white">
              <div className="flex flex-col justify-end items-end   ">
                <p class="text-lg md:text-2xl lg:font-bold  text-white text[box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;]  text-end">
                  Filmomdarse is free for{" "}
                  <span className="text-[#F4BD50]">405 cities</span> far away
                  from the center and underserved in the country.
                </p>
                <Link href="/signin">
                  <button
                    className="text-gray-700 bg-white p-2 px-4 rounded-xl lg:font-bold lg:text-lg mt-6 w-fit text-xs sm:font-medium hover:bg-[#e6e6e6] transition-all 
                  hover:drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)] drop-shadow-[0px_6px_0px_rgba(0,0,0,0.25)]"
                  >
                    Check mobile number
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* First grade lessons */}

        <div className="w-[70%] max-md:w-[60%] max-sm:w-[80%]  max-w-screen-2xl mx-auto px-4 max-sm:px-2 py-14 md:py-20 lg:py-28">
          <div dir="rtl">
            <h1 className="text-2xl md:text-4xl text-gray-700 font-bold">
              First grade lessons
            </h1>
            <p className="text-gray-600 pt-4">
              To display the lessons, select the book you want:
            </p>
          </div>
          <div className="mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-2  gap-6 max-md:mt-8 md:mt-14 ">
            {booksData.map((book, index) => (
              <Link
                key={index}
                href={`/secondterm/${book.id}`}
                className=" group rounded-lg overflow-hidden shadow-lg flex flex-col justify-end text-center"
              >
                {/* <Image
                  src={book.src}
                  alt={book.alt}
                  className="w-full h-4/5 object-cover"
                /> */}
                <div
                  className=" p-4 max-sm:p-2 rounded-lg lg:max-h-[16rem] md:max-h-[16rem] sm:max-h-48  shrink-0"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {book.image ? (
                    <Image
                      className="max-md:h-[200px] max-sm:h-36 max-sm:w-32 m-auto rounded-lg shrink-0 object-cover object-top"
                      src={
                        book.image.startsWith("http")
                          ? book.image
                          : `${process.env.NEXT_PUBLIC_BASE_URL}/${book.image}`
                      }
                      height={400}
                      width={360}
                      alt="img"
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex justify-between items-center  bg-white text-gray-600 px-4 py-4 shadow-inner font-bold w-full">
                  <span className="text-[#FEC23B] max-md:hidden font-extraboldbold text-xl group-hover:-translate-x-3 transition-all">
                    <FaArrowLeft />
                  </span>
                  <p className="max-sm:text-sm max-md:px-2 line-clamp-1 ">
                    {book.title.length > 10 ? `${book.title}` : book.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/preschool?tab=tab2" className="">
              <button className="bg-[#FEC23B] w-fit px-7 max-md:px-2 py-3 rounded-lg font-bold text-gray-700 mt-8">
                First Grade BooksAll
              </button>
            </Link>
          </div>
        </div>

        {/* fhklasdfhkj     */}
        <div className="w-[900px] mx-auto mb-10 px-4 max-lg:w-full ">
          <div className="mb-8">
            {stepperCard.map((item, index) => {
              return <HeaderText key={index} data={item} />;
            })}
          </div>

          <ol className="overflow-hidden space-y-6  w-full pl-6 max-sm:p-4">
            {stepperData.map((step, index) => (
              <li
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative flex-1 transition-all duration-500 ease-in-out ${
                  index !== stepperData.length - 1
                    ? `after:content-[''] after:h-full after:inline-block after:absolute max-sm:after:hidden  after:-bottom-14 after:right-[1.6rem] transition-all ${
                        activeStep > index + 1 ? "after:w-2 " : "after:w-0.5"
                      }`
                    : ""
                } ${
                  activeStep >= index + 1
                    ? "after:bg-[#FEC23B]"
                    : "after:bg-[#cecece]"
                }`}
              >
                <div className="flex flex-row-reverse font-medium w-full gap-4">
                  <span
                    className={`w-10 h-10 max-sm:hidden rounded-full flex justify-center items-center mr-3 text-sm mt-4 transition-all duration-500 ease-in-out ${
                      activeStep >= index + 1
                        ? "bg-[#FEC23B] text-black font-semibold border-transparent"
                        : "bg-[#FEC23B]"
                    }`}
                  >
                    {activeStep > index + 1 ? (
                      <svg
                        className="w-5 h-5 stroke-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                          stroke="stroke-current"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </span>
                  <div
                    className={`flex items-center max-sm:items-end max-sm:flex-col-reverse justify-end gap-4  bg-[#F6F6F6] p-6 transition-all pl-20 max-lg:pl-6 w-full rounded-[16px] duration-500 ease-in-out ${
                      activeStep === index + 1
                        ? "border-4 border-[#FEC23B] bg-transparent scale-[1.02]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col">
                      <h4
                        className={`text-lg text-[15px] mb-2 text-end font-bold max-sm:text-sm ${
                          activeStep === index + 1 ? "" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-sm text-end max-sm:text-xs">
                        {step.subtitle}
                      </span>
                    </div>
                    <Image src={step.image} width={46} height={46} alt="img" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* School movies */}

        <div className="section-width max-w-screen-2xl mx-auto px-4 my-12 max-2xl:px-36 max-md:px-14 max-sm:px-5">
          <div className="">
            {schoolCarouselData.map((item, index) => {
              return <BothVideoCard key={index} data={item} />;
            })}
          </div>

          <div className="mt-10">
            <VideoCard videoData={schoolMoviesData} />
          </div>
        </div>

        {/* School film from the teachers */}

        <div className="section-width max-w-screen-2xl mx-auto px-4 my-10 max-2xl:px-36 max-md:px-14 max-sm:px-5">
          <div className="">
            {schoolFilmData.map((item, index) => {
              return <BothVideoCard key={index} data={item} />;
            })}
          </div>

          <div className="mt-10">
            <VideoCard videoData={schoolFilmDataMain} />
          </div>
        </div>

        {/* grid grid-cols-2 max-lg:grid-cols-1 gap-7 items-center w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5
                      mt-[80px] max-w-screen-2xl mx-auto */}
        <div
          className="grid grid-cols-2 max-lg:grid-cols-1 gap-7 items-center w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5
                      mt-[80px] max-w-screen-2xl mx-auto"
        >
          <div>
            <div className=" ">
              <div>
                {studyPoints &&
                  studyPoints.map((data, index) => {
                    return <StudyPoints data={data} key={index} />;
                  })}
              </div>
            </div>
          </div>

          <div className="max-md:mt-[50px] max-xl:w-full">
            <div className="max-md:mt-[50px] max-xl:w-full">
              {subCard &&
                subCard.map((data, index) => {
                  // console.log(data)
                  return <PriceCards key={index} data={data} />;
                })}
            </div>
          </div>
        </div>

        <WhenCard />
        <ArDiv2 />
      </section>
    </>
  );
};

export default Home;
