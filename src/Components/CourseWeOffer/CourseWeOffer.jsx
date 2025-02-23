import { useState, useEffect } from "react";
import NewComp from "./NewComp/NewComp";
import csharp from "./csharp.jpg";
import go from "./go.jpg";
import java from "./java.jpg";
import js from "./js.jpg";
import mern from "./mern.jpg";
import git from "./git.jpg";
import github from "./github.jpeg";
import python from "./python.jpg";
import php from "./php.png";
import cpp from "./cpp.jpeg";
import { motion } from "framer-motion";

const courses = [
  { image: csharp, title: "C#" },
  { image: go, title: "Go" },
  { image: java, title: "Java" },
  { image: js, title: "JavaScript" },
  // { image: mern, title: "MERN Stack" },
  { image: git, title: "Git" },
  { image: github, title: "GitHub" },
  { image: python, title: "Python" },
  // { image: php, title: "PHP" },
  { image: cpp, title: "C++" },
];

// Define variants for the grid container
const gridVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const CourseWeOffer = () => {
  // currentIndex indicates the starting index of the group of 4 courses
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update the group every 4 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Build an array of 4 courses using modulo arithmetic to wrap around.
  const currentGroup = [0, 1, 2, 3].map(
    (i) => courses[(currentIndex + i) % courses.length]
  );

  return (
    <div>
      <div className="text-white my-40 mb-36 px-4">
        <h2 className="text-[#CF9274] font-mono text-5xl font-semibold  text-center pb-24">
          TECHNOLOGIES WE HAVE
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {currentGroup.map((course, idx) => (
            <motion.div
              key={idx}
              className="cursor-pointer"
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
              <div className="w-60 h-60 rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <NewComp />
    </div>
  );
};

export default CourseWeOffer;
