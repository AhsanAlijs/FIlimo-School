import Image from 'next/image';
import React from 'react';

const Card = ({ image, lessonNo, head, selectedLesson }) => {
  // Conditionally apply border color if the card is selected
  const cardClasses = `flex max-xl:flex-nowrap  shadow-xl w-[400px] max-xl:w-full duration-300 border-4 rounded-xl 
    ${selectedLesson ? 'border-[#E67D4B]' : ' hover:border-[#E67D4B]'}`;

  return (
    <div className={cardClasses}>
      <Image
        alt="img"
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`}
        width={368}
        height={232}
        className=" w-[120px] max-md:w-[80px] max-lg:w-[100px] object-cover object-top"
      />
      <div className="flex w-full flex-wrap flex-col items-start justify-center p-2">
        <p className="text-[#818181] text-[14px] max-md:text-[12px]">{lessonNo}</p>
        <h1 className="text-[#E67D4B] text-[14px] max-md:text-[12px] font-semibold max-sm:text-[16px] ">{head}</h1>
      </div>
    </div>
  );
};

export default Card;