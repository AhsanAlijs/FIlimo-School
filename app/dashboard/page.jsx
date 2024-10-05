import React from 'react'
import TeacherDashboard from './components/TeacherDashboard'
import ParentDashboard from './components/ParentDashboard'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'

const page = () => {

    // const parent = false
    const user = "teacher"
  return (
    <div>
        {user === "parent" ? <ParentDashboard/> :user==="teacher"? <TeacherDashboard/>:<StudentDashboard/>}
               
    </div>
  )
}

export default page