import { useState } from 'react';
import { send } from '@emailjs/browser';
import toast from 'react-hot-toast';
import { RiHomeLine } from "react-icons/ri";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
      to_emails: 'hv77856@gmail.com, sn013293@gmail.com, vijay.singh@kodevortex.in',
    };

    try {
      await send(
        'service_7hbmjqn', // Replace with your EmailJS service ID
        'template_n9dedjp', // Replace with your EmailJS template ID
        templateParams,
        'FQ2mG-WW5dDSPIj-1' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-container mt-10 mx-4 md:mx-[10%] mb-16">
      <div className="contact-content flex flex-col">
        <h1 className="pb-4 text-white text-2xl md:text-3xl tracking-wide text-center font-bold">
          CONTACT US
        </h1>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="contact-info flex-1">
            <div className="text-center mb-8 md:mb-16">
              <p className="text-2xl md:text-4xl font-semibold">KodeVortex, LLC</p>
              <p className="text-lg md:text-xl text-gray-300">
                Experience the evolution of learning
              </p>
            </div>

            <div className="info-item flex items-center mb-6">
              <div className="icon-container p-4  flex justify-center items-center text-white  mr-4">
               <RiHomeLine/>
              </div>
              <div className="info-text">
                <h3 className="text-lg font-semibold">Our location</h3>
                <p className="text-gray-300">C-01, Maruti Kunj, Gurugram, 122102</p>
              </div>
            </div>

            <div className="info-item flex items-center mb-6">
              <div className="icon-container p-4 mr-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="info-text">
                <h3 className="text-lg font-semibold">Phone number</h3>
                <p className="text-gray-300">+91 7091204379</p>
              </div>
            </div>

            <div className="info-item flex items-center mb-6">
              <div className="icon-container p-4 mr-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div className="info-text">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">
                  vijay.singh@kodevortex.in
                  <br />
                  www.kodevortex.in
                </p>
              </div>
            </div>
          </div>

          <form
            className="contact-form flex-1 bg-white bg-opacity-10 px-6 py-8 md:px-10 md:py-10 rounded-3xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9274]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9274]"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9274]"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-6 p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF9274]"
              rows="5"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#CF9274] text-white py-3 px-6 rounded-lg hover:bg-[#B87A5F] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;