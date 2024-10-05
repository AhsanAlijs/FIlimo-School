import React from 'react'
import TeacherAssignments from '../components/TeacherAssignments'
import StudentAssignments from '../components/StudentAssignments'

const page = () => {
  const teacher = false
  return (
    <>
      {teacher ? <TeacherAssignments/> : <StudentAssignments/>}
    </>
  )
}

export default page