import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FloatingOrbs = () => {
  // 1. Correctly type the useRef hook to an HTMLDivElement
  const orbsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // 2. Check if the ref has a value before trying to access its children
    if (orbsRef.current) {
      // 3. Cast the collection to HTMLElement[] for type safety with GSAP
      const orbs = Array.from(orbsRef.current.children) as HTMLElement[];
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: `random(-30, 30)`,
          x: `random(-20, 20)`,
          rotation: `random(0, 360)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
    }
  }, []);

  return (
    <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;