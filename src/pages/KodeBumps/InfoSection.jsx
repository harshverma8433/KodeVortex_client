import { motion } from "framer-motion";
import info from "./info.jpg";

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:px-16 lg:px-36 gap-6 lg:gap-12 w-full max-w-7xl mx-auto">
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={info} alt="Decorative" className="w-full rounded-lg shadow-2xl object-cover" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          { title: "Industry-Based Projects", text: "Engage in real-world projects to gain practical experience and enhance your skills." },
          { title: "Hackathons/Project Exhibitions/Funding", text: "Participate in hackathons, showcase your projects in exhibitions, and explore funding opportunities for your ideas." },
          { title: "Startup Incubation", text: "Receive training for startup incubation with a focus on product and service-based outcomes such as freelancing." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl text-white font-bold">{item.title}</h2>
            <p className="text-gray-400 text-sm sm:text-base">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfoSection;
