import Image from "next/image";
import { check, roadmap3 } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";

const Features = () => {
  return (
    <Section id="use-cases" className="bg-black">
      <div className="container text-white">
        <Heading
          title="AI Video Creation Made Simple"
          text="Vidogen helps you turn stories into professional videos in minutes — with AI scripts, avatars, captions, and seamless publishing."
        />

        <div className="relative">
          {/* Feature 1 */}
          <div className="relative z-1 flex items-center h-[39rem] bg-n-8 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Image
                className="w-full opacity-30 md:opacity-100 h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="AI Video Script"
                src={roadmap3}
              />
            </div>

            <div className="relative z-1 max-w-[18rem] ml-auto">
              <h4 className="h4 mb-4">AI Script Generation</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Share your story idea, and Vidogen instantly creates multiple script options tailored to your audience.
              </p>
              <ul className="body-2">
                {[
                  "AI-generated video scripts",
                  "Customizable tone & style",
                  "Multiple script drafts",
                  "One-click editing",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <Image width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Feature Grid */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2 bg-black">
            {/* Avatars & Voices */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute opacity-30 md:opacity-100 inset-0">
                <Image
                  src="https://i.pinimg.com/1200x/52/02/24/5202243f0e701482ac4f8c9df2fcbb18.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="AI Avatars"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Realistic Avatars & Voices</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Choose from lifelike AI avatars and natural voices, or upload your own for a personalized video.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            {/* Captions & Editing */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Auto-Captions & Quick Edits</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Vidogen adds accurate captions automatically and gives you simple tools to tweak your video instantly.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <Image src={item} width={24} height={24} alt="icon" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <Image
                  src="https://i.pinimg.com/736x/b3/35/6d/b3356d85fd10d37fed6d59bed9ea6134.jpg"
                  className="w-full h-full scale-95 md:scale-100"
                  width={520}
                  height={400}
                  alt="Video Editing"
                />
                <VideoChatMessage />
              </div>
            </div>

            {/* Publishing Options */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute opacity-30 md:opacity-100 bg-n-8 inset-0">
                <Image
                  src="https://i.pinimg.com/736x/a2/c4/ca/a2c4ca64ccd4e0692463d5c1ccb56c8e.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Publishing Options"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">One-Click Publishing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Post directly to YouTube, Instagram, TikTok — or download your video. Schedule future posts with ease.
                </p>
              </div>
            </div>

            {/* Analytics & Insights */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Performance Insights</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Track how your videos perform with simple engagement insights and suggestions for improvement.
                </p>

                <ul className="space-y-2 body-2 text-n-3">
                  {[
                    "Views, likes & engagement tracking",
                    "Best time to post suggestions",
                    "Cross-platform performance overview",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Image src={check} width={20} height={20} alt="check" />{" "}
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <Image
                  src="https://i.pinimg.com/736x/9e/44/db/9e44dbb5c17aba689bd848e024241327.jpg"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Video Analytics"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Features;
