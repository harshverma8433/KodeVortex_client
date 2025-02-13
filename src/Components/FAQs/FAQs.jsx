
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQs.css";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: " Do I get a certificate after completing a course?",
      answer:
        "Yes, upon successful completion of a course, you will receive a verified certificate that you can share on LinkedIn, your resume, or with potential employers. ",
    },
    {
      question: "Can I switch to a different course after enrolling in one? ",
      answer:
        "Absolutely! If you wish to switch courses, you can do so within a certain period after enrollment. Check our refund and course-switching policies for more details.",
    },
    {
      question: "Do I get direct support from instructors?",
      answer:
        "Yes, many of our courses provide direct support from instructors through Q&A sessions, discussion forums, or live mentorship sessions. The availability of direct support depends on the course type.  ",
    },
    {
      question: " Is there a community or forum to interact with other learners?",
      answer:
        " Yes! We have a dedicated community forum where learners can ask questions, discuss topics, and share insights. Join the discussion and learn collaboratively!   ",
    },
    {
      question: "How do I download course materials for offline learning?  ",
      answer:
        "Some courses offer downloadable materials like PDFs, notes, and worksheets for offline access. Look for the 'Download' option within the course content.",
    },
    {
      question: "How do I report a technical issue? ",
      answer:
        "If you experience any technical issues, please contact our support team through the Help Center, or email us at **[support@yourplatform.com] with details about the problem. ",
    },
    {
      question: "Can I use my account on multiple devices?",
      answer:
        "Yes, you can access your courses on multiple devices, including your laptop, tablet, and mobile phone. Just log in with your account, and your progress will be synced automatically.  ",
    },
    {
      question: "Do you provide job placement assistance? ",
      answer:
        "Yes! We offer career support, resume-building tips, and job placement assistance for select programs. Our career services team can help connect you with potential employers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-16 px-4">
      <h2 className="text-white text-2xl font-semibold text-center mb-8">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <div onClick={() => toggleFAQ(index)} key={index} className="bg-white cursor-pointer rounded-3xl   p-4">
            {/* Question */}
            <div
              className="flex  items-center justify-between "
              
            >
              <div className="flex  items-center">
                <span className="text-font text-xl mr-4">{index + 1}.</span>
                <p className="text-font1 text-xl tracking-wider">
                  {faq.question}
                </p>
              </div>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer (Visible when clicked) */}
            {openIndex === index && (
              <div className="mt-3 text-font2 text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
