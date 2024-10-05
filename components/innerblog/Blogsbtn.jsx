import React from 'react';

const Blogsbtn = ({ cardData, onClick }) => {
  return (
    <div>
      <button
        className='text-[16px] border border-1 border-orange-400 px-2 py-2'
        onClick={onClick} // Attach the onClick handler here
      >
        {cardData.btntext}
      </button>
    </div>
  );
};

export default Blogsbtn;
