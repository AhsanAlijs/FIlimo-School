import React from 'react'
import { ProgressCircle } from './ProgressCircle'

const SubjectsCard = ({data}) => {
    const {subj, asign,perc} = data
  return (
    <div className='flex  p-5  bg-[#F9F8FE] max-2xl:w-full w-[500px] justify-between items-center'>
        <div>
            <h1 className='text-[25px] font-semibold'>
                {subj}
            </h1>
            <p className='text-[#9E9E9E] text-[20px]'>{asign} Assignments Completed</p>
        </div>
        <div className=''>
        <ProgressCircle perc={perc}/>
            
        </div>
    </div>
  )
}

export default SubjectsCard