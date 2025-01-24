import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function quizz() {
    return (
      <main className="min-h-screen">
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
      </main>
    );
  }
  
  