"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Filter, Search } from "lucide-react"
import image1 from "../../public/team/image1.jpg"
import image2 from "../../public/team/image2.jpg"
import img1 from "../../public/team/img1.jpg"
import img2 from "../../public/team/img2.jpg"
import img3 from "../../public/team/img3.jpg"
import img4 from "../../public/team/img4.jpg"
import img5 from "../../public/team/img5.jpg"
import img6 from "../../public/team/img6.jpg"
import img7 from "../../public/team/img7.jpg"
import img8 from "../../public/team/img8.jpg"
import img9 from "../../public/team/img9.jpg"

// Define the image data structure
interface ImageItem {
  id: string
  src: string
  alt: string
  category: string[]
  width: number
  height: number
}

// Sample image data - in a real app, this could come from an API or data file
const imageData: ImageItem[] = [
    {
        id: "1",
        src:image1.src,
        alt: "Close-up of a leaf with water droplets",
        category: ["Nature", "Flora"],
        width: 600,
        height: 400,
      },
      {
        id: "2",
        src:image2.src,
        alt: "Boats on a lake",
        category: ["Nature"],
        width: 600,
        height: 400,
      },
      {
        id: "3",
        src: img1.src,
        alt: "Colorful pencils",
        category: ["Art"],
        width: 600,
        height: 400,
      },
      {
        id: "4",
        src: img2.src,
        alt: "Fresh fruits including apple and strawberries",
        category: ["Food"],
        width: 600,
        height: 400,
      },
      {
        id: "5",
        src: img3.src,
        alt: "Tree in winter",
        category: ["Nature"],
        width: 600,
        height: 400,
      },
      {
        id: "6",
        src: img4.src,
        alt: "Tree with autumn foliage",
        category: ["Nature"],
        width: 600,
        height: 400,
      },
      {
        id: "7",
        src: img5.src,
        alt: "Silhouettes of buildings at sunset",
        category: ["Architecture"],
        width: 600,
        height: 400,
      },
      {
        id: "8",
        src: img6.src,
        alt: "Modern concrete building with person",
        category: ["Architecture", "People"],
        width: 600,
        height: 400,
      },
      {
        id: "9",
        src: img7.src,
        alt: "Temple architecture",
        category: ["Architecture"],
        width: 600,
        height: 400,
      },
      {
        id: "10",
        src: img8.src,
        alt: "Big Ben clock tower",
        category: ["Architecture", "Landmarks"],
        width: 600,
        height: 400,
      },
      {
        id: "11",
        src: img9.src,
        alt: "Red garage doors",
        category: ["Architecture", "People"],
        width: 600,
        height: 400,
      },
]

export default function MasonryGallery() {
  const [images, setImages] = useState<ImageItem[]>(imageData)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const allCategories = ["All", ...new Set(imageData.flatMap((img) => img.category))]

  useEffect(() => {
    let filtered = imageData

    if (selectedCategory !== "All") {
      filtered = filtered.filter((img) => img.category.includes(selectedCategory))
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.category.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setImages(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-5 w-5 text-[#85d3ff]" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-[#045be6] rounded-md px-3 py-2 bg-[#edf8ff] w-full sm:w-auto"
          >
            {allCategories.map((category) => (
              <option key={category} value={category} className="bg-[#edf8ff]">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#85d3ff]" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 border border-[#045be6] rounded-md w-full"
          />
        </div>
      </div>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg">
            <div className="relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback for images that might not exist
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=${image.height}&width=${image.width}`
                }}
              />

              {/* Category tags */}
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                {image.category.map((cat) => (
                  <span key={`${image.id}-${cat}`} className="text-xs px-2 py-1 bg-black/70 text-white rounded-md">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {images.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No images found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}

