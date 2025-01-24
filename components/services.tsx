"use client"

import React, { type ReactNode } from "react"
import { motion } from "framer-motion"
import { Briefcase, Users, Search, HandshakeIcon, Clock } from "lucide-react"

const services = [
  {
    title: "Permanent Staffing Solution(PSS)",
    icon: Briefcase,
    gradient: "from-primary to-secondary",
    size: "md:col-span-4",
    description: "Find the perfect permanent talent for your organization with our comprehensive staffing solutions.",
  },
  {
    title: "Training & Development",
    icon: Users,
    gradient: "from-secondary to-accent",
    size: "md:col-span-8",
    description: "Enhance your team's skills with our specialized training and development programs.",
  },
  {
    title: "Executive Search",
    icon: Search,
    gradient: "from-primary/80 to-secondary/80",
    size: "md:col-span-8",
    description: "Connect with top-tier executive talent through our specialized search services.",
  },
  {
    title: "Temporary Staffing Solution(TSS)",
    icon: HandshakeIcon,
    gradient: "from-accent to-secondary",
    size: "md:col-span-4",
    description: "Flexible staffing solutions for your temporary workforce needs.",
  },
]

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto ">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium"
            >
              WHAT WE DO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tight max-w-lg"
            >
              Our Areas Of
              <span className="text-secondary"> Expertise</span>
            </motion.h2>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          > */}
            <button   className="bg-secondary text-primary-foreground hover:bg-secondary/90">
              Learn more
            </button>
          {/* </motion.div> */}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {services.map((service, index) => (
            <BounceCard key={index} className={`col-span-12 ${service.size}`}>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-full bg-primary/10"
                  >
                    <service.icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground mb-8">{service.description}</p>
                <div className="mt-auto">
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className={`h-1 w-12 bg-gradient-to-r ${service.gradient} rounded-full`} />
                  </motion.div>
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl 
                  bg-gradient-to-br ${service.gradient} opacity-10 p-4 
                  transition-transform duration-[250ms] 
                  group-hover:translate-y-4 group-hover:rotate-[2deg]`}
              />
            </BounceCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const BounceCard = ({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotate: "1deg" }}
      transition={{ duration: 0.2 }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white p-8 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}

const CardTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-semibold text-accent">{children}</h3>
}

