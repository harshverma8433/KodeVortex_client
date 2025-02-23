import "./HeroPage.css";
import heroimage from "./hero_image.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Container variants for staggering words
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each word's animation variants
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Component to animate text word-by-word
function AnimatedText({ text, className }) {
  const words = text.split(" ");
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block">
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}

function HeroPage() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela",
    },
    {
      text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Failure is simply the opportunity to begin again, this time more intelligently.",
      author: "Henry Ford",
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman",
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
    <div className="relative h-auto  mt-10">
      {/* --------------------- HERO SECTION --------------------- */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Image with a different animation */}
        <motion.img
          src={heroimage}
          alt="Hero"
          className="w-full opacity-75"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute px-5 md:px-16 lg:px-24 top-1/4 left-96 transform -translate-x-1/2 flex justify-start">
          <h1 className="text-white text-3xl md:text-6xl font-bold leading-relaxed">
            <AnimatedText text="Your Gateway to" />
            <br />
            <AnimatedText text="Innovation and" />
            <br />
            <AnimatedText text="Success Revolutionizing" />
            <br />
            <AnimatedText text="Learning and Software" />
            <br />
            <AnimatedText text="Solutions" />
          </h1>
        </div>
      </motion.div>

      {/* --------------------- QUOTES SLIDER SECTION --------------------- */}
      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Slider {...sliderSettings} className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                className="relative bg-[#0B1121] text-white p-8 md:p-8 md:px-24 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Top-left quote icon */}
                <div className="absolute top-0 left-0 text-cyan-400 text-6xl font-bold -translate-y-1/2 -translate-x-1/4">
                  “
                </div>

                {/* Bottom-right quote icon */}
                <div className="absolute bottom-0 right-0 text-cyan-400 text-6xl font-bold translate-y-1/2 translate-x-1/4">
                  ”
                </div>

                {/* Cyan border outline */}
                <div className="absolute inset-0 border border-cyan-400 rounded-lg pointer-events-none" />

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  Quotes Of the Day
                </h2>

                {/* Quote text */}
                <p className="text-gray-300 mb-4 text-center leading-relaxed text-sm md:text-lg lg:text-2xl  italic">
                〝{quote.text}〞
                </p>

                {/* Author */}
                <p className="text-end text-lg text-gray-400 mb-6">- {quote.author}</p>

              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPage;
