"use client";
import React, { Children } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../../../lib/utils";
gsap.registerPlugin(useGSAP);

interface MyFancyButtonProps {
  mainContent: string;
  slideUpContent: string;
  className?: string; // Add className prop
  children?: React.ReactNode;
}

const MyFancyButton = ({
  mainContent,
  slideUpContent,
  className,
  children,
}: MyFancyButtonProps) => {
  const maindivRef = React.useRef(null);
  const seconddivRef = React.useRef(null);

  const tl = React.useRef(
    gsap.timeline({
      delay: 0,
      paused: true,
      defaults: {
        duration: 0.2,
        ease: "power2",
      },
    }),
  );

  useGSAP(() => {
    tl.current.to(maindivRef.current, {
      y: "-100%",
    });
    tl.current.to(
      seconddivRef.current,
      {
        y: "-100%",
        opacity: 1,
      },
      "<",
    );
  });

  return (
    <div
      className={cn(
        "h-full w-auto overflow-hidden font-mono text-xl leading-[100%] hover:cursor-pointer",
        className, // Merge additional classes
      )}
      onMouseEnter={() => {
        tl.current.play();
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        console.log("e", e);
        console.log("mouse out");
        tl.current.reverse();
      }}
    >
      <div
        className="flex h-full w-auto items-center justify-between bg-white px-2 leading-[100%] text-black dark:bg-black dark:text-white"
        ref={maindivRef}
        onMouseLeave={(e) => {
          e.stopPropagation();
        }}
      >
        <p>{mainContent}</p>
        {children}
      </div>
      <div
        className="bg-hover dark:bg-hover top-[100%] flex h-full w-full items-center justify-between px-2 leading-[100%] text-dark opacity-0 hover:cursor-pointer dark:text-white"
        ref={seconddivRef}
      >
        <p>{slideUpContent}</p>
        {children}
      </div>
    </div>
  );
};

export default MyFancyButton;
