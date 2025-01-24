'use client'
import React from 'react'
import {  Mail, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'

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

  return (
    <div className="min-h-screen bg-background">
      {/* Contact Section */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Contact Support</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email Support", detail: "support@englishmaster.com", sub: "Typically responds within 4 hours" },
                  { icon: Phone, title: "Phone Support", detail: "+1 (555) 123-4567", sub: "Mon-Fri, 9am - 5pm EST" },
                  { icon: MessageCircle, title: "Live Chat", button: true }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{option.title}</h3>
                      {option.button ? (
                        <Button className="bg-primary hover:bg-primary/90">
                          Start Chat Now
                        </Button>
                      ) : (
                        <>
                          <p className="text-muted-foreground">{option.detail}</p>
                          <p className="text-sm text-muted-foreground/80">{option.sub}</p>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label className="text-foreground">Your Email</Label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <Label className="text-foreground">Subject</Label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <Label className="text-foreground">Message</Label>
                  <Textarea 
                    placeholder="Describe your issue..." 
                    rows={5} 
                    className="resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-xl shadow-lg"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="text-lg font-medium text-left text-foreground">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </section>

      {/* Support Status */}
      <div className="bg-muted py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-foreground">All systems operational</span>
          </div>
          <div className="flex gap-6">
            {['Status Page', 'Community Forum', 'Knowledge Base'].map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ x: 5 }}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage