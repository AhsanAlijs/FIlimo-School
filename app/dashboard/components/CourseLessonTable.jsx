"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TableDemo2 } from "./TableDemo2";
import { useUserAuth } from "@/context/AuthContext";
import Image from "next/image";
import QuizForm from "./QuizForm";

const CourseLessonTable = ({ courses, fetchCourses, courseId }) => {
    const { token, user } = useUserAuth()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [semester, setSemester] = useState("");
    const [image, setImage] = useState("");
    const [fileName, setFileName] = useState(""); // Store file name instead of the file object
    const [videoFileName, setVideoFileName] = useState(""); // Store file name instead of the file object
    const [videoShortFileName, setVideoShortFileName] = useState(""); // Store file name instead of the file object
    const [video, setVideo] = useState("");
    const [videoShortUrl, setVideoShortUrl] = useState("");
    const [uploadProgress, setUploadProgress] = useState(null);
    const [uploadVideoProgress, setUploadVideoProgress] = useState(null);
    const [uploadVideoShortProgress, setUploadVideoShortProgress] =
        useState(null);
    const [selectedCourse, setSelectedCourse] = useState("");

    const fileInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const videoShortInputRef = useRef(null);



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

    const handleVideoClick = () => {
        if (videoInputRef.current) {
            videoInputRef.current.click();
        }
    };

    const handleVideoShortClick = () => {
        if (videoShortInputRef.current) {
            videoShortInputRef.current.click();
        }
    };

    const handleFile = (file) => {
        if (file && file.type.startsWith("image/")) {
            setFileName(file.name); // Store file name
            setImage(URL.createObjectURL(file));
            setUploadProgress(0);
        } else {
            alert("Please upload an image file.");
        }
    };

    const handleVideoFile = (file) => {
        if (file && file.type.startsWith("video/")) {
            setVideoFileName(file.name); // Store file name
            setVideo(URL.createObjectURL(file));
            setUploadVideoProgress(0);
        } else {
            alert("Please upload a video file.");
        }
    };

    const handleVideoShortFile = (file) => {
        if (file && file.type.startsWith("video/")) {
            setVideoShortFileName(file.name); // Store file name
            setVideoShortUrl(URL.createObjectURL(file));
            setUploadVideoShortProgress(0);
        } else {
            alert("Please upload a video file.");
        }
    };
    // State for questions
    const [questions, setQuestions] = useState([
        { question: '', answer: '', options: ['', '', '', ''] }
    ]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("courseId", courses?._id);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("semester", semester);
        if (fileName) formData.append("thumbnail", fileInputRef.current.files[0]);
        if (videoFileName) formData.append("videoUrl", videoInputRef.current.files[0]);
        if (videoShortFileName) formData.append("videoUrlShort", videoShortInputRef.current.files[0]);

        try {
            const lessonResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lessons`, {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (lessonResponse.ok) {
                const lessonResult = await lessonResponse.json();
                const lessonId = lessonResult?.body?.lesson?._id; // Assuming _id is the lesson ID
                setIsModalOpen(false)
                fetchCourses()
                console.log("Lesson uploaded successfully with ID:", lessonId);

                // Check if quiz data is available
                const isQuizAvailable = questions.some(q => q.question.trim() !== '' && q.answer.trim() !== '');

                if (isQuizAvailable) {
                    // Now upload the quiz
                    const quizData = {
                        lessonId: lessonId, // Use the lesson ID here
                        questions: questions, // The questions state containing quiz data
                    };

                    const quizResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/quizzes`, {
                        method: "POST",
                        body: JSON.stringify(quizData),
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (quizResponse.ok) {
                        const quizResult = await quizResponse.json();
                        setIsModalOpen(false)
                        fetchCourses()
                        console.log("Quiz uploaded successfully:", quizResult);
                    } else {
                        console.error("Error uploading quiz:", quizResponse.statusText);
                    }
                } else {
                    console.log("No quiz data available, skipping quiz upload.");
                }

                // Reset fields
                setTitle("");
                setDescription("");
                setImage("");
                setFileName("");
                setVideo("");
                setVideoFileName("");
                setVideoShortUrl("");
                setVideoShortFileName("");
                setSelectedCourse("");
                setSemester("");
                setQuestions([{ question: '', answer: '', options: ['', '', '', ''] }]);
            } else {
                console.error("Error uploading lesson:", lessonResponse.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }

        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Image File:", fileName);
        console.log("Video File:", videoFileName);
        console.log("Short Video File:", videoShortFileName);
        console.log("Selected Course ID:", selectedCourse);
    };




    return (
        <>
            <section>


                <div className="flex items-center justify-start gap-4 p-2" >
                    <Image
                        className="w-[80px] h-[80px] rounded-full"
                        src={courses?.image?.startsWith("http") ? courses.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${courses.image}`}
                        width={80}
                        height={80}
                    />
                    <div>
                        <p className="font-semibold text-lg" >Course title:{" "}{courses.title}</p>
                        <p className="text-base" >Total lessons:{" "}{courses.lessons?.length}</p>
                    </div>
                </div>


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
                        Create New Lesson{" "}
                        <span className="text-[40px] font-semibold">+</span>
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 bg-white">
                    <TableDemo2 fetchCourses={fetchCourses} lessons={courses.lessons} courseId={courseId} />
                </div>
            </section>

            {isModalOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-6"
                    onClick={closeModal}
                >
                    <div className="bg-white p-6 rounded-lg w-[60%] max-lg:w-full max-h-[90vh] overflow-y-auto">
                        <form method="POST">
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
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Semester:</h2>
                                <select
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}
                                    className="border-b-2 w-full border-black focus:outline-none py-4">
                                    <option value="">select Samester</option>
                                    <option value="first">first semester</option>
                                    <option value="second">second Samester</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Thumbnail:</h2>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={(e) => handleFile(e.target.files[0])}
                                />
                                <div
                                    className="w-full border-b-2 border-black py-4 cursor-pointer"
                                    onClick={handleClick}
                                >
                                    {fileName || "Choose Thumbnail Image"}
                                </div>
                                {fileName && (
                                    <img
                                        src={image}
                                        alt="Thumbnail Preview"
                                        className="mt-2 max-w-[100px]"
                                    />
                                )}
                                {uploadProgress && (
                                    <div className="mt-2">
                                        <progress value={uploadProgress} max="100" />{" "}
                                        {uploadProgress}%
                                    </div>
                                )}
                            </div>
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Video:</h2>
                                <input
                                    type="file"
                                    accept="video/*"
                                    ref={videoInputRef}
                                    style={{ display: "none" }}
                                    onChange={(e) => handleVideoFile(e.target.files[0])}
                                />
                                <div
                                    className="w-full border-b-2 border-black py-4 cursor-pointer"
                                    onClick={handleVideoClick}
                                >
                                    {videoFileName || "Choose Video File"}
                                </div>
                                {videoFileName && (
                                    <video src={video} controls className="mt-2 max-w-[100px]" />
                                )}
                                {uploadVideoProgress && (
                                    <div className="mt-2">
                                        <progress value={uploadVideoProgress} max="100" />{" "}
                                        {uploadVideoProgress}%
                                    </div>
                                )}
                            </div>
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-1">Video URL Short:</h2>
                                <input
                                    type="file"
                                    accept="video/*"
                                    ref={videoShortInputRef}
                                    style={{ display: "none" }}
                                    onChange={(e) => handleVideoShortFile(e.target.files[0])}
                                />
                                <div
                                    className="w-full border-b-2 border-black py-4 cursor-pointer"
                                    onClick={handleVideoShortClick}
                                >
                                    {videoShortFileName || "Choose Short Video File"}
                                </div>
                                {videoShortFileName && (
                                    <video
                                        src={videoShortUrl}
                                        controls
                                        className="mt-2 max-w-[100px]"
                                    />
                                )}
                                {uploadVideoShortProgress && (
                                    <div className="mt-2">
                                        <progress value={uploadVideoShortProgress} max="100" />{" "}
                                        {uploadVideoShortProgress}%
                                    </div>
                                )}
                            </div>


                        </form>

                        {
                            user?.body?.user?.role === "teacher" ?
                                <QuizForm questions={questions} setQuestions={setQuestions} />
                                :
                                <></>
                        }
                        <div className="mt-4">
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white rounded-full px-4 py-2"
                            >
                                Create lesson
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default CourseLessonTable;
