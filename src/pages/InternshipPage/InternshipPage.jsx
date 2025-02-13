import { motion } from "framer-motion";
import ellipse from "./Ellipse.png"
const InternshipPage = () => {
  return (
    <div className="mx-[5%]  bg-[#181739] overflow-hidden h-[47rem] mb-16">
      <div className=" flex  justify-evenly space-x-24 pt-16">
        <div className="text-white text-5xl font-semibold pt-36 text-center">
          <h1>We are looking for a</h1>
          <h1 className="traking-wider text-8xl font-bold pt-4">UI / UX</h1>
          <h1 className="pt-2">Design Intern</h1>
        </div>
        <div className="relative">
          <div>
            <div className="relative w-[450px] h-[450px]">
              <div className="absolute top-4 left-4 w-full h-full bg-[#4A4E52] rounded-[50px]"></div>
              <motion.div
                className="absolute w-full h-full top-16 right-10 bg-[#056777] rounded-[50px]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
          <div className="absolute -left-60">
            <div className="w-36 absolute  ml-32  h-20 border-[17px] border-white border-b-0 rounded-t-full bg-transparent"></div>
            <div className="w-36 absolute left-16 top-10 h-20 border-[17px] border-white border-t-0 rounded-b-full bg-transparent"></div>
          </div>
        </div>
      </div>
      <img src={ellipse} alt="ellipse.png" />
    </div>
  );
};

export default InternshipPage;
