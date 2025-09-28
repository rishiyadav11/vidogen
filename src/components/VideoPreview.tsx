"use client";
import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface VideoPreviewProps {
  children: ReactNode;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (isHovering) {
      gsap.to(sectionRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset / 20,
        rotationX: -yOffset / 20,
        transformPerspective: 600,
        duration: 0.6,
        ease: "power1.out",
      });
      gsap.to(contentRef.current, {
        x: -xOffset / 4,
        y: -yOffset / 4,
        duration: 0.6,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(sectionRef.current, { x: 0, y: 0, rotationY: 0, rotationX: 0, duration: 0.6 });
      gsap.to(contentRef.current, { x: 0, y: 0, duration: 0.6 });
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{ perspective: "600px" }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
