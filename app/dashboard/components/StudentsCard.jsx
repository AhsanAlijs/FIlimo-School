import React from 'react'
import student1 from "@/assets/dashboard/student1.svg"
import ProfileCard from './ProfileCard'
const data = [
    {
        img:student1,
        name:"Luca John",
        score:90,
    },
    {
        img:student1,
        name:"Luca John",
        score:90,
    },
    {
        img:student1,
        name:"Luca John",
        score:90,
    },

]

const StudentsCard = () => {
  return (
    <div className='shadow-lg rounded-2xl w-full max-xl:w-full py-5 bg-white'>
        <div className='flex justify-between items-center px-6'>
            <h1 className='text-[26px] font-semibold max-md:text-[20px]'>Top Students</h1>
            <select name="" id="" className='text-[18px]'>
                <option value="class-6">Class 6th</option>
                <option value="class-7">Class 7th</option>
                <option value="class-8">Class 8th</option>
            </select>
        </div>
        <div className='h-[400px] overflow-y-auto '>
            {
                data && data.map((data , index)=>(
                    <ProfileCard data={data} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default StudentsCard