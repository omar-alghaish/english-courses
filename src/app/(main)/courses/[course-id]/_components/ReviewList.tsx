// components/ReviewList.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => (
  <div className="space-y-6">
    {reviews.map((review) => (
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
          <p className="text-muted-foreground">{review.comment}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);