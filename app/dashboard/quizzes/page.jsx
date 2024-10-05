import React from 'react'
import { CompletedQuiz } from '../components/StudentDashboard/CompletedQuiz'
import NotiComp from '../components/NotiComp'
const subjects = [
    {
      title: "Physics",
      date: "August 15, 2024",
      message:
        "Your child has missed the Algebra Worksheet 3 assignment due on August 15, 2024. Please ensure it's completed and submitted as soon as possible to avoid any grade penalties.",
    },
    {
      title: "Physics",
      date: "August 15, 2024",
      message:
        "Your child has missed the Algebra Worksheet 3 assignment due on August 15, 2024. Please ensure it's completed and submitted as soon as possible to avoid any grade penalties.",
    },
    {
      title: "Physics",
      date: "August 15, 2024",
      message:
        "Your child has missed the Algebra Worksheet 3 assignment due on August 15, 2024. Please ensure it's completed and submitted as soon as possible to avoid any grade penalties.",
    },
    {
      title: "Physics",
      date: "August 15, 2024",
      message:
        "Your child has missed the Algebra Worksheet 3 assignment due on August 15, 2024. Please ensure it's completed and submitted as soon as possible to avoid any grade penalties.",
    },
    {
      title: "Physics",
      date: "August 15, 2024",
      message:
        "Your child has missed the Algebra Worksheet 3 assignment due on August 15, 2024. Please ensure it's completed and submitted as soon as possible to avoid any grade penalties.",
    },
    {
      title: "Physics",
      date: "August 15, 2024",
      message:
        "Your child has missed the Algebra Worksheet 3 assignment due on August 15, 2024. Please ensure it's completed and submitted as soon as possible to avoid any grade penalties.",
    },
  ];
  
const page = () => {
  return (
    <div className='max-w-screen-2xl'>
        <h1 className='text-[30px] my-5 font-bold max-md:text-[20px] '>Completed Quizzes</h1>
        <div className=' grid grid-cols-1 rounded-2xl shadow-lg overflow-y-auto h-[400px] bg-white w-full'>
        <CompletedQuiz/>
        </div>
        <div className='rounded-lg '>
        <h1 className="text-gray-700 my-10 font-bold text-[25px] sm:text-[30px] text-md">
          All Notifications
        </h1>
        <div className='flex-col gap-8 flex bg-[#F9F8FE] p-4 rounded-lg h-[500px] overflow-y-auto'>

        {subjects &&
        subjects.map((data, index) => (
            <NotiComp key={index} data={data} />
        ))}
        </div>
        </div>
    </div>
  )
}

export default page