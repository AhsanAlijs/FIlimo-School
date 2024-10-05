// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import Image from "next/image";
// import { carouselCard2 } from "@/utils/arrays/Home";

// const SliderHome = () => {

//   // Function to chunk array into smaller arrays of given size
//   const chunkArray = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   // Group cards into chunks of 3
//   const groupedCards = chunkArray(carouselCard2, 3);

//   return (
//     <Swiper
//       modules={[Autoplay, Pagination]}
//       spaceBetween={30}
//       slidesPerView={1} // Show one group (slide) at a time
//       autoplay={{
//         delay: 6000,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       pagination={{
//         clickable: true,
//       }}
//     >
//       {groupedCards.map((group, index) => (
//         <SwiperSlide key={index} className="py-4 px-4 ">
//           <div className="flex gap-6">
//             {" "}
//             {/* Flex container to show 3 cards in a row */}
//             {group.map((item, itemIndex) => {
//               const bgColor =
//                 itemIndex % 2 === 0 ? "bg-[#e3f8ea]" : "bg-[#ebf6fd]";
//               return (
//                 <div
//                   className={`${bgColor} p-4 max-sm:p-6 flex items-center rounded-xl`}
//                   key={itemIndex}
//                 >
//                   <div className="">
//                     <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-center max-sm:text-center">
//                       <div className="w-[80px] max-lg:w-[60px]">
//                         <Image
//                           src={item.image}
//                           width={300}
//                           height={300}
//                           className="object-cover"
//                           alt="card image "
//                         />
//                       </div>
//                       <div className="">
//                         <h3 className="text-[22px] max-lg:text-[18px] text-start font-semibold max-sm:text-lg">
//                           {item.head}
//                         </h3>
//                         <div className="flex items-center">
//                           {getStars(item.stars).map((isFilled, starIndex) => (
//                             <svg
//                               key={starIndex}
//                               className={`w-[16px] max-lg:w-[12px] h-6 max-sm:h-4 max-sm:w-4 ms-1 ${
//                                 isFilled
//                                   ? "text-[#42C686]"
//                                   : "text-[#42c68659] dark:text-gray-500"
//                               }`}
//                               aria-hidden="true"
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="currentColor"
//                               viewBox="0 0 22 20"
//                             >
//                               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                             </svg>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="mt-3 text-[16px] max-lg:text-[14px] max-sm:text-sm">
//                       {item.para}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SliderHome;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import { carouselCard2 } from "@/utils/arrays/Home";
import blue from "@/assets/home/blue.jpg";
import green from "@/assets/home/green.jpg";

const SliderHome = () => {
  const totalStars = 5;
  const swiperRef = useRef(null); // Ref to access Swiper instance

  const getStars = (rating) => {
    return Array.from({ length: totalStars }, (_, index) => index < rating);
  };

  // Define state to control the number of items per slide
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [groupedCards, setGroupedCards] = useState([]);

  // Function to dynamically set items per slide based on screen size
  const updateItemsPerSlide = () => {
    const width = window.innerWidth;

    if (width <= 550) {
      setItemsPerSlide(1); // For very small screens like mobile devices
    } else if (width <= 768) {
      setItemsPerSlide(2); // For small tablets or large phones
    } else if (width <= 1200) {
      setItemsPerSlide(3); // For tablets and smaller desktops
    } else if (width <= 1880) {
      setItemsPerSlide(3); // For larger desktop screens
    } else {
      setItemsPerSlide(3); // For very large desktop screens
    }
  };

  // Function to chunk array into smaller arrays of given size
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Recalculate the chunks whenever the screen size or itemsPerSlide change
  useEffect(() => {
    // setGroupedCards(chunkArray(carouselCard2, itemsPerSlide));
    setGroupedCards(carouselCard2);
  }, [itemsPerSlide]);

  // useEffect(() => {
  //   // Initial setup
  //   updateItemsPerSlide();

  //   // Update on resize
  //   const handleResize = () => {
  //     updateItemsPerSlide();
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.update(); // Force Swiper to update on resize
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Clean up event listener on unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
        el: ".swiper-custom-pagination",
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 3 },
      }}
    >
      {groupedCards.map((group, index) => (
        <SwiperSlide key={index} className="">
          <div className="flex items-center justify-center gap-[-20px] cursor-grab">
            {/* Flex container to show cards in a row */}
            <div
              className={`${
                index % 2 === 0 ? "bg-[#e3f8ea]" : "bg-[#ebf6fd]"
              } p-4 max-sm:p-6 flex items-center rounded-xl  max-w-[400px] w-full py-12`}
            >
              <div>
                <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-center">
                  <div className="w-[80px] max-lg:w-[60px]">
                    <Image
                      src={index % 2 === 0 ? green : blue}
                      width={250}
                      height={250}
                      className="object-cover size-16 rounded-full "
                      alt="card image"
                    />
                  </div>
                  <div>
                    <h3 className="text-[22px] max-lg:text-[18px] text-start font-semibold max-sm:text-lg">
                      {group.head}
                    </h3>
                    <div className="flex items-center">
                      {getStars(group.stars).map((isFilled, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-[16px] max-lg:w-[12px] h-6 max-sm:h-4 max-sm:w-4 ms-1 ${
                            isFilled
                              ? "text-[#42C686]"
                              : "text-[#42c68659] dark:text-gray-500"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[16px] max-lg:text-[14px] max-sm:text-sm text-end p-4">
                  {group.para}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-custom-pagination" />
    </Swiper>
  );
};

export default SliderHome;
