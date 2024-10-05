import React from 'react'
import { TeacherTable } from './TeacherTable'
import StudentsCard from './StudentsCard'
import Groups from './Group/Groups'
import { TbDotsVertical } from "react-icons/tb";
import Profile from './Profile';
import profile from "@/assets/dashboard/prodile.svg"
import  {Calender}  from './Calendar';
import Timeline from './Timeline/Timeline';
const data = [
    {
        name:"Monica Alice",
        desig:"Maths Teacher",
        img:profile,


    }
]



const TeacherDashboard = () => {
  return (
    <>
      <div className='grid grid-cols-[70%_auto] gap-6 max-2xl:grid-cols-1'>
            {/* left comp  */}
            <div className=''>
                <h1 className='text-[30px] font-bold max-md:ml-12 max-md:text-[20px]'>Good Morning Monica!</h1>
                <div className='flex justify-center w-full flex-col items-start bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white p-5 font-medium rounded-2xl my-5'>
                    <p className='mt-5 '>Test progress</p>
                    <h2 className='text-[26px] font-normal my-5 max-md:text-[20px]'>Your students are doing great, 60% of the students have competed the test.</h2>
                </div>
                <div className='shadow-lg rounded-2xl p-10 max-md:p-2 bg-white'>
                    <div className='flex justify-between items-center'>
                    <h1 className='text-[26px] font-semibold max-sm:text-[18px]'>Submitted Tests</h1>
                    <select name="" id="" className='font-semibold max-sm:text-[14px]'>
                        <option value="class 6th">Class 6th</option>
                        <option value="">Class 7th</option>
                        <option value="">Class 8th</option>
                    </select>
                    </div>
                    <div className=' grid grid-cols-1 overflow-y-auto h-[400px] mt-5 w-full'>

                    <TeacherTable/>
                    </div>
                </div>
                <div className='grid gap-6  w-full grid-cols-[45%_auto] max-lg:grid-cols-1  mt-5 '>
                 

                    <StudentsCard/>
                 
                    <Groups />
                </div>
            </div>
            {/* right comp */}
            <div className='bg-white'>
                <div className='flex justify-between items-center p-6'>
                    <h1 className='text-[22px]'>Your Profile</h1>
                    <TbDotsVertical className='text-[22px]'/>

                </div>
                <div>
                    {
                        data && data.map((data , index)=>(
                            <Profile key={index} data={data}/>

                        ))
                    }
                </div>
                <div className='border-none'>
                    <Calender/>
                </div>
                <div>
                    <Timeline/>
                </div>
                <div></div>
            </div>
        </div>
    </>
  )
}

export default TeacherDashboard