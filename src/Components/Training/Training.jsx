
// import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Training.css"
import TrainingOffer from "./TrainingOffer/TrainingOffer";

const Training = () => {

  const Training = [
    {
      serviceName: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quo porro rerum perspiciatis eos illum soluta sed,",
    },
    {
      serviceName: "impedit libero, tenetur veritatis modi voluptate perspiciatis repudiandae! Distinctio exercitationem aut repudiandae itaque deleniti voluptatum!"
    },
    {
      serviceName: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quo porro rerum perspiciatis eos illum soluta sed,"
    },
    {
      serviceName: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quo porro rerum perspiciatis eos illum soluta sed,"
    },
    {
      serviceName: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quo porro rerum perspiciatis eos illum soluta sed,"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the element comes into view
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 200 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  return (
    <div  className=" h-[450px]  " >

      <div className=" ">

       

        <div ref={ref} className="mt-20  ">
          <motion.h1
            className="text-[#CF9274] text-center pb-[3%] text-3xl  font-semibold tracking-wider"
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            TRAININGS
          </motion.h1>
         <div className="">
         <Carousel
            className="caro "
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            transitionDuration={500} // Adjust if needed
          >
            {Training.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-2xl w-[80%] ml-10 flex justify-center items-end text-center slidr cursor-pointer"
                id="grad1"
                style={{ height: "300px" }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-slate-200 py-6 px-2">
                  {service.serviceName}
                </h1>
              </motion.div>
            ))}
          </Carousel>
         </div>
        </div>

      </div>

      {/* <div className="bg-grad-homepage relative right-80   bottom-32 "></div> */}
    </div>
  )
}

export default Training