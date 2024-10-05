'use client'
import Link from 'next/link';
import * as React from 'react';
import { FaAngleRight } from 'react-icons/fa';

export default function Page() {
  return (
    <div
    className='flex justify-center mx-auto'      
    >


<Link href="/liveSession" target="_blank">

        <h1 className='text-2xl  bg-green-400 rounded-xl font-semibold py-2  px-5 text-white text-center w-fit group transition-all flex items-center gap-2 shadow'>Create a meeting <span className=''><FaAngleRight className='group-hover:translate-x-2 transition-all'/></span></h1>
</Link>
    </div>
  );
}
