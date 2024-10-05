"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner2 from "@/assets/home2/banner2.png";
import VideoCard from "@/components/home2/VideoCard";
import Link from "next/link";
import CarouselDoubleHome2 from "@/components/home/CarouselDoubleHome2";
import CarouselCardHome2 from "@/components/home/CarouselCardHome2";
import VideoCardHome2 from "@/components/home/VideoCardHome2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Spinner from "@/components/Spinner/Spinner";
import Slider from "@/components/home2/Slider";
import { useUserAuth } from "@/context/AuthContext";
// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css';

const page = () => {
  const [data, setData] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [rubikVideo, setRubikVideo] = useState([]);
  const [pythonVideo, setPythonVideo] = useState([]);
  const [magicVideo, setMagicVideo] = useState([]);
  const [exclusiveVideo, setExclusiveVideo] = useState([]);
  const [magnetVideo, setMagnetVideo] = useState([]);
  const [goodVideo, setGoodVideo] = useState([]);
  const [slimeVideo, setSlimeVideo] = useState([]);
  const [masterVideo, setMasterVideo] = useState([]);
  const [courseId, setCourseId] = useState();

  const [pythonCourseId, setPythonCourseId] = useState();
  const [magicCourseId, setMagicCourseId] = useState();
  const [exclusiveCourseId, setExclusiveCourseId] = useState();
  const [magnetCourseId, setMagnetCourseId] = useState();
  const [goodCourseId, setGoodCourseId] = useState();
  const [slimeCourseId, setSlimeCourseId] = useState();
  const [masterCourseId, setMasterCourseId] = useState();
  const { user, siteSettings } = useUserAuth();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses/summer`
      );
      const result = await res.json();
      console.log(result.body.courses);

      setData(result.body.courses);

      // rubiks filter

      const rubikFilter = result.body.courses.filter(
        (course) => course.title === "Rubik's"
      );

      setCourseId(rubikFilter[0].id);

      // Fetch all lessons for the filtered courses
      const lessonsData = await Promise.all(
        rubikFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setRubikVideo(lessonsData);

      // python filter

      const pythonFilter = result.body.courses.filter(
        (course) => course.title === "Programming (Python)"
      );

      setPythonCourseId(pythonFilter[0].id);

      // Fetch all lessons for the filtered courses
      const pythonData = await Promise.all(
        pythonFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setPythonVideo(pythonData);

      // magic filter

      const magicFilter = result.body.courses.filter(
        (course) => course.title === "Magic painting"
      );

      setMagicCourseId(magicFilter[0].id);

      // Fetch all lessons for the filtered courses
      const magicData = await Promise.all(
        magicFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setMagicVideo(magicData);

      // exclusive filter

      const exclusiveFilter = result.body.courses.filter(
        (course) => course.title === "Magic painting"
      );

      setExclusiveCourseId(exclusiveFilter[0]?.id);

      // Fetch all lessons for the filtered courses
      const exclusiveData = await Promise.all(
        exclusiveFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setExclusiveVideo(exclusiveData);

      // magnet Filter

      const magnetFilter = result.body.courses.filter(
        (course) => course.title === "Magnet game"
      );

      setMagnetCourseId(magnetFilter[0]?.id);

      // Fetch all lessons for the filtered courses
      const magnetData = await Promise.all(
        magnetFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setMagnetVideo(magnetData);

      // good Filter

      const goodFilter = result.body.courses.filter(
        (course) => course.title === "Art"
      );

      setGoodCourseId(goodFilter[0]?.id);

      // Fetch all lessons for the filtered courses
      const goodData = await Promise.all(
        goodFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setGoodVideo(goodData);

      // slime Filter

      const slimeFilter = result.body.courses.filter(
        (course) => course.title === "Slime making workshop"
      );

      setSlimeCourseId(slimeFilter[0]?.id);

      // Fetch all lessons for the filtered courses
      const slimeData = await Promise.all(
        slimeFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setSlimeVideo(slimeData);

      // good Filter

      const masterFilter = result.body.courses.filter(
        (course) => course.title === "the chef"
      );

      setMasterCourseId(masterFilter[0]?.id);

      // Fetch all lessons for the filtered courses
      const masterData = await Promise.all(
        masterFilter[0].lessons?.map(async (lessonId) => {
          console.log(lessonId);

          const lessonRes = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId}`
          );
          return lessonRes.json();
        })
      );

      setMasterVideo(masterData);
    };

    fetchData();

    const fetchLesson = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/lessons`
      );
      const lessonResult = await response.json();
      console.log(lessonResult.body.lessons);

      setLesson(lessonResult.body.lessons);
    };

    fetchLesson();
  }, []);

  return (
    <>
      <section className="pb-8">
        <div className="">
          <Slider />
        </div>

        {
          siteSettings?.data?.settings?.hideSummerCourses===false?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 max-lg:w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <h2 className="text-[40px] mb-6 font-medium max-md:text-2xl max-md:font-semibold text-end">
                All courses
              </h2>

              <div className="mb-28">
                {/* {data ? data.map((item, index) => {
              return (
                <Link href={`/language/${item.id}`}>
                  <Section2Card key={index} image={item?.image} text={item?.title}/>
                </Link>
              );
            }) : <p>Loading..</p>} */}

                <CarouselDoubleHome2 allData={data ? data : []} />
              </div>
            </div>
            :
            ""
        }


        {/* section 3 */}
        <div className="max-w-screen-2xl max-2xl:max-w-screen-xl  px-4 mx-auto">
          <div className="bg-[#722abb] mt-8 rounded-xl flex items-center justify-between max-xl:flex-col max-xl:pb-8 w-full section-width  max-2xl:px-10 max-md:px-14 max-sm:px-5">
            <Image src={banner2} height={100} width={500} />
            <div className="flex pr-8 flex-col items-end max-xl:items-center gap-4 max-xl:pr-0 max-xl:mt-6 max-sm:pr-2 max-sm:pl-2">
              <h2 className="text-[40px] max-2xl:text-[30px]  max-md:text-3xl max-sm:text-2xl font-bold text-white text-end">
                Don’t cook make food
              </h2>
              <button className="px-4 max-md:text-2xl max-sm:w-full h-[50px] max-sm:h-[45px] max-sm:text-xl bg-white mt-8 transition-all hover:bg-[#d1d1d1] text-black rounded-[10px] text-[26x] max-2xl:text-[20px] font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                Let’s go to the kitchen
              </button>
            </div>
          </div>
        </div>

        {/* recently viewed (section 4) */}
        {
          siteSettings?.data?.settings?.hideSummerCourses===false?
            <div className="max-w-screen-2xl mx-auto mt-10 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div className="flex justify-end items-end">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold">
                  Courses you have recently viewed:
                </h2>
              </div>

              <div className=" mt-8 ">
                <CarouselCardHome2 allData={data && data.slice(0, 6)} />
              </div>
            </div>
            :
            ""
        }

        {/* video (section 7)  */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5 ">
              <div dir="rtl" className="flex  justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Rubik's
                </h2>
                <Link href={`/language/${courseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <Carousel className="relative">
                <CarouselContent className="">
                  {rubikVideo.length > 0 ? (
                    rubikVideo.map((lesson, index) => (
                      <Link
                        href={{
                          pathname: `/language/${courseId}`,
                          query: { lessonId: lesson?.body.lesson.id },
                        }}
                        key={index}
                      >
                        <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                          <VideoCardHome2
                            videoData={lesson?.body.lesson.thumbnail}
                          />
                        </CarouselItem>
                      </Link>
                    ))
                  ) : (
                    <Spinner />
                  )}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            :
            ""
        }

        {/* semester 2 (section 5) */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-10 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold">
                  Korean language (semester 2)
                </h2>
              </div>

              <div className=" mt-8 ">


                <CarouselCardHome2 allData={data && data.slice(6, 15)} />
              </div>
            </div>
            :
            ""
        }


        {/* programming section 9 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto  mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Programming (Python)
                </h2>
                <Link href={`/language/${pythonCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">
                <Carousel className="relative">
                  <CarouselContent className="">
                    {pythonVideo.length > 0 ? (
                      pythonVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${pythonCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <p>Loading...</p>
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

        {/* laugh and learn (section 6) */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-10 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  laugh and learn
                </h2>
              </div>

              <div className="mt-8">

                <CarouselCardHome2 allData={data && data.slice(15, 24)} />
              </div>
            </div>
            :
            ""
        }

        {/* magic painting section 11 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Magic painting
                </h2>
                <Link href={`/language/${magicCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">
                <Carousel className="relative">
                  <CarouselContent className="">
                    {magicVideo.length > 0 ? (
                      magicVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${magicCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

        {/* do at section 8 */}
        {siteSettings?.data?.settings?.hideSummerCourses === false ?
          <div className="max-w-screen-2xl mx-auto mt-10 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
            <div dir="rtl" className="flex justify-between">
              <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                Do it at home?
              </h2>
            </div>

            <div className="mt-8">


              <CarouselCardHome2 allData={data && data.slice(14, 23)} />
            </div>
          </div>
          :
          ""
        }

        {/* Exclusive dubbing section 12 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Exclusive dubbing
                </h2>
                <Link href={`/language/${exclusiveCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">

                <Carousel className="relative">
                  <CarouselContent className="">
                    {exclusiveVideo.length > 0 ? (
                      exclusiveVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${exclusiveCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

        {/* Tampering section 10 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-10 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Tampering
                </h2>
              </div>

              <div className="mt-8">


                <CarouselCardHome2 allData={data && data.slice(2, 11)} />
              </div>
            </div>
            :
            ""

        }

        {/* Magnet game section 13 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Magnet game
                </h2>
                <Link href={`/language/${magnetCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">

                <Carousel className="relative">
                  <CarouselContent className="">
                    {magnetVideo.length > 0 ? (
                      magnetVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${magnetCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

        {/* Good for your future section 14 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Good for your future
                </h2>
                <Link href={`/language/${goodCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">

                <Carousel className="relative">
                  <CarouselContent className="">
                    {goodVideo.length > 0 ? (
                      goodVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${goodCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

        {/*Making slime section 15 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  Making slime with Jillian
                </h2>
                <Link href={`/language/${slimeCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">
                <Carousel className="relative">
                  <CarouselContent className="">
                    {slimeVideo.length > 0 ? (
                      slimeVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${slimeCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

        {/*master chef section 16 */}
        {
          siteSettings?.data?.settings?.hideSummerCourses !==true?
            <div className="max-w-screen-2xl mx-auto mt-8 px-4 w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5">
              <div dir="rtl" className="flex justify-between mb-8">
                <h2 className="text-[30px] font-medium text-[#343534] max-sm:text-xl max-sm:font-semibold ">
                  master chef
                </h2>
                <Link href={`/language/${masterCourseId}`}>
                  <p className="text-[30px] font-medium text-[#E67D4B] max-sm:text-xl max-sm:font-semibold cursor-pointer">{`More>`}</p>
                </Link>
              </div>
              <div className="">
                <Carousel className="relative">
                  <CarouselContent className="">
                    {masterVideo.length > 0 ? (
                      masterVideo.map((lesson, index) => (
                        <Link
                          href={{
                            pathname: `/language/${masterCourseId}`,
                            query: { lessonId: lesson?.body.lesson.id },
                          }}
                          key={index}
                        >
                          <CarouselItem className="w-[400px] p-0 pr-6 max-sm:w-[370px]">
                            <VideoCardHome2
                              videoData={lesson?.body.lesson.thumbnail}
                            />
                          </CarouselItem>
                        </Link>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            :
            ""
        }

      </section>
    </>
  );
};
export default page;
