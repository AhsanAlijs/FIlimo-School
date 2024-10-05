import React from 'react'
import student1 from "@/assets/dashboard/student1.svg"
import ProfileCard from '../ProfileCard'
import Link from 'next/link'
import Card from './Card'
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
    {
        img:student1,
        name:"Luca John",
        score:90,
    },
]

const LiveSession = () => {
  return (
    <div className='shadow-lg rounded-2xl w-full max-xl:w-full mt-10 py-5 bg-white '>
        <div className='flex justify-between items-center px-6 '>
            <h1 className='text-[26px] font-semibold'>Top Students</h1>
            <select name="" id="" className='text-[18px]'>
                <option value="class-6">Class 6th</option>
                <option value="class-7">Class 7th</option>
                <option value="class-8">Class 8th</option>
            </select>
        </div>
        <div className='h-[500px] overflow-y-auto'>
            {
                data && data.map((data , index)=>(
                    <Card data={data} key={index}/>
                ))
            }
        </div>
        
    </div>
  )
}

export default LiveSession