"use client";
import { useUserAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    fullName: "",
    email: "",
    password: "",
    role: "",
    grade: "",
  });
  const [errors, setErrors] = useState({});
  const { signup } = useUserAuth();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.mobile) formErrors.mobile = "Mobile number is required";
    if (!formData.fullName) formErrors.fullName = "Full name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (!formData.role) formErrors.role = "Role is required";
    if (!formData.grade) formErrors.grade = "Grade is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      try {
        // Example API call for signup
        console.log(formData);
        signup(formData);
      } catch (error) {
        console.error("Signup error:", error.message);
      }
    }
  };

  return (
    <section className="my-10 md:h-[70vh] flex justify-center items-center max-w-screen-2xl mx-auto max-2xl:px-36 max-md:px-14 max-sm:px-5 ">
      <div className="w-[1000px] lg:w-[70%] mx-auto h-auto">
        <form
          onSubmit={handleSubmit}
          className=" border-gray-500 rounded-3xl border-[2px] px-5 py-5 md:p-5 sm:p-16"
        >
          <div className="w-[70%] mx-auto">
            <h1 className="text-[#E67D4B] text-[25px] max-md:text-[20px] max-sm:text-[16px] font-bold text-center">
              Student's Entrance to Filimo School
            </h1>
            {/* <div className="bg-[#F4BD50] w-[10%] h-2 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div> */}
          </div>
          <p className="text-center mt-4 text-[14px] md:text-[16px] text-gray-700">
            Enter your details to register/login:
          </p>

          <div className="text-center mt-8">
            <input
              name="mobile"
              className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              placeholder="Your Mobile Number"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}

            <input
              name="fullName"
              className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              placeholder="Full Name"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}

            <input
              name="email"
              className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              name="password"
              className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <input
              name="role"
              className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              placeholder="Role (e.g., admin)"
              type="text"
              value={formData.role}
              onChange={handleInputChange}
            />
            {errors.role && <p className="text-red-500">{errors.role}</p>}

            <input
              name="grade"
              className="border-[#E67D4B] border-[1px] rounded-lg px-4 py-2 focus:outline-none w-[95%] sm:w-[40%] md:w-[44%] mx-3 max-sm:text-sm max-sm:px-2 mb-4"
              placeholder="Grade (e.g., ninth)"
              type="text"
              value={formData.grade}
              onChange={handleInputChange}
            />
            {errors.grade && <p className="text-red-500">{errors.grade}</p>}

            <div className="text-center mt-4">
              <button
                type="submit"
                className="px-4 py-3 rounded-full bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white"
              >
                Next Level
              </button>
            </div>
          </div>
          <p className="flex items-center justify-center gap-3 mt-5">Already have an account ? <Link href="/signin" className="text-[#E67D4B] font-bold"> Sign In</Link></p>
        </form>
      </div>
    </section>
  );
};

export default page;
