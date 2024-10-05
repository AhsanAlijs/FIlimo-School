"use client";
import { HeaderText } from "@/components/preschool";
import React, { useEffect, useState } from "react";
import { books, headerCont } from "@/utils/arrays/textbook";
import Books from "@/components/Textbooks/Books";
import * as Tabs from "@radix-ui/react-tabs";
import SKill from "@/components/Textbooks/SKill";
import Spinner from "@/components/Spinner/Spinner";
import { useUserAuth } from "@/context/AuthContext";
const page = () => {

  const [data, setData] = useState({ bookData: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, token, siteSettings } = useUserAuth();
  // const { token } = useUserAuth();
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [childData, setChildData] = useState(null);
  console.log('this is child data', childData?.grade)
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

        // Find the child with the matching ID
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

  const fetchData = async () => {
    try {
      const response = await fetch(`${BaseUrl}/courses/class/${childData?.grade}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const booksData = await response.json();
      setData({ bookData: booksData?.body?.courses });

    } catch (error) {
      setError(error.message || 'Data not found!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [childData?.grade]);





  if (loading) return <Spinner />;
  if (error)
    return (
      <p className="flex items-center justify-center h-screen text-3xl font-extrabold text-[#ff7536] ">
        {error}
      </p>
    );




  console.log('this is book data', data)
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mt-4">
          {childData ? (
            headerCont.map((data, index) => (
              <HeaderText data={data} key={index} grade={childData} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>

      <Tabs.Root defaultValue="tab1" orientation="vertical">
        <div className=" max-md:py-5 pt-6 px-5 flex justify-center items-center border-b-2 border-gray-200 max-w-screen-2xl  mx-auto">
          <Tabs.List
            aria-label="tabs example"
            className="flex gap-14 max-md:gap-9 justify-start max-w-screen-2xl mx-auto overflow-x-auto whitespace-nowrap"
          >
            <Tabs.Trigger
              value="tab1"
              className="  py-2   transition-all px-4 max-md:px-4 data-[state=active]:border-b-8  data-[state=active]:border-b-[#F4BD50]  text-[20px] max-md:text-[16px] font-semibold"
            >
              Skill courses
            </Tabs.Trigger>
            <Tabs.Trigger
              id="text"
              value="tab2"
              className="  py-2  transition-all px-4 max-md:px-4  data-[state=active]:border-b-8  data-[state=active]:border-b-[#F4BD50]  text-[20px] max-md:text-[16px] font-semibold"
            >
              Textbooks
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <Tabs.Content value="tab1" className="pb-10">
          {
            siteSettings?.data?.settings?.hideSummerCourses !==true?
            <SKill />
            :
            ""
          }
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <div className="max-w-screen-2xl mx-auto pb-20">
            <Books books={data?.bookData} />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );

};

export default page;