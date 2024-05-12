import { useState } from "react";
import { useRecoilValue } from "recoil";
import { backAtom } from "../store/atoms/backround";
import { wallAtom } from "../store/atoms/wallpaper";
import { Info } from "./Info";
import { Intro } from "./Intro";
import { VideoSlides } from "./VideoSlides";

export function Background() {
  const [showDiv, setShowdiv] = useState(false);

  const wallsrc = useRecoilValue(wallAtom);
  const backgroundsrc = useRecoilValue(backAtom);

  const scrollFn = () => {
    setTimeout(() => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollStep = scrollHeight / (1000 / 15);
      let scrollInterval = setInterval(function () {
        if (window && window.scrollY < scrollHeight) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }, 100);
  };

  return (
    <>
      <div className="relative h-screen">
        <video
          key={wallsrc}
          autoPlay
          loop
          muted
          crossOrigin="anonymous"
          className="bg-video absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={wallsrc} type="video/mp4" id="backgroundWall" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <Intro />
          <Info />
          <div className="flex justify-center items-center mt-28">
            <button
              className="bg-white text-black p-4 rounded-lg animate-pulse opacity-100"
              onClick={() => {
                setShowdiv(true);
                scrollFn();
              }}
            >
              Wanna help me choose the best Background video?
            </button>
          </div>
        </div>
      </div>
      {showDiv && (
        <div className="h-screen relative">
          <video
            key={backgroundsrc}
            autoPlay
            loop
            muted
            crossOrigin="anonymous"
            className="bg-video absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          >
            <source src={backgroundsrc} type="video/mp4" id="backgroundWall" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10">
            <VideoSlides />
          </div>
        </div>
      )}
    </>
  );
}
