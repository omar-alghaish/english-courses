'use client'
import * as React from "react"
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
    <section className=" container relative py-20 bg-background">
      {/* Decorative elements */}
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
            Need Help?
          </motion.span>
          <h2 className="text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our English programs
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
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
                  className="group rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all shadow-lg hover:shadow-xl"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between p-6 text-left hover:no-underline">
                    <motion.span className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </motion.span>
                  
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground">
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
            className="mt-12 text-center space-y-6"
          >
            <p className="text-muted-foreground">
              Still have questions? We are here to help!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg hover:bg-primary/90 transition-all"
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