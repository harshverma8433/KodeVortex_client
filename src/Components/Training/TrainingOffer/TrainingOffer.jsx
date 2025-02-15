import "./TrainingOffer.css";
import { useState } from "react";
import { FaBrain } from "react-icons/fa";

const TrainingOffer = () => {
  const features = [
    "Tech Training – Hands-on training in Python, ML, Java, MERN Stack, and more.",
    "DSA Preparation – 6th-semester LeetCode-based problem-solving sessions.",
    "Aptitude & Soft Skills – 7th-semester training in aptitude, GD, and communication.",
    "Core Subjects – Semester-wise coverage of CN, DBMS, OS, and more.",
    "Mock Interviews – Realistic technical and HR interview simulations.",
  ];
  const features1 = [
    " Tech Training – Career-aligned hands-on learning in Python, ML, Java, and more.",
    "DSA Preparation – Structured LeetCode-based coding practice.",
    "Aptitude & Soft Skills – Training in aptitude, GD, and communication.",
    "Core Subjects – In-depth revision of CN, DBMS, OS, etc.",
    "Mock Interviews – Simulated technical and HR interviews for job readiness.",
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverIndex1, setHoverIndex1] = useState(null);
  return (
    <div className="mt-80 ">
      <p className="text-white pb-16 text-font text-2xl tracking-wider">
        Trainings we offer
      </p>
      <div className="flex space-x-10 h-[50%] justify-center ">
      <div className={`w-[40%] flex flex-col items-center rounded-3xl bg-algo-col p-6 text-white transition-all duration-500 ${hoverIndex !== null ? "h-[60vh]" : "h-[40vh]"}`}>
  <h1 className="text-2xl font-bold mb-6">
    ALGOCHARYA – Technology & Placement Training
  </h1>
  <div className="relative flex">
    {Array(5)
      .fill()
      .map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex justify-center items-center text-3xl cursor-pointer mt-6 rounded-full bg-[#181739] transition-all border border-white duration-500 ${
              hoverIndex === index ? "border-black scale-110 bg-[#252447]" : ""
            }`}
            style={{ marginLeft: index === 0 ? "0" : "-20px" }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >  </div>
          {hoverIndex === index && (
            <div className="h-12 w-0.5 mt-1 mr-5 bg-black animate-pulse"></div>
          )}
        </div>
      ))}
  </div>
  {hoverIndex !== null && (
    <div className="p-2 mb-10 text-center">
      <p className="text-xl border-l-2 bg-[#181739] px-4 py-10 rounded-xl border-white pl-2">
        {features[hoverIndex]}
      </p>
    </div>
  )}
</div>

        <div
          className={`flex flex-col items-center rounded-3xl bg-algo-col p-6 text-white transition-all duration-500 ${
            hoverIndex1 !== null ? "h-[60vh] w-[40%]" : "h-[40vh] w-[40%]"
          }`}
        >
          <h1 className="text-2xl font-bold mb-6">
            Lakshyarithm – Premium Career & Placement Program
          </h1>
          <div className="relative flex">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-24 h-24 cursor-pointer mt-6 rounded-full bg-[#181739] transition-all border border-white duration-500 ${
                      hoverIndex1 === index
                        ? "border-black scale-110 bg-[#252447]"
                        : ""
                    }`}
                    style={{ marginLeft: index === 0 ? "0" : "-20px" }}
                    onMouseEnter={() => setHoverIndex1(index)}
                    onMouseLeave={() => setHoverIndex1(null)}
                  ></div>
                  {hoverIndex1 === index && (
                    <div className="h-12 w-0.5 mt-1 mr-5 bg-black animate-pulse"></div>
                  )}
                </div>
              ))}
          </div>
          {hoverIndex1 !== null && (
            <div className="p-2 mb-10 text-center">
              <p className="text-xl border-l-2 bg-[#181739] px-4 py-10 rounded-xl border-white pl-2">
                {features1[hoverIndex1]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingOffer;
