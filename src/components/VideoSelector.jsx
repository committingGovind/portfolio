export function VideoSelector(){
    return <div>
        <video
        autoPlay
        muted
        loop
        crossOrigin="anonymous"
        className="m-4 p-4 w-1/4 h-1/4 object-cover shadow-xl rounded-2xl transition-transform transform hover:scale-105 delay-150 ease-in-out hover:shadow-2xl hover:shadow-[#111111]"
      >
        <source src="src/assets/bill2.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
}