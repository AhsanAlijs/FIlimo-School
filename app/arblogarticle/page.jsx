import React from "react";
import ArBlogButton from "@/components/arcomponent/ArBlogButton";
import ArBlogArticle from "@/components/arcomponent/ArBlogArticle";
import ArPostButton from "@/components/arcomponent/ArPostButton";
import BtnToggle from "@/components/BtnToggle";
import ARMainComp from "@/components/arcomponent/ARMainComp";
import { btnArray, article } from "@/utils/arrays/ararticle";

const page = () => {

  return (
    <section className="px-4 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-3">

      <div className="grid max-sm:grid-cols-2 grid-cols-5 max-md:grid-cols-2  max-lg:grid-cols-3 gap-4 mt-8 px-0 md:px-5 lg:px-9">
        {btnArray &&
          btnArray.map((item, index) => (
            <ArBlogButton key={index} cardData={item} />
          ))}
      </div>

      <section className="mt-10 ">
        <div className="flex justify-center  mb-10">
          <div className="w-fit flex flex-col items-start px-4 mx-auto mt-4 ">
            <h1 className="lg:text-[34px] md:text-[30px] max-[765px]:text-[30px] font-bold max-sm:text-2xl text-[#E67D4B]">
              Step by Step
            </h1>
            <div className="h-[12px]  w-[70px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B] "></div>
          </div>
        </div>
        <section className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center gap-6 mt-6 w-fit mx-auto">
          {article &&
            article.map((item, index) => (
              <ArBlogArticle key={index} data={item} />
            ))}
        </section>
      </section>
      <ArPostButton />
    </section>
  );
};

export default page;
