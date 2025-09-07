"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const LazyLoad = ({ 
  children, 
  fallback = null, 
  threshold = 0.1, 
  rootMargin = "50px",
  className = ""
}: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyLoad;
