"use client"
import React from 'react'
import TeacherCourses from '../components/TeacherCourses'
import { useUserAuth } from '@/context/AuthContext'

const page = () => {
  const { user } = useUserAuth()
  return (
    <section>
      {<TeacherCourses />}
    </section>
  )
}

export default page
