import React from "react";
import CurrentCourses from "./ParentCourse/CurrentCourses";
import img1 from "../../../assets/dashboard/courses/image1.png";
import img2 from "../../../assets/dashboard/courses/imag2.png";
import img3 from "../../../assets/dashboard/courses/image3.png";
import img4 from "../../../assets/dashboard/courses/image4.png";
import img5 from "../../../assets/dashboard/courses/image5.png";
import img6 from "../../../assets/dashboard/courses/iamge6.png";
import img7 from "../../../assets/dashboard/courses/image7.png"
import Allcourses from "./ParentCourse/Allcourses";

const ParentCourses = () => {
  const data = [
    {
      image: img1,
      name: "Course Name",
      date: " 24/6/2024",
      subject: "science",
      perc: "98",
    },
    {
      image: img2,
      name: "Course Name",
      date: " 24/6/2024",
      subject: "science",
      perc: "77",
    },
    {
      image: img6,
      name: "Course Name",
      date: " 24/6/2024",
      subject: "science",
      perc: "65",
    },
    {
      image: img3,
      name: "Course Name",
      date: " 24/6/2024",
      subject: "science",
      perc: "89",
    },
    {
      image: img6,
      name: "Course Name",
      date: " 24/6/2024",
      subject: "science",
      perc: "20",
    },
    {
      image: img5,
      name: "Course Name",
      date: " 24/6/2024",
      subject: "science",
      perc: "40",
    },
  ];

  const allData = [
    {
      image : img7 ,
      name : "Course Name" , 
      subject : "SCIENCE",
      price : "57" ,
      rating : "5.0",
      btn : "purchase"
     }, {
      image : img7 ,
      name : "Course Name" , 
      subject : "SCIENCE",
      price : "57" ,
      rating : "5.0",
      btn : "purchase"
     }, {
      image : img7 ,
      name : "Course Name" , 
      subject : "SCIENCE",
      price : "57" ,
      rating : "5.0",
      btn : "purchase"
     }, {
      image : img7 ,
      name : "Course Name" , 
      subject : "SCIENCE",
      price : "57" ,
      rating : "5.0",
      btn : "purchase"
     }, {
      image : img7 ,
      name : "Course Name" , 
      subject : "SCIENCE",
      price : "57" ,
      rating : "5.0",
      btn : "purchase"
     }, {
      image : img7 ,
      name : "Course Name" , 
      subject : "SCIENCE",
      price : "57" ,
      rating : "5.0",
     },

  ]
  return (
    <section>
      <h1 className="text-[30px] mb-4 font-bold">Current Courses</h1>
      <div className="grid grid-cols-2 max-[1530px]:grid-cols-1 gap-8 bg-[#F9F8FE] p-4 ">
        {data &&
          data.map((data, index) => <CurrentCourses key={index} data={data} />)}
      </div>
      <h1 className="text-[30px] mt-6 mb-4 font-bold">All Courses</h1>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-8 bg-[#F9F8FE] p-6 ">
        { allData && allData.map((data , index) => <Allcourses key={index} data={data} /> ) }
      </div>
    </section>
  );
};

export default ParentCourses;
