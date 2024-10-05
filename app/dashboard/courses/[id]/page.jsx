"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import CourseLessonTable from "../../components/CourseLessonTable";

const page = () => {

  const [courses, setCourses] = useState([]);
  const params = useParams();

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/${params.id}`);

      if (response.ok) {
        const result = await response.json();
        setCourses(result?.body?.course);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []); // Add params.id to the dependency array

  // console.log("Fetched Courses:", courses);

  return (
    <>
      <section>
        <CourseLessonTable courses={courses} courseId={params.id} fetchCourses={fetchCourses} />
      </section>
    </>
  );
};

export default page;
