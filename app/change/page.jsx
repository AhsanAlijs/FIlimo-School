'use client'
import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useUserAuth } from '@/context/AuthContext';
import { useRouter } from "next/navigation";
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
      {
        children?.body?.user?.child?.length !== 3 ? (
          <button className="font-semibold text-[26px] flex items-center justify-center gap-6 max-md:text-[20px] mx-auto max-sm:px-6 px-10 rounded-2xl max-sm:text-[20px] py-4 mt-12 bg-[#F4BD50] focus:outline-none border-none">
            <span className="text-[#E67D4B]">
              <FaUserAlt />
            </span>
            Add New Student
          </button>
        ) : null
      }



    </section>
  );
};

export default page;
