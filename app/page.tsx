import Image from "next/image"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { SwipeCarousel } from "@/components/coursal"
import { ServicesSection } from "@/components/services"
import { StatsSection } from "@/components/stats"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SwipeCarousel/>
        <ServicesSection/>
        <StatsSection/>
      </main>
    </div>
  )
}

