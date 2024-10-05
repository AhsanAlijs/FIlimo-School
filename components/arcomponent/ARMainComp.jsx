"use client"
import React, { useState } from "react";
import ArBlogButton from "@/components/arcomponent/ArBlogButton";
import ArBlogArticle from "@/components/arcomponent/ArBlogArticle";

const ARMainComp = ({ btnArray, article }) => {

  console.log(article);
  
  const [visibleCount, setVisibleCount] = useState(3); // Initially display 3 posts

  const loadMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Increase count by 3 on each click
  };

  return (
    <section className="px-4">
     <div className="flex items-center flex-wrap gap-4 mt-8">
     {btnArray &&
        btnArray?.map((item, index) => (
          <ArBlogButton key={index} cardData={item} />
        ))}
     </div>

      <section className="mt-10">
        <div className="w-[22%] max-md:w-full mx-auto">
          <h1 className="text-[#E67D4B] text-[40px] max-md:text-[20px] max-lg:text-[30px] font-bold text-center">
            Step by Step
          </h1>
          <div className="bg-[#F4BD50] h-2 max-md:w-[40%] mx-auto w-full border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
        <section className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center gap-6 mt-6 w-fit mx-auto px-4">
          {article &&
            article.slice(0, visibleCount).map((item, index) => (
              <ArBlogArticle key={index} data={item} />
            ))}
        </section>
      </section>

      {visibleCount < article.length && (
        <div className="w-[246px] mx-auto pt-10 pb-10">
          <button
            className="border-2 border-[#E67D4B] text-[#E67D4B] py-2 w-[240px]"
            onClick={loadMorePosts}
          >
            Load More Post
          </button>
        </div>
      )}
    </section>
  );
};

export default ARMainComp;