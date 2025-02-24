import React from "react";
import Slider from "react-slick"; // The carousel library
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import suraj_nayak from "./suraj_nayak.jpg";
import sonal_mittal from "./sonal_mittal.jpg";
import rishabh_triphati from "./rishabh_triphati.jpg";
import sanskriti from "./sanskriti.jpg";
import "./OurTeam.css"; // Ensure this file includes your custom slider gap CSS

const OurTeam = () => {
  const teams = [
    { name: "Suraj Nayak", image: suraj_nayak, role: "Project Manager" },
    { name: "Sonal Mittal", image: sonal_mittal, role: "Team Member" },
    { name: "Rishabh Tripathi", image: rishabh_triphati, role: "Team Member" },
    { name: "Sanskriti", image: sanskriti, role: "Team Member" },
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding:"50px",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // useInView hook to trigger animation when section enters view
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-black  py-12 md:py-20">
      {/* Heading */}
      <h1 className="text-[#CF9274] font-mono text-3xl md:text-4xl lg:text-5xl font-semibold text-center tracking-wide py-8 md:py-16">
        OUR TEAM
      </h1>

      {/* Carousel */}
      <div className="w-full md:w-[100%]  lg:w-[100%] xl:w-[80%] mx-auto" ref={ref}>
        <div className="px-4 md:px-10">
          <Slider {...settings}>
            {teams.map((member, index) => (
              <motion.div
                key={index}
                className="px-2 md:px-4 w-full "
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
              >
                <div className="rounded-xl  h-[35rem] md:h-[30rem] flex flex-col items-center  shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-slate-900">
                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[35rem] md:h-[30rem]  rounded-t-3xl"
                  />
                  {/* Name and Role */}
                </div>
                  <div className="w-full p-2 text-center">
                    <p className="text-white text-sm md:text-md font-semibold">
                      {member.name} ,  {member.role}
                    </p>

                  </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;