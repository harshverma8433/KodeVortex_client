import React from "react";
import { motion } from "framer-motion";
import WhyDifferent from "../WhyDifferent/WhyDifferent";
import BoxSection from "./BoxSection/BoxSection";
import "./ChooseUs.css";
import chooseus from "./chooseus.jpg";

const ChooseUs = () => {
  const chooseuscontent = [
    "Expert-Led Training Programs",
    "Comprehensive Curriculum",
    "Flexible Learning Options",
    "Personalized Career Guidance",
  ];

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.5 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        className="text-white px-[10%] rounded-t-3xl chooseus-bg-col py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1 
          className="text-[#CF9274] font-mono text-5xl font-semibold tracking-wide py-12 text-center"
          variants={fadeInVariants}
        >
          WHY YOU SHOULD CHOOSE US
        </motion.h1>

        {/* Grid of BoxSections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-y-10 pl-10"
          variants={containerVariants}
        >
          {chooseuscontent.map((content, index) => (
            <motion.div key={index} variants={fadeInVariants}>
              <BoxSection element={content} />
            </motion.div>
          ))}
        </motion.div>

        {/* Main content with text and image */}
        <motion.div
          className="px-8 mt-10 flex flex-col lg:flex-row justify-between items-center"
          variants={containerVariants}
        >
          <motion.div
            className="w-full lg:w-[500px] flex items-center text-start"
            variants={slideInLeftVariants}
          >
            <div>
              <p className="text-lg tracking-wide">
                At Kodevortex, our mission is to bridge the gap between academic learning and industry needs.
                We believe in empowering students and professionals with the right skills to succeed in today’s competitive
                technology-driven world. Our training programs are designed to provide hands-on experience, making learning
                interactive and effective.
              </p>
              <p className="text-lg tracking-wide mt-4">
                We understand that every learner has unique goals and aspirations. That’s why we offer personalized guidance to help 
                you navigate your career path and achieve your dreams. From foundational skills to advanced technologies, our comprehensive 
                curriculum ensures that you’re prepared to tackle real-world challenges with confidence.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#54677B] w-full lg:w-[600px] h-[410px] rounded-3xl mt-8 lg:mt-0"
            variants={slideInRightVariants}
          >
            <img
              src={chooseus}
              alt="Why Choose Us"
              className="w-full h-full rounded-3xl object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div className="mt-6 mx-[2%]" variants={fadeInVariants}>
          <h1 className="py-10 text-xl text-start">
            Joining Kodevortex means more than just attending classes. It’s about becoming part of a growing community 
            of innovators and problem-solvers. Whether you’re a student starting your career journey or a professional 
            looking to upskill, we’re here to guide and support you every step of the way.
          </h1>
        </motion.div>
      </motion.div>

      <WhyDifferent />
    </>
  );
};

export default ChooseUs;
