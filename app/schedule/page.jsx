"use client"
import React, { useState } from 'react';
import Selector from '@/components/profile/Selector';
import image from "../../assets/profile/Ellipse40.png"
import Image from 'next/image';

const Page = () => {
  const [selectedButton, setSelectedButton] = useState('whole');

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const renderHeading = () => {
    switch (selectedButton) {
      case 'whole':
        return(
          <div className="flex justify-center mt-8 mb-6 max-sm:mt-0">
          <div className=" pt-10 ">
            <h1 className="text-[#E67D4B] text-[30px] max-xl:text-[30px]  max-md:text-[20px]  max-lg:text-[28px] font-bold  ">
            Program of the year
            </h1>
            <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          </div>
        </div>
        ) ;
      case '30days':
        return(
          <div className="flex justify-center mt-8 mb-6 max-sm:mt-0">
          <div className=" pt-10 ">
            <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px]  max-md:text-[20px]  max-lg:text-[26px] font-bold  ">
            Previous works
            </h1>
            <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          </div>
        </div>
        ) ;
      case '7days':
        return(
          <div className="flex justify-center mt-8 mb-6 max-sm:mt-0">
          <div className=" pt-10 ">
            <h1 className="text-[#E67D4B] text-[40px] max-xl:text-[30px]  max-md:text-[20px]  max-lg:text-[26px] font-bold  ">
            This week
            </h1>
            <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          </div>
        </div>
        ) ;
      default:
        return null;
    }
  };

  const renderParagraph = () => {
    switch (selectedButton) {
      case 'whole':
        return <p className='mt-6'>The program has just started and we don’t have the program of the year.</p>;
      case '30days':
        return <p className='mt-6'>The program has just started and we don’t have the previous work.</p>;
      case '7days':
        return (
          <div className='flex flex-col gap-6 mt-6'>
                      <h2 className='font-bold'>Summer is short! we will be back soon</h2>
                      <p>!Go have fun, gain new experiences and skills.</p>
                      <Image src={image} alt='image' width={302} className='mx-auto max-md:w-[200px] max-sm:w-[150px]' />
          </div>

        )
      default:
        return null;
    }
  };

  return (
    <section className='max-w-screen-2xl mx-auto px-4'>
    <div className="text-center">
      {renderHeading()}
      <Selector
        selectedButton={selectedButton}
        handleClick={handleClick}
        btn1={"Program of the year"}
        btn2={"Previous works"}
        btn3={"This week"}
        btntext={"(summer vacation)"}
      />
      {renderParagraph()}
    </div>
    </section>

  );
};

export default Page;
