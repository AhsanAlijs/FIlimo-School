'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import { useEffect, useRef, useState } from "react";
import { TbPointerPause } from "react-icons/tb"




export function StudentAssignmentsCard(props) {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseMap, setCourseMap] = useState(new Map());
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAssignmentFile(file);
    }
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setAssignmentFile(file);
      setUploadProgress(0);
      simulateUpload();
    } else {
      alert("Please upload a valid image file.");
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
      type === "image" ? handleFile(file) : handleVideoFile(file); // Adjust if needed
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOpenModal = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleCloseModal = () => {
    setSelectedAssignment(null);
    setAssignmentFile(null);
  };

  const fetchSubmittedAssignments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/profile`, {
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
        },
      });
      if (res.ok) {
        const result = await res.json();
        setSubmittedAssignments(result?.body?.user?.assignmentSubmitted || []);
      } else {
        console.error("Failed to fetch assignments");
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    fetchSubmittedAssignments();
  }, []); // Only run on component mount

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assignments`, {
          headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
          },
        });
        if (response.ok) {
          const result = await response.json();
          const assignments = result?.body?.assignments || [];
          const updatedCourseMap = new Map(assignments.map(assignment => [assignment.id, assignment]));
          setCourses(assignments);
          setCourseMap(updatedCourseMap);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!assignmentFile) {
      alert('Please upload a file');
      return;
    }
  
    const formData = new FormData();
    formData.append('assignment', assignmentFile);
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assignments/submit/${selectedAssignment.id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        // Fetch the updated assignments from the server
        fetchSubmittedAssignments();
  
        handleCloseModal();
      } else {
        console.error('Failed to submit assignment:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting assignment:', error);
    }
  };
  
  
  
  return (
    <>
    
    
    <Table className="rounded-2xl w-full table-fixed bg-white ">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="bg-[#F8F9FD] sticky top-0">
          <TableHead className="text-[#000000] text-[18px] ">Course Name</TableHead>
          <TableHead className="text-[#000000] text-[18px] ">Due Date</TableHead>
          <TableHead className="text-end text-[#000000] text-[18px] ">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.assignment ? props.assignment.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium flex justify-start items-center gap-5 ">{item.title}</TableCell>
            <TableCell className="">{item.dueDate}</TableCell>
            <TableCell ><div className="flex justify-end"><button className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] p-2 px-4 text-[17px] font-medium text-white flex rounded-full" onClick={() => handleOpenModal(item)}>Submit</button></div></TableCell>
          </TableRow>
        )) : submittedAssignments && submittedAssignments.map((item, index)=>{
          const assignment = courseMap.get(item.assignmentId);
          // console.log('Assignment Details:', assignment);

          return <TableRow key={index}>
                    <TableCell className="font-medium flex justify-start items-center gap-5 ">{assignment ? assignment.title : "Unknown Assignment"}</TableCell>
                    <TableCell className="">{assignment ? assignment.dueDate : "Unknown Assignment"}</TableCell>
                    <TableCell ><div className="flex justify-end"><span className="bg-[#DAFFDA] p-2 px-4 text-[14px] font-medium text-[#419B41] flex rounded-full">Submited</span></div></TableCell>
                  </TableRow>
        })}
      </TableBody>
    </Table>

    {selectedAssignment && (
        <Dialog open={selectedAssignment !== null} onOpenChange={handleCloseModal}>
          {/* <DialogTrigger asChild>
            <Button onClick={() => handleOpenModal(selectedAssignment)}>Open Modal</Button>
          </DialogTrigger> */}
          <DialogContent className="bg-white text-black p-8 rounded-md flex flex-col">
            <DialogTitle></DialogTitle>
            <h2 className="text-xl font-semibold">Upload Assignment File</h2>
            <p className="text-lg text-gray-500">Please upload the file for the assignment. Make sure the file is in PDF, DOC, DOCX, JPEG, PNG, or SVG format.</p>
            <form className="w-full" onSubmit={handleSubmit}>
            <div className="mt-4 w-full">
              <div
                className="flex justify-center items-center border-2 border-dashed h-auto p-2 mt-4 w-full"
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
                onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
              />
            </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white rounded-full px-6 py-2 w-full mt-4 text-lg"
              >
                Submit Assignment
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
      </>
  )
}
