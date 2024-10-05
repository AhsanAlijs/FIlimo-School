"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import tableProfile from "@/assets/dashboard/table-profile.png";
import profile from "@/assets/dashboard/navbar/profile.png";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line, RiEyeFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useUserAuth } from "@/context/AuthContext";
import eye from "@/assets/eye.svg"

export function ExamTable({ exams, fetchLessonsAndCourses, courses }) {
    const { user, token } = useUserAuth();
    const [editLessons, setEditLessons] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
    const [delId, setDelId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("")
    const [image, setImage] = useState("");
    const [fileName, setFileName] = useState("");
    const [videoFileName, setVideoFileName] = useState("");
    const [videoShortFileName, setVideoShortFileName] = useState("");
    const [uploadProgress, setUploadProgress] = useState(null);
    const [semester, setSemester] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("");
    const fileInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const videoShortInputRef = useRef(null);

    const deleteModalOpen = (data) => {
        setDelId(data?.id);
        console.log(delId);
        setIsDeleted(true);
    };

    const handleCloseModal = () => {
        setIsDeleted(false);
    };

    const deleteLesson = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/exams/${delId}`,
                {
                    method: "Delete",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                const result = await response.json();
                fetchLessonsAndCourses();
                console.log("Success:", result);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setIsDeleted(false);
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


    const editLesson = (item) => {
        setEditLessons(item);
        setTitle(item.title);
        setDescription(item.description);
        setFileName(item.thumbnail);
        setVideoFileName(item.videoUrl);
        setVideoShortFileName(item.videoUrlShort);
        setSemester(item.semester)
        setIsModalOpen(true);
        setSelectedCourse(item.course)
        setDuration(item.timeDuration)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("course", selectedCourse);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("semester", semester);
        formData.append("timeDuration", duration);
        if (fileName) formData.append("examFile", fileInputRef.current.files[0]); // Append file objectt

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/exams/${editLessons.id}`, {
                method: "PATCH",
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

                // Reset fields
                setTitle("");
                setDescription("");
                setImage("");
                setFileName("");
                setVideo("");
                setVideoFileName("");
                setVideoShortUrl("");
                setVideoShortFileName("");
                setEditLessons(null);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const [pdfReader, setPdfReader] = useState(false)
    const [pdfLink, setPdfLink] = useState('')

    const openPdf = (item) => {
        setPdfReader(true)
        setPdfLink(item)
    }
    const pdfClose = () => {
        setPdfReader(false);
    };
    return (
        <>
            <Table className="rounded-2xl">
                <TableHeader>
                    <TableRow className="bg-[#ececec] text-black font-medium sticky top-0">
                        <TableHead className="">Title</TableHead>
                        <TableHead className=" ">Description</TableHead>
                        <TableHead className=" ">Semester</TableHead>
                        <TableHead className=" ">Time Duration</TableHead>
                        <TableHead className=" ">Exam File</TableHead>
                        <TableHead className="text-right ">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {exams?.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium line-clamp-1">
                                {item?.title}
                            </TableCell>
                            <TableCell className="">{item?.description.slice(0, 20)}...</TableCell>
                            <TableCell className="">{item?.semester}</TableCell>
                            <TableCell className="">{item?.timeDuration}</TableCell>
                            <TableCell className="text-right">
                                <RiEyeFill onClick={() => { openPdf(item?.examFile) }} className="cursor-pointer text-[#e67d4b] text-2xl" /></TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center text-2xl gap-5 justify-end">
                                    <FaPen className="text-[#419B41] cursor-pointer" onClick={() => editLesson(item)} />
                                    <RiDeleteBin6Line className="text-[#FF0000] cursor-pointer" onClick={() => deleteModalOpen(item)} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {isModalOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-6"
                    onClick={closeModal}
                >
                    <div className="bg-white p-6 rounded-lg w-[60%] max-lg:w-full max-h-[90vh] overflow-y-auto">
                        <form onSubmit={handleSubmit} method="POST">
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
                                    className="border-b-2 w-full border-black focus:outline-none py-4"
                                >
                                    <option value="">Select semester</option>
                                    <option value="first">First semester</option>
                                    <option value="second">Second semester</option>
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
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white rounded-full px-4 py-2"
                                >
                                    Create lesson
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isDeleted && (
                <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
                    {/* Overlay */}
                    <div
                        aria-hidden="true"
                        className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
                        onClick={handleCloseModal}
                    />

                    {/* Modal */}
                    <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
                        <div className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
                            <button
                                type="button"
                                className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                                onClick={handleCloseModal}
                            >
                                <svg
                                    title="Close"
                                    className="h-4 w-4 cursor-pointer text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close</span>
                            </button>

                            <div className="space-y-2 p-2">
                                <div className="p-4 space-y-2 text-center dark:text-white">
                                    <p className="text-gray-500">
                                        Are you sure you want to delete this Courese?
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div
                                    aria-hidden="true"
                                    className="border-t dark:border-gray-700 px-2"
                                ></div>
                                <div className="px-6 py-2">
                                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800"
                                            onClick={handleCloseModal}
                                        >
                                            <span className="flex items-center gap-1">Cancel</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700"
                                            onClick={deleteLesson}
                                        >
                                            <span className="flex items-center gap-1">Confirm</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {pdfReader && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="">
                        <button
                            type="button"
                            className="absolute top-2 left-16 rtl:right-auto rtl:left-2"
                            onClick={pdfClose}
                        >
                            <svg
                                title="Close"
                                className="h-8 w-8 mt-3 hover:bg-red-700 cursor-pointer text-white bg-red-600 rounded"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>

                        <div className="">
                            <object
                                data={`${process.env.NEXT_PUBLIC_BASE_URL}/${pdfLink}`}
                                type="application/pdf"
                                width="900"
                                height="580"
                            >
                                <p className="text-red-800">PDF cannot be displayed.</p>
                            </object>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
