import "./TrainingOffer.css";
import { useState } from "react";
import {
  FaPython,
  FaJava,
  FaCode,
  FaDatabase,
  FaCaretDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Outer section variants (no tilt)
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Variants for each column container to stagger its children
const columnVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// New box entrance variants for each column
const leftBoxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const rightBoxVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Variant for the heading (slide in from left)
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variant for the icons container (fade & scale)
const iconsVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Variant for the details card (fade & slide up)
const detailsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Variant for each list item inside details (slide in from right)
const listItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TrainingOffer = () => {
  // Data for ALGOCHARYA column (4 items)
  const trainingData1 = [
    {
      category: "Tech Training",
      details: [
        "Hands-on training in Python, ML, and Java",
        "MERN Stack development projects",
        "Industry-standard tools",
      ],
    },
    {
      category: "DSA Preparation",
      details: [
        "Structured LeetCode sessions",
        "Algorithm & data structure challenges",
        "Competitive programming tips",
      ],
    },
    {
      category: "Aptitude & Soft Skills",
      details: [
        "Aptitude tests and exercises",
        "Group discussion practice",
        "Effective communication training",
      ],
    },
    {
      category: "Core Subjects",
      details: [
        "In-depth revision of CN, DBMS, and OS",
        "Semester-wise curriculum insights",
        "Practical lab sessions",
      ],
    },
  ];

  // Data for Lakshyarithm column (4 items)
  const trainingData2 = [
    {
      category: "Tech Training",
      details: [
        "Career-aligned learning in Python, ML, and Java",
        "Real-world project work",
        "Advanced development frameworks",
      ],
    },
    {
      category: "DSA Preparation",
      details: [
        "Structured LeetCode practice",
        "In-depth algorithm analysis",
        "Competitive coding challenges",
      ],
    },
    {
      category: "Aptitude & Soft Skills",
      details: [
        "Focused aptitude training",
        "GD & communication enhancement",
        "Presentation & interpersonal skills",
      ],
    },
    {
      category: "Core Subjects",
      details: [
        "Comprehensive revision of CN, DBMS, OS",
        "Concept clarity sessions",
        "Problem-solving workshops",
      ],
    },
  ];

  // Icons for the first set (4 items)
  const iconsSet1 = [
    <FaPython key="1" />,
    <FaJava key="2" />,
    <FaCode key="3" />,
    <FaDatabase key="4" />,
  ];

  // Icons for the second set (4 items)
  const iconsSet2 = [
    <FaPython key="5" />,
    <FaJava key="6" />,
    <FaCode key="7" />,
    <FaDatabase key="8" />,
  ];

  // States to track hovered circle for each column.
  // When no circle is hovered, default to index 0.
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverIndex1, setHoverIndex1] = useState(null);

  const currentIndex1 = hoverIndex !== null ? hoverIndex : 0;
  const currentIndex2 = hoverIndex1 !== null ? hoverIndex1 : 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Re-trigger on re-entry
      variants={sectionVariants}
      className="mt-24 px-4"
    >
      <p className="text-[#CF9274] font-mono text-3xl md:text-5xl font-semibold pb-8 md:pb-16 text-center tracking-wider">
        TRAININGS WE OFFER
      </p>

      <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center">
        {/* ------------ FIRST COLUMN (Left Box) ------------ */}
        <motion.div
          variants={leftBoxVariants}
          className="w-full md:w-[40%] lg:w-[32%]  flex flex-col items-center rounded-3xl bg-algo-col p-4 md:p-6 text-white transition-all duration-500 h-[80vh] mb-10 md:mb-0"
        >
          {/* Make the inner container a flex column that fills the height */}
          <motion.div variants={columnVariants} className="flex flex-col h-full">
            <motion.h1
              variants={headingVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
            >
              ALGOCHARYA – Technology & Placement Training
            </motion.h1>

            <motion.div
              variants={iconsVariants}
              className="relative flex space-x-2 justify-center"
            >
              {trainingData1.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center text-2xl md:text-3xl cursor-pointer mt-4 md:mt-6 rounded-full bg-[#181739] transition-all duration-500 border border-white ${
                      hoverIndex === index
                        ? "scale-110 shadow-lg border-black"
                        : ""
                    }`}
                    style={{ marginLeft: index === 0 ? "0" : "-10px" }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {iconsSet1[index]}
                  </div>
                  {(hoverIndex === index ||
                    (hoverIndex === null && index === 0)) && (
                    <FaCaretDown className="text-white mt-2 animate-bounce" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Details card pushed to the bottom */}
            <motion.div
              variants={detailsVariants}
              className="p-2 mt-auto text-center"
            >
              <div className="text-sm md:text-base lg:text-lg border-l-2 w-full bg-[#181739] h-auto md:h-[14rem] lg:px-4 px-2 py-4 rounded-xl border-white">
                <h2 className="font-bold mb-2">
                  {trainingData1[currentIndex1].category}
                </h2>
                <ul className="list-disc flex flex-col pt-2 space-y-1 md:space-y-2 list-inside">
                  {trainingData1[currentIndex1].details.map((point, idx) => (
                    <motion.li key={idx} variants={listItemVariants}>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ------------ SECOND COLUMN (Right Box) ------------ */}
        <motion.div
          variants={rightBoxVariants}
          className="w-full md:w-[40%] lg:w-[32%] flex flex-col items-center rounded-3xl bg-algo-col p-4 md:p-6 text-white transition-all duration-500 h-[80vh]"
        >
          <motion.div variants={columnVariants} className="flex flex-col h-full">
            <motion.h1
              variants={headingVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center"
            >
              Lakshyarithm – Premium Career & Placement Program
            </motion.h1>

            <motion.div
              variants={iconsVariants}
              className="relative flex space-x-2 justify-center"
            >
              {trainingData2.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center text-2xl md:text-3xl cursor-pointer mt-4 md:mt-6 rounded-full bg-[#181739] transition-all duration-500 border border-white ${
                      hoverIndex1 === index
                        ? "scale-110 shadow-lg border-black"
                        : ""
                    }`}
                    style={{ marginLeft: index === 0 ? "0" : "-10px" }}
                    onMouseEnter={() => setHoverIndex1(index)}
                    onMouseLeave={() => setHoverIndex1(null)}
                  >
                    {iconsSet2[index]}
                  </div>
                  {(hoverIndex1 === index ||
                    (hoverIndex1 === null && index === 0)) && (
                    <FaCaretDown className="text-white mt-2 animate-bounce" />
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={detailsVariants}
              className="p-2 mt-auto text-center"
            >
              <div className="text-sm md:text-base lg:text-lg border-l-2 w-full bg-[#181739] h-auto md:h-[14rem] lg:px-4 px-2 py-4 rounded-xl border-white">
                <h2 className="font-bold mb-2">
                  {trainingData2[currentIndex2].category}
                </h2>
                <ul className="list-disc flex flex-col pt-2 space-y-1 md:space-y-2 list-inside">
                  {trainingData2[currentIndex2].details.map((point, idx) => (
                    <motion.li key={idx} variants={listItemVariants}>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrainingOffer;
