import { motion } from "framer-motion";
import "./WhyDifferent.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  },
};

const circleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  },
  hover: {
    scale: 1.1,
    rotate: 15,
    transition: { duration: 0.3 },
  },
};

const WhyDifferent = () => {
  return (
    <motion.div
      className="text-white mt-10 flex flex-col items-center px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1
        className="text-[#CF9274] font-mono text-5xl font-semibold pb-24 tracking-wide text-center"
        variants={headingVariants}
      >
        WHAT MAKE US DIFFERENT
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-24">
        {Array(4)
          .fill()
          .map((_, index) => (
            <motion.div
              key={index}
              className="w-40 h-40 bg-grad-wd rounded-full"
              variants={circleVariants}
              whileHover="hover"
            ></motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default WhyDifferent;
