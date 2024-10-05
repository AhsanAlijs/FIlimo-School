"use client";
import Selector from "@/components/profile/Selector";
import { useUserAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";

const page = () => {
  const [selectedButton, setSelectedButton] = useState("whole");
  const { user, token } = useUserAuth(); // Get the user from AuthContext
  const [childData, setChildData] = useState(null);

  const fetchChildData = async () => {
    try {
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

        const matchedChild = childArray.find(child => child.id === userChildId);

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

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const getFilteredData = (data, days) => {
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - days);

    return data.filter(item => {
      const itemDate = new Date(item.date); // Assuming each item has a 'date' property
      return itemDate >= startDate && itemDate <= now;
    });
  };

  const renderHeading = () => {
    switch (selectedButton) {
      case 'whole':
        return (
          <div className="flex justify-center mx-auto mt-8 mb-6 max-sm:mt-0">
            <div className="pt-10">
              <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
                Program of the year
              </h1>
              <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
            </div>
          </div>
        );
      case '30days':
        return (
          <div className="flex justify-center mt-8 mb-6 max-sm:mt-0">
            <div className="pt-10">
              <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
                Previous works
              </h1>
              <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
            </div>
          </div>
        );
      case '7days':
        return (
          <div className="flex justify-center mt-8 mb-6 max-sm:mt-0">
            <div className="pt-10">
              <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
                This week
              </h1>
              <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderParagraph = () => {
    switch (selectedButton) {
      case 'whole':
        return <p className='mt-6 flex text-center justify-center'>The program has just started and we don’t have the program of the year.</p>;
      case '30days':
        return <p className='mt-6 flex text-center justify-center'>The program has just started and we don’t have the previous work.</p>;
      case '7days':
        return (
          <div className='flex flex-col gap-6 mt-6 text-center justify-center'>
            <h2 className='font-bold'>Summer is short! We will be back soon</h2>
            <p>Go have fun, gain new experiences and skills.</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      {renderHeading()}
      <Selector
        btn1={"the whole"}
        btn2={"Last 30 days"}
        btn3={"last 7 days"}
        handleClick={handleClick}
        selectedButton={selectedButton}
      />
     
      {/* Display filtered data based on selected button */}
      <div className="mt-10">
        <div className="text-center flex justify-center items-center">
        <h2>Quiz Completed: &nbsp; </h2>
        <ul className="font-bold">
          {(childData?.quizCompleted ? getFilteredData(childData.quizCompleted, selectedButton === '7days' ? 7 : (selectedButton === '30days' ? 30 : 365)) : []).length}
        </ul>
        </div>
        <div className="text-center flex justify-center items-center">
        <h2 >Lessons Completed: &nbsp;</h2>
        <ul className="font-bold">
          {(childData?.lessonsCompleted ? getFilteredData(childData.lessonsCompleted, selectedButton === '7days' ? 7 : (selectedButton === '30days' ? 30 : 365)) : []).length}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
