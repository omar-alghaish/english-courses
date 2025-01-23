'use client'
import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
    {
      question: "How do I choose the right course level?",
      answer: "Take our free placement test to determine your current English proficiency level. Our system will recommend the perfect starting point based on your results."
    },
    {
      question: "Can I switch courses after enrolling?",
      answer: "Yes! You can upgrade or change courses at any time. Your progress will be transferred automatically to the new course."
    },
    {
      question: "What devices can I use for lessons?",
      answer: "Our platform works on all devices - desktop, tablet, and mobile. We recommend using Chrome or Safari for the best experience."
    },
    {
      question: "How do live classes work?",
      answer: "Live classes are conducted via Zoom with small groups of 4-6 students. Sessions are recorded and available for review if you miss a class."
    },
    {
      question: "What certification will I receive?",
      answer: "Upon completion, you'll receive a CEFR-aligned certificate recognized by employers and institutions worldwide."
    }
  ]

const Section5 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Find answers to common questions about our English courses
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between p-6 text-left hover:no-underline">
                    <motion.span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </motion.span>
                    {/* <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-indigo-600 dark:text-indigo-400"
                    >
                      <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </motion.div> */}
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions? We're here to help!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors shadow-lg"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Section5