import React from "react";
import Carousel from "react-multi-carousel"; // The carousel library
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Training.css";
import full_stack from "./full_stack.jpg";
import aiml from "./aiml.jpg";
import app_dev from "./app_dev.jpg";
import cybersecurity from "./cybersecurity.jpg";
import datascience from "./datascience.jpg";
import mlops from "./mlops.jpg";

const Training = () => {
  const services = [
    { name: "Full Stack Development", image: full_stack },
    { name: "AI & ML", image: aiml },
    { name: "App Development", image: app_dev },
    { name: "Cyber Security", image: cybersecurity },
    { name: "Data Science", image: datascience },
    { name: "MLOps", image: mlops },
  ];

  // useInView hook to trigger the entrance animation when the section scrolls into view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  // Carousel responsive settings
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 767, min: 200 }, items: 1 },
  };

  // Container animation variants (fade/scale/slide in)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Card hover animation: scale up slightly on hover
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="mt-16 md:mt-32 px-4 md:px-8"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="text-[#CF9274] font-mono text-3xl md:text-5xl font-semibold text-center">
        TRAININGS
      </h1>
      <div className="h-[400px] md:h-[450px] mt-8 md:mt-10">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          transitionDuration={500}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="training-card"
              variants={cardVariants}
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              <div className="training-inner">
                <div className="training-front">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="training-back">
                  <h2 className="text-white text-lg md:text-xl font-bold">{service.name}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Training;