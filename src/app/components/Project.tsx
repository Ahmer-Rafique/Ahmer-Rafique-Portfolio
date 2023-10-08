import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Project =()=>{
    return (<div className='bg-gray-300 ' id='Project'>
             <section className="text-gray-600 body-font">
  <div className="container px-2 py-2 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500 p-5">
        My project
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/my data/Screenshot (7).png")}
          />
          <div className="px-5 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Facbook Page
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 mx-auto">
              Facebook login Page
            </h1>
            <p className="leading-relaxed">
              This is Facebook clone login Page. I make this for login into the Facebook.
            </p>
            <Link target='_blank'
            href={"https://my-5jndg1ejr-ahmerali17.vercel.app/"}> 
            <p className="leading-relaxed text-blue-500 hover:underlinef">
              View Project....
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>)
}
export default Project;