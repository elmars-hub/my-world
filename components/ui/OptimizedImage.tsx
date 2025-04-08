import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  onLoadingComplete?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  onLoadingComplete,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
          ${className}
        `}
        onLoadingComplete={() => {
          setIsLoading(false);
          onLoadingComplete?.();
        }}
      />
    </div>
  );
};

export default OptimizedImage; 