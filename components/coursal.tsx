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
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className="relative w-full mx-auto" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
        {imgs.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === imgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover"
              layout="fill"
              priority={idx === imgIndex} 
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-70 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-primary">{img.caption}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
