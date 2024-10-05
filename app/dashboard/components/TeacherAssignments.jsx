"use client";
import React, { useEffect, useRef, useState } from "react";
import AssignmentsCard from "../components/AssignmentsCard";
import { IoIosSearch } from "react-icons/io";
import { AssignmentTable } from "../components/AssignmentTable";
import { SubmitedAssignmentsTable } from "./SubmitedAssignmentsTable";

const TeacherAssignments = () => {
  const cardsArr = [
    {
      head: "Total Assignments",
      count: 30,
    },
    {
      head: "Pending Submissions",
      count: 30,
    },
    {
      head: "Graded Assignments",
      count: 30,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadAssignmentProgress, setUploadAssignmentProgress] =
    useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");

  // Refs for form fields
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const isActiveRef = useRef();
  const fileInputRef = useRef(); // Define the fileInputRef

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses`);
        if (response.ok) {
          const result = await response.json();
          setCourses(result?.body?.courses); // Assuming result is an array of course objects
          // console.log(result);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleAssignmentFile = (file) => {
    if (file) {
      setAssignmentFile(file);
      setUploadAssignmentProgress(0);
      simulateUpload();
    } else {
      alert("Please upload a valid file.");
    }
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadAssignmentProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploadAssignmentProgress(null);
      }
    }, 500);
  };

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


  const [assignment, setAssignment] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assignments`, {
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
        },
      });
      if (response.ok) {
        const result = await response.json();
        // console.log(result?.body?.assignments);
        setAssignment(result?.body?.assignments);
        // console.log(result);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
   fetchCourses()
  }, [])
  

  const formSubmit = async (e) => {
    e.preventDefault();

    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(dueDateRef.current.value);
    console.log(isActiveRef.current.value);
    console.log(fileInputRef.current.value);
    console.log(selectedCourseId);
    console.log(assignmentFile);

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    const isActive = isActiveRef.current.checked;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("dueDate", dueDate);
    formData.append("isActive", isActive);
    formData.append("course", selectedCourseId);

    if (assignmentFile) {
      formData.append("assignment", assignmentFile);
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assignments`, {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        fetchCourses()
        console.log("Success:", result);
        setIsModalOpen(false);

        // Reset fields
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        dueDateRef.current.value = "";
        isActiveRef.current.checked = false;
        setSelectedCourseId(""); // Reset course selection

        setAssignmentFile(null);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleAssignmentFile(file);
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-3 gap-4 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-md:mt-8">
          {cardsArr.map((item, index) => (
            <AssignmentsCard key={index} head={item.head} count={item.count} />
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:mt-8 max-sm:w-full mt-8">
          <div className="relative max-sm:w-full">
            <input
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
            Add New Assignment{" "}
            <span className="text-[40px] font-semibold">+</span>
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 bg-white">
          <AssignmentTable assignment={assignment} fetchCourses={fetchCourses}/>
        </div>
        
        <div className="mt-14 max-md:mt-6">
          <h2 className="text-2xl font-semibold max-md:text-lg">Submited Assignments</h2>
          <div className="mt-8 max-md:mt-6 grid grid-cols-1 bg-white">
            <SubmitedAssignmentsTable assignment={assignment} fetchCourses={fetchCourses}/>
          </div>
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
            <h2 className="text-xl font-bold mb-1">Title:</h2>
            <input
              ref={titleRef}
              type="text"
              className="w-full border-b-2 border-black py-4 focus:outline-none"
              placeholder="Title"
              required
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Description:</h2>
              <textarea
                ref={descriptionRef}
                placeholder="Description"
                className="border-b-2 w-full border-black focus:outline-none py-4"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Due Date:</h2>
              <input
                ref={dueDateRef}
                type="date"
                className="w-full border-b-2 border-black py-4 focus:outline-none"
                placeholder="Due Date"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Active:</h2>
              <input ref={isActiveRef} id="active" type="checkbox" className="mr-2" />
              <label htmlFor="active" className="text-lg">Active</label>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Course ID:</h2>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full border-b-2 border-black py-4 focus:outline-none"
                required
              >
                <option value={""}>Select a Course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Assignment File:</h2>
              <div className="flex flex-col items-center border-2 border-dashed p-4 mt-6">
                {/* Label for file input */}
                <label
                  htmlFor="files"
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                >
                  {/* visually hidden input */}
                  <input
                    id="files"
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx,.jpeg,.png,.svg" // Specify file types if needed
                    className="sr-only"
                    onChange={handleFileChange} // Use handleFileChange
                  />
                  <div className="text-center">
                    <span className="block text-[#E67D4B] font-medium">
                      {assignmentFile
                        ? assignmentFile.name
                        : "Click to Upload Assignment File"}
                    </span>
                    {uploadAssignmentProgress !== null && (
                      <div className="mt-2">
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                              {uploadAssignmentProgress}%
                            </div>
                          </div>
                          <div className="relative pt-1">
                            <div className="w-full bg-gray-200 rounded-full">
                              <div
                                className="bg-teal-500 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full"
                                style={{
                                  width: `${uploadAssignmentProgress}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-8 items-center">
              <button
                type="submit"
                className="text-[16px] max-sm:px-4 max-xl:text-xl max-xl:p-2 max-xl:px-6 max-sm:text-lg font-semibold bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full px-[40px] py-[6px] text-white flex items-center gap-2"
              >
                Create New Assignment
                <span className="text-[40px] font-semibold">+</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TeacherAssignments;
