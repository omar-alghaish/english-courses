'use client'
import Link from "next/link"
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  Mail, Phone, MapPin, Send 
} from "lucide-react"
import { Button } from "../ui/button"

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EnglishMaster</h3>
            <p className="text-sm">
              Transforming language learning through innovative education since 2015
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-indigo-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-indigo-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-indigo-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-indigo-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              <Link href="/courses" className="block hover:text-indigo-400 transition-colors">
                Courses
              </Link>
              <Link href="/pricing" className="block hover:text-indigo-400 transition-colors">
                Pricing
              </Link>
              <Link href="/teachers" className="block hover:text-indigo-400 transition-colors">
                Teachers
              </Link>
              <Link href="/success-stories" className="block hover:text-indigo-400 transition-colors">
                Success Stories
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-2">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Language Street, London, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@englishmaster.com" className="hover:text-indigo-400">
                  hello@englishmaster.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+441234567890" className="hover:text-indigo-400">
                  +44 1234 567890
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm">
              Subscribe to our newsletter for course updates and learning tips
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                <Send className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>
            © 2024 EnglishMaster. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer