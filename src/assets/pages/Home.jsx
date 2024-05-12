export function Home() {
  return (
    <div className=" bg-[#10162B] grid lg:grid-cols-[44%_56%] lg:gap-2 md:relative">
      <div className="lg:pt-8 lg:pl-8 lg:mt-2 lg:ml-2 opacity-100">
        <section className="ml-6 pt-20 lg:flex lg:items-center lg:justify-center lg:fixed">
          <div>
            <div className="text-slate-200">
              <h1 className="text-5xl font-bold font-sans ml-2 p-2">
                Govind Shukla
              </h1>
              <h2 className="text-xl ml-2 p-2"> Software Engineer </h2>
              <p className="font-light text-slate-400 ml-2 p-2">
                I like to try out different things while not getting attached to
                anything.
              </p>
            </div>
            <br></br>
            <ul className="flex text-white">
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
          <h1 className="font-semibold text-slate-200 m-2 p-2">ABOUT</h1>
          <p className="font-light text-slate-400 m-2 p-2 text-left">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an{" "}
            <span className="text-slate-200"> advertising agency</span>, a
            start-up, a huge corporation, and a digital product studio.
            <br></br>
            <br></br> My main focus these days is building accessible user
            interfaces for our customers at Klaviyo. I most enjoy building
            software in the sweet spot where design and engineering meet —
            things that look good but are also built well under the hood. In my
            free time, I've also released an online video course that covers
            everything you need to know to build a web app with the Spotify API.
            <br></br>
            <br></br> When I’m not at the computer, I’m usually rock climbing,
            reading, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds.
          </p>
        </section>
        <section className="mt-12 sm:mt-20 ml-6">
          <h1 className="font-semibold text-slate-200 m-2 p-2">EXPERINCE</h1>

          <div className="grid lg:rounded-lg gap-0 sm:gap-4 sm:grid-cols-2 sm:items-center lg:transition lg:transform lg:hover:shadow lg:hover:backdrop-brightness-50 lg:hover:backdrop-opacity-10 lg:hover:shadow-gray-600">
            <div className="ml-4 sm:m-2 sm:p-2 sm:items-center sm:justify-center">
              <h1 className="text-slate-200 lg:hover:text-[#5EEBD2] sm:text-center">
                Societe Generale
              </h1>
              <h2 className="text-slate-400 text-sm sm:text-center">
                (July 2022 - Oct 2023)
              </h2>
            </div>
            <div>
              <h2 className="text-slate-200 m-2 p-2 text-sm sm:ml-1 sm:p-2">
                Software Engineer{" "}
                <span className="text-slate-400 text-sm">(Full Time)</span>
              </h2>
              <p className="font-light text-slate-400 m-2 p-2 text-left text-sm">
                <ol>
                  <li>
                    <span className="text-slate-200">
                      1. Market Data intergration:
                    </span>
                    Developed automated processes for capturing market data (EOD
                    data etc.) from legacy & new sources like BB, RT, LME thus
                    replacing manual intervention thereby saving 3+
                    man-hours/day.
                  </li>
                  <li>
                    <span className="text-slate-200">
                      2. REST APIs for Downstream Applications:
                    </span>
                    Developed internal APIs based on business requirements
                    handling over 5Lakh ISINs for market data & over 4lakh ISINs
                    for liquidity data.
                  </li>
                  <li>
                    <span className="text-slate-200">
                      3. Frontend Development:
                    </span>
                    Worked on development of frontend for legacy APIs thus
                    easing BA’s workload & saving approx 5+ man-hours/week of
                    BA’s query time.
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

          <div className="grid lg:rounded-lg gap-0 sm:gap-4 sm:mt-4 sm:grid-cols-2 sm:items-center lg:transition lg:transform lg:hover:shadow lg:hover:backdrop-brightness-50 lg:hover:backdrop-opacity-10 lg:hover:shadow-gray-600">
            <div className="ml-4 sm:m-2 sm:p-2 sm:items-center sm:justify-center">
              <h1 className="text-slate-200 sm:text-center">Freelancing</h1>
              <h2 className="text-slate-400 text-sm sm:text-center">
                (Nove 2023 - Feb 2024)
              </h2>
            </div>
            <div>
              <h2 className="text-slate-200 m-2 p-2 text-sm sm:ml-1 sm:p-2">
                Software Engineer{" "}
                <span className="text-slate-400 text-sm">(Contractual)</span>
              </h2>
              <p className="font-light text-slate-400 m-2 p-2 text-left text-sm">
                <ol>
                  <li>
                    <span className="text-slate-200">1. Frontend:</span>
                    Developed multiple web pages for an existing website thereby
                    existing its functionality and usability.
                  </li>
                  <li>
                    <span className="text-slate-200">2. Backend:</span>
                    Implemented CRUD operations for the extended website
                    allowing users to sign-up for newsletters and owner pushed
                    posts.
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
  );
}
