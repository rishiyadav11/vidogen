import React from "react";
import Section from "./Section";
import Button from "./Button";

const Cta = () => {
  return (
    <Section
      className="-mt-[5.25rem]"
      crosses
      customPaddings
      id="cta"
    >
      <div className="container w-[95%] text-center bg-gradient-to-br from-n-8 via-n-7 to-n-6 py-20 px-6  shadow-lg">
        <h2 className="h2 mb-4 text-white">
          Create Your First Video Today
        </h2>
        <p className="body-2 mb-8 text-n-3 max-w-2xl mx-auto">
          Ready to turn your stories into professional videos? <br />
          Generate scripts, choose avatars, add captions, and publish or schedule your videos in minutes with Vidogen.
        </p>
        <Button href="/">
          Get Started
        </Button>
      </div>
    </Section>
  );
};

export default Cta;
