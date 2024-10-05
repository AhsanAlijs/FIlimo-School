"use client";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TableDemo } from "../components/TableDemo";
import { useUserAuth } from "@/context/AuthContext";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const [confModal, setConfModal] = useState(false);
  const { token } = useUserAuth();

  // Fetch data functions
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
        // No use of teachers data in this code snippet, remove if not needed
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/summer`
      );
      if (response.ok) {
        const result = await response.json();
        setCourses(result?.body?.courses || []);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchSettings = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings`);
      if (response.ok) {
        const set = await response.json();
        // Ensure the switch state matches the fetched setting
        setIsSwitchedOn(set?.data?.settings?.hideSummerCourses);
      } else {
        console.error("Failed to fetch settings");
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };
  const handleSwitchChange = () => {
    setConfModal(true);
  };

  const handleConfModalClose = () => {
    setConfModal(false);
  };

  const handleConfModalConfirm = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/settings/toggle-summer-courses-visibility`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      fetchSettings(); // Refresh settings after toggling
    } catch (error) {
      console.error("Error toggling visibility:", error);
    } finally {
      setConfModal(false);
    }
  };

  // Search filter effect
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = courses.filter((course) => {
      const title = course.title?.toLowerCase() || "";
      const grade = course.grade?.toLowerCase() || "";
      const category = course.category?.toLowerCase() || "";
      return title.includes(query) || grade.includes(query) || category.includes(query);
    });
    setFilteredCourses(filtered);
  }, [searchQuery, courses]);

  // Fetch data on mount
  useEffect(() => {
    fetchTeachers();
    fetchCourses();
    fetchSettings();
  }, []);

  return (
    <>
      <section>
        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:mt-8 max-sm:w-full">
          <div className="relative max-sm:w-full">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-[8px] h-[48px] px-[16px] pr-[45px] w-[590px] max-xl:w-full bg-transparent border border-[#D2D2D2] outline-none rounded-full"
              type="text"
              placeholder="Search"
            />
            <IoIosSearch className="absolute top-3 text-2xl text-[#E67D4B] right-4" />
          </div>
          <div className="flex items-center flex-row-reverse gap-2">
            <Switch
              id="hide-summer-courses-switch"
              checked={isSwitchedOn}
              onCheckedChange={handleSwitchChange}
            />
            <label htmlFor="hide-summer-courses-switch">
              Hide Summer Courses
            </label>
          </div>
        </div>

        <TableDemo courses={filteredCourses} />
      </section>

      <AlertDialog open={confModal} onOpenChange={handleConfModalClose}>
        <AlertDialogContent
          id="modal-overlay"
          className=""
          onClick={(e) => e.target.id === "modal-overlay" && handleConfModalClose()}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isSwitchedOn ? "Show Summer Courses?" : "Hide Summer Courses?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {isSwitchedOn ? "show" : "hide"} summer courses?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleConfModalClose}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfModalConfirm}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Page;





{/* <div className="fixed bottom-0 right-0 p-6">
        <button
          onClick={toggleModal}
          className="py-3 px-6 bg-[#E67D4B] text-white rounded-full"
        >
          Add Course
        </button>
      </div> */}

{/* {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30 z-[9999]"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
            <form onSubmit={formSubmit}>
              <label className="block mb-2">
                Course Title:
                <input
                  ref={nameOfCourse}
                  type="text"
                  required
                  className="block w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block mb-2">
                Description:
                <textarea
                  ref={descriptionRef}
                  required
                  className="block w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block mb-2">
                Category:
                <select
                  ref={categoryRef}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                  className="block w-full mt-1 p-2 border rounded"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="class">Grade Courses</option>
                  <option value="other">Other</option>
                </select>
              </label>
              {selectedCategory === "class" && (
                <label className="block mb-2">
                  Teacher:
                  <select
                    value={selectedTeacherId}
                    onChange={(e) => setSelectedTeacherId(e.target.value)}
                    required
                    className="block w-full mt-1 p-2 border rounded"
                  >
                    <option value="" disabled>
                      Select a teacher
                    </option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <label className="block mb-2">
                Grade:
                <input
                  ref={gradeRef}
                  type="text"
                  className="block w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block mb-2">
                Price:
                <input
                  ref={priceRef}
                  type="number"
                  required
                  className="block w-full mt-1 p-2 border rounded"
                />
              </label>
              <div
                className="border-dashed border-2 border-gray-400 p-4 text-center mb-4 cursor-pointer"
                onDrop={handleDrop("image")}
                onDragOver={handleDragOver}
                onClick={handleClick(fileInputRef)}
              >
                <p>Drop image here or click to upload</p>
                {uploadProgress !== null && (
                  <p>Uploading image: {uploadProgress}%</p>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(e.target.files[0])}
                  className="hidden"
                />
              </div>
              <div
                className="border-dashed border-2 border-gray-400 p-4 text-center cursor-pointer"
                onDrop={handleDrop("video")}
                onDragOver={handleDragOver}
                onClick={handleClick(videoInputRef)}
              >
                <p>Drop video here or click to upload</p>
                {uploadVideoProgress !== null && (
                  <p>Uploading video: {uploadVideoProgress}%</p>
                )}
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleVideoFile(e.target.files[0])}
                  className="hidden"
                />
              </div>
              <button
                type="submit"
                className="py-3 px-6 bg-[#E67D4B] text-white rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )} */}

// const formSubmit = async (e) => {