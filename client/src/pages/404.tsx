import React from 'react'
import Link from 'next/link';

const index = () => {
  return (
    <div className="min-h-[calc(100vh-105px)] flex flex-col items-center justify-center">
      <p className='font-bold text-4xl text-center mb-8'>Page Not Found</p>
      <Link href="/">
        <span className='underline cursor-pointer p-2 bg-gray-800'>Take me back home</span>
      </Link>
    </div>
  );
}

export default index