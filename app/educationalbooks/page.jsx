'use client'
import React from 'react'
import Image from 'next/image';
import WhenCard from "../../components/preschool/WhenCard";
import ArDiv2 from "../../components/arcomponent/ArDiv2";
import edubook1 from "../../public/Rectangle 142.png";
import edubook2 from "../../public/Rectangle 144.png";
import edubook3 from "../../public/Rectangle 145.png";
import edubook4 from "../../public/Rectangle 146.png";

import { planning, studyPoints as study, studyPoints, subCard } from "@/utils/arrays/PreSchool";
import { HeaderText, Planning, PriceCards, StudyPoints } from '@/components/preschool';

const wantCard = [
    {
        header: "Educational books",
        para: "To display the lessons, select the book you want:"
    }
]

const books = [
    { src: edubook1, alt: 'Books', title: '1st grade Persian' },
    { src: edubook2, alt: 'Books', title: '1st grade Persian' },
    { src: edubook3, alt: 'Books', title: '1st grade Persian' },
    { src: edubook4, alt: 'Books', title: '1st grade Persian' },
];

const page = () => {
    return (
        <>
            <section>
                <div className='max-w-screen-2xl mx-auto'>
                <div className="">
                    {/* Educational books heading */}

                    {wantCard && wantCard.map((data, index) => {
                        return (

                            <HeaderText data={data} key={index} />
                        )
                    })}

                    {/* 4 cards */}

                    <div className='flex flex-wrap justify-center gap-7'>
                        {books.map((book, index) => (
                            <div key={index} className='text-center font-bold text-gray-700'>
                                <Image
                                    className="object-cover object-center w-56 h-w-56 pb-3"
                                    src={book.src}
                                    alt="img"
                                    objectFit="cover"
                                />
                                <h1>{book.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
          {
            planning && planning.map((data, index) => {
              return (
                <>
                  <Planning data={data} key={index} />
                </>
              )
            })
          }
        </div>
                <div className=' flex flex-wrap justify-between items-center mt-[100px]'>
          <div>
            {
              studyPoints && studyPoints.map((data, index) => {
                return (
                  <StudyPoints data={data} key={index} />

                )
              })
            }
          </div>

          <div className='max-md:mt-[50px] max-xl:w-full '>
            {
              subCard && subCard.map((data, index) => {
                console.log(data)
                return (
                  <PriceCards key={index} data={data} />
                )
              })
            }
          </div>

        </div>
                </div>

                <WhenCard />
                <ArDiv2 />

            </section>


        </>
    )
}

export default page