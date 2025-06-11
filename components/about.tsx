"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, Heart } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, number: "10,000+", label: "Happy Patients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Clock, number: "24/7", label: "Emergency Care" },
  { icon: Heart, number: "99%", label: "Satisfaction Rate" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop"
              alt="Dental team at work"
              width={600}
              height={500}
              className="rounded-xl sm:rounded-2xl shadow-lg w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              priority
              style={{
                height: "auto",
                aspectRatio: "4/3",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 sm:-bottom-6 sm:-right-6 sm:left-auto sm:transform-none sm:translate-x-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">15+</div>
                <div className="text-xs sm:text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left"
              >
                About Our Practice
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-center lg:text-left"
              >
                For over 15 years, we've been dedicated to providing exceptional dental care to our community. Our
                state-of-the-art facility combines the latest technology with a warm, welcoming environment where
                patients feel comfortable and confident in their care.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left"
              >
                We believe that everyone deserves a healthy, beautiful smile, and we're committed to making that a
                reality for each of our patients through personalized treatment plans and compassionate care.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}