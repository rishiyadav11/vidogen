import Image from "next/image";
import { loading } from "../assets";

type GeneratingProps = {
  className?: string;
};

const Generating = ({ className = "" }: GeneratingProps) => {
  return (
    <div
      className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base text-white ${className}`}
      aria-label="AI is generating content"
    >
      <div className="animate-spin mr-3">
        <Image
          src={loading}
          alt="Loading spinner"
          width={20}
          height={20}
        />
      </div>
      <span className="flex items-center">
        AI is generating
        <span className="ml-1 w-4 flex">
          <span className="animate-bounce [animation-delay:0s]">.</span>
          <span className="animate-bounce [animation-delay:0.2s]">.</span>
          <span className="animate-bounce [animation-delay:0.4s]">.</span>
        </span>
      </span>
    </div>
  );
};

export default Generating;
