"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dentist & Founder",
    specialization: "General & Cosmetic Dentistry",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    specialization: "Braces & Aligners",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Dentist",
    specialization: "Children's Dentistry",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. James Wilson",
    role: "Oral Surgeon",
    specialization: "Implants & Surgery",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=400&fit=crop&crop=face",
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care in
            a comfortable, friendly environment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] relative"> 
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 to-teal-600/90 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  >
                    <div className="text-white text-center">
                      <div className="text-base sm:text-lg font-semibold">{member.experience}</div>
                      <div className="text-xs sm:text-sm">Experience</div>
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-1 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{member.specialization}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
