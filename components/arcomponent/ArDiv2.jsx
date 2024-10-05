import Link from 'next/link'
import React from 'react'

const ArDiv2 = () => {
  return (
    <section >
      <div className='bg-[#f6f6f6] border-b text-center text-sm py-6 px-4 flex max-sm:flex-col gap-2 items-center justify-center flex-row-reverse'>
        <p className=' text-[#343534]' dir='rtl' >Do you need a group subscription? (special for teachers and schools)</p>
        <Link href="/contact">
        <button dir='rtl'   className="text-[#343534] lg:text-sm  max-md:text-sm max-sm:text-sm text-xs bg-white p-2 px-4 rounded-lg border border-gray-300">Contact the support unit</button>
        </Link>

      </div>
      
    </section>
  )
}

export default ArDiv2