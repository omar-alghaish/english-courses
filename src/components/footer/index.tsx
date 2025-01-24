'use client'
import Link from "next/link"
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  Mail, Phone, MapPin, Send 
} from "lucide-react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary">EnglishMaster</h3>
            <p className="text-muted-foreground text-sm">
              Transforming language learning through innovative education since 2015
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-3 text-sm">
              {['Courses', 'Pricing', 'Teachers', 'Success Stories'].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Language Street, London, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@englishmaster.com" className="hover:text-primary">
                  hello@englishmaster.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+441234567890" className="hover:text-primary">
                  +44 1234 567890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for course updates and learning tips
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="p-2 bg-primary hover:bg-primary/90 rounded-lg">
                  <Send className="w-5 h-5 text-primary-foreground" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="border-t border-border my-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <div>
            © 2024 EnglishMaster. All rights reserved.
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
              >
                <Link 
                  href={`/${link.toLowerCase()}`} 
                  className="hover:text-primary transition-colors"
                >
                  {link} Policy
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer