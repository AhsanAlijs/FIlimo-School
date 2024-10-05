"use client";
import React from 'react';

const Selector = ({ selectedButton, handleClick, btn1, btn2, btn3, btntext }) => {
  const getButtonClass = (button, position) => {
    const baseClass = 'flex-grow text-center py-3 transition-colors duration-300 ease-in-out focus:outline-none ';

    if (button === selectedButton) {
      const additionalClasses = button === '7days' && btntext ? ' flex flex-col items-center' : '';
      return `${baseClass} bg-[#E67D4B] text-white${additionalClasses}`;
    }

    const borderClass = position === 'first'
      ? 'rounded-l-3xl'
      : position === 'last'
      ? `rounded-r-3xl ${btntext ? 'flex flex-col items-center' : ''}`
      : '';

    return `${baseClass} bg-transparent text-black ${borderClass}`;
  };

  return (
    <div className="flex justify-center border-2 w-[35%] max-xl:w-[40%] max-lg:w-[60%] max-sm:w-[93%] mx-auto border-[#E67D4B] rounded-3xl overflow-hidden">
      <button
        className={getButtonClass('whole', 'first')}
        onClick={() => handleClick('whole')}
      >
        <span className='max-md:text-[14px] max-sm:text-[11px]'>
          {btn1}
        </span>
      </button>
      <button
        className={getButtonClass('30days', 'middle')}
        onClick={() => handleClick('30days')}
      >
        <span className='max-md:text-[14px] max-sm:text-[11px]'>
          {btn2}
        </span>
      </button>
      <button
        className={getButtonClass('7days', 'last')}
        onClick={() => handleClick('7days')}
      >
        <span className='max-md:text-[14px] max-sm:text-[11px]'>
          {btn3}
        </span>
        {btntext && (
          <span className='text-[12px] font-medium text-[#F4BD50] max-md:text-[12px] max-sm:text-[10px]'>
            {btntext}
          </span>
        )}
      </button>
    </div>
  );
};

export default Selector;
