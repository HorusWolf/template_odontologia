"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Smile, Shield, Zap, Star, Heart, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
    features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "Preventive Care"],
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic dental procedures.",
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
  },
  {
    icon: Shield,
    title: "Restorative Dentistry",
    description: "Restore function and beauty to damaged or missing teeth.",
    features: ["Dental Implants", "Crowns & Bridges", "Dentures", "Root Canals"],
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent dental problems.",
    features: ["Pain Relief", "Trauma Care", "Same-Day Service", "After-Hours Care"],
  },
  {
    icon: Heart,
    title: "Pediatric Dentistry",
    description: "Specialized dental care designed specifically for children and teens.",
    features: ["Child-Friendly Environment", "Preventive Care", "Education", "Gentle Approach"],
  },
  {
    icon: Eye,
    title: "Orthodontics",
    description: "Straighten teeth and correct bite issues with modern orthodontic solutions.",
    features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs, from routine cleanings
            to complex restorative procedures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  >
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-sm sm:text-base text-gray-600"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}