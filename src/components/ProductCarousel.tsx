"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { siteConfig } from "@/config/site.config"

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
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  )

  const services = siteConfig.productCarousel.items

  // helper to extract problem & solution from content
  const parseContent = (text: string) => {
    if (!text) return { problem: text, solution: "" }

    const problemMatch = text.split("Problem Statement:")[1]?.split("Solution:")[0]?.trim()
    const solutionMatch = text.split("Solution:")[1]?.trim()

    if (problemMatch || solutionMatch) {
      return {
        problem: problemMatch ?? "",
        solution: solutionMatch ?? ""
      }
    }

    // fallback when no markers exist
    return { problem: text, solution: "" }
  }

  return (
    <div className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-7xl relative">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="relative w-full"
        >
          <CarouselContent className="w-full">
            {services.map((service, index) => {
              const { problem, solution } = parseContent(service.content)

              return (
                <CarouselItem key={service.title ?? index} className="basis-full">
                  <div className="p-2 sm:p-4 md:px-12 lg:px-14">
                    <Card className="w-full h-auto min-h-[500px] sm:min-h-[600px] md:h-[75vh] rounded-xl shadow-lg overflow-hidden border dark:border-gray-700 bg-white dark:bg-gray-900">
                      <CardContent className="flex w-full h-full flex-col md:flex-row gap-0 p-0">

                        {/* Image Section */}
                        {service.image && (
                          <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/10 dark:from-white/5 dark:to-white/10 z-10" />
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}

                        {/* Content Section */}
                        <div className={`flex flex-col justify-center gap-3 sm:gap-4 p-5 sm:p-6 md:p-10 ${service.image ? 'w-full md:w-1/2' : 'w-full'}`}>
                          <div className="space-y-3 sm:space-y-4">
                            
                            <div className="inline-block">
                              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600">
                                Problem Statements & Solutions
                              </div>
                            </div>

                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                              {service.title}
                            </h2>

                            {/* Problem Statement */}
                            {problem && (
                              <div className="space-y-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                                  Problem Statement
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {problem}
                                </p>
                              </div>
                            )}

                            {/* Solution */}
                            {solution && (
                              <div className="space-y-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                                  Solution
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {solution}
                                </p>
                              </div>
                            )}

                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          <CarouselPrevious className="-left-2 md:-left-4 lg:-left-6 bg-white/95 dark:bg-gray-800/95 border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 shadow-md hover:shadow-lg transition-all" />
          <CarouselNext className="-right-2 md:-right-4 lg:-right-6 bg-white/95 dark:bg-gray-800/95 border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 shadow-md hover:shadow-lg transition-all" />
        </Carousel>
      </div>
    </div>
  )
}
