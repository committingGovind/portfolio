export function Test() {
  return (
    <div className="relative min-h-screen min-w-full">
      <div className="h-screen w-screen fixed">
        <div className="absolute items-center justify-center filter opacity-90 blur-2xl -bottom-[10%] left-[45%] h-[65%] w-[50%] bg-purple-300 animate-[blob_5s_infinite] rounded-full mix-blend-multiply "></div>
        <div className="absolute items-center justify-center filter opacity-90 blur-2xl top-20 left-[55%] h-3/4 w-3/4 bg-green-500 animate-[blob_7s_infinite] rounded-full mix-blend-multiply"></div>
        <div className="absolute items-center justify-center filter opacity-90 blur-2xl top-[10%] left-[10%] h-72 w-1/2 bg-red-500 animate-[blob_4s_infinite] rounded-2xl mix-blend-multiply"></div>
        <div className="absolute items-center justify-center filter opacity-90 blur-2xl top-[40%] -left-[5%] h-1/2 w-3/4 bg-[#2F3C7E] animate-[blob_10s_infinite] rounded-2xl mix-blend-multiply"></div>
      </div>

      <div className="relative">
        <div className=" bg-transparent grid lg:grid-cols-[44%_56%] lg:gap-2 md:relative">
          <div className="lg:pt-8 lg:pl-8 lg:mt-2 lg:ml-2 opacity-100">
            <section className="ml-6 pt-20 mr-2 lg:flex lg:items-center lg:justify-center lg:fixed">
              <div>
                <div className="text-black">
                  <h1 className="text-6xl font-bold font-sans ml-2 p-2">
                    Govind Shukla
                  </h1>
                  <h2 className="text-2xl ml-2 p-2"> Software Engineer </h2>
                  <p className="font-light text-black text-lg ml-2 p-2">
                    I like to try out different things while not getting
                    attached to anything.
                  </p>
                </div>
                <br></br>
                <ul className="flex text-black">
                  <li className="ml-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                      />
                    </svg>
                  </li>
                  <li className="ml-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="lg:p-8 lg:m-2 opacity-100">
            <section className="mt-12 sm:mt-20 ml-6 ">
              <h1 className="font-semibold lg:text-slate-200 text-gray-800 text-2xl m-2 p-2">
                ABOUT
              </h1>
              <p className="font-light text-black m-2 p-2 text-left md:text-xl">
                In my life, I've embraced the beauty of constant learning and
                growth. From mastering new programming languages and frameworks
                to exploring the depths of web development, I find joy in
                expanding my skills and knowledge.{" "}
                <span className="text-slate-200"> React</span>has become a
                cornerstone of my journey, offering me a platform to create
                dynamic and interactive user interfaces. With Tailwind CSS, I've
                discovered the art of crafting visually appealing designs
                efficiently, making my projects stand out with minimal effort.
                <br></br>
                <br></br> Beyond the realms of coding, I cherish moments of
                tranquility and connection with nature. Hiking through lush
                trails or simply basking in the sunlight, these experiences
                rejuvenate my spirit and inspire creativity.I also find solace
                in reading, where each book is a doorway to new perspectives and
                ideas. This blend of tech-driven ambition and a love for life's
                simple pleasures defines my path, shaping me into a person who
                seeks balance, growth, and meaningful connections.
                <br></br>
                <br></br> In addition, I value giving back to the community.
                Whether through volunteering, mentoring, or simply lending a
                helping hand, I strive to make a positive impact on the world
                around me. This sense of purpose and contribution adds depth to
                my journey, reminding me of the importance of empathy and
                compassion in everything I do.
              </p>
            </section>
            <section className="mt-12 sm:mt-20 ml-6">
              <h1 className="font-semibold lg:text-slate-200 text-gray-800 text-2xl m-2 p-2">
                EXPERINCE
              </h1>

              <div className="grid border-solid lg:rounded-lg gap-0 sm:gap-4 sm:grid-cols-[30%_70%] sm:items-center lg:transition lg:transform lg:hover:shadow lg:hover:backdrop-brightness-50 lg:hover:text-black lg:hover:backdrop-opacity-50 lg:hover:shadow-gray-600">
                <div className="ml-4 sm:m-2 sm:p-2 sm:items-center sm:justify-center">
                  <h1 className="lg:text-slate-200 text-black lg:hover:text-[#5EEBD2] sm:text-center">
                    Societe Generale
                  </h1>
                  <h2 className="lg:text-slate-200 text-black text-sm sm:text-center">
                    (July 2022 - Oct 2023)
                  </h2>
                </div>
                <div>
                  <h2 className="lg:text-slate-200 text-black m-2 p-2 text-sm lg:text-md sm:ml-1 sm:p-2">
                    Software Engineer{" "}
                    <span className="text-black text-sm">(Full Time)</span>
                  </h2>
                  <p className="font-light text-black m-2 lg:hover:text-white p-2 text-left text-md lg:text-md">
                    <ol>
                      <li>
                        <span className="text-slate-200">
                          1. Market Data intergration:
                        </span>
                        Developed automated processes for capturing market data
                        (EOD data etc.) from legacy & new sources like BB, RT,
                        LME thus replacing manual intervention thereby saving 3+
                        man-hours/day.
                      </li>
                      <li>
                        <span className="text-slate-200">
                          2. REST APIs for Downstream Applications:
                        </span>
                        Developed internal APIs based on business requirements
                        handling over 5Lakh ISINs for market data & over 4lakh
                        ISINs for liquidity data.
                      </li>
                      <li>
                        <span className="text-slate-200">
                          3. Frontend Development:
                        </span>
                        Worked on development of frontend for legacy APIs thus
                        easing BA’s workload & saving approx 5+ man-hours/week
                        of BA’s query time.
                      </li>
                    </ol>
                  </p>
                  <div className="flex items-center justify-start m-2 p-2 flex-wrap">
                    <button className="bg-[#142B39] rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        React{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39] rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        TypeScript{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        Java{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        Springboot{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        SQL{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        GIT{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39] rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        Shell Script{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid lg:rounded-lg gap-0 sm:gap-4 sm:mt-4 sm:grid-cols-[30%_70%] sm:items-center lg:transition lg:transform lg:hover:shadow lg:hover:backdrop-brightness-50 lg:hover:backdrop-opacity-50 lg:hover:shadow-gray-600">
                <div className="ml-4 sm:m-2 sm:p-2 sm:items-center sm:justify-center">
                  <h1 className="lg:text-slate-200 text-black sm:text-center">
                    Freelancing
                  </h1>
                  <h2 className="lg:text-slate-200 text-black text-sm sm:text-center">
                    (Nove 2023 - Feb 2024)
                  </h2>
                </div>
                <div>
                  <h2 className="lg:text-slate-200 text-black m-2 p-2 text-sm sm:ml-1 sm:p-2">
                    Software Engineer{" "}
                    <span className="text-black text-sm">(Contractual)</span>
                  </h2>
                  <p className="font-light text-black lg:hover:text-slate-50 m-2 p-2 text-left text-md lg:text-md">
                    <ol>
                      <li>
                        <span className="text-slate-200">1. Frontend:</span>
                        Developed multiple web pages for an existing website
                        thereby existing its functionality and usability.
                      </li>
                      <li>
                        <span className="text-slate-200">2. Backend:</span>
                        Implemented CRUD operations for the extended website
                        allowing users to sign-up for newsletters and owner
                        pushed posts.
                      </li>
                    </ol>
                  </p>
                  <div className="flex items-center justify-start m-2 p-2 flex-wrap">
                    <button className="bg-[#142B39] rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        React{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39] rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        JavaScript{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        Node.js{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        MongoDB{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        Prisma{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39]  rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        Tailwind CSS{" "}
                      </span>
                    </button>
                    <button className="bg-[#142B39] rounded-2xl ml-2">
                      <span className="text-[#5EEBD2] text-xs flex items-center justify-center p-1 pl-2 pr-2">
                        GIT
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
