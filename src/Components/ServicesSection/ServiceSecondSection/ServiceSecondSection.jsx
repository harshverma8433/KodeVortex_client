import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logodesign from "./Logo_design.png";
import "./ServiceSecondSection.css";

const ServiceSecondSection = () => {
  const items = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  // Equally spaced angles for 5 items (0°, 72°, 144°, 216°, 288°)
  const angles = [0, 72, 144, 216, 288];
  const radius = 256; // Final distance from center (16rem ~256px)

  // Define variants using a custom function for the "visible" state.
  const circleVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: (custom) => {
      const angleRad = custom.angle * (Math.PI / 180);
      return {
        opacity: 1,
        x: radius * Math.cos(angleRad),
        y: radius * Math.sin(angleRad),
        transition: { delay: custom.delay, duration: 0.8, ease: "easeOut" },
      };
    },
  };

  // Trigger animations when this section comes into view.
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex mb-4 justify-center items-center min-h-screen bg-black text-white relative px-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Central Logo */}
      <img src={logodesign} className="w-60 z-10" alt="logo" />

      {/* Each circle starts at the center then animates outward one by one */}
      {items.map((text, index) => (
        <motion.div
          key={index}
          custom={{ angle: angles[index], delay: index * 0.3 }}
          variants={circleVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          className="absolute w-40 h-40 bg-service-sec-col text-white p-4 rounded-full flex justify-center items-center text-xs text-start shadow-md"
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceSecondSection;
