import { useSetRecoilState } from "recoil";
import { wallAtom } from "../store/atoms/wallpaper";
import { RxDotFilled } from "react-icons/rx";

export function WallSelector() {
  const setWallpaper = useSetRecoilState(wallAtom);

  const handleClick = (id) => {
    const videoElement = document.getElementById(id);

    const sourceElement = videoElement.querySelector("source");

    const srcValue = sourceElement.src;

    setWallpaper(srcValue);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-20 p-5 bg-slate-300">
      <div className="col-span-1 row-span-1 justify-center items-center mt-5">
        <div className="flex justify-center items-center">
          <video
            id="vid1"
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-md hover:shadow-slate-100"
          >
            <source
              src="https://videos.pexels.com/video-files/853969/853969-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button
            onClick={() => handleClick("vid1")}
            className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl"
          >
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-2 col-span-1 row-start-1 row-span-1 justify-center items-center mt-5">
        <div className="flex justify-center items-center">
          <video
            id="vid2"
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source
              src="https://videos.pexels.com/video-files/2692693/2692693-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button
            onClick={() => handleClick("vid2")}
            className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl"
          >
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-3 col-span-1 row-start-1 row-span-1 justify-center items-center mt-5">
        <div className="flex justify-center items-center">
          <video
            id="vid3"
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source
              src="https://videos.pexels.com/video-files/2871918/2871918-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button
            onClick={() => handleClick("vid3")}
            className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl"
          >
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-1 col-span-1 row-start-2 row-span-1 justify-center items-center mt-5">
        <div className="flex justify-center items-center">
          <video
            id="vid4"
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source
              src="https://videos.pexels.com/video-files/17823998/17823998-uhd_3840_2026_60fps.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button
            onClick={() => handleClick("vid4")}
            className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl"
          >
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 justify-center items-center mt-5">
        <div className="flex justify-center items-center">
          <video
            id="vid5"
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source
              src="https://videos.pexels.com/video-files/11892851/11892851-hd_1280_720_24fps.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button
            onClick={() => handleClick("vid5")}
            className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl"
          >
            Use this
          </button>
          <button className="ml-8 p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl">
            Upvote
          </button>
        </div>
      </div>
      <div className="col-start-3 col-span-1 row-start-2 row-span-1 justify-center items-center mt-5">
        <div className="flex justify-center items-center">
          <video
            id="vid6"
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-96 h-80 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source src="" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-8 justify-center items-center">
          <button
            onClick={() => handleClick("vid6")}
            className="p-4 bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600 text-white shadow-md shadow-[#111111] rounded-xl"
          >
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
