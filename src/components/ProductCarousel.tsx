"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { siteConfig } from "@/config/site.config";

interface Service {
  title: string;
  content? : string;
}

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const services = siteConfig.services.items

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {services.map((service, index) => (
          <CarouselItem key={service.title ?? index} className="basis-full">
            <div className="p-2 sm:p-4">
              <Card className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] rounded-xl shadow-lg">
                <CardContent className="flex w-full h-full flex-col justify-center gap-4 p-8">
                  <div className="text-sm font-medium uppercase tracking-wide text-blue-600">
                    {siteConfig.services.title}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
                    {service.content}
                  </p>
                  {service.techStack && (
                    <div className="mt-2 text-sm sm:text-base text-gray-700">
                      <span className="font-semibold">Tech stack:&nbsp;</span>
                      <span>{service.techStack}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 sm:left-8" />
      <CarouselNext className="right-4 sm:right-8" />
    </Carousel>
  )
}
