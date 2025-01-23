import React from "react";
import classNames from "classnames";
import Image from "next/image";

type AvatarProps = {
  image?: string; // URL of the avatar image
  fallback?: string; // Text to display if no image is provided
  size?: "small" | "medium" | "large"; // Size variants
  className?: string; // Additional class names
};

const getFallbackInitials = (fallback: string): string => {
  const words = fallback.split(" ").filter(Boolean); // Split by space and filter out empty strings
  const initials = words.slice(0, 2).map(word => word[0]?.toUpperCase());
  return initials.join("");
};

const Avatar: React.FC<AvatarProps> = ({
  image,
  fallback = "",
  size = "medium",
  className = "",
}) => {
  const initials = getFallbackInitials(fallback);

  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-base",
    large: "w-16 h-16 text-lg",
  };

  return (
    <div
      className={classNames(
        "flex items-center justify-center rounded-full overflow-hidden bg-gray-200 text-gray-700",
        sizeClasses[size],
        className
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={fallback}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="font-bold">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
