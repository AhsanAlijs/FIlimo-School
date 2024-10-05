"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TableDemo } from "../components/TableDemo";
import { useUserAuth } from "@/context/AuthContext";
// import { TableDemo } from "./TableDemo";

const TeachersBooks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(null);
    const [uploadVideoProgress, setUploadVideoProgress] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [selectedTeacherId, setSelectedTeacherId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(""); // New state for category
    const { user, token } = useUserAuth()

    const nameOfCourse = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const gradeRef = useRef();
    const fileInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const priceRef = useRef();

    const handleFile = (file) => {
        if (file && file.type.startsWith("image/")) {
            setImageFile(file);
            setUploadProgress(0);
            simulateUpload();
        } else {
            alert("Please upload a valid image file.");
        }
    };

    const handleVideoFile = (file) => {
        if (file && file.type.startsWith("video/")) {
            setVideoFile(file);
            setUploadVideoProgress(0);
            simulateVideoUpload();
        } else {
            alert("Please upload a valid video file.");
        }
    };

    const simulateUpload = () => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setUploadProgress(null);
            }
        }, 500);
    };

    const simulateVideoUpload = () => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadVideoProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setUploadVideoProgress(null);
            }
        }, 500);
    };

    const handleClick = (ref) => () => {
        if (ref.current) {
            ref.current.click();
        }
    };

    const handleDrop = (type) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file) {
            type === "image" ? handleFile(file) : handleVideoFile(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
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

    const [courses, setCourses] = useState(null);
    const [teachers, setTeachers] = useState(null);



    const fetchTeachers = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/users/role/teacher`, {
                headers: { Authorization: `Bearer ${token}` }
            }
            );
            if (response.ok) {
                const result = await response.json();
                setTeachers(result?.body?.users);
            } else {
                console.error("Failed to fetch teachers");
            }
        } catch (error) {
            console.error("Error fetching teachers:", error);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/courses/teacher`, {
                headers: { "Authorization": `Bearer ${token}` }
            }
            );
            if (response.ok) {
                const result = await response.json();
                setCourses(result?.body?.courses);
            } else {
                console.error("Failed to fetch courses");
            }
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        // fetchTeachers();
        fetchCourses();
    }, []);

    const formSubmit = async (e) => {
        e.preventDefault();

        const title = nameOfCourse.current.value;
        const description = descriptionRef.current.value;
        const category = categoryRef.current.value;
        const grade = gradeRef.current ? gradeRef.current.value : null;
        const price = priceRef.current.value


        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);
        if (grade !== null) {
            formData.append("grade", grade);
        }
        if (selectedTeacherId) {
            formData.append("teacherId", selectedTeacherId);
        }

        if (imageFile) {
            formData.append("image", imageFile);
        }

        if (videoFile) {
            formData.append("demoVideo", videoFile);
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                const result = await response.json();
                fetchCourses();
                console.log("Success:", result);
                setIsModalOpen(false);

                nameOfCourse.current.value = "";
                descriptionRef.current.value = "";
                categoryRef.current.value = "";
                gradeRef.current.value = "";
                setSelectedTeacherId("");
                setSelectedCategory(""); // Reset selected category
                setImageFile(null);
                setVideoFile(null);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = courses?.filter((course) => {
            const title = course.title?.toLowerCase() || "";
            const grade = course.grade?.toLowerCase() || "";
            const category = course.category?.toLowerCase() || "";

            return title.includes(query) || grade.includes(query) || category.includes(query);
        });

        setFilteredCourses(filtered);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category); // Update selected category
        if (category !== "class") {
            setSelectedTeacherId(""); // Clear selected teacher if category is not "Grade Courses"
        }
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

                    {user?.body?.user?.role === "admin" ?
                        <button
                            className="text-[20px] max-sm:px-4 max-xl:text-xl max-xl:p-2 max-xl:px-6 max-sm:text-lg font-semibold bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full px-[40px] py-[8px] text-white flex items-center gap-2"
                            onClick={toggleModal}
                        >
                            Create New Course{" "}
                            <span className="text-[40px] font-semibold">+</span>
                        </button> :
                        <></>
                    }


                </div>
                <div className="mt-8 grid grid-cols-1 bg-white">
                    <TableDemo
                        courses={courses}
                        filteredCourses={filteredCourses}
                        fetchCourses={fetchCourses}
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
                        <h2 className="text-xl font-bold mb-1">Title:</h2>
                        <input
                            ref={nameOfCourse}
                            type="text"
                            className="w-full border-b-2 border-black py-4 focus:outline-none"
                            placeholder="Name of the Course"
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
                            <div className="flex justify-between mb-2">
                                <label htmlFor="category" className="text-lg font-semibold">
                                    Category:
                                </label>
                                <select
                                    id="category"
                                    ref={categoryRef}
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled hidden>
                                        Select a category
                                    </option>
                                    <option value="class">Grade course</option>
                                    <option value="course">Skill course</option>
                                </select>
                            </div>

                            <h2 className="text-xl font-bold mb-1">Price:</h2>
                            <input
                                ref={priceRef}
                                type="number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                                placeholder="Enter Price"
                                required
                            />

                        </div>
                        {selectedCategory === "class" && ( // Conditionally render teacher select
                            <>
                                <div className="mt-4">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="category" className="text-lg font-semibold">
                                            Grade:
                                        </label>
                                        <select
                                            id="grade"
                                            ref={gradeRef}
                                            // value={selectedCategory}
                                            // onChange={handleCategoryChange}
                                            className="px-4 py-2 border border-gray-300 rounded-md capitalize"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled hidden>
                                                Select a grade
                                            </option>
                                            {['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth']
                                                .map(g => <option className="capitalize" value={g}>{g}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">

                                    {/* <div>
                    <h2 className="text-xl font-bold mb-1" >Grade</h2>
                    <input
                      ref={gradeRef}
                      type="text"
                      className="w-full border-b-2 border-black py-4 focus:outline-none"
                      placeholder="Grade"
                      required
                    />

                  </div> */}

                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="teacher" className="text-lg font-semibold">
                                            Teacher:
                                        </label>
                                        <select
                                            id="teacher"
                                            value={selectedTeacherId}
                                            onChange={(e) => setSelectedTeacherId(e.target.value)}
                                            className="px-4 py-2 border border-gray-300 rounded-md"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled hidden>
                                                Select a teacher
                                            </option>
                                            {teachers?.map((teacher) => (
                                                <option key={teacher.id} value={teacher.id}>
                                                    {teacher.fullName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-1">Image:</h2>
                            <div
                                className="flex justify-center items-center border-2 border-dashed h-auto p-2 mt-6"
                                onDrop={handleDrop("image")}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragOver}
                                onClick={handleClick(fileInputRef)}
                            >
                                <div className="w-full text-center">
                                    <span className="block text-[#E67D4B] font-medium">
                                        {imageFile ? imageFile.name : "Click to Upload"}
                                        <span className="text-black"> or drag and drop</span>
                                    </span>
                                    {uploadProgress !== null && (
                                        <div className="mt-2">
                                            <div className="relative pt-1">
                                                <div className="flex mb-2 items-center justify-between">
                                                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                                                        {uploadProgress}%
                                                    </div>
                                                </div>
                                                <div className="relative pt-1">
                                                    <div className="w-full bg-gray-200 rounded-full">
                                                        <div
                                                            className="bg-teal-500 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full"
                                                            style={{ width: `${uploadProgress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={(e) =>
                                    e.target.files[0] && handleFile(e.target.files[0])
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-1">Demo Video:</h2>
                            <div
                                className="flex justify-center items-center border-2 border-dashed h-auto p-2 mt-6"
                                onDrop={handleDrop("video")}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragOver}
                                onClick={handleClick(videoInputRef)}
                            >
                                <div className="w-full text-center">
                                    <span className="block text-[#E67D4B] font-medium">
                                        {videoFile ? videoFile.name : "Click to Upload Video"}
                                        <span className="text-black"> or drag and drop</span>
                                    </span>
                                    {uploadVideoProgress !== null && (
                                        <div className="mt-2">
                                            <div className="relative pt-1">
                                                <div className="flex mb-2 items-center justify-between">
                                                    <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                                                        {uploadVideoProgress}%
                                                    </div>
                                                </div>
                                                <div className="relative pt-1">
                                                    <div className="w-full bg-gray-200 rounded-full">
                                                        <div
                                                            className="bg-teal-500 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full"
                                                            style={{ width: `${uploadVideoProgress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input
                                type="file"
                                accept="video/*"
                                ref={videoInputRef}
                                style={{ display: "none" }}
                                onChange={(e) =>
                                    e.target.files[0] && handleVideoFile(e.target.files[0])
                                }
                            />
                        </div>
                        <div className="flex justify-center mt-8 items-center">
                            <button
                                type="submit"
                                className="text-[16px] max-sm:px-4 max-xl:text-xl max-xl:p-2 max-xl:px-6 max-sm:text-lg font-semibold bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full px-[40px] py-[6px] text-white flex items-center gap-2"
                            >
                                Create New Course
                                <span className="text-[40px] font-semibold">+</span>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default TeachersBooks;
