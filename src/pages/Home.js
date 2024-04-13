import React from "react";

import  User_Rishabh from '../image/user/Rishabh_irregulerimage.png'

// import mealventure from "../image/project/MealVenture.png";
// import portfolio from "../image/project/Portfolio.png";
// import forgefitflow from "../image/project/ForgefitFlow.png";

const Home = () => {

  // const details = [
  //   {
  //     id: '1',
  //     project_image: mealventure,
  //     project_name: 'Meal Venture'
  //   },
  //   {
  //     id: '2',
  //     project_image: forgefitflow,
  //     project_name: 'Forgefit Flow'

  //   },
  //   {
  //     id: '3',
  //     project_image: portfolio,
  //     project_name: 'Portfolio'
  //   },
  //   {
  //     id: '4',
  //     project_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
  //     project_name: 'coming soon...'
  //   },
  // ]

  return (
    <>
      <div className="container mt-0 px-5 lg:px-36 mx-auto font-SourceCode">
        <section className="mb-2 text-gray-800 text-center lg:text-left background-radial-gradient">
          {/* <div
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
                  <p className="text-base lg:text-lg">
                    Explore my portfolio, where a commitment to excellence and a
                    passion for innovation converge to deliver exceptional
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div>
              <div>
                <img class="h-32 w-full object-cover object-top lg:h-72" src="https://img.freepik.com/premium-vector/colorful-banner-with-hands-working-computer-different-electronic-gadgets-devices-symbols-programming-software-development-program-coding_198278-4192.jpg?w=1380" alt="" />
              </div>
              <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div class="flex">
                    <img class="h-24 w-24 rounded-full ring-4 ring-yellow-500  sm:h-32 sm:w-32" src={User_Rishabh} alt="" />
                  </div>
                  <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
                      <h1 class="truncate text-2xl font-bold text-yellow-500">Rishabh Patel</h1>
                    </div>
                  </div>
                </div>
                <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                  <h1 class="truncate text-2xl font-bold text-blue-300">Shehab coding</h1>
                </div>
              </div>
            </div>
        </section>

        <section>
          
        </section>
      </div>
    </>
  );
};

export default Home;
