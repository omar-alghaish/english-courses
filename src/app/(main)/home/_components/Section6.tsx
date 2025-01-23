'use client'
import React from 'react'
import { ClipboardList, UserCheck, BrainCircuit, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: ClipboardList,
    title: "Assess Your Level",
    description: "Take our free placement test to determine your current English proficiency",
    color: "bg-indigo-100 dark:bg-indigo-900/20"
  },
  {
    icon: UserCheck,
    title: "Personalized Plan",
    description: "Get a customized learning path based on your goals and schedule",
    color: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    icon: BrainCircuit,
    title: "Interactive Learning",
    description: "Daily lessons with AI-powered exercises and live tutor sessions",
    color: "bg-rose-100 dark:bg-rose-900/20"
  },
  {
    icon: Trophy,
    title: "Achieve Fluency",
    description: "Earn certifications and master real-world English communication",
    color: "bg-emerald-100 dark:bg-emerald-900/20"
  }
]

const Section6 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start Learning in 4 Simple Steps
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Transform your English skills with our proven learning methodology
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 mx-8" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                {/* Number indicator */}
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full mb-6 font-bold text-lg">
                  {index + 1}
                </div>

                {/* Step card */}
                <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <step.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey Now
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Section6