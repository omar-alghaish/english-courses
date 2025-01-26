// app/courses/[course-id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import {
  CourseContent,
  CourseDetails,
  Notes,
  VideoPlayer,
  TabSwitch,
} from "./_components";
import { Section, Lesson } from "../../../../types/types"; // Corrected line

const CourseEnrollPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>({
    id: "1-1",
    title: "Course Introduction",
    duration: "8:30",
    type: "video",
    completed: true,
    url: "https://example.com/video1.mp4",
  });
  const [notes, setNotes] = useState("");
  const [progress] = useState(35);

  const course = {
    title: "Advanced Next.js Development",
    instructor: "John Doe",
    rating: 4.8,
    students: 2450,
    duration: "32 hours",
    resources: [
      { name: "Course Ebook.pdf", type: "pdf", size: "2.5 MB" },
      { name: "Source Code.zip", type: "zip", size: "15.4 MB" },
      { name: "Project Templates", type: "folder", size: "8.2 MB" },
      { name: "Cheat Sheet.pdf", type: "pdf", size: "1.1 MB" },
    ],
    sections: [
      {
        id: "1",
        title: "Getting Started",
        lessons: [
          {
            id: "1-1",
            title: "Course Introduction",
            duration: "8:30",
            type: "video",
            completed: true,
            url: "https://example.com/intro.mp4",
          },
          {
            id: "1-2",
            title: "Setting Up Development Environment",
            duration: "12:45",
            type: "video",
            completed: true,
            url: "https://example.com/setup.mp4",
          },
          {
            id: "1-3",
            title: "Next.js Architecture Overview",
            duration: "10:15",
            type: "text",
            completed: true,
            url: "",
          },
          {
            id: "1-4",
            title: "Basic Project Structure Quiz",
            duration: "5:00",
            type: "quiz",
            completed: false,
            url: "",
          },
        ] as Lesson[],
      },
      {
        id: "2",
        title: "Core Concepts",
        lessons: [
          {
            id: "2-1",
            title: "Routing Fundamentals",
            duration: "15:20",
            type: "video",
            completed: true,
            url: "https://example.com/routing.mp4",
          },
          {
            id: "2-2",
            title: "Data Fetching Strategies",
            duration: "18:30",
            type: "video",
            completed: true,
            url: "https://example.com/data-fetching.mp4",
          },
          {
            id: "2-3",
            title: "SSG vs SSR vs ISR",
            duration: "14:00",
            type: "text",
            completed: false,
            url: "",
          },
          {
            id: "2-4",
            title: "API Routes Deep Dive",
            duration: "22:10",
            type: "video",
            completed: false,
            url: "https://example.com/api-routes.mp4",
          },
        ],
      },
      {
        id: "3",
        title: "Advanced Patterns",
        lessons: [
          {
            id: "3-1",
            title: "Middleware Implementation",
            duration: "25:40",
            type: "video",
            completed: false,
            url: "https://example.com/middleware.mp4",
          },
          {
            id: "3-2",
            title: "Monorepo Setup with Turborepo",
            duration: "30:15",
            type: "video",
            completed: false,
            url: "https://example.com/monorepo.mp4",
          },
          {
            id: "3-3",
            title: "Advanced TypeScript Patterns",
            duration: "20:00",
            type: "text",
            completed: false,
            url: "",
          },
          {
            id: "3-4",
            title: "Performance Optimization Quiz",
            duration: "10:00",
            type: "quiz",
            completed: false,
            url: "",
          },
        ],
      },
      {
        id: "4",
        title: "Fullstack Implementation",
        lessons: [
          {
            id: "4-1",
            title: "Authentication with NextAuth",
            duration: "35:20",
            type: "video",
            completed: false,
            url: "https://example.com/auth.mp4",
          },
          {
            id: "4-2",
            title: "Database Integration (Prisma)",
            duration: "28:45",
            type: "video",
            completed: false,
            url: "https://example.com/prisma.mp4",
          },
          {
            id: "4-3",
            title: "GraphQL API Implementation",
            duration: "40:00",
            type: "video",
            completed: false,
            url: "https://example.com/graphql.mp4",
          },
          {
            id: "4-4",
            title: "Fullstack Architecture Quiz",
            duration: "15:00",
            type: "quiz",
            completed: false,
            url: "",
          },
        ],
      },
      {
        id: "5",
        title: "Deployment & Maintenance",
        lessons: [
          {
            id: "5-1",
            title: "Vercel Deployment Strategies",
            duration: "18:30",
            type: "video",
            completed: false,
            url: "https://example.com/deployment.mp4",
          },
          {
            id: "5-2",
            title: "CI/CD Pipeline Setup",
            duration: "22:00",
            type: "text",
            completed: false,
            url: "",
          },
          {
            id: "5-3",
            title: "Monitoring & Analytics",
            duration: "20:15",
            type: "video",
            completed: false,
            url: "https://example.com/monitoring.mp4",
          },
          {
            id: "5-4",
            title: "Maintenance Best Practices",
            duration: "12:45",
            type: "text",
            completed: false,
            url: "",
          },
        ],
      },
    ] as Section[],
    reviews: [
      {
        id: "1",
        user: "Sarah Johnson",
        rating: 5,
        comment:
          "Fantastic course with in-depth explanations. The advanced patterns section was particularly valuable!",
      },
      {
        id: "2",
        user: "Mike Chen",
        rating: 4,
        comment:
          "Great content overall, but would benefit from more real-world examples in the deployment section.",
      },
      {
        id: "3",
        user: "Emma Wilson",
        rating: 5,
        comment:
          "Best Next.js course I've taken! The fullstack implementation section is gold.",
      },
      {
        id: "4",
        user: "Alex Thompson",
        rating: 4,
        comment:
          "Very comprehensive, but some videos feel a bit too long. Maybe break them into smaller chunks?",
      },
      {
        id: "5",
        user: "Priya Patel",
        rating: 5,
        comment:
          "Excellent mix of theory and practice. The quizzes really help reinforce learning.",
      },
    ],
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="container flex bg-background text-foreground">
      {/* Mobile Menu Button */}
      <div className="hidden lg:block w-[400px] flex flex-col gap-2 border p-4  sticky top-[70px] h-max min-h-[90vh]">
        <h4 className="font-semibold text-lg">Course Content</h4>
        <CourseContent
          sections={course.sections}
          activeLessonId={activeLesson?.id}
          onLessonClick={(lesson: Lesson) => setActiveLesson(lesson)}
        />
      </div>

      {/* Main Content */}
      <div className="border flex-1 flex flex-col overflow-hidden sticky top-[50px] h-max">
        <VideoPlayer lesson={activeLesson} />

        <div className=" mx-auto p-6 flex gap-6">
          <div className="lg:col-span-2 space-y-6 flex-1 ">
            {!isMobile && <CourseDetails {...course} progress={progress} />}

            <TabSwitch
              sections={course.sections}
              resources={course.resources}
              reviews={course.reviews}
              activeLessonId={activeLesson?.id}
              isMobile={isMobile}
              onLessonClick={(lesson: Lesson) => {
                setActiveLesson(lesson);
              }}
              course={course}
              notes={""}
              progress={1}
              setNotes={() => {}}
            />
          </div>

          {!isMobile && (
            <div className="space-y-6 w-[300px] ">
              <Notes notes={notes} setNotes={setNotes} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollPage;
