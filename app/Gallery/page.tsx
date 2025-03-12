import Image from "next/image";
import { HomeIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import ImageGallery from "../components/imageGallery"
import MasonryGallery from "../components/mansoryGallery"
import Header from "../components/header";

const pages = [
  { name: 'Gallery', href: '/Gallery', current: false },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full py-8 sm:py-12">
          <div className="mx-auto w-full max-w-2xl space-y-8 lg:max-w-none">
            <ImageGallery />
          </div>
        </div>
      </main>
    </div>
  )
}
