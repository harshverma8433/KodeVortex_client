import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./FAQs.css"

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
    ];
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="bg-black py-16 px-4">
        <h2 className="text-white text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="max-w-2xl mx-auto space-y-10">
          {faqData.map((question, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center">
                <span className="text-font text-xl mr-4">{index + 1}.</span>
                <p className="text-font1 text-xl tracking-wider">{question}</p>
              </div>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default FAQs