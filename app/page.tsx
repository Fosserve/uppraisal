import { Carousel } from "@/components/coursal"
import HeaderContainner from "@/components/header"
import NewsLatter from "@/components/newsletter"
import { ServicesSection } from "@/components/services"
import { StatsSection } from "@/components/stats"
import TestimonialCarousel from "@/components/testimonials"
import Image from "next/image"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderContainner />
      <main className="flex-1 mx-16">
        <Carousel/>
        <ServicesSection/>
        <StatsSection/>
        <TestimonialCarousel/>
        <NewsLatter/>
      </main>
    </div>
  )
}

