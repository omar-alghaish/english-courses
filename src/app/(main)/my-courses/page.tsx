"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  FileText,
  Star,
  CheckCircle2,
  ChevronRight,
  Clock,
  Users,
  Bookmark,
  Menu,
  X,
} from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "text" | "quiz";
  completed: boolean;
  url: string;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

const CourseEnrollPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>({
    id: "1-1",
    title: "Course Introduction",
    duration: "8:30",
    type: "video",
    completed: true,
    url: "https://videos.pexels.com/video-files/29641364/12753273_1920_1080_60fps.mp4",
  });
  const [notes, setNotes] = useState<string>("");
  const [progress] = useState(35);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sample data
  const course = {
    title: "Advanced Next.js Development",
    instructor: "John Doe",
    rating: 4.8,
    students: 2450,
    duration: "15 hours",
    resources: [
      { name: "Course Ebook.pdf", type: "pdf", size: "2.5 MB" },
      { name: "Source Code.zip", type: "zip", size: "15.4 MB" },
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
            url: "https://videos.pexels.com/video-files/29641364/12753273_1920_1080_60fps.mp4",
          },
          {
            id: "1-2",
            title: "Setting Up Environment",
            duration: "12:45",
            type: "video",
            completed: false,
            url: "https://videos.pexels.com/video-files/30325369/12999228_1920_1080_24fps.mp4",
          },
        ],
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
            completed: false,
            url: "https://videos.pexels.com/video-files/30325369/12999228_1920_1080_24fps.mp4",
          },
          {
            id: "2-2",
            title: "Data Fetching Quiz",
            duration: "10:00",
            type: "quiz",
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
        comment: "Fantastic course with in-depth explanations",
      },
      {
        id: "2",
        user: "Mike Chen",
        rating: 4,
        comment: "Great content, would like more real-world examples",
      },
    ] as Review[],
  };

  // const handleLessonComplete = (lessonId: string) => {
  //   const updatedSections = course.sections.map((section) => ({
  //     ...section,
  //     lessons: section.lessons.map((lesson) =>
  //       lesson.id === lessonId
  //         ? { ...lesson, completed: !lesson.completed }
  //         : lesson
  //     ),
  //   }));
  //   // Update state or API call here
  // };

  return (
    <div className="flex bg-background text-foreground">
      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[100px] left-4 z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={`
          w-80 lg:w-96 border-r border-border h-full overflow-y-auto p-4 bg-card
          fixed lg:relative transform transition-transform duration-300 z-40 top-0
          ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full "} lg:translate-x-0
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Course Content</h2>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <Accordion type="multiple" className="space-y-2">
          {course.sections.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className="border rounded-lg"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  <span className="font-medium">{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-1">
                <div className="space-y-1 ml-8">
                  {section.lessons.map((lesson) => (
                    <Button
                      key={lesson.id}
                      variant="ghost"
                      className={`w-full justify-start rounded-md ${
                        activeLesson?.id === lesson.id
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => {
                        setActiveLesson(lesson);
                        if (isMobile) setIsSidebarOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {lesson.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-muted-foreground" />
                        )}
                        <span>{lesson.title}</span>
                        {lesson.type === "quiz" && (
                          <span className="ml-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            Quiz
                          </span>
                        )}
                      </div>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {lesson.duration}
                      </span>
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 }`}>
        {/* Video Player Section */}
        <div className="bg-card border-b border-border relative">
          <div className="max-w-7xl mx-auto p-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-card-foreground/5 shadow-lg relative group">
              {activeLesson && activeLesson.type !== "quiz" ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                  <ReactPlayer
                    url={activeLesson.url}
                    width="100%"
                    height="100%"
                    controls
                    className="react-player"
                    playIcon={
                      <Button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                        </svg>
                      </Button>
                    }
                  />
                  <div className="absolute top-4 left-4 z-20 text-white">
                    <h3 className="text-lg font-semibold">
                      {activeLesson.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {activeLesson.duration}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Bookmark
                    </Button>
                  </div>
                </>
              ) : activeLesson && activeLesson.type === "quiz" ? (
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Chapter Quiz</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">
                        Question 1: What is the purpose of getStaticProps?
                      </h3>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          A. Client-side data fetching
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          B. Server-side generation at build time
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          C. Runtime server-side rendering
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        1 of 5 questions
                      </span>
                      <Button>Next Question</Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-card-foreground/5">
                  <span className="text-muted-foreground">
                    Select a lesson to begin
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    {course.title}
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      Ongoing
                    </span>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span>By {course.instructor}</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {course.rating} ({course.students}+ students)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Progress value={progress} className="h-2 w-[200px]" />
                      <span className="text-primary">{progress}% Complete</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>{course.students} Students</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Content Tabs */}
              <Tabs defaultValue="curriculum" className="space-y-6">
                <TabsList className="grid grid-cols-3 w-[400px]">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum">
                  <Accordion type="single" collapsible className="w-full">
                    {course.sections.map((section) => (
                      <AccordionItem key={section.id} value={section.id}>
                        <AccordionTrigger className="hover:no-underline px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{section.title}</span>
                            <span className="text-sm text-muted-foreground">
                              {section.lessons.length} lessons
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 ml-4">
                            {section.lessons.map((lesson) => (
                              <Button
                                key={lesson.id}
                                variant="ghost"
                                className={`w-full justify-between ${
                                  activeLesson?.id === lesson.id
                                    ? "bg-accent"
                                    : ""
                                }`}
                                onClick={() => setActiveLesson(lesson)}
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-muted-foreground" />
                                  )}
                                  <span>{lesson.title}</span>
                                  {lesson.type === "quiz" && (
                                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                                      Quiz
                                    </span>
                                  )}
                                </div>
                                <span className="text-muted-foreground">
                                  {lesson.duration}
                                </span>
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-4">
                    {course.resources.map((resource) => (
                      <div
                        key={resource.name}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <p>{resource.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {resource.type.toUpperCase()} • {resource.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {course.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>{review.user}</CardTitle>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {review.comment}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Notes */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Lesson Notes
                    <span className="text-sm text-muted-foreground font-normal">
                      (Auto-saves every 30 seconds)
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Take notes here..."
                    className="min-h-[200px]"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View All Notes</Button>
                  <Button>Save Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollPage;