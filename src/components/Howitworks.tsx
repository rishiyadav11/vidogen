import { FeatureSteps } from "../components/ui/Howituse";

const features = [
  { 
    step: 'Step 1', 
    title: 'Give a Prompt', 
    content: 'Simply provide your video prompt and let VidoGen generate the video automatically.', 
    image: 'https://i.pinimg.com/1200x/cb/bd/c2/cbbdc2ac06e174c746bb170b46610d42.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'Select Channels & Platforms',
    content: 'Choose where you want your video to be shared – YouTube, Instagram, TikTok, and more.', 
    image: 'https://i.pinimg.com/736x/ad/ef/6c/adef6c89caa7dacf44b6a32840325f8f.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Schedule & Auto-Post',
    content: 'Schedule your video to post automatically with optimized captions and hashtags for maximum engagement.', 
    image: 'https://i.pinimg.com/736x/6a/c0/ef/6ac0ef8ef1745239e3da9aa396bc5f91.jpg'
  },
];

export function HowItWorks() {
  return (
      <FeatureSteps 
        features={features}
        title="Create, Share & Grow Effortlessly"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  );
}
