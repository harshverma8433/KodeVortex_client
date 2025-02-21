import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Solutions Inc.",
    image: "",
    feedback:
      "We are extremely satisfied with the training program and highly recommend it to any institution looking to excel in the field of technology.",
  },
  {
    name: "Jane Smith",
    position: "CTO, Innovate Tech Labs",
    image: "",
    feedback:
      "The hands-on experience and industry-based projects offered during the training were invaluable. Our team has seen a significant improvement in our problem-solving abilities.",
  },
  {
    name: "Michael Johnson",
    position: "Head of Research, FutureTech Industries",
    image: "",
    feedback:
      "The mentorship and support provided by the agency have been instrumental in our growth. We have successfully implemented the learnings in our projects and have seen remarkable results.",
  },
  {
    name: "Sarah Lee",
    position: "Founder, Tech Innovators Startup",
    image: "",
    feedback:
      "The startup incubation training was a game-changer for us. We received expert guidance on business modeling and funding opportunities that have paved the way for our success.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Title Animation */}
      <motion.h2
        className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Testimonials
      </motion.h2>

      {/* Subtitle Animation */}
      <motion.p
        className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        The training provided by the agency has truly transformed our approach to
        technology. Our team is now equipped with the latest skills and
        knowledge to tackle any project efficiently.
      </motion.p>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-slate-700 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between gap-4"
            initial={{ opacity: 0, y: 50, rotate: -5, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image || "https://via.placeholder.com/48"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="font-bold text-base sm:text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-sm sm:text-base">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-start text-sm sm:text-base">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
