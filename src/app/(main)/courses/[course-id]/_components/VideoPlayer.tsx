// components/VideoPlayer.tsx
"use client";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import {Lesson} from "../../../../../types/types"; // Corrected line

interface VideoPlayerProps {
  lesson: Lesson | null;
}

export const VideoPlayer = ({ lesson }: VideoPlayerProps) => {
  if (!lesson) return null;

  return (
    <div className="bg-card border-b border-border relative">
      <div className="max-w-7xl mx-auto p-6">
        <div className="aspect-video rounded-xl overflow-hidden bg-card-foreground/5 shadow-lg relative group">
          {lesson.type !== "quiz" ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              <ReactPlayer
                url={lesson.url}
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
                <h3 className="text-lg font-semibold">{lesson.title}</h3>
              </div>
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <Button variant="secondary" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Bookmark
                </Button>
              </div>
            </>
          ) : (
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
                    <Button variant="outline" className="w-full justify-start">
                      A. Client-side data fetching
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      B. Server-side generation at build time
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
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
          )}
        </div>
      </div>
    </div>
  );
};