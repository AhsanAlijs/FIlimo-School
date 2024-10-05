'use client'
import React, { useEffect, useState } from 'react'
import AssignmentsCard from './AssignmentsCard'
import { StudentAssignmentsCard } from './StudentAssignmentsCard'

const StudentAssignments = () => {
  const cardsArr = [
    {
      head: "Total Assignments",
      count: 10
    },
    {
      head: "Completed Submissions",
      count: 7
    },
    {
      head: "Ongoing Assignments",
      count: 30
    },
  ]


  const ongoing = [
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submit"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submit"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submit"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submit"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submit"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submit"
    },
  ]

  const completed = [
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submitted"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submitted"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submitted"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submitted"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submitted"
    },
    {
      courseName: "Course Name",
      dueDate : "August 15, 2024",
      button: "Submitted"
    },
  ]

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

  return (
    <>
      <section>
         <div className='grid grid-cols-3 gap-4 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-md:mt-8'>
            {cardsArr.map((item,index)=>{
              return <AssignmentsCard key={index} head={item.head} count={item.count}/>
            })}
          </div>


          <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-6 mt-2'>
             <div>
                <h2 className='text-[30px] font-bold mt-8  max-md:text-lg'>Ongoing Assignments</h2>
                <div className='drop-shadow-[0px_0px_24px_rgba(0,0,0,0.12)] grid h-[400px] overflow-y-auto mt-6 rounded-3xl'>
                  <StudentAssignmentsCard ongoing={ongoing} assignment={assignment}/>
                </div>
             </div>
             <div>
                <h2 className='text-[30px] font-bold mt-8  max-md:text-lg'>Completed Assignments</h2>
                <div className='drop-shadow-[0px_0px_24px_rgba(0,0,0,0.12)] grid h-[400px] overflow-y-auto mt-6 rounded-3xl'>
                  <StudentAssignmentsCard completed={completed}/>
                </div>
             </div>
          </div>
      </section>
    </>
  )
}

export default StudentAssignments