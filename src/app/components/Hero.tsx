'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
const Hero=()=>{
  return(<div className='bg-gray-300'>
           <section className="text-gray-600 body-font">
           <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        src={require("../../../public/my data/my pic.jpg")}
        height={300}
        width={300}
      />
      </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hi...
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['I am Ahmer Ali.', 'I am Web Devloper. '],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">
      I am web devolper 3.0. I am learning web devloping from PIAIC.
         I am also learn ICS in college. My hobby is Web Developing.
      </p>
      <div className="flex justify-center">
        <button className="ml-4 inline-flex text-gray-700 bg-blue-500 hover:bg-red-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
        <Link href={"#About"}>
         More About Me
         </Link>
        </button>
      </div>
    </div>
  </div>
</section>

  </div>)
}
export default Hero;