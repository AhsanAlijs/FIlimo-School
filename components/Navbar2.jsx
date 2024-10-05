"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilePic from "@/assets/home2/profilePic.png";
import filimoLogo from "@/assets/home2/filimo-logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { PiIdentificationCardLight } from "react-icons/pi";
import { FaChalkboardTeacher, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { IoIosArrowForward } from "react-icons/io";
import { useUserAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CardContext";
import { RiShoppingCartLine } from "react-icons/ri";
import GoogleTranslate from "./GoogleTranslate";
import { GoGift } from "react-icons/go";
const Navbar2 = () => {
  const { token } = useUserAuth();
  const pathname = usePathname();
  const { user } = useUserAuth(); // Get the user from AuthContext
  const [childData, setChildData] = useState(null);
  const { cart } = useCart();


  const fetchChildData = async () => {
    try {
      // const storedChildId = window.localStorage.getItem('user');
      // const userChildId = storedChildId ? JSON.parse(storedChildId) : null;
      const userChildId = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : user.body.user.child[0];

      if (userChildId && user) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/child/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );
        const data = await response.json();
        const childArray = data.body?.user?.child || [];

        // Find the child with the matching ID
        const matchedChild = childArray.find(
          (child) => child.id === userChildId
        );

        setChildData(matchedChild || null); // Set the child data if found, otherwise set null
      }
    } catch (error) {
      console.error("Failed to fetch child data:", error);
    }
  };

  useEffect(() => {
    fetchChildData(); // Fetch child data on component mount

    const handleStorageChange = (event) => {
      if (event.key === "user") {
        fetchChildData(); // Fetch new data if 'user' key changes in localStorage
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [user, token]); // Re-run the effect when user or token changes

  useEffect(() => {
    fetchChildData(); // Fetch data initially on mount
  }, []); // Empty dependency array ensures this runs once on mount

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
      <div className="max-sm:hidden border-b-1 p-3 border-[#818181]  w-full max-2xl:px-36 max-md:px-14 max-sm:px-5">
        <div className=" flex items-center section-width justify-between max-xl:flex-row-reverse max-w-screen-2xl mx-auto">
          <div className="text-[#343534]">
            <Link
              href="/profile"
              className=" flex items-center gap-4 max-xl:flex-row-reverse"
            >
              <Image src={profilePic} width={59} height={59} alt="img" />

              <div>
                {childData ? (
                  <div>
                    <h1 className="text-lg">{childData.fullName}</h1>
                    <p className="text-gray-500"> {childData.grade}</p>
                    {/* Display other child data as needed */}
                  </div>
                ) : (
                  <div className="font-light text-[14px]">
                    Please SignIn.
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Navigation Links */}

          <ul className="flex items-center gap-7 max-xl:hidden">
            <Link href="/home2">
              <li
                className={`text-[14px] font-semibold text-gray-600 ${pathname === "/home2" ? "text-[#E67D4B]" : ""
                  }`}
              >
                <GrHomeRounded className="text-[27px] mx-auto mb-2" />
                Home
              </li>
            </Link>
            <Link href="/textbook">
              <li
                className={`text-[14px] font-semibold text-gray-600 ${pathname === "/textbook" ? "text-[#E67D4B]" : ""
                  }`}
              >
                <PiIdentificationCardLight className="text-[33px] mx-auto mb-1" />
                Lessons
              </li>
            </Link>
            <Link href="/degree">
              <li
                className={`text-[14px] font-semibold text-gray-600 ${pathname === "/degree" ? "text-[#E67D4B]" : ""
                  }`}
              >
                <FaChalkboardTeacher className="text-[27px] mx-auto mb-2" />
                Degree
              </li>
            </Link>
            {/* <Link href="/award">
              <li
                className={`text-[14px] font-semibold text-gray-600 ${
                  pathname === "/awards" ? "text-[#E67D4B]" : ""
                }`}
              >
                <GoGift className="text-[27px] mx-auto mb-2" />
                Awards
              </li>
            </Link> */}
            <Link href="/profile">
              <li
                className={`text-[14px] font-semibold text-gray-600 ${pathname === "/profile" ? "text-[#E67D4B]" : ""
                  }`}
              >
                <FaRegUser className="text-[27px] mx-auto mb-2" />
                Profile
              </li>
            </Link>


          </ul>

          <div className="max-xl:hidden flex gap-5 items-center">
            <div className="w-fit flex items-center gap-4 left-4" onClick={handleClose}>
              <button onClick={handleButtonClick}
                className="text-[14px] max-lg:text-sm max-lg:hidden max-lg:px-2 max-lg:py-2 bg-[#5FD997] transition-all hover:bg-[#59c98d] hover:drop-shadow-[0px_0px_0px_rgb(72,199,130)] drop-shadow-[0px_5px_0px_rgb(72,199,130)] px-[16px] py-[8px] flex items-center gap-2 font-bold text-[#444444] rounded-xl">Translate</button>
              <div className="absolute top-[-100px]">
                {isTranslateVisible && <GoogleTranslate />}
              </div>
            </div>
            <Link href="/buysubscription" className="size-10">
              <button className="relative">
                <RiShoppingCartLine className="size-10 text-neutral-700" />
                {cart.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full size-4 absolute top-0 right-0">
                    {cart.length}
                  </span>
                )}
              </button>
            </Link>
          </div>

          <div className="hidden max-xl:block">
            <Sheet>
              <SheetTrigger>
                <span className="hidden max-xl:block">
                  <GiHamburgerMenu className="text-2xl" />
                </span>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription className="mt-8 flex items-center flex-col max-sm:items-start max-sm:mt-0">
                    <Image src={filimoLogo} width={191} height={26} />
                    <div className="flex justify-center mt-12 max-sm:mt-16 w-full">
                      <ul className="flex items-start gap-12 flex-col w-full">
                        <Link
                          className={`flex justify-between items-center group w-full transition-all ${pathname === "/home2" ? "text-[#E67D4B]" : ""
                            }`}
                          href="/home2"
                        >
                          <SheetClose>
                            <li
                              className={`flex items-center gap-2 text-[16px] `}
                            >
                              <GrHomeRounded className="text-[32px]" />
                              Home{" "}
                            </li>
                          </SheetClose>
                          <IoIosArrowForward className="text-2xl group-hover:translate-x-2 transition-all" />
                        </Link>
                        <Link
                          className={`flex justify-between items-center group w-full transition-all ${pathname === "/textbook" ? "text-[#E67D4B]" : ""
                            }`}
                          href="/textbook"
                        >
                          <SheetClose>
                            <li
                              className={`flex items-center gap-2 text-[16px] `}
                            >
                              <PiIdentificationCardLight className="text-[45px]" />
                              Lessons{" "}
                            </li>
                          </SheetClose>
                          <IoIosArrowForward className="text-2xl group-hover:translate-x-2 transition-all" />
                        </Link>
                        <Link
                          className={`flex justify-between items-center group w-full transition-all ${pathname === "/degree" ? "text-[#E67D4B]" : ""
                            }`}
                          href="/degree"
                        >
                          <SheetClose>
                            <li
                              className={`flex items-center gap-2 text-[16px] `}
                            >
                              <FaChalkboardTeacher className="text-[40px]" />
                              Degree{" "}
                            </li>
                          </SheetClose>
                          <IoIosArrowForward className="text-2xl group-hover:translate-x-2 transition-all" />
                        </Link>
                        <Link
                          className={`flex justify-between items-center group w-full transition-all ${pathname === "/profile" ? "text-[#E67D4B]" : ""
                            }`}
                          href="/profile"
                        >
                          <SheetClose>
                            <li
                              className={`flex items-center gap-2 text-[16px] `}
                            >
                              <FaRegUser className="text-[35px]" />
                              Profile{" "}
                            </li>
                          </SheetClose>
                          <IoIosArrowForward className="text-2xl group-hover:translate-x-2 transition-all" />
                        </Link>
                        <div className="max-xl:hidden flex gap-5 items-center">
                          <div className="w-fit flex items-center gap-4 left-4" onClick={handleClose}>
                            <button onClick={handleButtonClick}
                              className="bg-gradient-to-r max-lg:hidden from-[#E67D4B] max-lg:px-2 max-lg:py-2 to-[#F4BD50] py-[8px] flex justify-center items-center gap-2 font-semibold text-white rounded-full relative text-[13px] max-lg:text-sm w-[7rem]">Translate</button>
                            <div className="absolute top-[-100px]">
                              {isTranslateVisible && <GoogleTranslate />}
                            </div>
                          </div>

                        </div>





                        <Link href="/buysubscription" className="size-10">
                          <button className="relative">
                            <RiShoppingCartLine className="size-10 text-neutral-700" />
                            {cart.length > 0 && (
                              <span className="bg-red-500 text-white text-xs rounded-full size-4 absolute top-0 right-0">
                                {cart.length}
                              </span>
                            )}
                          </button>
                        </Link>
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 flex justify-around py-2  sm:hidden">
        <Link href="/home2">
          <div className={`flex flex-col justify-center items-center ${pathname === "/home2" ? "text-[#E67D4B]" : "text-gray-600"
                } `}>
            <GrHomeRounded
              className='text-2xl'
            />
            <p>Home</p>
          </div>
          <div className={`${pathname === "/home2" ? " border-b-8  border-[#E67D4B] rounded-t-2xl transition-all" : "hidden"} `}></div>
        </Link>
        <Link href="/textbook">
          <div className={`flex flex-col justify-center items-center ${pathname === "/textbook" ? "text-[#E67D4B]" : "text-gray-600"
                }`} >
            <PiIdentificationCardLight
              className='text-2xl '
            />
            <p>Lessons</p>
          </div>
          <div className={`${pathname === "/textbook" ? " border-b-8  border-[#E67D4B] rounded-t-2xl transition-all" : "hidden"} `}></div>
        </Link>

        <Link href="/degree">
          <div className={`flex flex-col  justify-center items-center ${pathname === "/degree" ? "text-[#E67D4B]" : "text-gray-600"}`}>
            <FaChalkboardTeacher
              className='text-2xl' 
            />
            <p>Degree</p>
          </div>
          <div className={`${pathname === "/degree" ? " border-b-8  border-[#E67D4B] rounded-t-2xl transition-all" : "hidden"} `}></div>
        </Link>

        <Link href="/profile">
          <div className={`flex flex-col justify-center items-center ${pathname === "/profile" ? "text-[#E67D4B]" : "text-gray-600"} `}>
            <FaRegUser
              className='text-2xl'
            />
            <p>Profile</p>
          </div>
          <div className={`${pathname === "/profile" ? " border-b-8  border-[#E67D4B] rounded-t-2xl transition-all" : "hidden"} `}></div>
        </Link>
      </div>

    </>
  );
};

export default Navbar2;