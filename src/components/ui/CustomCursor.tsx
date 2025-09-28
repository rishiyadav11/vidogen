import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-10 h-10 pointer-events-none z-50 mix-blend-difference transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
        isHovering ? "scale-150" : "scale-100"
      }`}
    >
      <div className="w-full h-full rounded-full bg-white opacity-80" />
    </div>
  );
};

export default CustomCursor;