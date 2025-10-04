"use client";

import React from "react";
import { InfiniteMovingCards } from "./design/infinite-moving-cards";
import Section from "./Section";
import Heading from "./Heading";

const testimonialsPage = () => {
  return (
    <Section crosses>
      <div className="h-[30rem] md:h-[35rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Heading
          title="Why Healthcare Teams Trust Wedge"
          text="Hear from clinicians, administrators, and IT teams who rely on Wedge to streamline healthcare operations, improve patient outcomes, and ensure compliance."
          className="mb-10 text-center text-white"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </Section>
  );
};

export default testimonialsPage;

const testimonials = [
  {
    quote:
      "With Wedge, we’ve cut patient intake times in half. It integrates seamlessly with our EMR, letting us focus more on care and less on paperwork.",
    name: "Dr. Ayesha Khan",
    title: "Chief Medical Officer, CarePlus Clinic",
  },
  {
    quote:
      "Wedge gives our care coordinators real-time insights, so patients never slip through the cracks. It’s a game-changer for chronic care management.",
    name: "Michael Lee",
    title: "Director of Operations, HealthFirst",
  },
  {
    quote:
      "We use Wedge to automate claims processing — reimbursement times have dropped by 40%, and error rates are almost zero.",
    name: "Priya Nair",
    title: "Billing Manager, City Hospital",
  },
  {
    quote:
      "As an IT lead, I value Wedge’s security and compliance features. It keeps us HIPAA-compliant without slowing our workflows.",
    name: "James Rodriguez",
    title: "Healthcare IT Manager, Metro Health",
  },
  {
    quote:
      "Wedge integrates with our lab systems, telehealth, and scheduling — everything works in one place for a smoother patient journey.",
    name: "Sofia Martinez",
    title: "Clinic Administrator, Sunrise Medical",
  },
  {
    quote:
      "Our providers save at least an hour a day thanks to Wedge’s smart documentation tools. That’s more time for patient care.",
    name: "Dr. Daniel Chen",
    title: "Family Physician, Riverbend Health",
  },
];
