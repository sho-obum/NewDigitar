// src/data/testimonials.ts
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string; // e.g. "/images/testimonial/alex.png"
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor.",
    name: "Daniel Smith",
    role: "Senior engineer",
    company: "Acme Corp",
    avatar: "/images/testimonial/s-thumb.png",
  },
  {
    id: "t2",
    quote:
      "convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie.",
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Nimbus Health",
    avatar: "/images/testimonial/s-thumb-two.png",
  },
  {
    id: "t3",
    quote:
      "ipsum ac fringilla. They delivered on time with great communication throughout the project.",
    name: "Marco Rossi",
    role: "Founder",
    company: "Studio Rosso",
    avatar: "/images/testimonial/s-thumb-three.png",
  },
];
