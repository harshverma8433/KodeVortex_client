import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';

import logodesign from "./Logo_design.png";
import "./ServiceSecondSection.css";



const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    designation: "CEO, Company",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMidMu4XnaERnDCx5DgUJ7Nbnui6Jswf5Ng&s",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Jane Smith",
    designation: "CTO, Company",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpzcLgdWnd1tYtqFuvi6DxtaL1LTu0KrRKw&s",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Alice Johnson",
    designation: "Designer, Company",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHUpC1aE1uXPfF3QaUmI6Bn4P8Lmi_yxoYw&s",
  },
];

const ServiceSecondSection = () => {
  const items = [
    "Expertise in Current and Emerging Technologies:",
    "Robust Curriculum and Experienced Instructors/Developers",
    "Strong Client and Community Engagement:",
    "Emphasis on Building a Sustainable Startup Ecosystem:",
    "Skills Gap Analysis and Targeted Training Recommendations:",
  ];

  // Equally spaced angles for 5 items (0°, 72°, 144°, 216°, 288°)
  const angles = [0, 72, 144, 216, 288];
  const radius = 256; // Default distance from center (16rem ~256px)

  // Define variants using a custom function for the "visible" state.
  const circleVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: (custom) => {
      const angleRad = custom.angle * (Math.PI / 180);
      return {
        opacity: 1,
        x: custom.radius * Math.cos(angleRad),
        y: custom.radius * Math.sin(angleRad),
        transition: { delay: custom.delay, duration: 0.8, ease: "easeOut" },
      };
    },
  };

  // Trigger animations when this section comes into view.
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // State for AnimatedTestimonials
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <motion.div
      ref={ref}
      className="flex mb-4 justify-center items-center  bg-black text-white relative px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* For screens below 768px, show AnimatedTestimonials */}
      <div className="md:hidden w-full mb-10  ">
        <div className="max-w-sm mx-auto antialiased font-sans px-4 ">
          <div className="relative grid grid-cols-1 gap-20">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4">
             
              <div className="flex gap-4 pt-1">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button"
                >
                  <MoveLeft className="h-5 w-5 text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button"
                >
                  <MoveRight className="h-5 w-5 text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For screens above 768px, show the circular layout */}
      <div className="hidden h-[50rem] md:flex justify-center  items-center w-full">
        {/* Central Logo */}
        <img src={logodesign} className="w-40 md:w-60 z-10" alt="logo" />

        {/* Each circle starts at the center then animates outward one by one */}
        {items.map((text, index) => (
          <motion.div
            key={index}
            custom={{
              angle: angles[index],
              delay: index * 0.3,
              radius: window.innerWidth < 768 ? 128 : radius, // Adjust radius for mobile
            }}
            variants={circleVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="absolute w-32 h-32 md:w-40 md:h-40 bg-service-sec-col text-white p-4 rounded-full flex justify-center items-center text-xs text-start shadow-md"
          >
            {text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSecondSection;