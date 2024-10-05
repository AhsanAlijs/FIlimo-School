'use client'
import React from 'react'
import ArDiv from '@/components/arcomponent/ArDiv'
import {data} from '@/utils/arrays/Arcontact';
import ArDiv2 from '@/components/arcomponent/ArDiv2';
import BtnToggle from '@/components/BtnToggle';
import { btnToggle, btnData } from '@/utils/arrays/btntoggle';
const page = () => {
  // console.log(data);
  
  return (
    <div>
      {data && data.map((item , index)=>(

      <ArDiv key={index} cardData={item} />
      ))}
      <ArDiv2 />
      {/* <BtnToggle btnToggle={btnToggle} btnData={btnData}/> */}
    </div>
  )
}

export default page
