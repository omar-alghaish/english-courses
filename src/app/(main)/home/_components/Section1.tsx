'use client'
import React from 'react'
import { PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Section1 = () => {
    return (
      <section className="relative bg-gradient-to-b from-indigo-50 to-purple-50 py-20 md:py-28">
        <div className="mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-2xl"
            >
              <motion.span
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                Learn English Confidently
              </motion.span>
  
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Master English with
                <motion.span 
                  className="text-indigo-600 block mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Native Speakers
                </motion.span>
              </motion.h1>
  
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 md:pr-8"
              >
                Join 50,000+ students worldwide in our interactive online courses designed to boost your fluency.
              </motion.p>
  
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 px-8 py-4 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <PlayCircle className="w-6 h-6 text-indigo-600" />
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
  
            {/* Right Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-xl"
              >
                <div className="aspect-video bg-indigo-200 rounded-xl overflow-hidden relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.75 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-300"
                  />
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-sm"
                  >
                    <span className="text-sm font-medium">Interactive Lesson</span>
                  </motion.div>
                </div>
              </motion.div>
  
              {/* Stats - Uncomment when ready */}
              {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute -bottom-8 left-0 right-0 mx-auto grid grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-lg max-w-xl"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Section1