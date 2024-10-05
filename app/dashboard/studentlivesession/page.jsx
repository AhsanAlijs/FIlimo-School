import React from 'react'
import { LiveSessionTable } from '../components/StudentDashboard/LiveSessionTable'
import StudentsCard from '../components/StudentsCard'
import LiveSession from '../components/StudentDashboard/LiveSeesion'
import { IoIosSearch } from 'react-icons/io'

const page = () => {
  return (
    <div className='max-w-screen-2xl'>
           <div className='flex items-center justify-between gap-4 max-sm:flex-col max-sm:mt-8 max-sm:w-full'>
            <div className='relative max-sm:w-full'>
              <input className='py-[8px] h-[48px] px-[16px] pr-[45px] w-[590px] max-xl:w-full bg-transparent border border-[#D2D2D2] outline-none rounded-full' type="text" placeholder='Search' />
              <IoIosSearch className='absolute top-3 text-2xl  text-[#E67D4B]  right-4' />
            </div>

            {/* <button className='text-[20px] max-sm:px-4 max-xl:text-xl max-xl:p-2 max-xl:px-6 max-sm:text-lg font-semibold bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full px-[40px] py-[8px] text-white flex items-center gap-2'>Create New Course <span className='text-[40px] font-semibold'>+</span></button> */}
          </div>
    <h1 className='text-[30px] my-5 font-bold max-md:text-[20px] '>Upcoming Sessions</h1>
    <div className=' grid grid-cols-1 rounded-2xl shadow-lg overflow-y-auto h-[400px] bg-white w-full'>
    <LiveSessionTable/>
    </div>
    <div className='w-full'>
    <LiveSession/>
    </div>
</div>
  )
}

export default page