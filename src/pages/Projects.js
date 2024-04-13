import React from 'react'
import mealventure from '../image/project/MealVenture.png'
import portfolio from '../image/project/Portfolio.png'
import forgefitflow from '../image/project/ForgefitFlow.png'

const Projects = () => {

  const details = [
    {
      id:'1',
      project_image: mealventure,
      project_name: 'Meal Venture'
    },
    {
      id:'2',
      project_image: forgefitflow ,
      project_name: 'Forgefit Flow'
      
    },
    {
      id:'3',
      project_image: portfolio ,
      project_name: 'Portfolio'
    },
    {
      id:'4',
      project_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' ,
      project_name: 'coming soon...'
    },
  ]
  return (
    <>
     
<div  className="">

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-SourceCode">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-fuchsia-700 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4 lg:animate-in lg:slide-in-from-left-80 lg:duration-1000 animate-in slide-in-from-right-72 duration-700">
            Projects
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md lg:animate-in lg:slide-in-from-right-96 lg:duration-1000 animate-in slide-in-from-left-96 duration-700">
          Welcome to my project showcase, where innovation meets functionality in the digital realm. Explore web-based endeavors showcasing meticulous craftsmanship and technical prowess. Discover the boundless potential of digital solutions. 
        </p>
      </div>
      <div className="grid gap-x-14  mb-4 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-2 ">
      {details.map((item) => {
        return(
        <a key={item.id} href="/" aria-label="View Item" className='mb-10 lg:animate-in lg:slide-in-from-bottom-96 lg:duration-1000 animate-in zoom-in-50 duration-1000'>
          <div className="relative overflow-hidden transition duration-200 transform  shadow-lg  hover:-translate-y-2 hover:shadow-2xl border-emerald-300 border-4 rounded-lg ">
            <img
              className=" object-fill  w-full h-52 md:h-64 xl:h-72"
              src={item.project_image}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 md:ml-2 md:mb-2  md:px-4 md:py-0 py-2 px-6  md:rounded-full bg-white md:bg-white md:w-fit bg-opacity-80 md:h-8 md:shadow-md md:shadow-neutral-900">
              <p className="text-lg font-bold tracking-wide text-emerald-600 ">
                {item.project_name}
              </p>
            </div>
          </div>
        </a>
        )
      }
      )}
      </div>
      <div className="text-center">
        <a
          href="/projects"
          aria-label=""
          className=" inline-flex items-center font-semibold transition-colors  p-2 md:w-44 w-40 justify-center rounded-full md:rounded-lg shadow-sm shadow-neutral-800 hover:shadow-md hover:shadow-neutral-900 lg:duration-200 md:duration-300 duration-1000 "
        >
          <p>See more</p>
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>


</div>

    </>
  )
}

export default Projects
