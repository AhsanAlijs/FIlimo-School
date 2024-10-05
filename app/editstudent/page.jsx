'use client'
import Spinner from "@/components/Spinner/Spinner";
import { useUserAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { user, token } = useUserAuth();
  const [formData, setFormData] = useState({ fullName: "" });
  const [loading, setLoading] = useState(false);
  const [childData, setChildData] = useState(null);

  const fetchChildData = async () => {
    try {
      const userChildId = localStorage.getItem('user') 
        ? JSON.parse(localStorage.getItem('user')) 
        : user.body.user.child[0];

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
        setFormData({ fullName: matchedChild?.fullName || "" }); // Set initial form data
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
    if (user) {
      // User data is available
      setFormData({
        fullName: user?.body?.user?.fullName || "", // Ensure no errors if user object is not fully defined
      });
    }
  }, [user]); // Dependency on user data

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // If user data is not available yet, show a loading state
  if (!user) {
    return <Spinner />
  }

  return (
    <section className="max-w-screen-2xl mx-auto px-4">
      <div className="w-[30%] max-lg:w-[60%] max-sm:w-[80%] mx-auto pt-10">
        <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px] max-md:text-[20px] max-lg:text-[26px] font-bold">
          Edit student name
        </h1>
        <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-[490px] max-sm:w-full px-4 mx-auto pt-16 gap-4 max-sm:gap-2">
        <label htmlFor="firstName">Your FullName:</label>
        <input
          id="firstName"
          name="fullName"
          className="border-2 border-[#E67D4B] max-sm:mb-2 rounded-3xl p-3 w-[490px] max-sm:w-full bg-transparent focus:outline-none"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <button
          type="submit"
          className="font-semibold text-[26px] max-md:text-[20px] max-sm:text-[20px] rounded-[20px] w-full py-4 mt-12 bg-[#F4BD50] focus:outline-none border-none"
          disabled={loading}
        >
          {loading ? "Saving..." : "Edit Information"}
        </button>
      </form>
    </section>
  );
};

export default Page;
