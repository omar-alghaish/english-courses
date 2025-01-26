// components/CourseContent.tsx
"use client";
import { Section, Lesson } from "../../../../../types/types";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface CourseContentProps {
  sections: Section[];
  activeLessonId?: string;
  isMobile?: boolean;
  onLessonClick: (lesson: Lesson) => void;
  className?:string
}

export const CourseContent = ({ sections, activeLessonId, onLessonClick, className }: CourseContentProps) => (
  <Accordion type="multiple" className={`space-y-2 ${className}`}>
    {sections.map((section) => (
      <AccordionItem key={section.id} value={section.id} className="border rounded-lg">
        <AccordionTrigger className="px-4 py-3 hover:no-underline">
          <div className="flex items-center gap-3">
            <span className="font-medium">{section.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-1">
          <div className="space-y-1 ml-4">
            {section.lessons.map((lesson:Lesson) => (
              <Button
                key={lesson.id}
                variant="ghost"
                className={`w-full justify-start rounded-md ${
                  activeLessonId === lesson.id ? "bg-accent text-accent-foreground" : "hover:bg-muted/50"
                }`}
                onClick={() => onLessonClick(lesson)}
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
                <span className="ml-auto text-xs text-muted-foreground">{lesson.duration}</span>
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);