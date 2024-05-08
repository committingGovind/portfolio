import { useState } from "react";
import { Info } from "./Info";
import { Intro } from "./Intro";
import { Video } from "./Video";
import { WallSelector } from "./WallSelector";

export function Background() {
  const [showDiv, setShowdiv] = useState(false);

  return (
    <>
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="bg-video absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/9562220/9562220-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          {/* content goes here */}
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
          {/* <Video /> */}
          <WallSelector />
        </div>
      )}
    </>
  );
}
