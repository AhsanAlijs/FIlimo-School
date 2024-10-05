"use client";
import { GoDotFill } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { FaBriefcase } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import homeLogoActive from "../assets/navbar/home.png";
import homeLogo from "../assets/navbar/simpleHome.png";
import handBag from "../assets/navbar/hand-bag.png";
import handBagActive from "../assets/navbar/handBag-active.png";
import logo from "../assets/navbar/logo.png";
import logout from "../assets/navbar/logout.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import navicon from "@/assets/navbar/nav-icon.svg";
import arrow from "@/assets/navbar/arrow.svg";
import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GoogleTranslate from "./GoogleTranslate";
import { TbLogin } from "react-icons/tb";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false); // Set initial state to false
  const divRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);
  const pathname = usePathname();
  console.log(pathname);

  const matchingRoutes = [
    "/arblogarticle/ar-child",
    "/arblogarticle/ar-child2",
    "/arblogarticle/ar-entertainment",
    "/arblogarticle/ar-question",
    "/arblogarticle/ar-scientific-game",
    "/arblogarticle/ar-teacher",
    "/arblogarticle/ar-teenager",
    "/arblogarticle",
    "/blogs",
  ];
  // Check if pathname matches any route
  const shouldShowDiv = matchingRoutes.some((route) => {
    // Debugging: Log route and pathname comparison
    console.log(`Checking if '${pathname}' includes '${route}'`);
    return pathname.match(route);
  });

  // Debugging: Log the result of matching
  useEffect(() => {
    console.log("Does pathname match any route?", shouldShowDiv);
  }, [shouldShowDiv]);

  // translate  api code

  const [isTranslateVisible, setIsTranslateVisible] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Corrected the typo
    setIsTranslateVisible(true);
  };

  const handleClose = () => {
    setIsTranslateVisible(false);
  };
  return (
    <>
      <div className="w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5 ">
        <nav className="flex flex-row-reverse justify-between max-w-screen-2xl mx-auto items-center  p-4 px-6 max-md:w-full">
          {!shouldShowDiv ? (
            <div className="flex flex-row-reverse items-center lg:gap-6 xl:gap-10 max-lg:hidden">
              <Link
                href="/"
                className={`flex flex-col items-center gap-2 cursor-pointer max-md:text-[8px] max-xl:text-sm  ${
                  pathname === "/" ? "text-[#E67D4B]" : "text-[#343534]"
                }`}
              >
                <Image
                  className="max-lg:w-4 max-xl:w-6"
                  src={pathname === "/" ? homeLogoActive : homeLogo}
                  width={30}
                  height={35}
                  alt="Home"
                />
                Home
              </Link>
              <Link
                href="/preschool"
                className={`flex flex-col items-center gap-2 cursor-pointer max-md:text-[8px] max-xl:text-sm ${
                  pathname === "/preschool"
                    ? "text-[#E67D4B]"
                    : "text-[#343534]"
                }`}
              >
                <Image
                  className="max-lg:w-4 max-xl:w-6"
                  src={pathname === "/preschool" ? handBagActive : handBag}
                  width={30}
                  height={35}
                  alt="Educational bases"
                />
                Educational bases
              </Link>
            </div>
          ) : (
            <div className="">
              <div className="flex justify-center items-center gap-[20px] max-sm:gap-[10px]">
                <Image src={navicon} alt="" width={40} height={40} />
                <div
                  ref={buttonRef}
                  className="flex gap-5 max-sm:gap-2 justify-center items-center cursor-pointer"
                  onClick={toggleVisibility}
                >
                  <p>Articles</p>
                  <Image src={arrow} height={7} width={12} alt="Toggle" />
                </div>
              </div>

              {isVisible && (
                <div
                  ref={divRef}
                  className="bg-[#F4BD50] p-5 max-sm:p-2 max-sm:px-4 absolute mt-5 z-50 text-white text-[20px] max-sm:text-[14px]"
                >
                  <ul className="list-none grid grid-cols-3 max-sm:grid-cols-2 gap-x-5 gap-y-3">
                    <Link href="/arblogarticle">
                      <li>Step by step</li>
                    </Link>
                    <Link href="/arblogarticle/ar-question">
                      <li>Sample Questions</li>
                    </Link>
                    <Link href="/arblogarticle/ar-entertainment">
                      <li>Entertainment</li>
                    </Link>
                    <Link href="/arblogarticle/ar-scientific-game">
                      <li>Scientific Game</li>
                    </Link>
                    <Link href="/arblogarticle/ar-child">
                      <li>Child</li>
                    </Link>
                    <Link href="/arblogarticle/ar-teenager">
                      <li>Teenager</li>
                    </Link>
                    <Link href="/arblogarticle/ar-child2">
                      <li>Child</li>
                    </Link>
                    <Link href="/arblogarticle/ar-teacher">
                      <li>Teachers</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="text-3xl max-lg:block hidden">
            <Sheet>
              <SheetTrigger>
                <RxHamburgerMenu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex justify-center">
                      <Image
                        src={logo}
                        width={200}
                        height={200}
                        className="max-lg:w-40"
                        alt="Logo"
                      />
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col">
                      <ul className=" text-center">
                        <li className="flex items-center gap-x-4 text-xl font-semibold text-black  mt-2">
                          <FaHome />
                          <SheetClose asChild>
                            <Link href="/">home</Link>
                          </SheetClose>
                        </li>
                        <li className="flex items-center gap-x-6 text-xl font-semibold text-black mt-4 ">
                          <FaBriefcase />
                          <SheetClose asChild>
                            <Link href="/preschool">Educational bases</Link>
                          </SheetClose>
                        </li>
                        <ul className="grid grid-cols-2 py-6">
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Preschool Level</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">The first base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Second base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Third base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Fourth base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Fifth base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Sixth base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Seventh base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Eight base</Link>
                            </SheetClose>
                          </li>
                          <li className="flex items-center gap-x-6 mt-2 ">
                            <span className="text-[#F4BD50]">
                              <GoDotFill />
                            </span>
                            <SheetClose asChild>
                              <Link href="/preschool">Ninth base</Link>
                            </SheetClose>
                          </li>
                        </ul>
                        <li className="flex items-center gap-x-6 text-xl font-semibold text-black mt-2 ">
                          <FaDownload />
                          Download the Application
                        </li>
                        <li className="flex items-center gap-x-6 text-xl font-semibold text-black mt-4 ">
                          <TiDocumentText />
                          (Special for parents) blog
                        </li>
                        <li className="flex items-center gap-x-6 text-xl font-semibold text-black mt-4 ">
                          <MdPhoneInTalk />
                          <SheetClose asChild>
                            <Link href="/contact">contact us</Link>
                          </SheetClose>
                        </li>
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/">
            <Image
              src={logo}
              width={200}
              height={200}
              className="max-lg:w-40"
              alt="Logo"
            />
          </Link>

          <div
            className="w-fit flex  items-center gap-4 left-4"
            onClick={handleClose}
          >
            <button
              onClick={handleButtonClick}
              className=" text-[14px] max-lg:text-sm max-lg:hidden max-lg:px-2 max-lg:py-2 bg-[#5FD997] transition-all hover:bg-[#59c98d] hover:drop-shadow-[0px_0px_0px_rgb(72,199,130)] drop-shadow-[0px_5px_0px_rgb(72,199,130)] px-[16px] py-[8px] flex items-center gap-2 font-bold text-[#444444] rounded-xl"
            >
              Translate
            </button>
            <div className="absolute top-[-100px]">
              {isTranslateVisible && <GoogleTranslate />}
            </div>
            {/* text-[12px] max-lg:text-sm  bg-gradient-to-r max-lg:hidden from-[#E67D4B] max-lg:px-2 max-lg:py-2 to-[#F4BD50] px-[16px] py-[8px] flex items-center gap-2 font-semibold text-white rounded-full */}
            <Link href="/signin">
              <button className=" text-[14px] max-lg:text-sm max-lg:hidden max-lg:px-2 max-lg:py-2 bg-[#5FD997] transition-all hover:bg-[#59c98d] hover:drop-shadow-[0px_0px_0px_rgb(72,199,130)] drop-shadow-[0px_5px_0px_rgb(72,199,130)] px-[16px] py-[8px] flex items-center gap-2 font-bold text-[#444444] rounded-xl">
                Entering School
                <TbLogin className="text-[#444444] text-2xl" />
              </button>
            </Link>
          </div>

          <Link href="/signin" className="hidden max-lg:block">
            <button className="bg-gradient-to-r rounded-full from-[#E67D4B] max-lg:px-4 max-lg:py-4 hidden max-lg:block to-[#F4BD50] hover:bg-green-700">
              <Image
                className="max-lg:w-5 max-sm:w-4 invert "
                src={logout}
                width={26}
                height={26}
                alt="Logout"
              />
            </button>
          </Link>

          {/* Mobile Bottom Navigation */}
          <div dir="rtl" className="fixed bottom-0 left-0 right-0 bg-white shadow-lg w-full flex justify-around py-2 sm:hidden z-50">
            <Link href="/signin">
              <button className="  w-full text-[14px] max-lg:text-sm max-md:hidden max-sm:block max-lg:px-20 max-lg:py-2 bg-[#5FD997] transition-all hover:bg-[#59c98d] hover:drop-shadow-[0px_0px_0px_rgb(72,199,130)] drop-shadow-[0px_5px_0px_rgb(72,199,130)] px-[16px] py-[8px] flex items-center gap-2 font-bold text-[#444444] rounded-xl">
                <span className="flex gap-2">
                  <span className="" dir="rtl" >Entering School</span>
                  <TbLogin className="text-[#444444] text-xl" />
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
