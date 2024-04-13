import React from 'react'
import  User_Rishabh from '../image/user/Rishabh_irregulerimage.png'
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineReadMore } from "react-icons/md";
import { FaHandPeace } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import resume from '../docs/Rishabh-Patel.pdf';


const About = () => {
  return (
    <>
      <div  className="px-4 font-SourceCode pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6 lg:animate-in animate-in slide-in-from-top-96 lg:slide-in-from-left-96 lg:duration-700 duration-1000">
            <div>
              {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p> */}
            </div>
            <h2 className=" text-3xl font-bold p-0 lg:p-0 tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Hello There{' '}
              <span  className="inline-block animate-bounce text-yellow-500"><FaHandPeace /></span>  
              <br className=" md:block" />
              I am{' '}
              <span className="inline-block text-deep-purple-accent-400">Rishabh Patel</span>
              <br className=" md:block" />
              <TypeAnimation className='text-2xl text-fuchsia-700' speed={50} repeat={Infinity}
                sequence={
                  [
                    'Full-Stack Developer',
                    2000,
                    'Data Analyst',
                    2000,
                    'Web Designer',
                    2000,
                  ]
                }
              />
            </h2>
            <p className="text-gray-700 text-base md:text-lg font-onecode">I'm a skilled full-stack developer and data analyst, dedicated to delivering exceptional user experiences and extracting actionable insights from complex datasets. Let's collaborate to elevate your projects to new heights of success.</p>
          </div>
          <div className="justify-center lg:justify-start gap-3 flex lg:gap-8 lg:animate-in  lg:slide-in-from-bottom-80 lg:duration-1000 ">
            <a href="/contact" className="md:w-44 w-44 text-sm shadow-sm shadow-neutral-800 rounded-full md:rounded-lg  md:duration-300 hover:shadow-md hover:shadow-neutral-900  animate-in lg:animate-in slide-in-from-left-80   duration-1000 lg:duration-200 ">
              <div className='flex px-5 py-2 flex-wrap space-x-3 justify-center  items-center '>
                <span className=''><MdOutlineContacts /></span>
                <p>Let's Connect</p>
              </div>
            </a>
            <a href={resume} className="md:w-44 w-40 text-sm shadow-sm shadow-neutral-800 rounded-full md:rounded-lg  md:duration-300 hover:shadow-md hover:shadow-neutral-900  animate-in lg:animate-in slide-in-from-right-80   duration-1000 lg:duration-200 ">
              <div className='flex flex-wrap px-5  py-2 justify-center items-center space-x-3 '>
                <span><MdOutlineReadMore /></span>
                <p>Resume</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex  items-center justify-center lg:w-auto">
          <div className=" ml-0 lg:-ml-32">
            <img className="object-cover h-52 w-auto rounded-2xl md:rounded-full shadow-lg shadow-neutral-900  object-top mb-0 md:mb-8 lg:mr-0 lg:h-auto lg:w-64 transform lg:animate-in animate-in slide-in-from-bottom-80 lg:slide-in-from-right-56 duration-1000 lg:duration-700 "  src={User_Rishabh} alt="" />
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default About
