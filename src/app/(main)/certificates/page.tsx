"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import Image from "next/image";

export default function CreateLearningPath() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    durationUnit: "weeks",
    language: "english",
    trainer: "",
    thumbnail: null as File | null,
    contentFiles: [] as File[],
  });

  const steps = [
    { id: 1, title: "Learning Path Overview" },
    { id: 2, title: "Add Content" },
    { id: 3, title: "Review & Publish" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'thumbnail' | 'contentFiles') => {
    const files = e.target.files;
    if (!files) return;

    if (field === 'thumbnail') {
      setFormData(prev => ({ ...prev, thumbnail: files[0] }));
    } else {
      setFormData(prev => ({
        ...prev,
        contentFiles: [...prev.contentFiles, ...Array.from(files)]
      }));
    }
  };

  const handleDeleteFile = (type: 'thumbnail' | 'content', index?: number) => {
    if (type === 'thumbnail') {
      setFormData(prev => ({ ...prev, thumbnail: null }));
    } else if (typeof index === 'number') {
      setFormData(prev => ({
        ...prev,
        contentFiles: prev.contentFiles.filter((_, i) => i !== index)
      }));
    }
  };

  const getFileSize = (size: number) => {
    const units = ['B', 'KB', 'MB', 'GB'];
    let l = 0;
    while (size >= 1024 && ++l) {
      size = size / 1024;
    }
    return `${size.toFixed(size < 10 && l > 0 ? 1 : 0)}${units[l]}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleNext = () => currentStep < steps.length && setCurrentStep(currentStep + 1);
  const handlePrevious = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  return (
    <Card className="max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Create Learning Path</CardTitle>
      </CardHeader>
      
      <CardContent>
        {/* Stepper */}
        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                {step.id}
              </div>
              <span className="text-sm mt-2 text-center">{step.title}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Overview */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label>Thumbnail</Label>
                {formData.thumbnail ? (
                  <div className="relative group">
                    <Image
                      src={URL.createObjectURL(formData.thumbnail)}
                      alt="Thumbnail preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      onClick={() => handleDeleteFile('thumbnail')}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </Button>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {formData.thumbnail.name} ({getFileSize(formData.thumbnail.size)})
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed rounded-lg hover:border-primary/50 transition-colors">
                    <label className="flex flex-col items-center justify-center h-32 cursor-pointer">
                      <div className="flex flex-col items-center gap-2">
                        <UploadIcon className="w-6 h-6 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'thumbnail')}
                        accept="image/*"
                      />
                    </label>
                  </div>
                )}
              </div>

              <div>
                <Label>Title</Label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Let your learners know about the learning path"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Language</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, language: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Estimated Duration</Label>
                  <div className="flex gap-2">
                    <Input 
                      type="number" 
                      value={formData.duration}
                      onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    />
                    <Select
                      value={formData.durationUnit}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, durationUnit: value }))}
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weeks">Weeks</SelectItem>
                        <SelectItem value="days">Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Trainer</Label>
                  <Input
                    value={formData.trainer}
                    onChange={(e) => setFormData(prev => ({ ...prev, trainer: e.target.value }))}
                    placeholder="Enter trainer name"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Content */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <Label>Upload Course Materials</Label>
                <div className="border-2 border-dashed rounded-lg hover:border-primary/50 transition-colors">
                  <label className="flex flex-col items-center justify-center min-h-48 cursor-pointer p-4">
                    <div className="flex flex-col items-center gap-2">
                      <UploadIcon className="w-6 h-6 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {formData.contentFiles.length > 0 ?
                          'Click to add more files' :
                          'Upload PDFs, videos, or other materials'
                        }
                      </p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden"
                      onChange={(e) => handleFileChange(e, 'contentFiles')}
                      multiple
                      accept="application/pdf, video/*, image/*"
                    />
                  </label>
                </div>
                
                {formData.contentFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {formData.contentFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {file.type.startsWith('image/') ? (
                            <Image
                              src={URL.createObjectURL(file)}
                              alt="Preview"
                              className="w-10 h-10 object-cover rounded"
                            />
                          ) : file.type.startsWith('video/') ? (
                            <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                              <VideoIcon className="w-5 h-5" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                              <FileIcon className="w-5 h-5" />
                            </div>
                          )}
                          <div>
                            <div className="text-sm font-medium">{file.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {getFileSize(file.size)} • {file.type.split('/')[1]}
                            </div>
                          </div>
                        </div>
                        <Button
                          type="button"
                          onClick={() => handleDeleteFile('content', index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Review Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Title:</Label>
                    <p>{formData.title}</p>
                  </div>
                  <div>
                    <Label>Category:</Label>
                    <p>{formData.category}</p>
                  </div>
                  <div>
                    <Label>Duration:</Label>
                    <p>{formData.duration} {formData.durationUnit}</p>
                  </div>
                  <div>
                    <Label>Language:</Label>
                    <p>{formData.language}</p>
                  </div>
                </div>
                <div>
                  <Label>Description:</Label>
                  <p className="text-muted-foreground">{formData.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep === steps.length ? (
              <Button type="submit">Publish Learning Path</Button>
            ) : (
              <Button type="button" onClick={handleNext}>
                Next: {steps[currentStep]?.title}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  );
}