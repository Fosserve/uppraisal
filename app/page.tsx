import AboutUS from "@/components/aboutus"
import ContactUS from "@/components/contact-us"
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
      <main className="flex-1 mx-8 sm:mx-16">
        <Carousel/>
        <AboutUS />
        <ServicesSection/>
        <StatsSection/>
        <TestimonialCarousel/>
        <NewsLatter/>
        <ContactUS/>
      </main>
    </div>
  )
}

