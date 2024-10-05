'use client'
import { Progress } from '@/components/ui/progress'
import React from 'react'

const GradeProgress = (props) => {
  const [progress, setProgress] = React.useState(0)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(props.value), 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={progress} className="w-full h-3" />
  
}

export default GradeProgress