import React from 'react';

const ArBlogButton = ({ cardData }) => {
  return (
    <div className=' '>
      {/* {cardData.map((btn, index) => ( */}
        <button

          className='border-[#E67D4B] border-2 max-sm:px-1 py-1 mr-2 w-[100%] px-4 rounded-lg text-[16px] max-sm:text-[11px] max-md:w-full'
        >
          {cardData.text}
        </button>
      {/* ))} */}
    </div>
  );
};

export default ArBlogButton;
