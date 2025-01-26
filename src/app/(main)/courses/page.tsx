"use client";
import React, { useState } from "react";
import { Star, Clock, Users, BookOpen, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const courses = [
  {
    title: "Business English Mastery",
    category: "Business",
    duration: "12h",
    lessons: 45,
    students: "2.1k",
    rating: 4.9,
    price: 89.99,
    image: "bg-gradient-to-tr from-blue-400 to-purple-500",
  },
  {
    title: "IELTS Preparation Course",
    category: "Exams",
    duration: "30h",
    lessons: 120,
    students: "3.4k",
    rating: 4.8,
    price: 149.99,
    image: "bg-gradient-to-tr from-green-400 to-cyan-500",
  },
  {
    title: "Everyday Conversation Skills",
    category: "General",
    duration: "8h",
    lessons: 32,
    students: "1.8k",
    rating: 4.7,
    price: 49.99,
    image: "bg-gradient-to-tr from-orange-400 to-red-500",
  },
  {
    title: "Academic Writing Pro",
    category: "Academic",
    duration: "15h",
    lessons: 60,
    students: "950",
    rating: 4.9,
    price: 99.99,
    image: "bg-gradient-to-tr from-purple-400 to-pink-500",
  },
  {
    title: "Business English Mastery",
    category: "Business",
    duration: "12h",
    lessons: 45,
    students: "2.1k",
    rating: 4.9,
    price: 89.99,
    image: "bg-gradient-to-tr from-blue-400 to-purple-500",
  },
  {
    title: "IELTS Preparation Course",
    category: "Exams",
    duration: "30h",
    lessons: 120,
    students: "3.4k",
    rating: 4.8,
    price: 149.99,
    image: "bg-gradient-to-tr from-green-400 to-cyan-500",
  },
  {
    title: "Everyday Conversation Skills",
    category: "General",
    duration: "8h",
    lessons: 32,
    students: "1.8k",
    rating: 4.7,
    price: 49.99,
    image: "bg-gradient-to-tr from-orange-400 to-red-500",
  },
  {
    title: "Academic Writing Pro",
    category: "Academic",
    duration: "15h",
    lessons: 60,
    students: "950",
    rating: 4.9,
    price: 99.99,
    image: "bg-gradient-to-tr from-purple-400 to-pink-500",
  },

  // Add more courses...
];

const categories = [
  "All",
  "Business",
  "Exams",
  "General",
  "Academic",
  "Technical",
];

const DiscoverPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCourses, setVisibleCourses] = useState(8);

  const filteredCourses = courses
    .filter(
      (course) =>
        (selectedCategory === "All" || course.category === selectedCategory) &&
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, visibleCourses);

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 space-y-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Discover Courses
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-2 bg-card border border-border p-2 rounded-lg">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                className="bg-transparent text-foreground outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredCourses.map((course, index) => (
            <Link href="/courses/1" key={index}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                className="group bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div
                  className={`${course.image} h-48 rounded-t-xl relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                    {course.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400" />
                      {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-primary">
                      <BookOpen className="w-5 h-5" />
                      <span className="font-medium">
                        {course.lessons} lessons
                      </span>
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      ${course.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCourses < courses.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={() => setVisibleCourses((prev) => prev + 4)}
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90"
            >
              Load More Courses
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
