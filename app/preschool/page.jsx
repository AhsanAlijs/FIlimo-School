"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import {
  HeaderText,
  Card,
  PriceCards,
  StudyPoints,
  WhenCard,
  Planning,
  MainComp,
} from "@/components/preschool";
import {
  cardDatas,
  subCard,
  studyPoints,
  wantCard,
  planning,
  FirstBasecard,
  FirstBasesubCard,
  FirstBasestudyPoints,
  FirstBasewantCard,
  FirstBaseplanning,
  SecondBasecard,
  SecondBasesubCard,
  SecondBasestudyPoints,
  SecondBasewantCard,
  SecondBaseplanning,
  ThirdBasecard,
  ThirdBasesubCard,
  ThirdBasestudyPoints,
  ThirdBasewantCard,
  ThirdBaseplanning,
  FourthBasecard,
  FourthBasesubCard,
  FourthBasestudyPoints,
  FourthBasewantCard,
  FourthBaseplanning,
  FifthBasecard,
  FifthBasesubCard,
  FifthBasestudyPoints,
  FifthBasewantCard,
  FifthBaseplanning,
  SixthBasecard,
  SixthBasesubCard,
  SixthBasestudyPoints,
  SixthBasewantCard,
  SixthBaseplanning,
  SeventhBasecard,
  SeventhBasesubCard,
  SeventhBasestudyPoints,
  SeventhBasewantCard,
  SeventhBaseplanning,
  EighthBasecard,
  EighthBasesubCard,
  EighthBasestudyPoints,
  EighthBasewantCard,
  EighthBaseplanning,
  NinthBasecard,
  NinthBasesubCard,
  NinthBasestudyPoints,
  NinthBasewantCard,
  NinthBaseplanning,
} from "@/utils/arrays/PreSchool";
import * as Tabs from "@radix-ui/react-tabs";
import Spinner from "@/components/Spinner/Spinner";
import "@/app/globals.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSearchParams } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const TabPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isScrollable, setIsScrollable] = useState(false); // State to check if the content is scrollable
  const tabsListRef = useRef(null);
  const scrollIntervalRef = useRef(null); // To store the interval for continuous scrolling
  const scrollAnimationFrameRef = useRef(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(true);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get("tab");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = [
          `${BaseUrl}/courses/class/first`,
          `${BaseUrl}/courses/class/first`,
          `${BaseUrl}/courses/class/second`,
          `${BaseUrl}/courses/class/third`,
          `${BaseUrl}/courses/class/fourth`,
          `${BaseUrl}/courses/class/fifth`,
          `${BaseUrl}/courses/class/sixth`,
          `${BaseUrl}/courses/class/seventh`,
          `${BaseUrl}/courses/class/eighth`,
          `${BaseUrl}/courses/class/ninth`,
          `${BaseUrl}/courses/class/Tenth`,
          `${BaseUrl}/courses/class/Eleven`,
          `${BaseUrl}/courses/class/Twelve`,
        ];
        const responses = await Promise.all(endpoints.map((url) => fetch(url)));
        responses.forEach((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        });
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Check if the content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (tabsListRef.current) {
        const { scrollWidth, clientWidth } = tabsListRef.current;
        setIsScrollable(scrollWidth > clientWidth);
      }
    };
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  // Function to handle scrolling
  const handleScroll = (direction) => {
    if (tabsListRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200; // Faster scroll amount
      tabsListRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const startContinuousScroll = (direction) => {
    const scrollAmount = direction === "left" ? -20 : 20; // Adjust scroll speed here
    const scroll = () => {
      if (tabsListRef.current) {
        tabsListRef.current.scrollBy({
          left: scrollAmount,
        });
        scrollAnimationFrameRef.current = requestAnimationFrame(scroll);
      }
    };
    scrollAnimationFrameRef.current = requestAnimationFrame(scroll);
  };

  // Stop continuous scroll on mouse leave
  const stopContinuousScroll = () => {
    if (scrollAnimationFrameRef.current) {
      cancelAnimationFrame(scrollAnimationFrameRef.current);
      scrollAnimationFrameRef.current = null;
    }
    // Check if scrolling has completed
    if (tabsListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current;
      setIsLeftArrowVisible(scrollLeft > 0);
      setIsRightArrowVisible(scrollLeft < scrollWidth - clientWidth);
    }
  };
  const handleArrowClick = (direction) => {
    handleScroll(direction);
    stopContinuousScroll();
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  const { siteSettings } = useUserAuth();

  return (
    <>
      <Tabs.Root defaultValue={search ? search : "tab1"} orientation="vertical">
        <div className="sticky top-0 z-[1000] bg-white border-[1px] border-x-0 border-[#cacaca] pt-5 w-full flex justify-center items-center text-[18px] section-width max-2xl:px-36 max-md:px-14 max-sm:px-5 text-[rgb(68, 68, 68)]">
          {isLeftArrowVisible && (
            <button
              className="absolute left-20 top-1/2 transform -translate-y-1/2 text-3xl pb-4 rounded-full p-2"
              onMouseEnter={() => startContinuousScroll("left")}
              onMouseLeave={stopContinuousScroll}
              onClick={() => handleArrowClick("left")}
            >
              <RiArrowLeftSLine />
            </button>
          )}
          <Tabs.List
            dir="rtl"
            aria-label="tabs example"
            className="flex gap-8 max-md:gap-9  justify-start max-w-screen-2xl mx-auto overflow-x-auto whitespace-nowrap custom-scrollbar-hide"
            ref={tabsListRef}
          >
            <Tabs.Trigger
              value="tab1"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Preschool
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              The first base
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab3"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Second base
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab4"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Third grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab5"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Fourth grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab6"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Fifth grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab7"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Sixth grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab8"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Seventh grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab9"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Eighth grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab10"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Ninth grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab11"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Tenth grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab12"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Eleven grade
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab13"
              className="data-[state=active]:border-b-8 pb-4 data-[grade-selected]:after:block after:hidden after:absolute after:w-full after:h-2 after:bg-[#F4BD50] after:rounded-t-lg after:bottom-0 after:right-0 after:left-0 w-max data-[state=active]:border-[#F4BD50] data-[state=active]:font-bold"
            >
              Twelve grade
            </Tabs.Trigger>
          </Tabs.List>
          {isRightArrowVisible && (
            <button
              className="absolute right-20 top-1/2 transform -translate-y-1/2 text-3xl pb-4  rounded-full p-2"
              onMouseEnter={() => startContinuousScroll("right")}
              onMouseLeave={stopContinuousScroll}
              onClick={() => handleArrowClick("right")}
            >
              <RiArrowRightSLine />
            </button>
          )}
        </div>

        {/* Tab contents */}
        <Tabs.Content value="tab1">
          {siteSettings?.data?.settings?.hideSummerCourses === false ? (
            <MainComp
              cardDatas={data[0].body.courses}
              studyPoints={studyPoints}
              subCard={subCard}
              wantCard={wantCard}
              isHide={true}
            />
          ) : (
            <>
              <div>
                {planning &&
                  planning.map((data, index) => {
                    return <Planning data={data} key={index} />;
                  })}
              </div>

              <div className="flex flex-wrap justify-evenly items-center mt-[100px]">
                <div>
                  {studyPoints &&
                    studyPoints.map((data, index) => {
                      return <StudyPoints data={data} key={index} />;
                    })}
                </div>

                <div className="max-md:mt-[50px] max-xl:w-full">
                  {subCard &&
                    subCard.map((data, index) => {
                      return <PriceCards key={index} data={data} />;
                    })}
                </div>
              </div>
            </>
          )}
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <MainComp
            cardDatas={data[1].body.courses}
            planning={FirstBaseplanning}
            studyPoints={FirstBasestudyPoints}
            subCard={FirstBasesubCard}
            wantCard={FirstBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <MainComp
            cardDatas={data[2].body.courses}
            planning={SecondBaseplanning}
            studyPoints={SecondBasestudyPoints}
            subCard={SecondBasesubCard}
            wantCard={SecondBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab4">
          <MainComp
            cardDatas={data[3].body.courses}
            planning={ThirdBaseplanning}
            studyPoints={ThirdBasestudyPoints}
            subCard={ThirdBasesubCard}
            wantCard={ThirdBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab5">
          <MainComp
            cardDatas={data[4].body.courses}
            planning={FourthBaseplanning}
            studyPoints={FourthBasestudyPoints}
            subCard={FourthBasesubCard}
            wantCard={FourthBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab6">
          <MainComp
            cardDatas={data[5].body.courses}
            planning={FifthBaseplanning}
            studyPoints={FifthBasestudyPoints}
            subCard={FifthBasesubCard}
            wantCard={FifthBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab7">
          <MainComp
            cardDatas={data[6].body.courses}
            planning={SixthBaseplanning}
            studyPoints={SixthBasestudyPoints}
            subCard={SixthBasesubCard}
            wantCard={SixthBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab8">
          <MainComp
            cardDatas={data[7].body.courses}
            planning={SeventhBaseplanning}
            studyPoints={SeventhBasestudyPoints}
            subCard={SeventhBasesubCard}
            wantCard={SeventhBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab9">
          <MainComp
            cardDatas={data[8].body.courses}
            planning={EighthBaseplanning}
            studyPoints={EighthBasestudyPoints}
            subCard={EighthBasesubCard}
            wantCard={EighthBasewantCard}
          />
        </Tabs.Content>
        <Tabs.Content value="tab10">
          <MainComp
            cardDatas={data[9].body.courses}
            planning={NinthBaseplanning}
            studyPoints={NinthBasestudyPoints}
            subCard={NinthBasesubCard}
            wantCard={NinthBasewantCard}
          />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default function Page() {
  return (
    <Suspense>
      <TabPage />
    </Suspense>
  );
}
