import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Certification.css";
import image from "./certificte.jpg";

const Certification = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Container fades and slides in
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" }
    },
  };

  // Image slides in from left and scales on hover
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut" }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Text slides in from right
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-tl from-[#54677B] to-[#3299AA] flex mt-28 flex-col md:flex-row px-4 md:px-20 py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Image Section */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center items-center"
        variants={imageVariants}
        whileHover="hover"
      >
        <img 
          src={image} 
          className="w-full max-w-[400px] md:w-4/5" 
          alt="certificate.png" 
        />
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
        variants={textVariants}
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center">
          Build your career and achieve certificate to enhance your resume
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Certification;