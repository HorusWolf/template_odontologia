"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Star, Award, Users, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  { icon: Award, text: "Award Winning" },
  { icon: Users, text: "10K+ Patients" },
  { icon: Shield, text: "Safe & Secure" },
  { icon: Star, text: "5-Star Rated" },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 sm:pt-6 w-full"
      style={{ width: "100%", minWidth: "100%" }}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50"
        style={{ width: "100%" }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: "100%" }}>
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-amber-200/40 to-orange-300/40 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-24 sm:py-24 lg:py-24 relative z-10">
        <div className="max-w-full mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left w-full"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-700 font-medium text-xs sm:text-sm"
              >
                <Star className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current flex-shrink-0" />
                <span>#1 Rated Dental Clinic in the City</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent block">
                  Transform Your
                </span>
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent block">
                  Smile Today
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
              >
                Experience premium dental care with our expert team. We combine advanced technology with personalized
                treatment to give you the confident, healthy smile you deserve.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100"
                  >
                    <feature.icon className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Book Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  (+505) 8123-4567
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-6"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="hidden sm:block w-px h-10 sm:h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">5.0 Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0 w-full"
            >
              <div className="relative z-10 w-full">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl w-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Modern dental office with advanced equipment"
                    width={600}
                    height={700}
                    priority
                    className="w-full object-cover"
                    style={{
                      height: "auto",
                      aspectRatio: "4/3",
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 bg-white p-2 sm:p-3 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">Award Winner</div>
                      <div className="text-xs sm:text-sm text-gray-600">Best Dental Clinic 2024</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-white p-2 sm:p-3 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      99%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Patient Satisfaction</div>
                    <div className="flex justify-center mt-1 sm:mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2 w-2 sm:h-3 sm:w-3 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-24 sm:w-28 lg:w-40 h-24 sm:h-28 lg:h-40 bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}