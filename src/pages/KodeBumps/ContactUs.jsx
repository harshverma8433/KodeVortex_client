import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-6 pb-24 text-white px-6 md:px-20 lg:px-32 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-xl text-white"
      >
        Get in touch with us today!
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-4xl py-5 font-serif text-white mt-2"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white text-lg mt-2"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <Mail size={40} className="text-white" />
          <h3 className="text-lg font-semibold mt-4">Email</h3>
          <p className="text-white mt-2 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-2 font-medium pt-6">info@trainingagency.com</p>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <Phone size={40} className="text-white" />
          <h3 className="text-lg font-semibold mt-4">Phone</h3>
          <p className="text-white mt-2 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-2 font-medium pt-6">+1-123-456-7890</p>
        </motion.div>

        {/* Office Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <MapPin size={40} className="text-white" />
          <h3 className="text-lg font-semibold mt-4">Office</h3>
          <p className="text-white mt-2 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-2 font-medium pt-6">123 Technology Street, City, Country</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
