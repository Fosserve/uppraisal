import Image from "next/image";
import { HomeIcon } from '@heroicons/react/20/solid'
import logo from "../../public/uppraisal-logo.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import ImageGallery from "../components/imageGallery"
import MasonryGallery from "../components/mansoryGallery"



const pages = [
    { name: 'About', href: '/aboutus', current: false },
    { name: 'Careers', href: '/career', current: false },
    { name: 'Services', href: '/services', current: false },
  ]

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
        <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="mx-auto flex flex-col max-w-7xl items-start justify-between p-6 lg:px-8">
                  <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Uppraisal Consultant</span>
                      <img
                        alt="Uppraisal Consultant"
                        src={logo.src}
                        className="h-10 w-auto"
                      />
                    </a>
                  </div>
                  <div className="flex mt-8">
                        <ol role="list" className="flex items-center flex-wrap space-x-4 overflow-x-auto">
                          <li>
                            <div>
                              <a href="/" className="text-gray-700 hover:text-gray-800">
                                <HomeIcon aria-hidden="true" className="size-6 shrink-0" />
                                <span className="sr-only">Home</span>
                              </a>
                            </div>
                          </li>
                          {pages.map((page) => (
                            <li key={page.name}>
                              <div className="flex items-center ">
                                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5 shrink-0 text-gray-300">
                                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                                <a
                                  href={page.href}
                                  aria-current={page.current ? 'page' : undefined}
                                  className="ml-4 text-lg font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {page.name}
                                </a>
                              </div>
                            </li>
                          ))}
                        </ol>
                        </div>
                </nav>
              </header>
              <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mt-32">
              <h1 className="text-3xl font-bold mb-6 pt-24 sm:pt-32 font-">Uppraisal Gallery</h1>
            <Tabs defaultValue="masonry" className="w-full mb-8">
                <TabsList className="grid w-full rounded-md  max-w-md grid-cols-2">
                <TabsTrigger value="grid">Grid Layout</TabsTrigger>
                <TabsTrigger value="masonry">Masonry Layout</TabsTrigger>
                </TabsList>
                <TabsContent value="grid">
                <p className="text-muted-foreground mb-4">Standard grid layout with fixed aspect ratios</p>
                <ImageGallery />
                </TabsContent>
                <TabsContent value="masonry">
                <p className="text-muted-foreground mb-4">Masonry layout that preserves original image proportions</p>
                <MasonryGallery />
                </TabsContent>
            </Tabs>
      </div>
    </main>
  )
}

