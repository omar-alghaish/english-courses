"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, Clock, BookOpen, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  {
    id: 1,
    title: "Master Design System in Figma",
    createdAt: new Date("2022-04-13T16:24:00"),
    status: "published",
    expiryDate: new Date("2024-12-31"),
    isPublished: true
  },
  {
    id: 2,
    title: "Super Creative Background Creation",
    createdAt: new Date("2022-04-13T16:24:00"),
    status: "draft",
    expiryDate: new Date("2023-06-15"),
    isPublished: false
  },
  {
    id: 3,
    title: "How To Master Colors in Visual Design",
    createdAt: new Date("2022-04-13T16:24:00"),
    status: "published",
    expiryDate: new Date("2024-01-01"),
    isPublished: true
  },
];

export default function MyCourses() {
  const getDaysRemaining = (expiryDate: Date) => {
    const today = new Date();
    const diff = expiryDate.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-semibold">Hope LMS</span>
          </div>
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="w-4 h-4 mr-2" />
              My Courses
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Calendar
            </Button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Courses</h1>
          <Button>New Course</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const daysRemaining = getDaysRemaining(course.expiryDate);
            const isExpired = daysRemaining <= 0;

            return (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      Created: {course.createdAt.toLocaleDateString()} -{" "}
                      {course.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <Badge
                      variant={course.isPublished ? "default" : "secondary"}
                      className={cn(
                        "capitalize",
                        course.isPublished ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      )}
                    >
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      {isExpired ? (
                        <span className="text-red-500">Expired</span>
                      ) : (
                        <span>{daysRemaining} days remaining</span>
                      )}
                    </div>
                    {isExpired && (
                      <Button variant="destructive" size="sm">
                        Renew Course
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}