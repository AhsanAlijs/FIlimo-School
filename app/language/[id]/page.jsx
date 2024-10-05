'use client';
import Card from '@/components/language/Card';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Spinner from '@/components/Spinner/Spinner';
import { useUserAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CardContext';

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const search = searchParams.get('lessonId');
  const { user, token } = useUserAuth();
  const lessonNo = parseInt(params.id) + 1;

  const [data, setData] = useState(null);
  const [buyCourse, setBuyCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessonRefs = useRef([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const courseRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}`);
        if (!courseRes.ok) throw new Error('Failed to fetch course data');
        const courseResult = await courseRes.json();
        const course = courseResult.body.course;
        setData(course);

        const userCourseRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}/user`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!userCourseRes.ok) throw new Error('Failed to fetch user course data');
        const userCourseResult = await userCourseRes.json();
        setBuyCourse(userCourseResult.body.course);

        if (course?.lessons?.length > 0) {
          const lessonsData = await Promise.all(
            course.lessons.map(async (lessonId) => {
              const lessonRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lessons/${lessonId.id}`);
              if (!lessonRes.ok) throw new Error('Failed to fetch lesson data');
              return await lessonRes.json();
            })
          );

          setLessons(lessonsData);

          // Determine the selected lesson based on search or params.id
          const lessonToSelect = lessonsData.find(
            lesson => lesson.body.lesson.id === search || lesson.body.lesson.id === params.id
          );
          setSelectedLesson(lessonToSelect?.body?.lesson || lessonsData[0]?.body?.lesson);
        }
      } catch (error) {
        console.error("Error fetching course or lessons data:", error);
      }
    };

    fetchCourseData();
  }, [params.id, search, token]);

  useEffect(() => {
    if (selectedLesson && lessonRefs.current.length > 0) {
      const selectedRef = lessonRefs.current.find(ref => ref && ref.dataset.id === selectedLesson.id);
      if (selectedRef) {
        selectedRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedLesson]);

  const handleCardClick = (lesson, index) => {
    // Check the structure of lesson before setting selectedLesson
    const lessonData = lesson.body ? lesson.body.lesson : lesson;
    setSelectedLesson(lessonData);
  };

  const getLessonIndex = () => {
    if (!selectedLesson || !lessons.length) return null;
    return lessons.findIndex(item => item.body.lesson.id === selectedLesson.id) + 1;
  };

  const lessonIndex = getLessonIndex();

  const { addToCart } = useCart();
  return (
    <div className="flex flex-col justify-center max-2xl:px-24 max-md:px-14 max-sm:px-5 items-center max-w-screen-2xl mx-auto pb-10 mt-20 ">
      <div>
        <h1 className="text-[40px] text-[#E67D4B] font-bold max-md:text-[30px]">{data?.title}</h1>
        <div className="bg-[#F4BD50] h-[12px] w-[91px] border-b-2 border-[#E67D4B]"></div>
        <p>Watch the complete videos of the skill courses and get a certificate.</p>
        {!user?.body?.user?.coursesPurchased.includes(data?.id) &&
          <div className="flex justify-center mt-4">
            <button onClick={() => addToCart(data)} className='bg-[#F4BD50] px-6 mb-4 py-2 text-[30px] font-semibold rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.3)] mx-auto'>
              Add to Cart
            </button>
          </div>
        }
      </div>

      <div>
        <div className='flex gap-6 max-md:flex-col-reverse mt-6'>
          <div className="grid grid-cols-1 max-md:grid-cols-2 gap-x-8 max-sm:grid-cols-1 justify-items-center gap-y-10 max-md:gap-y-16">
          {!buyCourse ? (
              lessons &&
              lessons.map((item, index) => {
                const lessonData = item.body?.lesson;
                const displayLessonNo = index + 1;
                const isSelected = selectedLesson && selectedLesson?.id === lessonData?.id;

                return (
                  <div
                    key={lessonData.id}
                    className={`cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`} // Optional styling for selected
                    id='scroll-to-top'
                    data-id={lessonData?.id}
                    ref={el => lessonRefs.current[index] = el}
                    onClick={() => handleCardClick(item, index)}
                  >
                    <Card
                      image={lessonData?.thumbnail}
                      src={lessonData?.thumbnail?.startsWith("http") ? lessonData.thumbnail : `${process.env.NEXT_PUBLIC_BASE_URL}/${lessonData.thumbnail}`}
                      lessonNo={`Lesson ${displayLessonNo <= 9 ? `0${displayLessonNo}` : displayLessonNo}`}
                      head={lessonData?.title}
                      selectedLesson={isSelected}
                    />
                  </div>
                );
              })
            ) : (
              buyCourse &&
              buyCourse?.lessons?.map((item, index) => {
                const displayLessonNo = index + 1;
                const isSelected = selectedLesson && selectedLesson?.id === item?.id;

                return (
                  <div
                    key={displayLessonNo.id}
                    className={`cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}
                    id='scroll-to-top'
                    data-id={item?.id}
                    ref={el => lessonRefs.current[index] = el}
                    onClick={() => handleCardClick(item, index)}
                  >
                    <Card
                      image={item?.thumbnail}
                      src={item?.thumbnail?.startsWith("http") ? item.thumbnail : `${process.env.NEXT_PUBLIC_BASE_URL}/${item.thumbnail}`}
                      lessonNo={`Lesson ${displayLessonNo <= 9 ? `0${displayLessonNo}` : displayLessonNo}`}
                      head={item?.title}
                      selectedLesson={isSelected}
                    />
                  </div>
                );
              })
            )}
          </div>
          <div className="sticky top-6 h-[600px] max-md:static max-md:top-auto max-md:h-auto">
            {selectedLesson ? (
              <video
                src={process.env.NEXT_PUBLIC_BASE_URL + '/' + (selectedLesson?.videoUrl?selectedLesson?.videoUrl :selectedLesson?.videoUrlShort)}
                type="mp4/video"
                className="rounded-3xl max-sm:rounded-2xl max-sm:w-full max-md:h-[300px] max-lg:h-[200px] max-sm:h-[200px] w-[600px] h-[300px] object-cover"
                controls
                autoPlay
              ></video>
            ) : (
              <video
                // src={process.env.NEXT_PUBLIC_BASE_URL + '/' + (lessons?.[0]?.body?.lesson?.videoUrlShort || data?.demoVideo)}
                src={process.env.NEXT_PUBLIC_BASE_URL + '/' + (lessons?.[0]?.body?.lesson?.videoUrl ?lessons?.[0]?.body?.lesson?.videoUrl: lessons?.[0]?.body?.lesson?.videoUrlShort)}
                type="mp4/video"
                className="rounded-3xl max-sm:rounded-2xl max-sm:w-full max-md:h-[300px] max-lg:h-[200px] max-sm:h-[200px] w-[600px] h-[300px] object-cover"
                controls
                autoPlay
              ></video>
            )}
            <div>
              <div className='flex gap-4 justify-start mt-5 items-center'>
                {lessonIndex ? (
                  <p className='text-[#818181] text-[20px] max-lg:text-[18px]'>Lesson {lessonIndex <= 9 ? "0" + lessonIndex : lessonIndex}</p>
                ) : (
                  <Spinner />
                )}

                <div className='border-r-2 h-[45px] w-[5px] border-[#E67D4B]'></div>
                <p className='text-[30px] font-semibold max-lg:text-[18px] capitalize'>{data?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;