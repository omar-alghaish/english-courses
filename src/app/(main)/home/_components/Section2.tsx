'use client'
import React, { useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

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


// Testimonials array remains the same...

const Section2 = () => {
    const [showAll, setShowAll] = useState(false)
    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 8)
    const hasMore = testimonials.length > 8
  
    return (
      <section className="relative py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-indigo-600 dark:text-indigo-400">
              <Quote className="w-8 h-8" />
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Join thousands of satisfied learners who transformed their English skills
            </p>
          </div>
  
          <div className="relative">
            <div 
              id="testimonials-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="relative group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-indigo-50 dark:hover:border-indigo-900"
                >
                  <div className="absolute top-6 right-6 text-indigo-100 dark:text-indigo-900/50 group-hover:text-indigo-200 dark:group-hover:text-indigo-800 transition-colors">
                    <Quote className="w-12 h-12" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                  </div>
  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-300 dark:from-indigo-600 dark:to-purple-500" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {hasMore && (
              <>
                {/* Shadow overlay */}
                {!showAll && (
                  <div className="absolute inset-x-0 -bottom-4 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none" />
                )}
                
                {/* Show More/Less button */}
                <div className={`text-center mt-8 ${!showAll ? 'absolute inset-x-0 bottom-0' : ''}`}>
                  <Button
                    onClick={() => setShowAll(!showAll)}
                    className="relative z-10 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
                    aria-expanded={showAll}
                    aria-controls="testimonials-grid"
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                    <span className="ml-2 inline-block transition-transform duration-300">
                      {showAll ? '↑' : '↓'}
                    </span>
                  </Button>
                </div>
              </>
            )}
          </div>
  
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          </div>
        </div>
      </section>
    )
  }
  
  export default Section2