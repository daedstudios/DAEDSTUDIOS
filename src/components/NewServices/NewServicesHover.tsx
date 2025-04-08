"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    text: "Web Development",
    image: "/images/blog/article-author-01.png",
    link: "/services/web-development",
  },
  {
    id: 2,
    text: "Mobile App Development",
    image: "/images/blog/article-author-02.png",
    link: "/services/mobile-app",
  },
  {
    id: 3,
    text: "UI/UX Design",
    image: "/images/blog/article-author-03.png",
    link: "/services/design",
  },
  {
    id: 4,
    text: "Cloud Solutions",
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
    <div className="relative px-4">
      Services
      {servicesData.map((service) => (
        <div
          className="w-auto border text-4xl md:text-5xl lg:text-7xl"
          key={service.id}
          onMouseEnter={() => setHovered(service.id)}
          onMouseLeave={() => setHovered(-1)}
        >
          {service.text}
        </div>
      ))}
      <div className="absolute right-4 top-4 h-32 w-32 lg:h-56 lg:w-56">
        {hovered !== -1 && (
          <Image
            src={servicesData[hovered - 1].image}
            alt="fvaefv"
            fill
            // height={100}
            // width={100}
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};

export default NewServicesHover;
