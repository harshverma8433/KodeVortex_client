import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-4 sm:py-6 pb-16 sm:pb-24 text-white px-4 sm:px-6 md:px-20 lg:px-32 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl sm:text-3xl text-white"
      >
        Get in touch with us today!
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl sm:text-4xl py-3 sm:py-5 font-serif text-white mt-2"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white text-base sm:text-lg mt-2"
      >
        Our Team is Ready to Assist You
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 sm:mt-10 max-w-6xl mx-auto">
        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center p-4"
        >
          <Mail size={32} className="text-white sm:size-40" />
          <h3 className="text-lg font-semibold mt-3 sm:mt-4">Email</h3>
          <p className="text-white mt-2 text-base sm:text-lg text-center break-words w-full">
            contact.kodebumps@gmail.com
          </p>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center p-4"
        >
          <Phone size={32} className="text-white sm:size-40" />
          <h3 className="text-lg font-semibold mt-3 sm:mt-4">Phone</h3>
          <p className="text-white mt-2 text-base sm:text-lg text-center">
            +91-9762051751 <br className="sm:block" /> +91-7091204379
          </p>
        </motion.div>

        {/* Office Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center p-4 sm:col-span-2 md:col-span-1"
        >
          <MapPin size={32} className="text-white sm:size-40" />
          <h3 className="text-lg font-semibold mt-3 sm:mt-4">Office</h3>
          <p className="text-white mt-2 text-base sm:text-lg text-center max-w-xs mx-auto">
            RNO74/5FLA/104, Legacy Fortune Exotica, Ravet, Pune, Maharashtra, 412101
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;