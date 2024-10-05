"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TableDemo2 } from "../components/TableDemo2";
import { useUserAuth } from "@/context/AuthContext";
import { ExamTable } from "../components/ExamTable";

const SessionExam = () => {
    const { token, user } = useUserAuth()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("")
    const [semester, setSemester] = useState("");
    const [image, setImage] = useState("");
    const [fileName, setFileName] = useState(""); // Store file name instead of the file object// Store file name instead of the file object
    const [uploadProgress, setUploadProgress] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState("");

    const fileInputRef = useRef(null);

    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);
    const [classCourse, setClassCourse] = useState([]);

    const fetchLessonsAndCourses = async () => {
        try {
            // Determine the fetch URL based on the user's role
            const courseFetchUrl = user?.body?.user?.role === "teacher"
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/courses/teacher`
                : `${process.env.NEXT_PUBLIC_BASE_URL}/courses/class`;

            // Perform the fetch operations concurrently
            const [coursesResponse, examsResponse, classCoursesResponse] = await Promise.all([
                fetch(courseFetchUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                user?.body?.user?.role === "teacher" ?
                    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/exams/teacher`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }) : fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/exams`),
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/class`),
            ]);

            // Handle the courses response
            if (coursesResponse.ok) {
                const coursesResult = await coursesResponse.json();
                setCourses(coursesResult?.body?.courses || []); // Default to an empty array if no courses
            } else {
                console.error("Failed to fetch courses:", coursesResponse.statusText);
            }

            // Handle the exams response
            if (examsResponse.ok) {
                const examsResult = await examsResponse.json();
                setExams(user?.body?.user?.role === "teacher" ? examsResult?.body?.exams : examsResult?.body?.exam); // Default to an empty array if no exams
            } else {
                console.error("Failed to fetch exams:", examsResponse.statusText);
            }

            // Handle the class courses response
            if (classCoursesResponse.ok) {
                const classCoursesResult = await classCoursesResponse.json();
                setClassCourse(classCoursesResult?.body?.courses || []);

            } else {
                console.error("Failed to fetch class courses:", classCoursesResponse.statusText);
            }

        } catch (error) {
            console.error("Error fetching lessons or courses:", error);
        }
    };

    useEffect(() => {
        fetchLessonsAndCourses();
    }, []);

    // Log classCourse to see its state
    console.log(exams);

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

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFile = (file) => {
        if (file && file.type === "application/pdf") {
            setFileName(file.name); // Store file name
            setUploadProgress(10);  // Initialize upload progress

            // Simulate a file upload with progress
            const simulateUpload = () => {
                let progress = 10;
                const interval = setInterval(() => {
                    if (progress >= 100) {
                        clearInterval(interval);
                        setUploadProgress(100); // Complete progress
                    } else {
                        progress += 10;
                        setUploadProgress(progress); // Update progress
                    }
                }, 500); // Update progress every 500ms
            };

            simulateUpload();
        } else {
            alert("Please upload a PDF file.");
        }
    };

    const [loading, seLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        seLoading(true)
        const formData = new FormData();
        formData.append("course", selectedCourse);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("semester", semester);
        formData.append("timeDuration", duration);
        if (fileName) formData.append("examFile", fileInputRef.current.files[0]); // Append file objectt

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/exams`, {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const result = await response.json();
                fetchLessonsAndCourses();
                console.log("Success:", result);
                setIsModalOpen(false);
                seLoading(false)

                // Reset fields
                setTitle("");
                setDescription("");
                setImage("");
                setFileName("");
                setUploadProgress("")
                setSelectedCourse("");
                setDuration("")
                setSemester("")
            } else {
                console.error("Error:", response.statusText);
                seLoading(false)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return (
        <>
            <section>
                {/* search and create course section */}
                <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:mt-8 max-sm:w-full">
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
                        Create New Session Exam{" "}
                        <span className="text-[40px] font-semibold">+</span>
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 bg-white">
                    <ExamTable exams={exams} fetchLessonsAndCourses={fetchLessonsAndCourses} courses={courses} />
                </div>
            </section>

            {isModalOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-6"
                    onClick={closeModal}
                >
                    <div className="bg-white p-6 rounded-lg w-[40%] max-lg:w-full max-h-[90vh] overflow-y-auto">
                        <form onSubmit={handleSubmit} method="POST">
                            {
                                user?.body?.user?.role === "teacher" ?
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Select Course:</h2>
                                        <select
                                            className="w-full border-b-2 border-black py-4 focus:outline-none"
                                            value={selectedCourse}
                                            onChange={(e) => setSelectedCourse(e.target.value)}
                                        >
                                            <option value="">Select a course</option>
                                            {courses.map((course) => (
                                                <option key={course._id} value={course._id}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    :
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">Select Course:</h2>
                                        <select
                                            className="w-full border-b-2 border-black py-4 focus:outline-none"
                                            value={selectedCourse}
                                            onChange={(e) => setSelectedCourse(e.target.value)}
                                        >
                                            <option value="">Select a course</option>
                                            {classCourse.map((course) => (
                                                <option key={course._id} value={course._id}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                            }

                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Title:</h2>
                                <input
                                    type="text"
                                    className="w-full border-b-2 border-black py-4 focus:outline-none"
                                    placeholder="Name of the Course"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Description:</h2>
                                <textarea
                                    placeholder="Description of the Course"
                                    className="border-b-2 w-full border-black focus:outline-none py-4"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold mb-1">Semester:</h2>
                                <select
                                    className="px-4 py-2 border border-gray-300 rounded-md"
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}>
                                    <option value="">Select Semester</option>
                                    <option value="first">Firse Semester</option>
                                    <option value="second">Select Semester</option>
                                </select>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold mb-1">Exam Duration:</h2>
                                <select
                                    className="px-4 py-2 border border-gray-300 rounded-md"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}>
                                    <option value="">Select Duration</option>
                                    <option value="Three hour's">Three hour's</option>
                                    <option value="Two hour's">Two hour's</option>
                                    <option value="Four hour's">Four hour's</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Exam File:</h2>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={(e) => handleFile(e.target.files[0])}
                                />
                                <div
                                    className="w-full border-b-2 border-black py-4 cursor-pointer"
                                    onClick={handleClick}
                                >
                                    {fileName || "Choose Exam PDF"}
                                </div>
                                {fileName && (
                                    <div className="mt-2">
                                        <p>Selected File: {fileName}</p>
                                    </div>
                                )}
                                {uploadProgress !== null && (
                                    <div className="mt-2">
                                        <progress value={uploadProgress} max="100" /> {uploadProgress}%
                                    </div>
                                )}
                            </div>
                            <div className="mt-4">
                                {
                                    !loading ?
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white rounded-full px-4 py-2"
                                        >
                                            Submit
                                        </button>
                                        :
                                        <button
                                            disabled
                                            type="submit"
                                            className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white rounded-full px-4 py-2"
                                        >
                                            Loading....
                                        </button>
                                }


                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default SessionExam;