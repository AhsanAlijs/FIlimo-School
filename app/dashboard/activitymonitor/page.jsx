import React from 'react'
import { ActivityMonitoring } from '../components/ActivityMonitor/ActivityMonitoring'
import { Attendance } from '../components/ActivityMonitor/Attendance'
import SubjectsCard from '../components/ActivityMonitor/SubjectsCard'
const data = [
  {
    subj:"Math",
    perc:10,
    asign:10
  },
  {
    subj:"Arabic",
    perc:30,
    asign:4
  },
  {
    subj:"Persian",
    perc:45,
    asign:5
  },
  {
    subj:"Urdu",
    perc:60,
    asign:6
  },
  {
    subj:"English",
    perc:50,
    asign:5
  },
]
const page = () => {
  return (
    <div className='max-xl:w-full'>
      <div className=' grid grid-cols-1 h-[500px] overflow-y-auto '>
        <h1 className='text-[20px] font-bold'>Recent Activities</h1>
         <ActivityMonitoring/>
      </div>
      <div className='flex w-full max-xl:w-full  items-start gap-8 mt-10 flex-wrap' >
      <div className=' grid grid-cols-1 max-2xl:w-full w-[950px] h-[550px] overflow-y-auto '>
        <h1 className='text-[20px] font-bold mb-5'>Attendance</h1>
        <Attendance/>
      </div>
      <div className='max-2xl:w-full'>
      <h1 className='text-[20px] font-bold mb-5'>Engagement Analysis</h1>
     
      <div className='bg-white shadow-lg rounded-xl p-5 gap-5 flex flex-col  max-2xl:justify-start items-start max-2xl:w-full w-fit overflow-y-auto h-[500px]'>
      <h1 className='text-[20px] font-semibold'>Subjects Progress</h1>
        {
          data && data.map((data,index)=>(
            
            <SubjectsCard key={index} data={data}/>

          ))
        }
      </div>
      </div>
      </div>
    </div>
  )
}

export default page