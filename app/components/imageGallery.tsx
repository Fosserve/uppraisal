"use client"

import { useState, useEffect, useMemo } from "react"
import Image, { StaticImageData } from "next/image"
import { Search } from "lucide-react"

// Manually import images from the team folder
import img1 from './gallery/img1.jpeg';
import img2 from './gallery/img2.jpeg';
import img3 from './gallery/img3.jpeg';
import img4 from './gallery/img4.jpeg';
import img5 from './gallery/img5.jpeg';
const staticImages: StaticImageData[] = [img1, img2, img3, img4, img5];

// Define the image data structure
interface ImageItem {
  id: string
  src: string
  alt: string
  category: string[]
  width: number
  height: number
}

export default function ImageGallery() {
  const [images, setImages] = useState<ImageItem[]>([])
  
  // Initialize with static images on component mount
  useEffect(() => {
    const initialImages = staticImages.map((img, index) => ({
      id: `img-${index}`,
      src: img.src,
      alt: `Gallery image ${index + 1}`,
      category: ['gallery'],
      width: img.width,
      height: img.height
    }))
    setImages(initialImages)
  }, [])

  return (
    <div className="space-y-6">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div
              className="relative w-full aspect-square"
              style={{
                minHeight: "200px",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=${image.height}&width=${image.width}`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
