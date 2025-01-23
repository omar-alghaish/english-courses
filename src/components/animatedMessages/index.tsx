'use client'
import React, { useEffect, useRef } from "react";

type AnimatedMessagesProps = {
  messages: string[];
  duration?: number;
  className?: string;
};

const AnimatedMessages: React.FC<AnimatedMessagesProps> = ({
  messages,
  duration = 3,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!messages.length || !containerRef.current || typeof window === 'undefined') return;
    const gsap = (window as any).gsap;

    if (!gsap) {
      console.error('GSAP not loaded!');
      return;
    }

    const messageElements = Array.from(containerRef.current.children) as HTMLElement[];
    
    // Handle single message case
    if (messages.length === 1) {
      gsap.set(messageElements[0], { opacity: 1 });
      return;
    }

    // Set initial state
    gsap.set(messageElements, { opacity: 0 });
    gsap.set(messageElements[0], { opacity: 1});

    const timeline = gsap.timeline({ repeat: -1, });

    messages.forEach((_, index) => {
      const nextIndex = (index + 1) % messages.length;
      
      timeline.to(messageElements[index], {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, `+=${duration}`) // Wait for duration before fading out
      .to(messageElements[nextIndex], {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5"); // Overlap fade-out and fade-in
    });

    return () => {
      timeline.kill();
    };
  }, [messages, duration]);

  return (
    <div className={`relative h-10 ${className} `}>
      <div ref={containerRef} className="h-full w-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 h-10 w-full flex items-center justify-center text-center opacity-0"
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedMessages;