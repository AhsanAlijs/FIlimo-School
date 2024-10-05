'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useUserAuth } from '@/context/AuthContext';
import Spinner from "@/components/Spinner/Spinner";
const page = () => {
  const { token } = useUserAuth()
  
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch children data from the API
  useEffect(() => {
    const fetchChildren = async () => {
      // const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/child/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        }); // Replace with your API endpoint
        const data = await response.json();
        setChildren(data); // Adjust according to your API response structure
      } catch (error) {
        console.error("Failed to fetch children:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChildren();
  }, [token]);
  // Handler to set the selected child data
  const handleChildClick = (child) => {
    // setUser(child);
    window.localStorage.setItem('user', JSON.stringify(child.id))
    window.location.href = '/home2';
  };
  return (
    <>
    <section className="max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5">
      <div className="flex justify-center mt-4 max-sm:mt-0">
        <div className=" pt-10 ">
          <h1 className="text-[#E67D4B] text-[30px] max-xl:text-[30px] max-md:text-[20px]  max-lg:text-[22px] font-bold  ">
            Change of education base
          </h1>
          <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          <p className="py-3 max-sm:text-xs text-gray-800 text-center">Select the desired educational level.</p>
        </div>
      </div>
      <div className="w-[900px] bg-[#F4BD50] max-xl:w-full mt-6 mx-auto p-12 max-md:p-8 max-sm:p-6 rounded-3xl">
        <div className="mt-6 flex justify-between items-center ">
          <h1 className="text-[30px] max-md:text-[20px] max-sm:text-[14px] font-bold text-gray-700">
            Want to add another student?
          </h1>
          <div className="bg-[#E67D4B] px-6 py-2 max-sm:text-[11px] max-sm:px-2 max-sm:py-1 max-sm:rounded-2xl rounded-3xl ">
            <p className="text-white">New</p>
          </div>
        </div>
        <p className="mt-6 max-sm:text-[14px]  text-gray-700">
          With this possibility, three students can use one user account at the
          same time.
        </p>
     {  children?.body?.user?.child?.length <= 3 ?  (<div className="flex justify-end mt-6">
          {/* Container with flex and right padding */}
          <Link href='/newstudent' className="font-semibold text-[26px] flex items-center mx-auto gap-6 max-md:text-[20px] max-sm:text-[16px] px-10 max-sm:px-6 rounded-2xl py-4 max-sm:py-2.5 bg-[#FFFFFF] focus:outline-none border-none">
            <span className="text-[#E67D4B]">
              <FaUserAlt />
            </span>
            Add New Student
          </Link>
        </div>):
        null
        }
      </div>
      {/* <div className=" flex flex-col gap-6 mt-10">
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px]  max-sm:px-4  w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className=" font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              Preschool level
            </p>
          </div>

          <div className="    font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50] group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              The first base
            </p>
          </div>

          <div className="   font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50] group-hover:translate-x-2  text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              Second base
            </p>
          </div>

          <div className="    font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50] group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <Link href="/profile">
          <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
            <div className="flex items-center">
              <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
                Third grade
              </p>
            </div>

            <div className="    font-medium flex items-center gap-6 transition-all">
              <span className="text-[18px] max-sm:text-[12px]">Choice</span>
              <span className="text-[#F4BD50] group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </Link>
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              Fourth grade
            </p>
          </div>

          <div className="  font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50]   group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px]  max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              Fifth grade
            </p>
          </div>

          <div className="  font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px] ">Choice</span>
            <span className="text-[#F4BD50]   group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              sixth grade
            </p>
          </div>

          <div className="  font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50]   group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              seventh grade
            </p>
          </div>

          <div className=" font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50]   group-hover:translate-x-2  text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>{" "}
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              eighth grade
            </p>
          </div>

          <div className="    font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50] group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>{" "}
        <div className="border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[900px] max-xl:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-2 max-sm:py-1">
          <div className="flex items-center">
            <p className="font-bold max-sm:px-0 text-[24px] max-sm:text-[16px] max-sm:py-2 px-4 py-4 flex gap-4 text-gray-700">
              ninth grade
            </p>
          </div>

          <div className="    font-medium flex items-center gap-6 transition-all">
            <span className="text-[18px] max-sm:text-[12px]">Choice</span>
            <span className="text-[#F4BD50] group-hover:translate-x-2 text-[30px] max-sm:text-[20px]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
      </div> */}
    </section>
    <section className="max-w-screen-2xl mx-auto px-4">
      <div className="flex justify-center mt-8 max-sm:mt-0">
        <div className="pt-10">
          <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
            Student Change
          </h1>
          <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
      </div>
      <div>
        <p className="text-center text-[18px] max-sm:text-[14px] font-medium mt-6">
          To display the lessons of each student, click on the student's name.
        </p>
      </div>

      {/* Render Loading above student list */}
      <div className="flex flex-col gap-6 mt-10">
        {loading ? (
          <Spinner />
        ) : children?.body?.user?.child.length > 0 ? (
          children?.body?.user?.child.map((child) => (
            <div
              key={child.id}
              onClick={() => handleChildClick(child)}
              className="cursor-pointer border-2 group border-[#E67D4B] text-[30px] max-lg:text-[20px] max-sm:text-[15px] max-sm:px-4 w-[1270px] max-lg:w-full mx-auto rounded-3xl flex justify-between items-center px-10 py-4"
            >
              <div className="flex items-center">
                <p className="font-bold max-sm:px-0 max-sm:py-1 px-4 py-4 flex gap-4">
                  {child.fullName}
                  <span className="text-[#F4BD50] font-medium">
                    ({child.grade})
                  </span>
                </p>
              </div>
              <span className="text-[#F4BD50] w-[15px] group-hover:translate-x-2 transition-all">
                <IoIosArrowForward />
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-[18px] max-sm:text-[14px] font-medium mt-6">
            No students found.
          </p>
        )}
      </div>
     



    </section>
    </>
  );
};

export default page;