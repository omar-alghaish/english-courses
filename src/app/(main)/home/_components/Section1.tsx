// 'use client'
// import React from 'react'
// import { PlayCircle } from 'lucide-react'
// import { motion } from 'framer-motion'

// const Section1 = () => {
//   const stats = [
//     { value: '50K+', label: 'Active Students' },
//     { value: '120+', label: 'Expert Tutors' },
//     { value: '40+', label: 'Countries' },
//   ]

//   return (
//     <section className="relative bg-gradient-to-b from-indigo-50 to-purple-50 py-20 md:py-28">
//       <div className="mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6 max-w-2xl"
//           >
//             <motion.span
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium"
//             >
//               Learn English Confidently
//             </motion.span>

//             <motion.h1 
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
//             >
//               Master English with
//               <motion.span 
//                 className="text-indigo-600 block mt-2"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 Native Speakers
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="text-xl text-gray-600 md:pr-8"
//             >
//               Join 50,000+ students worldwide in our interactive online courses designed to boost your fluency.
//             </motion.p>

//             <motion.div 
//               className="flex flex-col sm:flex-row gap-4"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
//               >
//                 Start Free Trial
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ x: 5 }}
//                 className="flex items-center gap-2 px-8 py-4 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <PlayCircle className="w-6 h-6 text-indigo-600" />
//                 Watch Demo
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div 
//             initial={{ scale: 0.95, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative"
//           >
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-xl"
//             >
//               <div className="aspect-video bg-indigo-200 rounded-xl overflow-hidden relative">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 0.75 }}
//                   className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-300"
//                 />
                
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-sm"
//                 >
//                   <span className="text-sm font-medium">Interactive Lesson</span>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Stats Section */}
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               className="absolute -bottom-8 left-0 right-0 mx-auto grid grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-lg max-w-xl"
//             >
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="text-center"
//                 >
//                   <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
//                   <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Section1


'use client'
import React from 'react'
import { Rocket, Users,  Sparkles, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Section1 = () => {
  const stats = [
    { value: '98%', label: 'Success Rate', icon: <Sparkles className="w-5 h-5" /> },
    { value: '4.9', label: 'Rating', icon: <Zap className="w-5 h-5" /> },
    { value: '50K+', label: 'Students', icon: <Users className="w-5 h-5" /> },
  ]

  return (
    <section className="relative bg-gradient-to-br from-background via-card/50 to-muted/20 bg-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm px-6 py-2 rounded-full border border-border"
            >
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Next-gen language learning</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Speak Confidently
              <span className="block mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text">
                Think Globally
              </span>
            </h1>

            <p className="text-xl text-muted-foreground md:pr-12 leading-relaxed">
              Transform your language skills through AI-powered immersion and real-time cultural adaptation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 px-8 py-4 text-foreground hover:bg-accent/20 rounded-xl transition-colors border border-border"
              >
                Explore Methods →
              </motion.button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dynamic Geometric Design */}
          
        </div>
      </div>
    </section>
  )
}

export default Section1