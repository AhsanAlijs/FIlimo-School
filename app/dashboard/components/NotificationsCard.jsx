import React from 'react'

const NotificationsCard = (props) => {
  return (
    <>
      <div className='bg-[#F9F8FE] p-4 rounded-[10px]'>
        <h2 className='text-[22px] max-xl:text-lg'>{props.notification}</h2>
        <h3 className='capitalize text-[15px] font-semibolds mt-2 text-[#E67D4B]'>{props.tag}</h3>
      </div>
    </>
  )
}

export default NotificationsCard