import { useRecoilValue } from "recoil";
import { videoatom } from "../store/atoms/videos";
import { wallAtom } from "../store/atoms/wallpaper";
import { useSetRecoilState } from "recoil";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";

export function VideoSlides() {
  const setWallpaper = useSetRecoilState(wallAtom);

  const videoLinks = useRecoilValue(videoatom);

  const [index, setIndex] = useState(0);

  //buttons to change windows
  const prevSlide = () => {
    const isFirstSlide = index === 0;

    const newIndex = isFirstSlide ? videoLinks.length - 1 : index - 1;

    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === videoLinks.length - 1;

    const newIndex = isLastSlide ? 0 : index + 1;

    setIndex(newIndex);
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
  };

  //dynamic background changin code:

  const canvasRef = useRef(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.src = videoLinks[index].url;
    video.addEventListener("loadeddata", () => {
      const interval = setInterval(async () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        await video.play();
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const x = 841; // Specify the x-coordinate
        const y = 409; // Specify the y-coordinate
        const colorData = ctx.getImageData(x, y, 1, 1).data;
        const rgbColor = `rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
        setColor(rgbColor);
        // document.body.style.backgroundColor = rgbColor;
        document.getElementById("myDiv").style.backgroundColor = rgbColor;
      }, 200); // Interval in milliseconds (e.g., every 30 milliseconds)
      return () => clearInterval(interval);
    });

    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [index]);

  return (
    <div id="myDiv" className="transition-colors duration-1000 ease-in-out">
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-3/4 h-5/6 bg-gray-200 rounded-2xl group">
          <video
            key={index}
            id={index}
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-full h-full object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
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
              className="p-4 bg-blue-600 transition-transform hover:scale-110 hover:bg-blue-700 text-white shadow-md shadow-[#111111] rounded-xl"
            >
              Use this
            </button>
            <button className="ml-8 p-4 bg-blue-600 transition-transform hover:scale-110 hover:bg-blue-700 text-white shadow-md shadow-[#111111] rounded-xl">
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
