"use client";
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
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";

export function TableDemo({ courses, fetchCourses, filteredCourses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadVideoProgress, setUploadVideoProgress] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const { user, token } = useUserAuth()
  // const token = localStorage.getItem("token");

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setSelectedCourse((prev) => ({ ...prev, image: file.name }));
      setUploadProgress(0);
      simulateUpload();
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleVideoFile = (file) => {
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setSelectedCourse((prev) => ({ ...prev, demoVideo: file.name }));
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

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const editCourse = (data) => {
    setSelectedCourse(data);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append selectedCourse data (assuming it's a plain object)
    Object.keys(selectedCourse).forEach((key) => {
      formData.append(key, selectedCourse[key]);
    });

    // Append image and video files
    if (imageFile) {
      formData.append("image", imageFile);
    }
    if (videoFile) {
      formData.append("demoVideo", videoFile);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${selectedCourse?._id}`,
        {
          method: "PATCH",
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

        // Reset fields
        e.target.reset();
        setImageFile(null);
        setVideoFile(null);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isDeleted, setIsDeleted] = useState(false);
  const [delId, setDelId] = useState(null);

  const deleteModalOpen = (data) => {
    setDelId(data?._id);
    setIsDeleted(true);
  };

  const handleCloseModal = () => {
    setIsDeleted(false);
  };

  const deleteCourse = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${delId}`,
        {
          method: "Delete",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        fetchCourses();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsDeleted(false);
  };
  // const isAbsoluteURL = (url) => /^https?:\/\//i.test(url);

  const pathname = usePathname()

  return (
    <>
      <>
        {filteredCourses ? (
          <Table className="rounded-2xl">
            <TableHeader>
              <TableRow className="bg-[#ececec] text-black font-medium sticky top-0">
                <TableHead className="w-[600px]">Course Name</TableHead>
                <TableHead className="w-[200px]">Description</TableHead>
                <TableHead className="text-center">Grade</TableHead>
                <TableHead className="text-center">Category</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-center">Total lessons</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-transparent">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((item, index) => (
                  <TableRow key={index}>
                    {
                      pathname === "/dashboard/courses" || pathname === "dashboard/teacher-book" ?
                        <TableCell className="font-medium flex items-center gap-2">
                          <Image
                            alt="Course image"
                            className="rounded-full w-[39px] h-[39px]"
                            src={item?.image?.startsWith("http") ? item.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                            width={39}
                            height={39}
                          />

                          {item.title}
                        </TableCell>
                        :
                        <Link href={`/dashboard/courses/${item.id}`} >
                          <TableCell className="font-medium flex items-center gap-2">
                            <Image
                              alt="Course image"
                              className="rounded-full w-[39px] h-[39px]"
                              src={item?.image?.startsWith("http") ? item.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                              width={39}
                              height={39}
                            />

                            {item.title}
                          </TableCell>
                        </Link>

                    }
                    <TableCell>
                      {item.description || "-"}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.grade || "-"}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.category || "-"}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.price || "-"}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.lessons?.length || "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center text-2xl gap-5 justify-end">
                        {/* <IoEyeSharp className="text-[#E67D4B] cursor-pointer" /> */}
                        <FaPen
                          className="text-[#419B41] cursor-pointer"
                          onClick={() => editCourse(item)}
                        />
                        <RiDeleteBin6Line
                          className="text-[#FF0000] cursor-pointer"
                          onClick={() => deleteModalOpen(item)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="font-extrabold text-3xl flex items-center justify-center text-[#ed9d4d]">
                    No Courses found!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        ) : (
          <>
            {courses ? (
              <Table className="rounded-2xl">
                <TableHeader>
                  <TableRow className="bg-[#ececec] text-black font-medium sticky top-0">
                    <TableHead className="w-[600px]">Course Name</TableHead>
                    <TableHead className="w-[200px]">Description</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                    <TableHead className="text-center">Category</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Total lessons</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium flex items-center gap-2">
                        {
                          pathname === "/dashboard/courses" || pathname === "dashboard/teacher-book" ?
                            <TableCell className="font-medium flex items-center gap-2">
                              <Image
                                alt="Course image"
                                className="rounded-full w-[39px] h-[39px]"
                                src={item?.image?.startsWith("http") ? item.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                width={39}
                                height={39}
                              />

                              {item.title}
                            </TableCell>
                            :
                            <Link href={`/dashboard/courses/${item.id}`} >
                              <TableCell className="font-medium flex items-center gap-2">
                                <Image
                                  alt="Course image"
                                  className="rounded-full w-[39px] h-[39px]"
                                  src={item?.image?.startsWith("http") ? item.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                  width={39}
                                  height={39}
                                />

                                {item.title}
                              </TableCell>
                            </Link>

                        }
                      </TableCell>
                      <TableCell>
                        {item.description || "-"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.grade || "-"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.category || "-"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.price || "-"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.lessons?.length || "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center text-2xl gap-5 justify-end">
                          {/* <IoEyeSharp className="text-[#E67D4B] cursor-pointer" /> */}
                          <FaPen
                            className="text-[#419B41] cursor-pointer"
                            onClick={() => editCourse(item)}
                          />
                          <RiDeleteBin6Line
                            className="text-[#FF0000] cursor-pointer"
                            onClick={() => deleteModalOpen(item)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                <div className="h-4 bg-gray-200 mb-6 rounded"></div>
                <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                <div className="h-4 bg-gray-200 mb-6 rounded"></div>
              </div>
            )}
          </>
        )}
      </>

      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-6"
          onClick={closeModal}
        >
          <form
            className="bg-white p-6 rounded-lg w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto"
            onSubmit={handleSubmit}
            method="PATCH"
          >
            <h2 className="text-xl font-bold mb-1">Title:</h2>
            <input
              name="title"
              value={selectedCourse.title}
              onChange={handleInputChange}
              type="text"
              className="w-full border-b-2 border-black py-4 focus:outline-none"
              placeholder="Name of the Course"
              required
            />

            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Description:</h2>
              <textarea
                name="description"
                value={selectedCourse.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="border-b-2 w-full border-black focus:outline-none py-4"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Price:</h2>
              <input
                name="price"
                value={selectedCourse.price}
                onChange={handleInputChange}
                type="number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                placeholder="Enter Price"
                required
              />
            </div>

            {/* <div className="mt-4">
              <div className="flex justify-between mb-2">
                <label htmlFor="category" className="text-lg font-semibold">
                  Category:
                </label>
                <select
                  id="category"
                  name="category"
                  value={selectedCourse.category}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled hidden>
                    Select a category
                  </option>
                  <option value="class">Grade course</option>
                  <option value="course">Skill course</option>
                </select>
              </div>
              <input
                name="grade"
                value={selectedCourse.grade}
                onChange={handleInputChange}
                type="text"
                className="w-full border-b-2 border-black py-4 focus:outline-none"
                placeholder="Grade"
                required
              />
            </div> */}
            {selectedCourse.category === "class" && ( // Conditionally render teacher select
              <>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="category" className="text-lg font-semibold">
                      Grade:
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={selectedCourse.grade}
                      onChange={handleInputChange}
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
                {/* <div className="mt-4">
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
                </div> */}
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
                    {imageFile
                      ? imageFile.name
                      : selectedCourse.image || "Click to Upload"}
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
                    {videoFile
                      ? videoFile.name
                      : selectedCourse.demoVideo || "Click to Upload Video"}
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
                Update Course
                <span className="text-[40px] font-semibold">+</span>
              </button>
            </div>
          </form>
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
                      onClick={deleteCourse}
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
    </>
  );
}
