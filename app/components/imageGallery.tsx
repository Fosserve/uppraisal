"use client"

import { useState, useEffect, useMemo } from "react"
import Image, { StaticImageData } from "next/image"
import { Search } from "lucide-react"

// Manually import images from the team folder
import img1 from "../../public/team/img1.jpg";
import img2 from "../../public/team/img2.jpg";
import img3 from "../../public/team/img3.jpg";
import img4 from "../../public/team/img4.jpg";
import img5 from "../../public/team/img5.jpg";
import img6 from "../../public/team/img6.jpg";
import img7 from "../../public/team/img7.jpg";
import img8 from "../../public/team/img8.jpg";
import img9 from "../../public/team/img9.jpg";
import img10 from "../../public/team/img10.jpg";

const images: StaticImageData[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// Define the image data structure
interface ImageItem {
  id: string
  src: string
  alt: string
  category: string[]
  width: number
  height: number
}

// Sample image data
const imageData: ImageItem[] = images.map((img: StaticImageData, index: number) => ({
  id: index.toString(),
  src: img.src,
  alt: `Image ${index}`,
  category: [["Team", "Group", "Celebration", "Gatherings", "Meetings"][Math.floor(Math.random() * 5)]],
  width: 600,
  height: 400
}))

export default function ImageGallery() {
  const [images, setImages] = useState<ImageItem[]>(imageData)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const allCategories = useMemo(() => 
    ["All", ...new Set(imageData.flatMap((img) => img.category))],
    [imageData]
  )

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
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto overflow-x-auto py-2">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all font-medium whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-blue-100 text-blue-700 shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

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
                src={image.src || "/placeholder.svg"}
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

            {/* Category tags */}
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
              {image.category.map((cat) => (
                <span key={`${image.id}-${cat}`} className="text-xs px-2 py-1 bg-black/70 text-white rounded-md">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}
