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
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useUserAuth } from "@/context/AuthContext";
import { useParams } from "next/navigation";
import Link from "next/link";

export function TableDemo2({ lessons, fetchCourses, courseId }) {
  const { user, token } = useUserAuth();
  const [editLessons, setEditLessons] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [delId, setDelId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");
  const [videoShortFileName, setVideoShortFileName] = useState("");
  const [video, setVideo] = useState("");
  const [videoShortUrl, setVideoShortUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadVideoProgress, setUploadVideoProgress] = useState(null);
  const [uploadVideoShortProgress, setUploadVideoShortProgress] = useState(null);
  const [semester, setSemester] = useState("")

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const videoShortInputRef = useRef(null);



  const deleteModalOpen = (data) => {
    setDelId(data?.id);
    setIsDeleted(true);
  };

  const handleCloseModal = () => {
    setIsDeleted(false);
  };

  const deleteLesson = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${delId}`,
        {
          method: "Delete",
          body: JSON.stringify({ courseId }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
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
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
      setUploadProgress(0);
    } else {
      alert("Please upload an image file.");
    }
  };

  const handleVideoFile = (file) => {
    if (file && file.type.startsWith("video/")) {
      setVideoFileName(file.name);
      setVideo(URL.createObjectURL(file));
      setUploadVideoProgress(0);
    } else {
      alert("Please upload a video file.");
    }
  };

  const handleVideoShortFile = (file) => {
    if (file && file.type.startsWith("video/")) {
      setVideoShortFileName(file.name);
      setVideoShortUrl(URL.createObjectURL(file));
      setUploadVideoShortProgress(0);
    } else {
      alert("Please upload a video file.");
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
    // console.log();

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("courseId", courseId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("semester", semester);
    if (fileName) formData.append("thumbnail", fileInputRef.current.files[0]);
    if (videoFileName) formData.append("videoUrl", videoInputRef.current.files[0]);
    if (videoShortFileName) formData.append("videoUrlShort", videoShortInputRef.current.files[0]);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${editLessons.id}`, {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        fetchCourses();
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



  return (
    <>
      <Table className="rounded-2xl">
        <TableHeader>
          <TableRow className="bg-[#ececec] text-black font-medium sticky top-0">
            <TableHead className="">Lesson Name</TableHead>
            <TableHead className=" ">Description</TableHead>
            <TableHead className="text-right ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lessons?.map((item, index) => (
            <TableRow key={index}>

              {
                user?.body?.user?.role === "teacher" ?
                  <Link href={`/dashboard/quizes/${item?.id}`}  >
                    <TableCell className="font-medium flex items-center gap-2 ">
                      <Image
                        alt="img"
                        className="rounded-full w-[39px] h-[39px]"
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item?.thumbnail}`}
                        width={39}
                        height={39}
                      />
                      {item?.title}
                    </TableCell>
                  </Link>
                  :
                  <TableCell className="font-medium flex items-center gap-2 ">
                    <Image
                      alt="img"
                      className="rounded-full w-[39px] h-[39px]"
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item?.thumbnail}`}
                      width={39}
                      height={39}
                    />
                    {item?.title}
                  </TableCell>
              }



              <TableCell className="">{item?.description}</TableCell>
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
      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-6"
          onClick={closeModal}
        >
          <div className="bg-white p-6 rounded-lg w-[60%] max-lg:w-full max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmit} method="POST">
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








    </>
  );
}
