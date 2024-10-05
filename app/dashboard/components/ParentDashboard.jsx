import React from 'react';
import AverageCard from './AverageCard';
import { LineCharts } from '../components/LineCharts';
import GradeProgress from './GradeProgress';
import { SubjectChart } from './SubjectChart';
import { CoursePurchaseTable } from './CoursesPurchaseTable';
import { FaAngleRight, FaChevronRight } from 'react-icons/fa';
import NotificationsCard from './NotificationsCard';

const ParentDashboard = () => {

  const cardArr = [
    {
      num: 4.3,
      head: "Your children’s average grade"
    },
    {
      num: 1,
      head: "Total children"
    },
    {
      num: 22,
      head: "Your children’s notifications"
    },
  ];

  const recentGrades = [
    {
      subject: "Math",
      progress: "60",
      value: "60%"
    },
    {
      subject: "English",
      progress: "70",
      value: "70%"
    },
    {
      subject: "History",
      progress: "40",
      value: "40%"
    },
    {
      subject: "Science",
      progress: "80",
      value: "80%"
    },
  ];



  const notificationData = [
    {
      notification: "Emma has completed the course Math 3 - Division",
      tag: "yesterday"
    },
    {
      notification: "A new assignment is available in Math 4 - Multiplication",
      tag: "yesterday"
    },
    {
      notification: "A new assignment is available in Science 7 - Elements",
      tag: "2 days ago"
    },
    {
      notification: "A new assignment is available in Science 7 - Elements",
      tag: "2 days ago"
    },
    {
      notification: "A new assignment is available in Science 7 - Elements",
      tag: "2 days ago"
    },
  ]
  return (
    <>
      <section>
        <h2 className='text-[30px] font-bold max-md:ml-12 max-md:text-lg'>Welcome Back Sarah!</h2>

        <div className='grid grid-cols-3 gap-4 mt-6 max-xl:grid-cols-2 max-sm:grid-cols-1'>
          {cardArr.map((item, index) => (
            <AverageCard key={index} num={item.num} head={item.head} />
          ))}
        </div>

        <h2 className='text-[30px] font-bold mt-8 mb-6 max-md:text-lg'>Child’s Progress</h2>
        <div className='grid grid-cols-2 gap-6 max-xl:grid-cols-1'>
          <div className='rounded-3xl bg-white drop-shadow-[0px_0px_42px_rgba(0,0,0,0.12)] p-8 max-sm:p-6'>
            <h2 className='text-[26px] font-semibold mb-4 max-lg:text-lg max-sm:text-sm'>Assignments <span className='font-extrabold text-[#E67D4B]'>(A)</span></h2>
            <LineCharts />
          </div>

          <div className='rounded-3xl bg-white drop-shadow-[0px_0px_42px_rgba(0,0,0,0.12)] p-8 max-sm:p-6'>
            <h2 className='text-[26px] font-semibold mb-4 max-lg:text-lg max-sm:text-sm'>Recent Grades <span className='font-extrabold text-[#E67D4B]'>(B)</span></h2>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-start p-2'>Subject</th>
                  <th className='text-start p-2 px-14 max-sm:px-8'>Progress</th>
                  <th className='text-end p-2'>Value</th>
                </tr>
              </thead>
              <tbody className=''>
                {recentGrades.map((item, index) => (
                  <tr key={index} className='w-full '>
                    <td className='p-2 py-7 max-sm:py-3'>{item.subject}</td>
                    <td className='w-full py-7 max-sm:py-3 p-2 px-14 max-sm:px-8'><GradeProgress value={item.progress} /></td>
                    <td className='text-end py-7 max-sm:py-3 p-2'>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className='text-[30px] font-bold mt-8 mb-6 max-md:text-lg'>hvv</h2>
        <div className='rounded-3xl bg-white drop-shadow-[0px_0px_42px_rgba(0,0,0,0.12)] p-8 max-sm:p-6'>
          <div className='mb-4 flex justify-between p-4 max-md:p-0'>
            <h2 className='text-[26px] font-semibold max-lg:text-lg max-sm:text-sm'>Last 7 Days</h2>
            <p className='text-[25px] font-medium text-[#7C7C82] max-lg:text-lg max-sm:text-sm'>Every subjects performance</p>
          </div>
            <SubjectChart/>
        </div>

        <div className='grid grid-cols-2 gap-6 max-xl:grid-cols-1 w-full h-full'>
          <div className='w-full'>
             <h2 className='text-[30px] font-bold mt-8 mb-6 max-md:text-lg'>Course Purchases</h2>
             <div className='h-[320px] overflow-y-auto grid w-full'>
                <CoursePurchaseTable/>
             </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
                <h2 className='text-[30px] font-bold mt-8 mb-6 max-md:text-lg'>Notifications</h2>
                <button className='flex gap-2 items-center text-[24px] font-medium group transition-all max-md:text-lg'>View All <FaChevronRight className='group-hover:translate-x-1 transition-all'/></button>
            </div>
              <div className='rounded-[14px] bg-white drop-shadow-[0px_0px_42px_rgba(0,0,0,0.12)] p-6 grid grid-cols-1 gap-4 h-[320px] overflow-y-auto'>
                {notificationData.map((item)=>{
                  return <NotificationsCard notification={item.notification} tag={item.tag}/>
                })}
                  
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParentDashboard;
