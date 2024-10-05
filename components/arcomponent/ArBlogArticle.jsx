import Image from 'next/image';
import React from 'react';

const ArBlogArticle = ({ data }) => {
  return (
    <section>
      <div className=" w-[450px] max-2xl:w-full max-2xl:h-full max-2xl:pb-6 h-[480px] drop-shadow-[0_0_30px_rgba(0,0,0,0.30)] max-lg:drop-shadow-[0_0_18px_rgba(0,0,0,0.30)] bg-[#EFEFEF] rounded-b-xl max-sm:w-full max-sm:h-auto">
        <Image
          src={data.image}
          alt="Article Image"
          width={490}
          height={250}
          className="w-full h-auto object-cover rounded-t-xl max-sm:rounded-t-lg"
        />
        <div className="px-4">
          <h2 className="text-[#818181] text-[16px] pt-4 font-normal max-lg:text-[16px] max-sm:text-sm">
            {data.name}
          </h2>
          <div className="bg-[#E77D44] h-1 mt-2 w-36 max-lg:w-24 max-sm:w-16"></div>
          <h2 className="text-[20px] font-semibold pt-2 max-lg:text-lg max-sm:text-base">
            {data.subject}
          </h2>
          <p className="my-2 text-base max-lg:text-sm max-sm:text-xs">
            {data.para}
          </p>
        </div>
      </div>

    </section>
  );
};

export default ArBlogArticle;