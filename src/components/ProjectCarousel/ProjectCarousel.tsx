"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function ProjectCarousel({ projects }: any) {
  const plugin = React.useRef(Autoplay({ delay: 1000 }));

  return (
    <div className="flex w-full justify-center px-4">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-1">
          {projects.map(
            (
              _: { coverImage: string | StaticImport },
              index: React.Key | null | undefined,
            ) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="overflow-hidden">
                    {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                    <Image
                      src={_.coverImage!}
                      alt="image"
                      className="w-full duration-100 hover:scale-125"
                      width={408}
                      height={272}
                    />
                    {/* </CardContent> */}
                  </Card>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
