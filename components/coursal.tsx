"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Pic1 from "../public/pic1.jpg"
import Pic2 from "../public/pic2.jpg"
import Pic3 from "../public/pic3.jpg"
import Pic4 from "../public/pic4.jpg"

const imgs = [
  { src: Pic1, caption: "Share your creations with the world" },
  { src: Pic2, caption: "Discover unique digital art" },
  { src: Pic3, caption: "Connect with creative minds" },
  { src: Pic4, caption: "Bring your ideas to life" },
]

export const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0)

  // Automatically cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setImgIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1))
  }

  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-4/6 overflow-hidden rounded-lg md:h-96">
        {imgs.map((img, idx) => (
          <div
            key={idx}
            className={`${
              idx === imgIndex ? "block" : "hidden"
            } duration-200 ease-linear`}
            data-carousel-item
          >
            <Image
              src={img.src}
              alt={img.caption}
              className="relative h-[800px] block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={1000}
              height={500}
            />
            <div className="absolute bottom-10 left-10 bg-white bg-opacity-70 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-primary">{img.caption}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
