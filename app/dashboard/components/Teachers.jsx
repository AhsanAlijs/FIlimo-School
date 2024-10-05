"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TableDemo } from "./TableDemo";
import { useUserAuth } from "@/context/AuthContext";
import { TeacherDataTable } from "./TeacherDataTable";

const Teachers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, token } = useUserAuth();

  // Updated refs for the new fields
  const fullNameRef = useRef();
  const roleRef = useRef();
  const phoneNumberRef = useRef(); // Replaced emailRef with phoneNumberRef
  const passwordRef = useRef();

  // State for form errors
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    role: "",
    password: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const [teachers, setTeachers] = useState(null);

  const fetchTeachers = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/role/teacher`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.ok) {
        const result = await response.json();
        setTeachers(result?.body?.users); // Assuming result is an array of teacher objects
      } else {
        console.error("Failed to fetch teachers");
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  console.log("All Teachers", teachers);

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate Full Name
    if (!fullNameRef.current.value.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    // Validate Phone Number
    const phoneNumber = phoneNumberRef.current.value.trim();
    
    // Check if phone number is empty
    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (phoneNumber.startsWith("+") || phoneNumber.startsWith("0")) {
      // Check if phone number starts with '+' or '0'
      errors.phoneNumber = "Please enter only your number, do not include the country code or Zero.";
      isValid = false;
    } else if (!/^\d+$/.test(phoneNumber)) {
      // Check if phone number contains only digits
      errors.phoneNumber = "Please enter a valid phone number with digits only.";
      isValid = false;
    }

    // Validate Password
    if (!passwordRef.current.value.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
};


  const formSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setFormErrors({
      fullName: "",
      phoneNumber: "", // Add phoneNumber error field
      password: "",
    });

    if (!validateForm()) {
      return;
    }

    const fullName = fullNameRef.current.value;
    const phoneNumber = "+946" + phoneNumberRef.current.value; // Capturing phone number input
    const password = passwordRef.current.value;

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("role", "teacher");
    formData.append("phoneNumber", phoneNumber); // Using phone number
    formData.append("password", password);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
        {
          method: "POST",
          body: JSON.stringify({
            fullName: fullName,
            role: "teacher",
            phoneNumber: phoneNumber, // Sending phone number
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        fetchTeachers();
        console.log("Success:", result);
        setIsModalOpen(false);

        // Reset fields
        fullNameRef.current.value = "";
        roleRef.current.value = "";
        phoneNumberRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  // Handle the search query input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter teachers based on the search query
    const filtered = teachers?.filter((teacher) => {
      const fullName = teacher.fullName?.toLowerCase() || "";
      const role = teacher.role?.toLowerCase() || "";

      return fullName.includes(query) || role.includes(query);
    });

    setFilteredTeachers(filtered);
  };

  return (
    <>
      <section>
        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:mt-8 max-sm:w-full">
          <div className="relative max-sm:w-full">
            <input
              value={searchQuery}
              onChange={handleSearch}
              className="py-[8px] h-[48px] px-[16px] pr-[45px] w-[590px] max-xl:w-full bg-transparent border border-[#D2D2D2] outline-none rounded-full"
              type="text"
              placeholder="Search"
            />
            <IoIosSearch className="absolute top-3 text-2xl text-[#E67D4B] right-4" />
          </div>
          <button
            className="text-[20px] max-sm:px-4 max-xl:text-xl max-xl:p-2 max-xl:px-6 max-sm:text-lg font-semibold bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full px-[40px] py-[8px] text-white flex items-center gap-2"
            onClick={toggleModal}
          >
            Add New Teacher{" "}
            <span className="text-[40px] font-semibold">+</span>
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 bg-white">
          <TeacherDataTable
            teachers={teachers}
            filteredTeachers={filteredTeachers}
            fetchCourses={fetchTeachers}
          />
        </div>
      </section>
      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-6"
          onClick={closeModal}
        >
          <form
            onSubmit={formSubmit}
            className="bg-white p-6 rounded-lg w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto"
            method="POST"
          >
            <h2 className="text-xl font-bold mb-1">Full Name:</h2>
            <input
              ref={fullNameRef}
              type="text"
              className={`w-full border-b-2 py-4 focus:outline-none ${formErrors.fullName ? 'border-red-500' : 'border-black'}`}
              placeholder="Full Name"
            />
            {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}

            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Phone Number:</h2>
              <input
                ref={phoneNumberRef}
                type="text"
                className={`w-full border-b-2 py-4 focus:outline-none ${formErrors.phoneNumber ? 'border-red-500' : 'border-black'}`}
                placeholder="Phone Number"
              />
              {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
            </div>


            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Password:</h2>
              <input
                ref={passwordRef}
                type="password"
                className={`w-full border-b-2 py-4 focus:outline-none ${formErrors.password ? 'border-red-500' : 'border-black'}`}
                placeholder="Password"
              />
              {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
            </div>

            <div className="flex justify-center mt-8 items-center">
              <button
                type="submit"
                className="text-[16px] max-sm:px-4 max-xl:text-xl max-xl:p-2 max-xl:px-6 max-sm:text-lg font-semibold bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full px-[40px] py-[6px] text-white flex items-center gap-2"
              >
                Add Teacher
                <span className="text-[40px] font-semibold">+</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Teachers;
