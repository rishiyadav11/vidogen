import { Play, Camera } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const totalImages = 4;
const getImageSrc = (index: number) => `/images/hero-${index}.png`;

const InteractiveVideoPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  // Correctly type the useRef hook to hold a Timeout or null
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Set up the automatic image rotation
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev % totalImages) + 1);
      }, 8000);
    };

    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePreviewClick = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleFrameClick = () => {
    const nextIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // GSAP animations for the floating elements
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".floating-orb-1", { y: -20, x: 20, rotation: 360, duration: 4, ease: "sine.inOut" })
      .to(".floating-orb-2", { y: 20, x: -20, rotation: -360, duration: 5, ease: "sine.inOut" }, "<")
      .to(".floating-orb-3", { scale: 1.2, duration: 3, ease: "sine.inOut" }, "<");
  }, []);

  return (
    <div className="relative">
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleFrameClick}
      >
        <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
          <Image
            src={getImageSrc(currentIndex)}
            alt="Video preview"
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">AI Generated</span>
              </div>
              <div className="text-xs text-gray-300">4K • 60fps • HDR</div>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-bounce floating-orb-1" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-pulse floating-orb-2" />
        <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-ping floating-orb-3" />
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => handlePreviewClick(index)}
            className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              currentIndex === index
                ? "border-purple-400 scale-110"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <Image
              src={getImageSrc(index)}
              alt={`Preview ${index}`}
              width={64}
              height={40}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveVideoPreview;