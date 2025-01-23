'use client'
import React from 'react'
import { LifeBuoy, Mail, Phone, MessageCircle, Clock, AlertCircle, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const SupportPage = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Visit the password reset page and follow the instructions sent to your email."
    },
    {
      question: "Where can I find my course materials?",
      answer: "All materials are available in your dashboard under 'My Courses' section."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer 30-day money back guarantee for all annual subscriptions."
    }
  ]

  const helpTopics = [
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Billing & Payments",
      items: ["Subscription issues", "Payment methods", "Invoice requests"]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Troubleshooting",
      items: ["Login problems", "Video playback issues", "Audio quality"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Course Access",
      items: ["Expired courses", "Download content", "Course extensions"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center container max-w-4xl"
      >
        <div className="bg-indigo-100 dark:bg-indigo-900/20 w-max mx-auto p-4 rounded-2xl mb-8">
          <LifeBuoy className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          How can we help you?
        </h1>
        <div className="relative max-w-2xl mx-auto">
          <Input 
            placeholder="Search help articles..."
            className="w-full py-6 text-lg pl-14 pr-6"
          />
          <svg 
            className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </motion.section>

      {/* Help Topics Grid */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Popular Help Topics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {helpTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded-lg">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold">{topic.title}</h3>
              </div>
              <ul className="space-y-2">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <a href="#" className="flex items-center gap-2">
                      <span className="text-lg">•</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Support</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">support@englishmaster.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Typically responds within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      Start Chat Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Describe your issue..." 
                    rows={5} 
                    className="resize-none"
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              value={`item-${index}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <AccordionTrigger className="hover:no-underline">
                <h3 className="text-lg font-medium text-left">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Support Status */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">All systems operational</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600">Status Page</a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600">Community Forum</a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600">Knowledge Base</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage