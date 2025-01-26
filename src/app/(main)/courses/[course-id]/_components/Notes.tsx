// components/Notes.tsx
"use client";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NotesProps {
  notes: string;
  setNotes: (value: string) => void;
}

export const Notes = ({ notes, setNotes }: NotesProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        Lesson Notes
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
    <CardFooter className="flex gap-1 justify-between">
      <Button variant="outline">View All Notes</Button>
      <Button>Save</Button>
    </CardFooter>
  </Card>
);