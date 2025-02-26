import { motion } from "framer-motion";
import "./WhyDifferent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const WhyDifferent = () => {
  const diffcontent = [
    {
      text: "Holistic Career Transformation, Not Just Training",
     
    },
    {
      text: "Startup Ecosystem Integration with Real-World Mentorship",
    },
    {
      text: "Agile Development and Continuous Learning Culture",
    },
    {
      text: "Deep Industry Partnerships and Community Engagement",
    },
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <div className="quotes-section">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      >
      <h2 className="">What Make Us Different</h2>
      <Slider {...sliderSettings} className="quotes-slider">
        {diffcontent.map((different, index) => (
          <div key={index} className="quote-card py-16">
            <p>{different.text}</p>
          </div>
        ))}
      </Slider>
    </motion.div>
  </div>
  );
};

export default WhyDifferent;
