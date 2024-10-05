import React from 'react'

const TimelineCard = ({data}) => {
    const {title ,time, classes } = data;
   return (
    <div className='bg-[#F9F8FE]  p-6 m-4 rounded-2xl'>
        <p className=' text-[14px] pb-3'>{title}</p>
        <p className='text-[16px] font-semibold flex justify-between items-center'><span className='text-[#E67D4B]'>Class: {classes}</span> <span className='text-[#702DFF]'>{time} AM</span></p>
    </div>
  )
}

export default TimelineCard