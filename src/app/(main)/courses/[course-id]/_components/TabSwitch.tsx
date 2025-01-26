// components/TabSwitch.tsx
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseContent, ResourcesList, ReviewList, CourseDetails, Notes } from "./";
import { Section, Lesson, Review, Resource, Course } from "../../../../../types/types"

interface TabSwitchProps {
  sections: Section[];
  resources: Resource[];
  reviews: Review[];
  course: Course;
  activeLessonId?: string;
  isMobile: boolean;
  notes: string;
  progress: number;
  setNotes: (notes: string) => void;
  onLessonClick: (lesson: Lesson) => void;
}

export const TabSwitch = ({
  sections,
  resources,
  reviews,
  course,
  activeLessonId,
  isMobile,
  notes,
  progress,
  setNotes,
  onLessonClick,
}: TabSwitchProps) => (
  <Tabs className="w-full" defaultValue={isMobile ? "curriculum" : "resources"}>
    <TabsList className="w-full">
      {isMobile && (
        <>
          <TabsTrigger value="curriculum" className="flex-1">
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="details" className="flex-1">
            Details
          </TabsTrigger>
        </>
      )}
      <TabsTrigger value="resources" className="flex-1">
        Resources
      </TabsTrigger>
      <TabsTrigger value="reviews" className="flex-1">
        Reviews
      </TabsTrigger>
      {isMobile && (
        <TabsTrigger value="notes" className="flex-1">
          Notes
        </TabsTrigger>
      )}
    </TabsList>

    {isMobile && (
      <TabsContent value="curriculum">
        <CourseContent
          sections={sections}
          activeLessonId={activeLessonId}
          onLessonClick={onLessonClick}
        />
      </TabsContent>
    )}

    {isMobile && (
      <TabsContent value="details">
        <CourseDetails
          {...course}
          progress={progress}
        />
      </TabsContent>
    )}

    <TabsContent value="resources">
      <ResourcesList resources={resources} />
    </TabsContent>

    <TabsContent value="reviews">
      <ReviewList reviews={reviews} />
    </TabsContent>

    {isMobile && (
      <TabsContent value="notes">
        <Notes notes={notes} setNotes={setNotes} />
      </TabsContent>
    )}
  </Tabs>
);