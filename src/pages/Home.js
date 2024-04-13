import React from "react";
import User_Rishabh from "../image/bgcovers/patrick-tomasso.jpg";

const Home = () => {
  return (
    <>
      <div className="container mt-10 px-5 lg:px-36 mx-auto font-SourceCode">
        <section className="mb-2 text-gray-800 text-center lg:text-left background-radial-gradient">
          <div
            className="relative  overflow-hidden bg-no-repeat bg-cover h-52 lg:h-96"
            style={{
              backgroundPosition: "100% 100%",
            }}
          >
            <img src={User_Rishabh} className="blur-[3px] " alt="" />
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: `rgba(0, 0, 0, 0.63)` }}
            >
              <div className="flex justify-start items-center h-full">
                <div className="text-left  text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                  <h2 className=" text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-5 lg:mb-12">
                    Wellcome
                  </h2>
                  <p className="text-base lg:text-lg" >
                    Explore my portfolio, where a commitment to excellence and a
                    passion for innovation converge to deliver exceptional
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="text-gray-600 body-font ">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                Master Cleanse Reliac Heirloom
              </h1>
              <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/500x300"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src="https://dummyimage.com/600x360"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src="https://dummyimage.com/601x361"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/502x302"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/503x303"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section class="mb-28">

          <div class="grid lg:grid-cols-2 gap-8">

        
            <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-carousel-slide>
        
              <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators>
                <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="0"
                  data-te-carousel-active
                  class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="1"
                  class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 2"></button>
                <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="2"
                  class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 3"></button>
              </div>

     
              <div
                class="rounded-2xl shadow-2xl shadow-black/50 relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              
                <div
                  class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active data-te-carousel-item style={{backfaceVisibility: "hidden"}} >
                  <img src="https://mdbootstrap.com/img/new/textures/small/141.jpg" class="block w-full" alt="..." />
                  <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">First slide label</h5>
                    <p>
                      Some representative placeholder content for the first slide.
                    </p>
                  </div>
                </div>
            
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item style={{backfaceVisibility: "hidden"}}>
                  <img src="https://mdbootstrap.com/img/new/textures/small/142.jpg" class="block w-full" alt="..." />
                  <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second slide.
                    </p>
                  </div>
                </div>
            
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item style={{backfaceVisibility: "hidden"}}>
                  <img src="https://mdbootstrap.com/img/new/textures/small/143.jpg" class="block w-full" alt="..." />
                  <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third slide.
                    </p>
                  </div>
                </div>
              </div>

              <button
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
                <span class="inline-block h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </span>
                <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
              </button>
            
              <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
                <span class="inline-block h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
              </button>
            </div>
         

            
            <div class="flex items-center">

              <div class="text-gray-700 dark:text-white">
                <h3 class="text-3xl font-semibold mb-4">Details</h3>

                <p class="mb-7">This beginner-friendly, example-based course will guide you
                  through the essential knowledge of MDB ecosystem.</p>

                <p class="font-semibold mb-4">What will you learn:</p>

                <ul class="">
                  <li class="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mr-1 text-green-800">
                      <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd" />
                    </svg>

                    <span>Tailwind</span>
                  </li>

                  <li class="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mr-1 text-green-800">
                      <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd" />
                    </svg>

                    <span>Tailwind Elements</span>
                  </li>

                  <li class="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mr-1 text-green-800">
                      <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd" />
                    </svg>

                    <span>UI/UX design</span>
                  </li>

                  <li class="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 mr-1 text-green-800">
                      <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd" />
                    </svg>

                    <span>Responsive web design</span>
                  </li>
                </ul>
              </div>

            </div>
            

          </div>

        </section>
      </div>
    </>
  );
};

export default Home;
