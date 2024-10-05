'use client'
import React, { useState } from 'react'
import { btnArray, question } from "@/utils/arrays/ararticle";
import ARMainComp from '@/components/arcomponent/ARMainComp';
const page = () => {
    // Fetch data on component mount
    const [articleData, setArticleData] = useState(null)
  return (
    <section className='max-w-screen-2xl mx-auto my-7 md:my-14 max-2xl:px-24 max-md:px-14 max-sm:px-5'>
    <ARMainComp article={question} btnArray={btnArray}/>
    </section>
  )
}

export default page
