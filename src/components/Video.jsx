import { useEffect, useRef, useState } from "react";

export function Video() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.src =
      "https://www.apple.com/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/medium.mp4";
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
  }, []);

  return (
    <div id="myDiv" className="transition-colors duration-1000 ease-in-out">
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-3/4 h-5/6 bg-gray-200 rounded-2xl">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-full h-full object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source
              src="https://www.apple.com/105/media/ww/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/medium.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
          <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-6xl text-slate-200 w-auto">
            iPhone 15 Pro
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen ">
        <div className="relative w-3/4 h-5/6 bg-gray-400 rounded-2xl">
          <video
            autoPlay
            muted
            loop
            crossOrigin="anonymous"
            className="w-full h-full object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
          >
            <source
              src="https://www.apple.com/105/media/in/iphone/2024/82ce85d9-eac7-49ee-9cb2-d16ce080af82/films/relax-wrechshaw/iphone-relax-wreckshaw-tpl-in-2024_16x9.m3u8"
              type="application/x-mpegURL"
            ></source>
          </video>
          <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-6xl text-slate-200 w-auto">
            Relax, it's iPhone!
          </h1>
          <a
            href="https://www.google.com/"
            target="_self"
            className="absolute top-[70vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-600 font-normal font-mono text-lg w-40 rounded-full p-2 text-white text-center"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
