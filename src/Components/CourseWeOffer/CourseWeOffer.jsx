import { useState, useEffect } from "react";
import csharp from "./csharp.jpg";
import go from "./go.jpg";
import java from "./java.jpg";
import js from "./js.jpg";
import git from "./git.jpg";
import github from "./github.jpeg";
import python from "./python.jpg";
import cpp from "./cpp.jpeg";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    label: "Guided Project",
    heading: "Work like Backend Developers at Zomato",
    description: "Build a high-scale distributed web backend for a food ordering app.",
    techStack: ["MongoDB", "Java", "Spring Boot", "Redis"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  {
    label: "Guided Project",
    heading: "Be a ModelOps Engineer at OpenAI",
    description: "Build a real-time model monitoring and retraining system that adapts to data drift instantly.",
    techStack: ["Kubeflow", "MLflow", "TensorFlow Serving", "AWS Lambda", "Prometheus"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  {
    label: "Guided Project",
    heading: "Be a ModelOps Engineer at OpenAI",
    description: "Build a real-time model monitoring and retraining system that adapts to data drift instantly.",
    techStack: ["Kubeflow", "MLflow", "TensorFlow Serving", "AWS Lambda", "Prometheus"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  {
    label: "Guided Project",
    heading: "Be a ModelOps Engineer at OpenAI",
    description: "Build a real-time model monitoring and retraining system that adapts to data drift instantly.",
    techStack: ["Kubeflow", "MLflow", "TensorFlow Serving", "AWS Lambda", "Prometheus"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_wsNlUYaV8Ki0hdLYJksiWA_kkiorXAvAA&s",
  },
  // Add more projects as needed
];

const courses = [
  { image: csharp, title: "C#" },
  { image: go, title: "Go" },
  { image: java, title: "Java" },
  { image: js, title: "JavaScript" },
  { image: git, title: "Git" },
  { image: github, title: "GitHub" },
  { image: python, title: "Python" },
  { image: cpp, title: "C++" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // centerMode: true,
  // centerPadding: "0%", // Adjust this value to control the spacing between slides
  arrows: false,
  responsive: [
    { 
      breakpoint: 1250, 
      settings: { 
        slidesToShow: 2, 
        centerMode: true,
        centerPadding: "0px", // Adjust for medium screens
      } 
    },
    { 
      breakpoint: 768, 
      settings: { 
        slidesToShow: 1, 
        centerMode: true,
        centerPadding: "20px", // Adjust for small screens
      } 
    },
  ],
};
const gridVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const CourseWeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentGroup = [0, 1, 2, 3].map(
    (i) => courses[(currentIndex + i) % courses.length]
  );

  return (
    <div className="text-white mt-20 mb-8 md:mt-40 md:mb-16">
      <h2 className="text-[#CF9274] font-mono text-3xl md:text-5xl font-semibold text-center pb-12 md:pb-24">
        TECHNOLOGIES WE HAVE
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 place-items-center"
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
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-3xl shadow-lg overflow-hidden flex justify-center items-center">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className=" mt-16 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }} 
          viewport={{ once: false, amount: 0.3 }}
        >
          <Slider {...settings} className="  ">
            {projects.map((project, index) => (
                <div key={index} className="bg-slate-900 flex flex-col items-center   justify-between text-white w-full md:w-[100%] lg:w-[100%] h-[35rem] md:h-[570px] rounded-xl shadow-lg p-4 md:p-6 relative  overflow-hidden ">
                  <div className="relative flex flex-col  items-center">
                    <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs bg-green-100 text-green-800  font-semibold px-4 text-center py-1 rounded-full">
                      {project.label}
                    </span>
                    <div className="flex justify-center my-8 md:my-12">
                      <img
                        src={project.image}
                        alt={project.heading}
                        className="w-32 h-32 md:w-44 md:h-44 object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-center px-2">
                      {project.heading}
                    </h3>
                    <p className="text-base md:text-lg py-3 text-gray-200 text-center px-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center  items-end gap-2 mt-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseWeOffer;