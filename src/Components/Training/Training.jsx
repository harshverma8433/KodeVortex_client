import React, { useState } from "react";
import Carousel from "react-multi-carousel";
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
    { name: "Full Stack Development", image: full_stack, description: "Learn full stack development from scratch." },
    { name: "AI & ML", image: aiml, description: "Master AI and Machine Learning techniques." },
    { name: "App Development", image: app_dev, description: "Build mobile apps for iOS and Android." },
    { name: "Cyber Security", image: cybersecurity, description: "Secure your applications from cyber threats." },
    { name: "Data Science", image: datascience, description: "Dive into data science and analytics." },
    { name: "MLOps", image: mlops, description: "Learn MLOps to deploy and manage ML models." },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [centerIndex, setCenterIndex] = useState(1);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 767, min: 200 }, items: 1 },
  };

  const handleAfterChange = (currentSlide) => {
    const visibleItems = 4;
    const newCenterIndex = currentSlide + Math.floor(visibleItems / 2);
    setCenterIndex(newCenterIndex % services.length); // Ensures the index loops correctly
  };

  return (
    <motion.div
      className="mt-16 md:mt-32 px-4 md:px-8"
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } : {}}
    >
      <h1 className="tracking-wide text-white training-heading font-bold text-center">
        TRAININGS
      </h1>
      <div className="h-[400px] md:h-[450px] mt-8 md:mt-10">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={500}
          customTransition="transform 500ms ease-in-out"
          afterChange={handleAfterChange}
          itemClass="px-4"
        >
         {services.map((service, idx) => (
  <div
    key={idx}
    className={`training-card transition-all duration-300 ${
      centerIndex === idx ? "scale-105" : "scale-100"
    }`}
  >
    <div className="training-inner">
      <div className="training-front flex text-white justify-center items-center relative">
        {/* Image with darkening effect on center */}
        <img
          src={service.image}
          alt={service.name}
          className={`w-full h-full transition-all duration-300 ${
            centerIndex === idx ? "brightness-50" : "brightness-100"
          }`}
        />

        {/* Text overlay */}
        <div className="absolute flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold ">{service.name}</h2>
          {centerIndex === idx && (
            <p className="description text-3xl ">{service.description}</p>
          )}
        </div>
      </div>
    </div>
  </div>
))}

        </Carousel>
      </div>
    </motion.div>
  );
};

export default Training;
