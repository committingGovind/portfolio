export function WallSelector() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-20 p-5 mt-10 bg-black">
      <div className="col-span-1 row-span-1 justify-center items-center">
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-md hover:shadow-slate-100"
          >
            <source src="src/assets/bill2.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-2 col-span-1 row-start-1 row-span-1 justify-center items-center">
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source src="src/assets/vid1.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-3 col-span-1 row-start-1 row-span-1 justify-center items-center">
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source src="src/assets/vid2.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-1 col-span-1 row-start-2 row-span-1 justify-center items-center">
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source src="src/assets/vid3.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 justify-center items-center">
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source src="src/assets/xp.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-3 col-span-1 row-start-2 row-span-1 justify-center items-center">
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source src="src/assets/field.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
    </div>
  );
}
