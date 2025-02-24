import React from "react";
import Slider from "react-slick"; // The carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import galgotia from "./galgotia.jpg";
import gla from "./gla.png";
import iftm from "./iftm.jpg";
import iilm from "./iilm.png";
import kalasalingam from "./kalasalingam.jpg";
import nims from "./nims.png";
import sharada from "./sharada.jpg";
import vishwaniketan from "./vishwaniketan.png";
import kg_reddy from "./kg_reddy.png";

const AssociateInstitution = () => {
  const AssociateInstitutionContent = [
    galgotia,
    gla,
    iftm,
    iilm,
    kalasalingam,
    nims,
    sharada,
    vishwaniketan,
    kg_reddy,
  ];

  // Carousel settings
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
    // centerPadding:'10px',
    centerMode : true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Animation variants for the entire container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 }
    },
  };

  // Animation for each slide
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  // useInView to re-trigger animation when section enters the viewport
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      className="bg-black text-center py-12 md:py-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Heading */}
      <h1 className="text-[#CF9274] font-mono text-3xl md:text-4xl lg:text-5xl font-semibold pb-12 md:pb-28">
        Associated Institution
      </h1>

      {/* Carousel */}
      <motion.div variants={containerVariants}>
        <Slider {...settings} className="px-4 md:px-10">
          {AssociateInstitutionContent.map((image, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              variants={slideVariants}
              whileHover="hover"
            >
              <img
                src={image}
                alt={`Institution-${index + 1}`}
                className="w-32 h-28 md:w-40 md:h-36 rounded-3xl"
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default AssociateInstitution;