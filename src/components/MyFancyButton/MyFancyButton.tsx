"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface MyFancyButtonProps {
  mainContent: string;
  slideUpContent: string;
}

const MyFancyButton = ({ mainContent, slideUpContent }: MyFancyButtonProps) => {
  const maindivRef = React.useRef(null);
  const seconddivRef = React.useRef(null);

  let tl = gsap.timeline({
    delay: 0,
    paused: true,
    defaults: {
      duration: 0.3,
      ease: "power2",
    },
  });

  useGSAP(() => {
    tl.to(maindivRef.current, {
      y: "-100%",
    });
    tl.to(
      seconddivRef.current,
      {
        y: "-100%",
      },
      "<",
    );
  });

  return (
    <div
      className="h-full w-56 overflow-hidden font-mono hover:cursor-pointer"
      onMouseEnter={() => {
        tl.play();
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        console.log("e", e);
        console.log("mouse out");
        tl.reverse();
      }}
    >
      <div
        className="flex h-full w-full items-center justify-center border bg-black text-white"
        ref={maindivRef}
        onMouseLeave={(e) => {
          e.stopPropagation();
        }}
      >
        {mainContent}
      </div>
      <div
        className="top-[100%] flex h-full w-full items-center justify-center bg-white text-black hover:cursor-pointer"
        ref={seconddivRef}
      >
        {slideUpContent}
      </div>
    </div>
  );
};

export default MyFancyButton;
