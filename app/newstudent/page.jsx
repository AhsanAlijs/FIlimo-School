'use client';

import Spinner from '@/components/Spinner/Spinner';
import { useUserAuth } from '@/context/AuthContext';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    grade: '',
    email: '',
    password: '',
  });

  const [children, setChildren] = useState([]);
  const [loadingChildren, setLoadingChildren] = useState(true);
  const {token} = useUserAuth()
  const [userToken , setuserToken] = useState(null)  
  
  // useEffect(() => {
  //   if (token) {
  //     setuserToken(token); // Set user data when available
  //   }
  // }, [token]);
  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Fetch children data from API
  const fetchChildren = async () => {
    if(!token) return ;
    setLoadingChildren(true);
    
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/child/`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
      const data = await response.json();
      setChildren(data?.body?.user?.child);
    } catch (error) {
      console.error('Error fetching children data:', error);
    } finally {
      setLoadingChildren(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register-student`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Student information submitted successfully!');
        setFormData({
          fullName: '',
          grade: '',
          email: '',
          password: '',
        }); // Reset the form fields
        fetchChildren(); // Refresh the list after successful submission
      } else {
        alert('Failed to submit student information.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the information.');
    }
  };
  

  // Fetch children data on component mount
  useEffect(() => {
    fetchChildren();
  }, [token]);
console.log(children)
  return (
    <section className="max-w-screen-2xl mx-auto px-4">
      <div className="w-[45%] max-lg:w-[60%] max-sm:w-[80%] mx-auto">
        <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[26px] max-sm:text-[16px] font-bold">
          Enter the new student information
        </h1>
        <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
      </div>
      {children?.length <=3 ?
      
     ( <form onSubmit={handleSubmit} className="flex flex-col w-[490px] max-sm:w-full px-4 mx-auto pt-16 gap-4 max-sm:gap-2">
        <label htmlFor="fullName">Name of the student:</label>
        <input
          className="border-2 border-[#E67D4B] max-sm:mb-2 rounded-3xl p-3 w-[490px] max-sm:w-full bg-transparent focus:outline-none"
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Ahsan"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="grade">Educational base:</label>
        <select
          id="grade"
          name="grade"
          className="border-2 border-[#E67D4B] focus:outline-none w-[490px] max-sm:w-full bg-transparent rounded-3xl p-3"
          value={formData.grade}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Grade</option>
          <option value="first">Preschool</option>
          <option value="first">First Grade</option>
          <option value="second">Second Grade</option>
          <option value="third">Third Grade</option>
          <option value="fourth">Fourth Grade</option>
          <option value="fifth">Fifth Grade</option>
          <option value="sixth">Sixth Grade</option>
          <option value="seventh">Seventh Grade</option>
          <option value="eighth">Eighth Grade</option>
          <option value="ninth">Ninth Grade</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          className="border-2 border-[#E67D4B] max-sm:mb-2 rounded-3xl p-3 w-[490px] max-sm:w-full bg-transparent focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="student@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          className="border-2 border-[#E67D4B] max-sm:mb-2 rounded-3xl p-3 w-[490px] max-sm:w-full bg-transparent focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="font-semibold text-[26px] max-md:text-[20px] max-sm:text-[20px] rounded-[20px] w-full py-4 mt-12 bg-[#F4BD50] focus:outline-none border-none"
        >
          Confirmation
        </button>
      </form>):
      (<p className='text-center mt-16 text-yellow-500'>You have already added max number of students</p>)
    }
      {/* Displaying the list of children */}
      <div className="pt-16 m-auto flex flex-col justify-center items-center">
        <h2 className="text-[#E67D4B] text-[30px] font-bold mb-4">Added Students</h2>
        <div className="flex flex-wrap  flex-col justify-center items-center gap-4">
          {loadingChildren ? (
            <Spinner />
          ) : children?.length > 0 ? (
            children?.map((child) => (
              <div key={child.id} className="bg-white border-2 border-[#E67D4B] rounded-lg p-4 w-[400px] max-md:w-full shadow-lg">
                <h3 className="text-[#E67D4B] text-[20px] font-semibold">Name: {child.fullName}</h3>
                <p className="text-gray-600">Grade: {child.grade}</p>
                <p className="text-gray-600">Lessons Completed: {child.lessonsCompleted.length}</p>
              </div>
            ))
          ) : (
            <p>No students added yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
