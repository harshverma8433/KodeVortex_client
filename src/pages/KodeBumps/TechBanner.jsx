import { motion } from "framer-motion";

const TransformCard = () => {
  return (
    <div className="relative flex justify-center items-center mt-20 px-4 sm:px-6 md:px-10">
      {/* Background Card */}
      <motion.div
        className="absolute w-[95%] sm:w-[90%] md:w-[81%] h-72 sm:h-80 md:h-96 bg-slate-500 rounded-lg rotate-3 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      ></motion.div>

      {/* Foreground Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="relative bg-black text-white flex flex-col md:flex-row items-center border border-slate-500 p-6 sm:p-8 md:p-10 space-y-6 md:space-y-0 md:space-x-10 rounded-xl shadow-lg w-[85%] h-72 sm:h-80 md:h-96"
      >
        {/* Left Content */}
        <motion.div
          className="flex flex-col space-y-4 sm:space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Ready to Transform Your College into a <br />
            <span className="underline">Centre of Excellence</span> in Technology?
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Empower your students with industry-relevant skills and knowledge
            through our comprehensive training programs.
          </p>
        </motion.div>

        {/* Right Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ amount: 0.2 }}
          className="w-full flex justify-center md:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 text-white text-sm sm:text-base px-5 py-3 w-full sm:w-[20rem] md:w-[30rem] rounded-full shadow-md hover:bg-slate-700 transition duration-300"
          >
            Get in touch with us now to discuss how we can collaborate!
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TransformCard;
