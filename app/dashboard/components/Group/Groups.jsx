import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import GroupCard from './GroupCard';
import img1 from "@/assets/dashboard/img1.svg"
import img2 from "@/assets/dashboard/img2.svg"
import img3 from "@/assets/dashboard/img3.svg"
import Link from 'next/link';
const data = [
  {
    title:"Teacher’s Group",
    img:img1,
  },
  {
    title:"Class 5th",
    img:img2,
    lesson :"10"
  },
  {
    title:"Teacher’s Group",
    img:img3,
    lesson :"10"
  },
]
const Groups = () => {
  return (
    
        <div className=' shadow-lg py-5 max-md:py-2 rounded-2xl w-full max-xl:w-full bg-white'>
          <div className='flex items-center justify-between px-6'>

            <h1 className='text-[26px] font-semibold max-md:text-[20px]'>Groups</h1>
            <div >
              <Link className='text-[18px] flex justify-center items-center gap-5 max-md:text-[15px]' href="#">View All <IoIosArrowForward /></Link>
                
            </div>
          </div>
            <div className='h-[400px] overflow-y-auto'>
              {
                data && data.map((data,index)=>(

                  <GroupCard key={index} data={data} />
                ))

              }
            </div>
        </div>
  
  )
}

export default Groups