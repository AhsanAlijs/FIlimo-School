'use client'
import React from 'react'
import { downloadData } from '@/utils/arrays/Arcontact'
import ArDownload from '@/components/arcomponent/ArDownload'
import ArDiv2 from '@/components/arcomponent/ArDiv2'

const page = () => {

  return (
    <div>
      {downloadData && downloadData.map((item, index) => (
        <ArDownload key={index} data={item} />
      ))}
      <ArDiv2 />
    </div>
  )
}

export default page
