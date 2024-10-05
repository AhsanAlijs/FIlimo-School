import React from 'react'

const AverageCard = (props) => {
  return (
    <> 
      <div className='bg-white p-8 rounded-[21px] text-center border-[0.5px] border-[#E67D4B] max-sm:p-6'>
        <h3 className='text-[48px] max-lg:text-2xl font-semibold text-[#202020] mb-4 max-lg:mb-2'>{props.num}</h3>
        <h2 className='text-[23px] max-lg:text-lg text-[#E67D4B]'>{props.head}</h2>
      </div>
    </>
  )
}

export default AverageCard