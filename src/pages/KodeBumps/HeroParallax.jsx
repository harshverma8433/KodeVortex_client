import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const HeroParallax = () => {
  const products = [
    { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
    { title: "Cursor", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
    { title: "Rogue", link: "https://userogue.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
    { title: "Editorially", link: "https://editorially.org", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png" },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [-1000, 400]), springConfig);

  return (
    <div ref={ref} className="lg:h-[160vh] h-[110vh]  text-white overflow-hidden flex flex-col bg-black px-4">
      {/* Animated Text Section */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Become a center of Excellence in technology
        </h1>
        <p className="mt-4 text-lg sm:text-xl py-4 px-2 sm:px-10 md:px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque nulla veritatis earum provident, dolores dolorum voluptatibus magni ab cupiditate dignissimos, aliquam nemo temporibus!
        </p>
        <div className="py-6 space-x-4 sm:space-x-6">
          <motion.button
            className="bg-red-400 px-6 sm:px-10 py-2 sm:py-3 tracking-wide cursor-pointer rounded-full text-sm sm:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="border border-red-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full tracking-wide cursor-pointer text-red-400 text-sm sm:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Training Programs
          </motion.button>
        </div>
      </motion.div>

      {/* Scrolling Image Section */}
      <div className="relative overflow-hidden w-full">
        {/* First Row - Moves Left */}
        <motion.div className="flex flex-wrap justify-center space-x-6 sm:space-x-10 w-max" style={{ x: translateX }}>
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={index}
              className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30rem] h-[12rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Moves Right */}
        <motion.div className="flex flex-wrap justify-center space-x-6 sm:space-x-10 w-max mt-6 sm:mt-10" style={{ x: translateXReverse }}>
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={index}
              className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30rem] h-[12rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroParallax;
