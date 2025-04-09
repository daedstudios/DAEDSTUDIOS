"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    text: "WEB DEVELOPMENT",
    image: "/images/blog/article-author-01.png",
    link: "/services/web-development",
  },
  {
    id: 2,
    text: "DATA VISUALIZATION",
    image: "/images/blog/article-author-02.png",
    link: "/services/mobile-app",
  },
  {
    id: 3,
    text: "UI/UX DESIGN",
    image: "/images/blog/article-author-03.png",
    link: "/services/design",
  },
  {
    id: 4,
    text: "VISUAL DESIGN",
    image: "/images/blog/article-author-04.png",
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
      <div className="absolute right-32 top-4 h-64 w-64 lg:h-96 lg:w-96">
        {hovered !== -1 && (
          <Image
            src={servicesData[hovered - 1].image}
            alt="fvaefv"
            fill
            objectFit="cover"
            className="animate-floatCircle transform"
          />
        )}
      </div>
    </div>
  );
};

export default NewServicesHover;
