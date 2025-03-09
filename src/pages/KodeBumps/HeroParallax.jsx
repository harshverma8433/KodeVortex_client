import React from "react";
import { motion } from "framer-motion";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'

const HeroParallax = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img15];
  const images2 = [img8, img14, img9, img10, img11, img12, img13];

  // Adjust speed based on screen size
  const getAnimationSpeed = () => {
    // Use window.innerWidth to determine screen size when component mounts
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 60; // Mobile - faster
      if (window.innerWidth < 768) return 70; // Tablet
      return 80; // Desktop - original speed
    }
    return 80; // Default for SSR
  };

  const animationSpeed = getAnimationSpeed();

  return (
    <div className="min-h-screen text-white overflow-hidden flex flex-col bg-black px-2 sm:px-4">
      {/* Animated Text Section */}
      <motion.div
        className="text-center py-10 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold px-2">
          Empowering the Future with Technology
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl py-2 sm:py-4 px-2 sm:px-10 md:px-20 mx-auto max-w-6xl">
          In India's evolving economy, a skilled workforce is crucial for sustainable growth. Many startups fail due to a lack of professional expertise, especially in technology. At KodeBumps, we bridge this gap by offering industry-aligned technology programs that equip students with cutting-edge skills and hands-on experience, ensuring their success in the job market and entrepreneurship.
        </p>
        <div className="py-4 sm:py-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.button
            className="bg-red-400 px-6 sm:px-10 py-2 sm:py-3 tracking-wide cursor-pointer rounded-full text-sm sm:text-base w-64 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="border border-red-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full tracking-wide cursor-pointer text-red-400 text-sm sm:text-base w-64 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Training Programs
          </motion.button>
        </div>
      </motion.div>

      {/* Scrolling Image Section */}
      <div className="flex-1 flex flex-col justify-center gap-6 overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex flex-nowrap gap-3 sm:gap-6 md:gap-8"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", width: "200%" }}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={`row1-${index}`}
                className="w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30rem] h-[10rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Second Row - Right to Left */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex flex-nowrap gap-3 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", width: "200%" }}
          >
            {[...images2, ...images2].map((img, index) => (
              <div
                key={`row2-${index}`}
                className="w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30rem] h-[10rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroParallax;