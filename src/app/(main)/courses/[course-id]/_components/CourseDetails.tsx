// components/CourseDetails.tsx
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star, Clock, Users } from "lucide-react";
import { FC } from "react";

interface CourseDetailsProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  progress: number;
}

export const CourseDetails:FC<CourseDetailsProps> = ({ title, instructor, rating, students, duration, progress }) => (
  <Card>
     <CardHeader>
       <CardTitle className="text-2xl flex items-center gap-3">
         {title}
         <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Ongoing</span>
       </CardTitle>
       <div className="flex items-center gap-4 text-muted-foreground">
         <span>By {instructor}</span>
         <span className="flex items-center gap-1">
           <Star className="w-4 h-4 text-yellow-500" />
           {rating} ({students}+ students)
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
             <span>{duration}</span>
           </div>
           <div className="flex items-center gap-2">
             <Users className="w-5 h-5 text-primary" />
             <span>{students} Students</span>
           </div>
         </div>
       </div>
     </CardContent>
  </Card>
);
