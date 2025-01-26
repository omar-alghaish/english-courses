// types.ts
type LessonType = "video" | "text" | "quiz"

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    type: LessonType;
    completed: boolean;
    url: string;
  }
  
  export interface Section {
    id: string;
    title: string;
    lessons: Lesson[];
  }
  
  export interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
  }
  
  export interface Resource {
    name: string;
    type: string;
    size: string;
  }
  
  export interface Course {
    title: string;
    instructor: string;
    rating: number;
    students: number;
    duration: string;
    resources: Resource[];
    sections: Section[];
    reviews: Review[];
  }
  
  // Optional: If you need a course progress type
  export interface CourseProgress {
    completedLessons: string[];
    totalLessons: number;
    lastAccessed: Date;
  }