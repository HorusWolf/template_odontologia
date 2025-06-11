"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">SmileCare</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted partner for comprehensive dental care. We're committed to helping you achieve and maintain
              optimal oral health with personalized, compassionate care.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["About Us", "Services", "Our Team", "Testimonials", "Contact", "Emergency Care"].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors text-sm sm:text-base">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Orthodontics",
                "Dental Implants",
                "Teeth Whitening",
                "Emergency Care",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors text-sm sm:text-base">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>Villa Venezuela</p>
                  <p>Seventh District</p>
                  <p>Managua, Nicaragua</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">(+505) 8123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@dentalcare.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Freekcode. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
