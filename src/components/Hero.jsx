import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(getInitialVideoSrc());

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    animateElements();
  });

  function getInitialVideoSrc() {
    return window.innerWidth < 760 ? smallHeroVideo : heroVideo;
  }

  function handleVideoSrcSet() {
    setVideoSrc(getInitialVideoSrc());
  }

  function animateElements() {
    gsap.to("#hero", {
      opacity: 1,
      duration: 2,
      delay: 1.5,
      ease: "power4.out",
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      duration: 2,
      delay: 1.5,
      ease: "power4.out",
    });
  }

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From €200 per month or €999</p>
      </div>
    </section>
  );
};

export default Hero;
