"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
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
import img10 from "../../public/team/img10.jpg"
import img11 from "../../public/team/img11.jpg"
import img12 from "../../public/team/img12.jpg"
import img13 from "../../public/team/img13.jpg"
import img14 from "../../public/team/img14.jpg"
import img15 from "../../public/team/img15.jpg"
import img16 from "../../public/team/img16.jpg"
import img17 from "../../public/team/img17.jpg"
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

// Sample image data
const imageData: ImageItem[] = [
  { id: "1", src: image1.src, alt: "Leaf with water droplets", category: ["Team"], width: 600, height: 400 },
  { id: "2", src: image2.src, alt: "Boats on a lake", category: ["Team"], width: 600, height: 400 },
  { id: "3", src: img1.src, alt: "Colorful pencils", category: ["Team"], width: 600, height: 400 },
  { id: "4", src: img2.src, alt: "Fresh fruits", category: ["Group", "Celebration"], width: 600, height: 400 },
  { id: "5", src: img3.src, alt: "Tree in winter", category: ["Celebration", "Gatherings"], width: 600, height: 400 },
  { id: "6", src: img4.src, alt: "Tree in autumn", category: ["Celebration"], width: 600, height: 400 },
  { id: "7", src: img5.src, alt: "City sunset", category: ["Group"], width: 600, height: 400 },
  { id: "8", src: img6.src, alt: "Modern building", category: ["Gatherings", "Celebration"], width: 600, height: 400 },
  { id: "9", src: img7.src, alt: "Temple", category: ["Group"], width: 600, height: 400 },
  { id: "10", src: img8.src, alt: "Big Ben", category: ["Mettings" , "Gatherings"], width: 600, height: 400 },
  { id: "11", src: img9.src, alt: "Garage doors", category: ["Group", "Team"], width: 600, height: 400 },
  { id: "12", src: img10.src, alt: "Garage doors", category: ["Group", "Team"], width: 600, height: 400 },
  { id: "13", src: img11.src, alt: "Garage doors", category: ["Celebration", "Team"], width: 600, height: 400 },
  { id: "14", src: img12.src, alt: "Garage doors", category: ["Gatherings", "Celebration"], width: 600, height: 400 },
  { id: "15", src: img13.src, alt: "Garage doors", category: ["Group", "Team"], width: 600, height: 400 },
  { id: "16", src: img14.src, alt: "Garage doors", category: ["Group", "Mettings"], width: 600, height: 400 },
  { id: "17", src: img15.src, alt: "Garage doors", category: ["Gatherings", "Team"], width: 600, height: 400 },
  { id: "18", src: img16.src, alt: "Garage doors", category: ["Group", "Celebration"], width: 600, height: 400 },
  { id: "19", src: img17.src, alt: "Garage doors", category: ["Group", "Celebration"], width: 600, height: 400 },

]

export default function ImageGallery() {
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
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl  transition-all font-semibold ${
              selectedCategory === category
                ? "bg-[#d6eeff] text-[#045be6] shadow-md border border-[#045be6]"
                : "bg-gray-200 text-gray-800 hover:bg-[#b7e3ff] hover:text-[#045be6]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg h-full">
            <div
              className="relative w-full"
              style={{
                paddingBottom: `${(image.height / image.width) * 100}%`,
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
          <p className="text-muted-foreground">No images found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}
