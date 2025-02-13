
// // import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./Training.css"
// import TrainingOffer from "./TrainingOffer/TrainingOffer";
// import full_stack from './full_stack.jpg'
// import aiml from "./aiml.jpg"
// import app_dev from "./app_dev.jpg"
// import cybersecurity from "./cybersecurity.jpg"
// import datascience from "./datascience.jpg"
// import mlops from "./mlops.jpg"

// const Training = () => {

//   const Training = [
//     {
//       serviceName: "Full Stack Development",
//       image : full_stack 
//     },
//     {
//       serviceName: "AIML",
//       image:aiml
//     },
//     {
//       serviceName: "App Development",
//       image : app_dev
//     },
//     {
//       serviceName: "Cyber Security",
//       image : cybersecurity
//     },
//     {
//       serviceName: "Data Science",
//       image : datascience
//     },
//     {
//       serviceName :"ML Ops",
//       image : mlops
//     }
//   ];

//   const { ref, inView } = useInView({
//     triggerOnce: false, // Trigger animation every time the element comes into view
//     threshold: 0.1, // Trigger animation when 10% of the element is in view
//   });

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 2,
//       slidesToSlide: 1,
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 200 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };


//   return (
//     <div  className=" h-[450px]  " >

//       <div className=" ">

       

//         <div ref={ref} className="mt-20  ">
//           <motion.h1
//             className="text-[#CF9274] text-center pb-[3%] text-3xl  font-semibold tracking-wider"
//             initial={{ opacity: 0, y: -30 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//             transition={{ duration: 0.6 }}
//           >
//             TRAININGS
//           </motion.h1>
//          <div className="">
//          <Carousel
//             className="caro "
//             responsive={responsive}
//             infinite
//             autoPlay
//             autoPlaySpeed={2000}
//             transitionDuration={500} // Adjust if needed
//           >
//             {Training.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="rounded-2xl w-[80%] ml-10 flex justify-center items-end text-center slidr cursor-pointer"
//                 id="grad1"
//                 style={{ height: "300px" }}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={itemVariants}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div>
//                   <img src={service.image} alt="" />

//                   <h1 className="text-slate-200 py-6 px-2">
//                     {service.serviceName}
//                   </h1>
//                 </div>
//               </motion.div>
//             ))}
//           </Carousel>
//          </div>
//         </div>

//       </div>

//       {/* <div className="bg-grad-homepage relative right-80   bottom-32 "></div> */}
//     </div>
//   )
// }

// export default Training

// Import necessary libraries
// React Component for Training Carousel with Flip Animation on Hover
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Training.css";
import full_stack from './full_stack.jpg';
import aiml from "./aiml.jpg";
import app_dev from "./app_dev.jpg";
import cybersecurity from "./cybersecurity.jpg";
import datascience from "./datascience.jpg";
import mlops from "./mlops.jpg";

const Training = () => {
  const services = [
    { name: "Full Stack Development", image: full_stack },
    { name: "AI & ML", image: aiml },
    { name: "App Development", image: app_dev },
    { name: "Cyber Security", image: cybersecurity },
    { name: "Data Science", image: datascience },
    { name: "MLOps", image: mlops }
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 767, min: 200 }, items: 1 }
  };

  return (
    <div className="mt-32">

      <h1
        className="text-[#CF9274] text-center txt  text-3xl font-semibold"
        
      >TRAININGS</h1>
    <div className="h-[450px]">

      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}  transitionDuration={500}>
        {services.map((service, idx) => (
          <div key={idx} className="training-card">
            <div className="training-inner">
              <div className="training-front">
                <img src={service.image} alt={service.name} className="object-cover w-full h-full" />
              </div>
              <div className="training-back">
                <h2 className="text-white text-xl font-bold">{service.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    </div>

  );
};

export default Training;
