"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    text: "WEB DEVELOPMENT",
    image: "/images/blog/ALT.mov",
    link: "/services/web-development",
  },
  {
    id: 2,
    text: "DATA VISUALIZATION",
    image: "/images/blog/net.mov",
    link: "/services/mobile-app",
  },
  {
    id: 3,
    text: "UI/UX DESIGN",
    image: "/images/blog/phoneRecordRec.mov",
    link: "/services/design",
  },
  {
    id: 4,
    text: "VISUAL DESIGN",
    image: "/images/blog/flower.mov",
    link: "/services/cloud",
  },
  {
    id: 5,
    text: "MVP DEVELOPMENT",
    image: "/images/blog/BilllyDemo.mov",
    link: "/services/cloud",
  },
];

const NewServicesHover = () => {
  const [hovered, setHovered] = React.useState<number>(-1);

  useEffect(() => {
    console.log("Hovered service ID:", hovered);
  }, [hovered]);

  return (
    <div className="relative gap-1 px-5 py-[8rem] font-mono">
      services
      {servicesData.map((service) => (
        <div
          className="w-auto  cursor-pointer font-sans text-4xl text-gray-400 hover:text-primary dark:hover:text-white md:text-5xl lg:text-7xl"
          key={service.id}
          onMouseEnter={() => setHovered(service.id)}
          onMouseLeave={() => setHovered(-1)}
        >
          {service.text}
        </div>
      ))}
      <div className="absolute right-32  top-24 h-64 w-64  lg:h-[40rem] lg:w-[40rem]">
        {hovered !== -1 && (
          <video
            src={servicesData[hovered - 1].image}
            className="h-64 w-64 animate-floatCircle overflow-hidden rounded-[50%] object-cover shadow-2 shadow-gray-400  lg:h-[40rem] lg:w-[40rem] "
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default NewServicesHover;
