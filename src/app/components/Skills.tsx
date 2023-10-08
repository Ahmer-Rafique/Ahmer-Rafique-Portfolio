
import React from 'react';
import { DiJavascript } from 'react-icons/di';
import { DiHtml5Connectivity } from 'react-icons/di';
import { DiCss3Full } from 'react-icons/di';
import { DiCssTricks } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Image from 'next/image';
const Skills = () => {
  return (<div className='bg-gray-300' id='Skills'>
    <section className="text-gray-600 body-font flex justify-between ">
      <div className="container px-5 py-4 mx-auto">

        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Skills
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-500">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 ">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <DiJavascript className='text-xl font-bold' />
                </div>
                <h2 className=" text-lg title-font font-medium text-blue-500">
                  JavaScript
                </h2>
              </div>
              <div className='flex grow'>
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                  <div className='absolute h-1 rounded-xl  bg-blue-500 w-[85%]'>
                  </div>
                </div>
                <p className='font-bold text-blue-500 text-right '> 85%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 ">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <DiHtml5Connectivity className='text-xl font-bold' />
                </div>
                <h2 className=" text-lg title-font font-medium text-green-500">
                  HTML
                </h2>
              </div>
              <div className='flex grow'>
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                  <div className='absolute h-1 rounded-xl bg-blue-500 w-[90%]'>
                  </div>
                </div>
                <p className='font-bold text-blue-500 text-right '> 90%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 ">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  < DiCss3Full className='text-xl font-bold' />
                </div>
                <h2 className=" text-lg title-font font-medium text-red-500 ">
                  CSS
                </h2>
              </div>
              <div className='flex grow'>
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                  <div className='absolute h-1 rounded-xl bg-blue-500 w-[80%]'>
                  </div>
                </div>
                <p className='font-bold text-blue-500 text-right '> 80%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3  ">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <DiCssTricks className='text-xl font-bold' />
                </div>
                <h2 className=" text-lg title-font font-medium text-pink-500">
                  Tallwind CSS
                </h2>
              </div>
              <div className='flex grow'>
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                  <div className='absolute h-1 rounded-xl bg-blue-500 w-[80%]'>
                  </div>
                </div>
                <p className='font-bold text-blue-500 text-right '> 80%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <SiTypescript className='text-xl font-bold' />
                </div>
                <h2 className=" text-lg title-font font-medium text-yellow-500">
                  TypeScript
                </h2>
              </div>
              <div className='flex grow'>
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                  <div className='absolute h-1 rounded-xl bg-blue-500 w-[85%]'>
                  </div>
                </div>
                <p className='font-bold text-blue-500 text-right '> 85%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 ">
            <div className="flex rounded-lg h-full  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <TbBrandNextjs className='text-xl font-bold' />
                </div>
                <h2 className=" text-lg title-font font-medium text-orange-500">
                  Next.Js
                </h2>
              </div>
              <div className='flex grow'>
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                  <div className='absolute h-1 rounded-xl bg-blue-500 w-[70%]'>
                  </div>
                </div>
                <p className='font-bold text-blue-500 text-right'>70%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded mx-auto "
            alt="hero"
            src={require("../../../public/my data/skills.pic.jpg")}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>

  </div>)
}
export default Skills;