import { motion } from "framer-motion";
import techbanner from "./techbanner.jpg";

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-6 md:px-32 py-12 mt-16  lg:mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Feature #1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Feature #1
            </h2>
            <p className="mt-2 text-gray-300 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </motion.div>

          {/* Industry-Based Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Industry-Based Projects and Hackathons
            </h2>
            <p className="mt-2 text-gray-300 text-base md:text-lg">
              Engage students in real-world industry projects and hackathons to
              apply their skills and knowledge in practical scenarios.
            </p>
          </motion.div>

          {/* Feature #2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Feature #2
            </h2>
            <p className="mt-2 text-gray-300 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </motion.div>
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
