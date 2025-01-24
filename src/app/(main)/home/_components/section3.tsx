'use client'
import React from 'react'
import { BookOpen, Users, Mic, Clock, BrainCircuit, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Progress through 10 levels of comprehensive English mastery with our CEFR-aligned courses",
  },
  {
    icon: Users,
    title: "Native Teachers",
    description: "Live sessions with certified instructors from English-speaking countries",
  },
  {
    icon: Mic,
    title: "Speaking Practice",
    description: "Daily conversation clubs and pronunciation workshops",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "24/7 access to lessons with personalized scheduling",
  },
  {
    icon: BrainCircuit,
    title: "AI Feedback",
    description: "Instant grammar correction and vocabulary suggestions",
  },
  {
    icon: Trophy,
    title: "Certification",
    description: "Globally recognized certificates upon course completion",
  }
]

const Section3 = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Transform Your English Learning
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our unique approach that combines technology with human expertise
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.div 
                className="group relative bg-card/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background element */}
                <motion.div 
                  className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Icon container */}
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                
                <motion.button 
                  className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center w-[100%] mx-auto p-8 rounded-3xl bg-card border border-border shadow-2xl">
            <motion.h3 
              className="text-3xl font-bold text-foreground mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Start Your Journey Today
            </motion.h3>
            <p className="text-muted-foreground mb-8">
              Join 50,000+ students who transformed their English skills
            </p>
            <div className="flex gap-4">
              <motion.button 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Trial
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-accent/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Plans
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Section3