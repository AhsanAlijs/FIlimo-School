import React from 'react'
import TimelineCard from './TimelineCard'

const data = [
    {
        title:"Solve real -world problems envolving to th..",
        classes:"5th",
        time:"10:00"
    },
    {
        title:"Solve real -world problems envolving to th..",
        classes:"5th",
        time:"10:00"
    },
    {
        title:"Solve real -world problems envolving to th..",
        classes:"5th",
        time:"10:00"
    },
    {
        title:"Solve real -world problems envolving to th..",
        classes:"5th",
        time:"10:00"
    }
]
const Timeline = () => {
  return (
    <div className='mt-5 p-5 max-md:p-0'>
        <h1 className='text-[26px] font-semibold max-md:text-[18px] max-md:pl-3'>Timeline</h1>
        {
            data && data.map((data, index)=>(
                <TimelineCard data={data} key={index}/>
            ))
        }
    </div>
  )
}

export default Timeline