"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import auntii from "../../../../public/kidsreadybannerimg.png";
import farsibook from "../../../../public/farsi-book.png";
import WhenCard from "../../../../components/preschool/WhenCard";
import ArDiv2 from '@/components/arcomponent/ArDiv2';
// import kidsReadyBanner from "../../public/kidsReadyBanner.png";
import kidsReadyBanner from "../../../../public/kidsreadybannerimg.png";
import IntroBanner from '@/components/introbanner/IntroBanner';
import { useParams } from 'next/navigation'
import Spinner from '@/components/Spinner/Spinner';
const bannerContent = [
    {
        primaryImageSrc:farsibook,
        secondaryImageSrc:kidsReadyBanner,
        title:"Kids, ready for school",
        para:"In this part, we learn the second version of the Persian book, which includes teaching personal items such as toothbrushes, towels, glasses, and napkins. We also talk about the manners of how to go to school and what we should and can't bring to school. Next, using word cards, we read pictures and practice writing the first pages of the book. You can find the topic of this section on pages 5 and 6 of the textbook."
    }
]
const page = () => {
    const params = useParams()
    console.log("this is internal params" , params)
    const [data, setData] = useState(null)
  
    useEffect(() => {
      // Replace with your API endpoint
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${params.itemId}`)
          const result = await response.json()
          setData(result.body.lesson)
          console.log(result.body.lesson)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
  
      fetchData()
    }, [params.id])
    // console.log(data)
    if (!data) return <Spinner />
    return (
        
        <>

{
            // data && data.map((value,index)=>{
                // return(
                    <IntroBanner
                    bannerContent={data}
                    // key={index}
                 />
                // )
            // })
          }

            {/* <section>
                <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:mb-16 md:mb-0 items-center text-center">
                        <Image
                            className="object-cover object-center w-34 h-34 pb-3"
                            src={farsibook}
                            alt="blog"
                            objectFit="cover"
                        />
                        <h1 className="title-font text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-orange-500">
                            Kids, ready for school
                        </h1>

                        <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[10%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>

                        <p className="mb-8 leading-relaxed text-gray-700">In this part, we learn the second version of the Persian book, which includes teaching personal items such as toothbrushes, towels, glasses, and napkins. We also talk about the manners of how to go to school and what we should and can't bring to school. Next, using word cards, we read pictures and practice writing the first pages of the book. You can find the topic of this section on pages 5 and 6 of the textbook.</p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center w-full h-full"
                            src={auntii}
                            alt="blog"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </section> */}

            <WhenCard />

            <ArDiv2 />
        </>
    )
}

export default page