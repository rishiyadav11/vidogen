import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <Image alt="VidoGen preview" src={src} height={1080} width={1920} />
  </div>
);

const Contact = () => {
  return (
    <div
      id="contact"
      className="my-20 min-h-96  w-screen overflow-x-hidden px-10"
    >
      <div className="relative rounded-lg bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
src="./images/contact1.jpg"
            clipClass="contact-clip-path-1"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="./images/contact2.webp"
            clipClass="sword-man-clip-path md:scale-125 contact-clip-path-2"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase tracking-widest">
            Launch Your AI Video Journey
          </p>

          <AnimatedTitle
            title="Ready to <br /> <b>create</b> & auto-post videos effortlessly?"
            containerClass=" !md:text-[5rem] w-full font-general !text-4xl !leading-[1.1]"
          />

          <Button
            id="contact-btn"
            title="Get Started with VidoGen"
            containerClass="mt-10 cursor-pointer"
            rightIcon={undefined}
            leftIcon={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
