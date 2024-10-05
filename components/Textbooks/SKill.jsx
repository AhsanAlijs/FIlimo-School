'use client'
import React, { useEffect, useState } from 'react'
import bannerImage from '@/assets/home2/banner-image.png'
import Image from 'next/image'
import Section2Card from '@/components/home2/Section2Card'
import { imageCard, recentlyViewed, section2data } from '@/utils/arrays/Home2'
import banner2 from '@/assets/home2/banner2.png'
import VideoCard from '@/components/home2/VideoCard'
import Link from 'next/link'
import Spinner from '../Spinner/Spinner'
const Skill = () => {

  const [data, setData] = useState(null);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/summer`);
      const result = await res.json();
      console.log(result.body.courses);
      
      setData(result.body.courses);
    };

    fetchData();


    const fetchLesson = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lessons`);
      const lessonResult = await response.json();
      console.log(lessonResult.body.lessons);
      
      setLesson(lessonResult.body.lessons);
    };

    fetchLesson();
  }, []);


  return (
    <div className='pb-8'>
              {/* section 2 */}

              <div className='max-w-screen-2xl mx-auto   px-4 max-sm:w-full'>
              <div className='flex justify-center mt-8 max-sm:mt-0'>
          <div className=" pt-10 ">
            <h1 className="text-[#E67D4B] text-[34px] max-xl:text-[30px]  max-md:text-[20px]  max-lg:text-[26px] font-bold  ">
            All courses
            </h1>
            <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          </div>
        </div>

          <div className='grid grid-cols-5 w-fit mx-auto max-2xl:grid-cols-4 max-xl:grid-cols-3 justify-items-center max-sm:grid-cols-2 gap-[30px] px-4 mt-[60px]'>
            {data ? data.map((item, index) => {
              return (
                <Link href={`/language/${item.id}`}>
                  <Section2Card key={index} image={item?.image} text={item?.title}/>
                </Link>
              );
            }) : (<Spinner />)}
          </div>
        </div>

     
    </div>
  )
}

export default Skill