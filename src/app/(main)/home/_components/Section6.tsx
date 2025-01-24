'use client'
import React from 'react'
import { ClipboardList, UserCheck, BrainCircuit, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: ClipboardList,
    title: "Assess Your Level",
    description: "Take our free placement test to determine your current English proficiency",
  },
  {
    icon: UserCheck,
    title: "Personalized Plan",
    description: "Get a customized learning path based on your goals and schedule",
  },
  {
    icon: BrainCircuit,
    title: "Interactive Learning",
    description: "Daily lessons with AI-powered exercises and live tutor sessions",
  },
  {
    icon: Trophy,
    title: "Achieve Fluency",
    description: "Earn certifications and master real-world English communication",
  }
]

const Section6 = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-4"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block px-6 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium backdrop-blur-sm"
          >
            Learning Path
          </motion.span>
          <h2 className="text-4xl font-bold text-foreground">
            Start Learning in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform your English skills with our proven methodology
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Animated connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 mx-8 origin-left"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                {/* Animated number indicator */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-card border-2 border-primary text-primary rounded-full mb-6 font-bold text-lg shadow-lg"
                >
                  {index + 1}
                </motion.div>

                {/* Step card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/30 transition-all shadow-xl hover:shadow-2xl"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Start Your Journey Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Section6