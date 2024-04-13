import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {

  const socials =[
    {
      id:'1',
      href:'https://www.github.com/',
      icon:<FaGithub />
    },
    {
      id:'2',
      href:'https://www.linkedin.com/in/rishabh-patel-6a1676246/',
      icon:<FaLinkedinIn />
    },
    {
      id:'3',
      href:'https://www.instagram.com/',
      icon:<AiFillInstagram />
    },
    {
      id:'4',
      href:'https://www.twitter.com/',
      icon:<FaSquareXTwitter />
    }
  ]

  return (
    <>
      <div class="container my-5 px-6 mx-auto font-SourceCode ">
        <section class="mb-0 text-gray-800 text-center lg:text-left ">
          <div
            class="px-6 py-10 md:px-12  rounded-lg"
            // style={{ backgroundColor: `hsl(0, 0%, 96%)` }}
          >
            <div class="lg:grid lg:grid-cols-2 gap-12 l items-center ">
              <div class="font-mono  mt-2 lg:mt-0 animate-in  slide-in-from-top-96  duration-1000  pb-11  lg:animate-in lg:slide-in-from-left-96 lg:duration-1000">
                <h1 class="lg:text-5xl text-2xl font-bold tracking-tight leading-tight mb-8 drop-shadow-lg shadow-black">
                Contact Me
                  <br />
                  <span class="text-fuchsia-700 lg:text-5xl text-base">
                    Let's Connect
                  </span>
                </h1>
                <p class="text-neutral-600 lg:text-2xl text-sm ">
                  Ready to Connect? <br />Just fill the form, and your message will land in my inbox. I'll personally check it! Alternatively, connect with me through social media for a quicker chat.
                </p>
              </div>
              <div class="mb-4 lg:mb-0">
                <div class="block rounded-lg shadow-xl shadow-neutral-500 bg-white px-6 py-8 md:px-12 animate-in lg:animate-in slide-in-from-bottom-80  lg:zoom-in-50   duration-1000 lg:duration-1000">
                  <form>
                    <div class="grid md:grid-cols-2 md:gap-6">
                      <div class="mb-6">
                        <input
                          type="text"
                          class="shadow-inner shadow-neutral-700 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-700 focus:outline-none"
                          placeholder="First name"
                        />
                      </div>
                      <div class="mb-6">
                        <input
                          type="text"
                          class="shadow-inner shadow-neutral-700 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-700 focus:outline-none"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <input
                      type="email"
                      class="shadow-inner shadow-neutral-700 form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-700 focus:outline-none"
                      placeholder="Email address"
                    />
                    <textarea
                      type="text"
                      class="shadow-inner shadow-neutral-700 form-control block w-full h-24 px-3 py-1.5 mb-6 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-700 focus:outline-none"
                      placeholder="Message"
                    />
                    
                    <button
                      type="button"
                      class="px-6 py-2.5 mb-6  w-full  text-sm shadow-md bg-emerald-600 hover:bg-emerald-600 text-white font-bold shadow-neutral-700  rounded-lg transition md:duration-300 hover:shadow-lg hover:shadow-neutral-900 hover:rounded-lg lg:hover:animate-in lg:hover:-translate-y-1 "
                    >
                      Forward to
                    </button>
                    <div class="text-center">
                      <p class="mb-6 font-mono text-emerald-600">Social Media</p>
                    
                    <div class="flex justify-around">
                      {socials.map((item) => {
                        return(
                        <a
                        href={item.href}
                        role="button"
                        class="text-emerald-600 hover:text-orange-600 focus:text-blue-700 action:text-blue-800 transition duration-200 ease-in-out"
                        
                      >
                        <span className="text-3xl">{item.icon}</span>
                      </a>)
                      })}
                      
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
