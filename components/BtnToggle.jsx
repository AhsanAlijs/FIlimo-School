"use client"
import React, { useState } from 'react';
import { btnToggle, btnData } from '@/utils/arrays/btntoggle';
import { IoIosArrowForward } from "react-icons/io";

const BtnToggle = ({btnToggle,btnData}) => {
  const [selectedType, setSelectedType] = useState(1);

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <section className='pt-10 pb-10'>
      <div className='flex gap-8 w-[70%] max-md:w-full  mx-auto max-md:gap-4 flex-wrap justify-center'>
        {btnToggle.map((item, index) => (
          <div key={index}>
           <button
              className={`border-2 px-4 py-2  text-[20px] max-lg:text-[16px] max-sm:text-[14px] max-sm:px-2 ${
                selectedType === item.type
                  ? ' bg-[#F4BD50] text-black '
                  : 'border-[#F4BD50] text-[#E67D4B]'
              } ${selectedType === item.type ? 'border-b-4 border-[#E67D4B]  border-r-0 border-l-0 border-t-0' : ''}`}
              onClick={() => handleButtonClick(item.type)}
            >
              {item.btn}
            </button>
          </div>
        ))}
      </div>

      {btnData
        .filter(item => selectedType === null || item.type === selectedType)
        .map((item, index) => (
          <div key={index} className=' w-[82%] max-md:w-full max-md:px-4 max-sm:px-2 mx-auto mt-10'>
            <div className=' w-[60%] max-sm:w-full mx-auto'>

            <h1 className='text-[#E67D4B] text-[40px] font-semibold max-lg:text-[20px] max-md:text-[16px] max-sm:text-[14px]'>{item.heading}</h1>
            <div className='h-[12px] w-[130px] max-md:w-[50px] max-sm:w-[20px] max-md:h-[8px] max-sm:h-[4px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] mr-2'></div>
            </div>
            <p className='text-center  text-[16px] pt-10 max-md:text-[14px] '>{item.para}</p>
            <ul className='mt-4 list-none grid grid-cols-4 max-lg:grid-cols-3 w-full max-sm:grid-cols-2 items-center '>
              {item.subtexts && item.subtexts.map((subtext, subIndex) => (
                <li key={subIndex} className='mt-1 flex items-center pt-2'> <span className='text-[#E67D4B]'><IoIosArrowForward /></span>{subtext}</li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default BtnToggle;
