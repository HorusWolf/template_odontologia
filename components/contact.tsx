"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Villa Venezuela", "Seventh District", "Managua, Nicaragua"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(+505) 8123-4567", "Emergency: (+505) 8987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@dentalcare.com", "appointments@dentalcare.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Emergency Only"],
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-amber-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to a healthier, more beautiful smile? Contact us today to schedule your
            appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0"
                        >
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                        </motion.div>
                        <CardTitle className="text-base sm:text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-red-50 to-pink-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-red-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Emergency Care</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Dental emergencies can happen at any time. We offer 24/7 emergency dental services to ensure you get the
                care you need when you need it most.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto text-sm sm:text-base">
                Emergency Hotline: (+505) 8987-6543
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-center">Schedule Your Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Input placeholder="First Name" className="text-sm sm:text-base" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Input placeholder="Last Name" className="text-sm sm:text-base" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Input type="email" placeholder="Email Address" className="text-sm sm:text-base" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Input type="tel" placeholder="Phone Number" className="text-sm sm:text-base" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Input type="date" placeholder="Preferred Date" className="text-sm sm:text-base" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <Textarea
                    placeholder="Tell us about your dental needs or any specific concerns..."
                    rows={4}
                    className="text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 text-base sm:text-lg shadow-lg">
                    Schedule Appointment
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
