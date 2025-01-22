"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/components/Animations/Animation";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="absolute left-0 top-0 z-[200] h-screen w-screen bg-black"
      ></div>
      {children}
    </div>
  );
}
