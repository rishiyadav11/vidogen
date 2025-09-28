import Hero from "../components/Hero";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import  FAQPage from "components/Faq";
import { HowItWorks } from "components/Howitworks";
import  { Skiper49 } from "components/ui/skiper49";

function App() {
  return (
    <main className="relative min-h-screen w-screen bg-black ">
      <Hero />
      <Features />
      <HowItWorks />
      <Story />
      <Skiper49/>
      <FAQPage/>
      <Contact />
    </main>
  );
}

export default App;
