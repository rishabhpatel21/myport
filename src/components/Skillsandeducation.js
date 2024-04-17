import React from 'react'
import { FaLandmark } from "react-icons/fa";
import mbitlogo from '../image/logo/mbitlogo.png'

const Skills_education = () => {

    const education = [
        {
            id:'1',
            image : mbitlogo,
            school : 'Madhuben & Bhanubhai Patel Institute of Technology (MBIT)',
            degree : 'BE in Computer Engineering',
            year : '2020 - 2024',
        }
    ]

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 mt-20 mb-10 md:px-0">
                    {/* Skills */}
                    <div>
                        <div className="p-6  hover:shadow-lg hover:shadow-neutral-900 transition-all duration-300  md:rounded-xl">
                            <h4 className="text-lg font-medium text-neutral-700">Programming Languages</h4>
                            <p className="leading-7 mt-2 text-base font-light text-neutral-700">I possess proficient expertise in a diverse range of programming languages, including C, Python, HTML, CSS, TypeScript, and JavaScript.</p>
                            <img className="w-48 mt-4" src='https://skillicons.dev/icons?i=c,py,html,css,typescript,javascript&perline=6&theme='  alt=''/>
                        </div>
                        <div className="p-6 hover:shadow-lg hover:shadow-neutral-900 transition-all duration-300  md:rounded-xl">
                            <h4 className="text-lg font-medium text-neutral-700">Frameworks & Libraries</h4>
                            <p className="leading-7 mt-2 text-base font-light text-neutral-700">Experienced in a versatile tech stack, including React, Express.js, Node.js, MongoDB, Django, NumPY, Panda, Tailwind CSS, and Laravel.</p>
                            <img className="w-48 mt-4" src='https://skillicons.dev/icons?i=mongodb,express,react,nodejs,django,tailwind,laravel&perline=6&theme=' alt='' />
                        </div>
                        <div className="p-6 hover:shadow-lg hover:shadow-neutral-900 transition-all duration-300  md:rounded-xl">
                            <h4 className="text-lg font-medium text-neutral-700">Tools & Platforms</h4>
                            <p className="leading-7 mt-2 text-base font-light text-neutral-700">I am well-versed in utilizing various tools and platforms to enhance the development process, including Git, Github, VScode, Figma, Pycharm, Notion.</p>
                            <img className="w-48 mt-4" src='https://skillicons.dev/icons?i=git,github,vscode,figma,pycharm,notion&perline=6&theme=' alt='' />
                        </div>
                    </div>

                    {/* Education */}
                    <div className="w-full px-2 lg:px-0 lg:w-[70%]">
                        <div className="border dark:border-gray-500 p-4 rounded-xl">
                            <div className="flex gap-4">
                                <FaLandmark className="self-center text-neutral-700 " />
                                <h4 className="text-gray-500  self-center">Education</h4>
                            </div>

                            {
                                education.map((details) => {
                                    return (
                                        <div key={details.id} className="flex gap-3 mt-8">
                                            <img className="h-10 w-10 rounded-lg" src={details.image} alt=''/>
                                            <div className="w-full">
                                                <h5 className="font-medium text-gray-600 ">{details.school}</h5>
                                                <div className="flex justify-between">
                                                    <p className="text-gray-500  text-xs w-full">{details.degree}</p>
                                                    <p className="text-gray-500  text-right w-[50%] text-xs">{details.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            
                        </div>
                    </div>
                </div>
                </>
  )
}

export default Skills_education
