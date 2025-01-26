// components/ResourcesList.tsx
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface Resource {
  name: string;
  type: string;
  size: string;
}

interface ResourcesListProps {
  resources: Resource[];
}

export const ResourcesList = ({ resources }: ResourcesListProps) => (
  <div className="space-y-4">
    {resources.map((resource) => (
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
);