import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SuccessStories.css";

const SuccessStories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    // centerMode:true,
    arrows: false,
  };

  const stories = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum ",
  ];

  // Hook to trigger animation when in view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 }
    },
  };

  // Variants for the header
  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variants for the slider container (slide in from left)
  const sliderVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variants for the side graphic (slide in from right)
  const sideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      className="bg-[#181739] pb-12 md:pb-24"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Header */}
      <motion.h1 
        className="text-[#CF9274] font-mono text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide pb-12 md:pb-24 pt-8 text-center"
        variants={headerVariants}
      >
        Success Stories
      </motion.h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center relative px-4 md:px-8">
        {/* Slider Container */}
        <motion.div 
          className="relative bg-[#D9D9D9] flex justify-center items-center h-64 md:h-96 w-full lg:w-[35%] mb-8 lg:mb-0"
          variants={sliderVariants}
        >
          {/* Border Lines */}
          <div className="absolute top-4 md:top-6 left-2 w-full lg:w-[80%] h-1 bg-black"></div>
          <div className="absolute top-2 left-4 md:left-6 h-[90%] w-1 bg-black"></div>
          <div className="absolute bottom-4 md:bottom-6 right-2 w-full lg:w-[80%] h-1 bg-black"></div>
          <div className="absolute bottom-2 right-4 md:right-6 h-[90%] w-1 bg-black"></div>

          {/* Slider */}
          <Slider className="w-full md:w-[25rem]  px-6 flex  justify-center items-center" {...settings}>
            {stories.map((story, index) => (
              <p key={index} className="text-center text-gray-700 text-sm md:text-lg px-4">
                {story}
              </p>
            ))}
          </Slider>
        </motion.div>

        {/* Side Graphic */}
        <motion.div 
          className="w-full lg:w-96 h-64 md:h-[500px] bg-grad-certificate"
          variants={sideVariants}
          whileHover="hover"
        />
      </div>
    </motion.div>
  );
};

export default SuccessStories;