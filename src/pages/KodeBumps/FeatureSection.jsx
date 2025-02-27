import { motion } from "framer-motion";
import techbanner from "./techbanner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const FeatureSection = () => {

  const features = [
    {
      title: "Future-Ready Training Programs",
      description:
        "We provide industry-focused training in tech, development, data science, and entrepreneurship, ensuring career-ready skills through hands-on projects and expert mentorship.",
    },
    {
      title: "Building a Tech Excellence Hub",
      description:
        "Our framework offers digital learning, expert mentorship, software tools, cloud credits, hands-on projects, hackathons, certifications, and resources for embedded systems, robotics, and 3D printing to drive innovation.",
    },
    {
      title: "Real-World Projects & Innovation",
      description:
        "Students gain real-world experience through industry projects, live collaborations, and market-ready product development, fostering innovation and entrepreneurship.",
    },
    {
      title: "Innovative Learning Through Design Thinking",
      description:
        "We cultivate problem-solving, creativity, and critical thinking through design workshops, case studies, and structured methodologies, empowering students to build innovative solutions.",
    },
    {
      title: "Hackathons, Showcases & Funding Support",
      description:
        "We host hackathons, showcase projects for industry exposure, and help students secure funding for innovative ideas.",
    },
    {
      title: "Startup Incubation & Business Growth",
      description:
        "We offer startup training, freelancing guidance, and business support to help students build market-ready products and sustainable ventures.",
    },
    {
      title: "Funding & Investment Mentorship",
      description:
        "We connect students with funding, offer grant and pitching seminars, and facilitate investor networking for startup growth.",
    },
    {
      title: "Industry Collaboration for Product Development",
      description:
        "We link students with vendors, suppliers, and tech partners to develop prototypes, access resources, and scale production.",
    },
    {
      title: "Marketing & Brand Growth Seminars",
      description:
        "We provide workshops on digital marketing, branding, and sales, plus networking and market entry support.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  
  return (
    <div className="container mx-auto px-6 md:px-32 py-12 mt-16  lg:mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-950 p-6 items-center">
        
        {/* Left Text Section */}
        <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full  space-y-6  md:space-y-8"
    >
      <Slider {...settings}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="p-6  rounded-lg shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              {feature.title}
            </h2>
            <p className="mt-2 text-gray-300 text-base md:text-lg">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </Slider>
    </motion.div>


        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full"
        >
          <motion.img
            src={techbanner}
            alt="Feature Image"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            initial={{ rotate: -5 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;
