import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Certification.css";
import image from "./certificte.jpg";
import { LampContainer, LampDemo } from "./LampContainer"; // Ensure correct import path

const Certification = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  
  return (
    <div className="relative pt-8 sm:pt-12 md:pt-16 h-auto min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem] lg:min-h-[35rem]">
      {/* Lamp Effect Above */}
      <LampContainer>
        {/* Certification Section */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center sm:items-start md:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16 mt-8 sm:mt-16 md:mt-20 lg:mt-28"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Image Section */}
          <div className="w-full sm:w-4/5 md:w-1/2 flex justify-center items-center">
            <motion.img
              src={image}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]"
              alt="certificate"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="mt-4 sm:mt-6 md:mt-8 text-white py-2 sm:py-3 md:py-4 text-center md:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight"
            >
              Build your career and <br className="hidden sm:block" /> achieve a certificate to <br className="hidden sm:block" /> enhance
              your resume
            </motion.h1>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Certification;