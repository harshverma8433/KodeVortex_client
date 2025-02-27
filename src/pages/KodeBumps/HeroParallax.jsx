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

  const images = [ img1, img2, img3 ,img4, img5, img6, img7 ,img15];
  const images2 = [img8, img14, img9, img10, img11, img12, img13];

  const animationSpeed = 80; // Adjust to control scrolling speed

  return (
    <div className="h-[100%] text-white overflow-hidden flex flex-col bg-black px-4">
      {/* Animated Text Section */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Empowering the Future with Technology
        </h1>
        <p className="mt-4 text-lg sm:text-xl py-4 px-2 sm:px-10 md:px-20">
        In India’s evolving economy, a skilled workforce is crucial for sustainable growth. Many startups fail due to a lack of professional expertise, especially in technology. At KodeBumps, we bridge this gap by offering industry-aligned technology programs that equip students with cutting-edge skills and hands-on experience, ensuring their success in the job market and entrepreneurship.

        </p>
        <div className="py-6 space-x-4 space-y-6 sm:space-x-6">
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
      <div className="h-screen text-white overflow-hidden flex flex-col bg-black px-4">
      <div className="relative overflow-hidden w-full">
        {/* First Row - Left to Right */}
        <motion.div
          className="flex flex-nowrap space-x-6 sm:space-x-10"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", width: "200%" }}
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30rem] h-[12rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
            >
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Second Row - Right to Left */}
      <div className="relative overflow-hidden w-full mt-6">
        <motion.div
          className="flex flex-nowrap space-x-6 sm:space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: animationSpeed, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", width: "200%" }}
        >
          {[...images2, ...images2].map((img, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30rem] h-[12rem] sm:h-[15rem] md:h-[20rem] flex-shrink-0"
            >
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
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
