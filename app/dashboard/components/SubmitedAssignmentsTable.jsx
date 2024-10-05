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
  } from "@/components/ui/table"

import tableProfile from '@/assets/dashboard/table-profile.png'
import profile from '@/assets/dashboard/navbar/profile.png'
import Image from 'next/image'
import { IoEyeSharp } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

  
  const tableArr = [
    {
      courseImage: tableProfile,
      assignmentName: "Advanced Theoretical Physics and Quantum Mechanics",
      course: "Math 102",
      dueDate: "August 15, 2024",
      status: "Open"
    },
    {
      courseImage: profile,
      assignmentName: "Comprehensive Study of World Literature and Poetry",
      course: "Math 103",
      dueDate: "August 16, 2024",
      status: "Open"
    },
    {
      courseImage: tableProfile,
      assignmentName: "Mastering Advanced Algebraic Concepts and Applications",
      course: "Math 104",
      dueDate: "August 17, 2024",
      status: "Open"
    },
    {
      courseImage: profile,
      assignmentName: "Exploring the Depths of Human Psychology and Behavior",
      course: "Math 101",
      dueDate: "August 18, 2024",
      status: "Open"
    },
  ]

 


  export function SubmitedAssignmentsTable({assignment,fetchCourses}) {

  
    const [courses, setCourses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editValues, setEditValues] = useState(null);
  // Set default course ID or empty string
    const [assignmentFile, setAssignmentFile] = useState(null);
    const [uploadAssignmentProgress, setUploadAssignmentProgress] =
    useState(null);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const isActiveRef = useRef();
    const fileInputRef = useRef(); 

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

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      handleAssignmentFile(file);
    };


    useEffect(() => {
      if (editValues) {
        setSelectedCourseId(editValues.courseId);
      }
    }, [editValues]);


   
  




    // console.log(assignment);
    

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

    useEffect(() => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    const toggleModal = (index) => {
      setIsModalOpen(!isModalOpen);
      setEditValues(assignment[index])  
    };

    // console.log(editValues);
    
  
    const closeModal = (e) => {
      if (e.target.id === "modal-overlay") {
        setIsModalOpen(false);
      }
    };


    
    

    function handleDownload(index) {
      console.log(assignment[index].assignment);
    }

    async function handleDelete(index) {
      const assignmentId = assignment[index].id;
      console.log(assignmentId);
      
  
      if (!window.confirm("Are you sure you want to delete this assignment?")) {
        return;
      }
    
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assignments/${assignmentId}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
          },
        });
    
        if (response.ok) {
          // Optionally, update the state to remove the deleted assignment
          fetchCourses()
          console.log("Assignment deleted successfully");
        } else {
          console.error("Error deleting assignment:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    

    

    const courseMap = new Map(courses.map(course => [course.id, course.title]));
    


    const formSubmit = async (e) => {
      e.preventDefault();
      
      // Extract values from inputs
      const title = titleRef.current.value;
      const description = descriptionRef.current.value;
      const dueDate = dueDateRef.current.value;
      const isActive = isActiveRef.current.checked;
      const courseId = selectedCourseId; // Use selectedCourseId from state
    
      // Check if a file was uploaded
      const file = fileInputRef.current?.files[0];
    
      // Prepare the form data to be sent to the server
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('dueDate', dueDate);
      formData.append('isActive', isActive);
      formData.append('courseId', courseId);
      
      if (file) {
        formData.append('assignmentFile', file);
      }
    
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assignments/${editValues.id}`, {
          method: 'PATCH', // Assuming you are updating an existing assignment
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
          },
          body: formData,
        });
    
        if (response.ok) {
          // Handle successful update
          alert('Assignment updated successfully');
          setIsModalOpen(false); // Close the modal
          fetchCourses(); // Refresh the course list
        } else {
          console.error('Failed to update assignment:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating assignment:', error);
      }
    };



    const [selectedCourseId, setSelectedCourseId] = useState(editValues?.courseId || ""); 
    // console.log(selectedCourseId);

    return (
      <>
      <Table className="rounded-2xl">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
             <TableRow className="bg-[#ececec] text-black font-medium">
                  <TableHead className="w-[600px]">Assignment Name</TableHead>
                  <TableHead className="w-[200px] " >Course Name</TableHead>
                  <TableHead className="text-center ">Due Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
        </TableHeader>
        <TableBody>
          {assignment.length ? assignment.map((item, index) => (
            <TableRow key={index}>
                <TableCell className="font-medium w-[600px]">{item.title}</TableCell>
                <TableCell className="">{courseMap.get(item.course) || "Unknown Course"}</TableCell>
                <TableCell className="text-center">{item.dueDate}</TableCell>
                <TableCell><div className="flex justify-center w-full"><div  className={`p-1 px-4 rounded-full text-center w-fit  font-medium ${ item.isActive ?  "text-[#702DFF] bg-[#EDECFE]" : "text-[#FF0000] bg-[#FFE5E5]"}`}>{item.isActive ? "Open" : "Close"}</div></div></TableCell>
          </TableRow>
          )) : <TableRow>
          <TableCell  colSpan="5" className="font-medium text-center">Loading...</TableCell>
         </TableRow>}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
          </TableFooter> */}
      </Table>

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
              defaultValue={editValues.title}
              className="w-full border-b-2 border-black py-4 focus:outline-none"
              placeholder="Title"
              required
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Description:</h2>
              <textarea
                ref={descriptionRef}
                defaultValue={editValues.description}
                placeholder="Description"
                className="border-b-2 w-full border-black focus:outline-none py-4"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Due Date:</h2>
              <input
                ref={dueDateRef}
                defaultValue={formatDate(editValues.dueDate)}
                type="date"
                className="w-full border-b-2 border-black py-4 focus:outline-none"
                placeholder="Due Date"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1">Active:</h2>
              <input ref={isActiveRef} id="active"  defaultChecked={editValues?.isActive || false} type="checkbox" className="mr-2 " />
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
                  <option value="">Select a Course</option>
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
                Update Assignment
                <span className="text-[40px] font-semibold">+</span>
              </button>
            </div>
          </form>
        </div>
      )}
        </>
    )
  }



  function formatDate(dateString) {
    let date = new Date(dateString)
    // Get the year, month, and day from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1 and pad with zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Pad with zero if needed
    
    // Return the formatted date string in the format "YYYY-MM-DD"
    return `${year}-${month}-${day}`;
  }