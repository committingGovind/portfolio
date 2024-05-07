import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export function Intro() {
  useEffect(() => {
    const text = new SplitType("#intro", { types: "chars" });
    let characters = document.querySelectorAll(".char");

    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add("-translate-x-96");
    }
    gsap.to(".char", {
      x: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.5,
    });

    const text1 = new SplitType("#user", { types: "chars" });
    let characters1 = document.querySelectorAll(".char");

    for (let i = 0; i < characters1.length; i++) {
      characters1[i].classList.add("translate-x-96");
    }
    gsap.to(".char", {
      x: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.6,
    });
  }, []);

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <h1
        id="intro"
        className="mt-96 shadown-xl clip-your-needful-style text-8xl text-black font-thin text-center animate-[wiggle_7s_ease-in-out_1] bg-white opacity-100 rounded-xl"
      >
        Hi!
      </h1>
      <h1
        id="user"
        className="mt-96 clip-your-needful-style text-8xl text-black font-thin text-center ml-5 bg-white opacity-100 rounded-full pl-4 pr-4
        "
      >
        Govind here.
      </h1>
    </div>
  );
}
