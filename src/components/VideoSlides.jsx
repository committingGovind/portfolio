import { useRecoilValue } from "recoil";
import { videoatom } from "../store/atoms/videos";
import { wallAtom } from "../store/atoms/wallpaper";
import { useSetRecoilState } from "recoil";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { backAtom } from "../store/atoms/backround";

export function VideoSlides() {
  const setWallpaper = useSetRecoilState(wallAtom);
  const setBackground = useSetRecoilState(backAtom);

  const videoLinks = useRecoilValue(videoatom);

  const [index, setIndex] = useState(0);

  //buttons to change windows
  const prevSlide = () => {
    const isFirstSlide = index === 0;

    const newIndex = isFirstSlide ? videoLinks.length - 1 : index - 1;

    setIndex(newIndex);

    setBackground(videoLinks[newIndex].url);
  };

  const nextSlide = () => {
    const isLastSlide = index === videoLinks.length - 1;

    const newIndex = isLastSlide ? 0 : index + 1;

    setIndex(newIndex);

    setBackground(videoLinks[newIndex].url);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  //click handler to change the background of the top element as selected by the user.

  const handleClick = (id) => {
    const videoElement = document.getElementById(id);

    const sourceElement = videoElement.querySelector("source");

    const srcValue = sourceElement.src;

    console.log("src value:     " + srcValue);

    setWallpaper(srcValue);

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    const scrollHeight = window.scrollY,
      scrollStep = Math.PI / (1000 / 10),
      cosParameter = scrollHeight / 2;
    let scrollCount = 0,
      scrollMargin,
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          scrollCount = scrollCount + 1;
          scrollMargin =
            cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
          window.scrollTo(0, scrollHeight - scrollMargin);
        } else clearInterval(scrollInterval);
      }, 10);
  };

  return (
    <div id="myDiv" className="transition-colors duration-1000 ease-in-out">
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-3/4 h-5/6 bg-gray-200 rounded-2xl group">
          <video
            key={index}
            id={index}
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-full h-full object-cover rounded-2xl transition-transform transform scale-105 shadow-md shadow-[#111111] delay-150 ease-in-out"
          >
            <source src={videoLinks[index].url} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={() => prevSlide()} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={() => nextSlide()} size={30} />
          </div>

          {/* bottons */}
          <div className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-md text-slate-200 w-auto flex mt-2 mb-8 justify-center items-center">
            <button
              onClick={() => handleClick(index)}
              className="p-4 bg-slate-400 transition-transform hover:scale-110 hover:bg-slate-500 text-white shadow-md shadow-[#111111] rounded-xl"
            >
              Use this
            </button>
            <button className="ml-8 p-4 bg-slate-400 transition-transform hover:scale-110 hover:bg-slate-500 text-white shadow-md shadow-[#111111] rounded-xl">
              Upvote
            </button>
          </div>

          <div className="flex top-4 mt-5 justify-center py-2">
            {videoLinks.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
