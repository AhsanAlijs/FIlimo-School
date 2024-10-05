"use client"
import React from 'react'
// import{ books,headerCont} from "@/utils/arrays/textbook"
import Link from 'next/link'
import { Card, HeaderText } from '@/components/preschool'
const Books = ({books}) => {


 

  return (
    <div className='flex gap-10 justify-center flex-wrap mt-10'>

 
    {books && books.map(( data, index)=>{
      
      return(
        <Link key={index}  href={`/lesson/${data._id}`}><Card cardDatas={data} /></Link> 
      )
    
          })}
        </div>
  )
}

export default Books