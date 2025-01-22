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
      duration: 0.2,
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
      className="h-full w-auto overflow-hidden font-mono text-xl hover:cursor-pointer"
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
        className="justify-left flex h-full w-auto items-center border-x-[0.5px] border-dark-5 bg-white px-1 text-black dark:bg-black dark:text-white"
        ref={maindivRef}
        onMouseLeave={(e) => {
          e.stopPropagation();
        }}
      >
        {mainContent}
      </div>
      <div
        className="text-whitehover:cursor-pointer justify-left bg-hover dark:bg-hover top-[100%] flex h-full w-full items-center px-1 text-white dark:text-white"
        ref={seconddivRef}
      >
        {slideUpContent}
      </div>
    </div>
  );
};

export default MyFancyButton;
