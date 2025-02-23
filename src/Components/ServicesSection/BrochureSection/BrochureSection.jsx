import { DownloadCloud } from "lucide-react"; // For the icon
import "./BrochureSection.css"
import rec_65 from "./Rectangle 65.png"
const BrochureSection = () => {
  return (
    <div className="">
  
    <div className="relative  min-h-[300px] flex justify-center items-center">
      {/* Background Overlapping Layers */}
      <div className="absolute bg-broc-col1 w-[80%] rounded-2xl  h-[140px] skew-y-[5deg] z-10 top-20 " />
      <div className="absolute bg-broc-col2 w-[80%] rounded-2xl   h-[120px] skew-y-[-6deg] z-10" />

      {/* Main Content Section */}
      <div className="flex items-center relative bg-slate-600 h-36  px-10 w-[80%] rounded-md shadow-xl z-10">
        {/* Left Image */}
        <div className="w-40 ">
          <img
            src={rec_65}
            alt="Brochure"
            className="transform w-60 -rotate-6 absolute top-[-70px] left-[-30px] shadow-lg"
          />
        </div>


        {/* Download Button */}
       <div className=" w-full flex justify-end">
       <a href="./Brochure.pdf"  download="./Brochure.pdf"  className="cursor-pointer  bg-orange-400 hover:bg-orange-500 px-4 py-2 flex items-center rounded-md shadow-lg text-black font-medium">
          <p className="pr-6">Wants to know more?</p>
          <DownloadCloud className="mr-2" />
            Download Brochure
        </a>
       </div>
      </div>
    </div>
    <div className=" mx-24 my-10 ">
    <h1 className="text-white text-font  text-start ">Unlock your potential with expert-led training, industry-focused courses, and hands-on projects. Gain real-world experience through live collaborations with top companies. Get expert reviews to refine your projects and stay ahead in your career. Join us to bridge the gap between learning and industry success!</h1>

    </div>
      </div>
  );
};

export default BrochureSection;
