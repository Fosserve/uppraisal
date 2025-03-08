import Image from "next/image";
import { HomeIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import ImageGallery from "../components/imageGallery"
import MasonryGallery from "../components/mansoryGallery"



const pages = [
    { name: 'Gallery', href: '/Gallery', current: false },

  ]

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
              <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mt-32">
                <ImageGallery />
      </div>
    </main>
  )
}

