import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaArrowDown, FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {
  const words = "<Software Engineering/>,<Intern/>,<Undergraduate/>";
  const wordsArray = words.split(",");
  const words2 = "<Undergraduate/>,<Intern/>,<Software Engineering/>";
  const wordsArray2 = words2.split(",");
  console.log(wordsArray);
  return (
    <div className="pb-20 pt-20 sm:h-screen w-full relative flex items-center justify-center">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-top-32 md:-left-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 md:-top-32 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="h-screen w-full dark:bg-stone-950 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-stone-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="hidden absolute top-0 inset-x-0 w-full h-full text-left mt-4 sm:flex justify-center gap-4 ">
        {wordsArray.map((word, idx) => (
          <h1
            key={word + idx}
            className="text-purple opacity-35"
            // style={{
            //   marginInlineStart: `${idx * 1}rem`, // Dynamically increase margin start
            // }}
          >
            {word}
          </h1>
        ))}
      </div>
      {/* <div className="absolute bottom-0 right-0 w-full text-right">
      {wordsArray2.map((word, idx) => (
            <h1
              key={word + idx}
              className="text-purple mt-2 opacity-25"
              style={{
                marginInlineStart:
                  idx === wordsArray.length - 1
                    ? "0" // Ensure no margin for the last item
                    : `${
                        (2 / (wordsArray.length - 1)) *
                        (wordsArray.length - 1 - idx)
                      }rem`, // Gradually reduce margin
              }}
            >
              {word}
            </h1>
          ))}
        </div> */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center">
          {/* <h1 className="lowercase tracking-widest text-xs text-left text-blue-100 max-w-80"> */}

          {/* </h1> */}
          <div className="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
              Inupa Udara
            </h1>
            <div className="w-[40rem] h-10 relative mt-3">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.2}
                maxSize={1}
                particleDensity={400}
                className="w-full h-full rounded-lg"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <TextGenerateEffect
            className="text-center text-[15px] md:text-2xl lg:text-3xl"
            words="Inupa Udara | Currently Intern Software engineer at SparQ Corporate | Based in Sri Lanka"
          />
          {/* <TypewriterEffectSmooth words={[{ text: "Inupa Udara | Currently Intern Software engineer at SparQ | Based in Sri Lanka", className: "text-purple" }]} className="text-center text-lg md:text-lg lg:text-xl ms-10" /> */}
          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Inupa, a Software Engineering Undergraduate @ SLIIT
          </p> */}
          {/* <h1 className="lowercase tracking-widest text-xs text-left text-blue-100 max-w-80"> */}

          {/* </h1> */}
          <a href="#about" className="text-center mt-3">
            <MagicButton
              title="Explore"
              icon={<FaArrowDown />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
