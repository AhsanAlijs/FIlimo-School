'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilepic from "../../assets/profile/dp.png";
import { BiSolidEditAlt } from "react-icons/bi";
import { PiPencilSimpleLine, PiStudentBold } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { PiDevicesBold } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useUserAuth } from "@/context/AuthContext";
const page = () => {
  // const {  } = useUserAuth();
  const { token, user, signout } = useUserAuth(); // Get the user from AuthContext
  const [childData, setChildData] = useState(null);

  const fetchChildData = async () => {
    try {
      // const storedChildId = window.localStorage.getItem('user');
      // const userChildId = storedChildId ? JSON.parse(storedChildId) : null;
      const userChildId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : user.body.user.child[0];

      if (userChildId && user) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/child/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        const data = await response.json();
        const childArray = data.body?.user?.child || [];



        console.log(childArray);
        console.log(userChildId);

        // Find the child with the matching ID
        const matchedChild = childArray.find(child => child.id === userChildId);

        console.log(matchedChild);
        setChildData(matchedChild || null); // Set the child data if found, otherwise set null
      }
    } catch (error) {
      console.error('Failed to fetch child data:', error);
    }
  };

  useEffect(() => {
    fetchChildData(); // Fetch child data on component mount

    const handleStorageChange = (event) => {
      if (event.key === 'user') {
        fetchChildData(); // Fetch new data if 'user' key changes in localStorage
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [user, token]); // Re-run the effect when user or token changes

  useEffect(() => {
    fetchChildData(); // Fetch data initially on mount
  }, []); // Empty dependency array ensures this runs once on mount
  console.log(childData)
  return (
    <section className="max-w-screen-2xl mx-auto pt-10 max-2xl:px-24 max-md:px-14 max-sm:px-5 pb-20">
      <div className="flex justify-center">
        <div className="w-fit flex flex-col items-start px-4 mx-auto mt-4 ">
          <h1 className="lg:text-[40px] md:text-[30px] max-[765px]:text-[30px] font-bold max-sm:text-2xl text-[#E67D4B]">
            My Profile
          </h1>
          <div className="h-[12px]  w-[70px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] "></div>
        </div>
      </div>
      <div className="bg-[#F4BD50] w-[500px] mt-6 max-lg:w-full mx-auto border-4 border-[#EFEFEF] drop-shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] rounded-3xl py-6">
        <div className="flex justify-evenly items-center max-md:block">
          <div className="flex justify-center items-center">
            <Image src={profilepic} className="h-auto w-[100px]" alt="img" />
          </div>
          {childData ? (
            <div className="flex flex-col gap-6 max-lg:justify-evenly max-lg:px-4 pt-10 justify-center max-lg:block">
              <div className="flex flex-col gap-4 max-sm:gap-2">
                <div className="flex gap-4">
                  <label>Your Name:</label>
                  <p>{childData.fullName ? childData.fullName : 'Data not available'}</p>
                </div>
                <div className="flex gap-4">
                  <label>Grade:</label>
                  <p>{childData.grade}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 max-sm:gap-2">
                <div className="flex gap-2">
                  <label>Quizes Completed:</label>
                  <input
                    type="text"
                    className="border-2  bg-white max-sm:mb-3 rounded-3xl p-2 max-sm:p-1 max-sm:px-2 w-[100px] max-lg:w-full bg-transparent focus:outline-none"
                    placeholder="Pakistan"
                    value={childData.quizCompleted.length}
                    disabled
                  />
                </div>
                <div className="flex gap-2">
                  <label>Lessons Completed:</label>
                  <input
                    type="text"
                    className="border-2  bg-white max-sm:mb-3 rounded-3xl p-2 max-sm:p-1 max-sm:px-2 w-[100px] max-lg:w-full bg-transparent focus:outline-none"
                    placeholder="Karachi"
                    value={childData.lessonsCompleted.length}
                    disabled
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="font-light text-[14px]">No child data found.</div>
          )}
        </div>
      </div>



      <div className=" flex flex-col gap-6 mt-10">
        <Link href="/editprofile" className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px]  max-lg:w-full mx-auto rounded-3xl  px-10 py-2 max-sm:py-1">

          <div className="flex  justify-between items-center">
            <div className="flex items-center text-gray-700">
              <span className="text-[28px] text-gray-400 max-sm:text-[20px] rounded-full p-2">
                <PiPencilSimpleLine className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Edit profile</p>
            </div>

            <div className="text-[#F4BD50]   group-hover:translate-x-2 transition-all">
              <IoIosArrowForward className="max-sm:text-3xl  font-bold" />
            </div>
          </div>

        </Link>
        <Link href="/newstudent" className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px]  max-lg:w-full mx-auto rounded-3xl  px-10 py-2 max-sm:py-1">
          <div className="flex  justify-between items-center">
            <div className="flex items-center text-gray-700">
              <span className=" text-[28px] text-gray-400 max-sm:text-[16px] rounded-full p-2">
                <PiStudentBold className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Add student</p>
            </div>

            <span className="text-[#F4BD50]  group-hover:translate-x-2 transition-all">
              <IoIosArrowForward  className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        <Link href="/parents" className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px]  max-lg:w-full mx-auto rounded-3xl  px-10 py-2 max-sm:py-1">
          <div className="flex  justify-between items-center">
            <div className="flex items-center text-gray-700">
              <span className=" text-[28px] text-gray-400 max-sm:text-[16px] rounded-full p-2">
                <RiParentLine  className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Parents Office</p>
            </div>

            <span className="text-[#F4BD50] group-hover:translate-x-2 transition-all ">
              <IoIosArrowForward className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        <Link href="/profilepassword" className="border-2 group border-gray-400 text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px]  max-lg:w-full mx-auto rounded-3xl  px-10 py-2 max-sm:py-1">
          <div className="flex  justify-between items-center">
            <div className="flex items-center text-gray-700">
              <span className=" text-[28px] text-gray-400 max-sm:text-[16px] rounded-full p-2">
                <PiDevicesBold className="max-sm:text-3xl " />
              </span>
              <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">My devices</p>
            </div>

            <span className="text-[#F4BD50] group-hover:translate-x-2 transition-all">
              <IoIosArrowForward className="max-sm:text-3xl " />
            </span>
          </div>
        </Link>
        <div className="border-2 group border-gray-400 cursor-pointer text-[30px] max-md:text-[20px] max-sm:text-[15px] max-sm:px-2 w-[600px]  max-lg:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center text-gray-700" onClick={signout}>
            <span className=" text-[28px] text-gray-400 max-sm:text-[16px] rounded-full p-2">
              <PiSignOutBold className="max-sm:text-3xl " />
            </span>
            <p className="font-bold text-[24px] max-sm:text-[18px] px-4 py-4">Sign out of the user account</p>
          </div>
          <span className="text-[#F4BD50]  group-hover:translate-x-2 transition-all">
            <IoIosArrowForward className="max-sm:text-3xl " />
          </span>
        </div>
      </div>
    </section>
  );
};

export default page;