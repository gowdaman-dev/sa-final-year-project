import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className='w-screen p-1 bg-orange-200 text-xs text-gray-900 flex items-center justify-between px-10'>
        <p className=''>
            Latest tutorials and articles on various topics from experts in the field.
        </p>
        <p className='text-purple-950 hover:text-zinc-500 ease transition-all duration-300'>
            <Link href={'/latest'}>
            Explore Now
            </Link>
        </p>
    </div>
  )
}

export default Banner