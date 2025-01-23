'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % messages.length);
    }, (duration + 1) * 1000); // +1 second for animation overlap

    return () => clearInterval(interval);
  }, [messages.length, duration]);

  return (
    <div className={`relative h-10 ${className}`}>
      <div className="h-full w-full">
        <AnimatePresence mode='wait'>
          {messages.map((message, index) => (
            activeIndex === index && (
              <motion.div
                key={index}
                className="absolute top-0 left-0 h-10 w-full flex items-center justify-center text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {message}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedMessages;