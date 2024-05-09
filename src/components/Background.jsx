import { useState } from "react";
import { useRecoilValue } from "recoil";
import { wallAtom } from "../store/atoms/wallpaper";
import { Info } from "./Info";
import { Intro } from "./Intro";
import { VideoSlides } from "./VideoSlides";

export function Background() {
  const [showDiv, setShowdiv] = useState(false);

  const wallsrc = useRecoilValue(wallAtom);

  console.log("wallsrc value: " + wallsrc);

  return (
    <>
      <div className="relative h-screen">
        <video
          key={wallsrc}
          autoPlay
          loop
          muted
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
              }}
            >
              Wanna help me choose the best Background video?
            </button>
          </div>
        </div>
      </div>
      {showDiv && (
        <div className="h-screen">
          <VideoSlides />
          {/* <Video /> */}
          {/* <WallSelector /> */}
        </div>
      )}
    </>
  );
}
