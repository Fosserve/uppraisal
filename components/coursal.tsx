"use client"

import React, { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import Image from "next/image"
import Pic1 from "../public/pic1.jpg"
import Pic2 from "../public/pic2.jpg"
import Pic3 from "../public/pic3.jpg"
import Pic4 from "../public/pic4.jpg"


const imgs = [
  {
    src: Pic1,
    caption: "Share your creations with the world",
  },
  {
    src: Pic2,
    caption: "Discover unique digital art",
  },
  {
    src: Pic3,
    caption: "Connect with creative minds",
  },
  {
    src: Pic4,
    caption: "Bring your ideas to life",
  },
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const dragX = useMotionValue(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()
      if (x === 0) {
        setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1))
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1)
    }
  }

  return (
    <div className="relative overflow-hidden bg-background py-4">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  )
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map(({ src, caption }, idx) => (
        <motion.div
          key={idx}
          animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
          transition={SPRING_OPTIONS}
          className="relative aspect-video h-[600px] w-screen shrink-0 rounded-xl bg-muted"
        >
          <Image src={src || "/placeholder.svg"} alt={caption} fill className="object-cover rounded-xl " />
          <div className="absolute inset-0 flex items-end justify-start m-4 w-[100%]">
            <div className="text-center bg-background/80 p-4 rounded-lg shadow-lg animate-fade-in max-w-md">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">{caption}</h2>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  )
}

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number
  setImgIndex: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-primary" : "bg-muted"}`}
        />
      ))}
    </div>
  )
}

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-background to-background/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-background to-background/0" />
    </>
  )
}

