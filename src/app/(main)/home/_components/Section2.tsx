'use client'
import React, { useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    text: "This course transformed my confidence in professional English communication. The interactive lessons and native teachers made all the difference!",
    rating: 5,
  },
  {
    name: "Mohamed Ali",
    role: "University Student",
    text: "I improved my IELTS score by 2 bands in just 3 months. The personalized feedback is unmatched compared to other platforms.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Digital Nomad",
    text: "Finally found a program that adapts to my schedule while maintaining quality. The cultural lessons are an amazing bonus!",
    rating: 4,
  },
  {
    name: "David Müller",
    role: "Engineer",
    text: "The technical English course helped me land my dream job at an international company. Worth every penny!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    text: "This course transformed my confidence in professional English communication. The interactive lessons and native teachers made all the difference!",
    rating: 5,
  },
  {
    name: "Mohamed Ali",
    role: "University Student",
    text: "I improved my IELTS score by 2 bands in just 3 months. The personalized feedback is unmatched compared to other platforms.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Digital Nomad",
    text: "Finally found a program that adapts to my schedule while maintaining quality. The cultural lessons are an amazing bonus!",
    rating: 4,
  },
  {
    name: "David Müller",
    role: "Engineer",
    text: "The technical English course helped me land my dream job at an international company. Worth every penny!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    text: "This course transformed my confidence in professional English communication. The interactive lessons and native teachers made all the difference!",
    rating: 5,
  },
  {
    name: "Mohamed Ali",
    role: "University Student",
    text: "I improved my IELTS score by 2 bands in just 3 months. The personalized feedback is unmatched compared to other platforms.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Digital Nomad",
    text: "Finally found a program that adapts to my schedule while maintaining quality. The cultural lessons are an amazing bonus!",
    rating: 4,
  },
  {
    name: "David Müller",
    role: "Engineer",
    text: "The technical English course helped me land my dream job at an international company. Worth every penny!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    text: "This course transformed my confidence in professional English communication. The interactive lessons and native teachers made all the difference!",
    rating: 5,
  },
  {
    name: "Mohamed Ali",
    role: "University Student",
    text: "I improved my IELTS score by 2 bands in just 3 months. The personalized feedback is unmatched compared to other platforms.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Digital Nomad",
    text: "Finally found a program that adapts to my schedule while maintaining quality. The cultural lessons are an amazing bonus!",
    rating: 4,
  },
  {
    name: "David Müller",
    role: "Engineer",
    text: "The technical English course helped me land my dream job at an international company. Worth every penny!",
    rating: 5,
  },
]


const SPEED = 2 // Adjust this value between 0.5 (fast) to 3 (very slow)

const Section2 = () => {
  const [isHoveredTop, setIsHoveredTop] = useState(false)
  const [isHoveredBottom, setIsHoveredBottom] = useState(false)
  const baseDuration = testimonials.length * SPEED * 10

  return (
    <section className="w-[100%] relative py-20 bg-background overflow-hidden">
      <div className="mx-auto">
        <div className="max-w-2xl  mx-auto text-center mb-16">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block mb-4 text-primary"
          >
            <Quote className="w-8 h-8" />
          </motion.span>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Voices of Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how we are transforming language learning globally
          </p>
        </div>

        {/* Animated Rows */}
        <div className="space-y-8">
          {/* Top Row (Left-moving) */}
          <div
            className="relative h-72 overflow-hidden"
            onMouseEnter={() => setIsHoveredTop(true)}
            onMouseLeave={() => setIsHoveredTop(false)}
          >
            <motion.div
              animate={{
                x: ['0%', '-100%'],
                transition: {
                  duration: baseDuration,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              className="absolute top-0 left-0 flex gap-8"
              style={{ animationPlayState: isHoveredTop ? 'paused' : 'running' }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="w-96 flex-shrink-0 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border hover:border-primary/20 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-primary fill-primary'
                            : 'text-muted-foreground/30 fill-muted-foreground/10'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/40 to-accent/30 backdrop-blur-sm" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-accent">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row (Right-moving) */}
          <div
            className="relative h-72 overflow-hidden"
            onMouseEnter={() => setIsHoveredBottom(true)}
            onMouseLeave={() => setIsHoveredBottom(false)}
          >
            <motion.div
              animate={{
                x: ['-100%', '0%'],
                transition: {
                  duration: baseDuration,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              className="absolute top-0 left-0 flex gap-8"
              style={{
                animationPlayState: isHoveredBottom ? 'paused' : 'running',
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="w-96 flex-shrink-0 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border hover:border-primary/20 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-primary fill-primary'
                            : 'text-muted-foreground/30 fill-muted-foreground/10'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/40 to-accent/30 backdrop-blur-sm" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-accent">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
      </div>
    </section>
  )
}


export default Section2