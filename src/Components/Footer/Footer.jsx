import { Link } from "react-router-dom";
import logo from "./21.png"
import fo1 from "../../../public/cropped-image_1.svg"
import fo2 from "../../../public/cropped-image_2.svg"
import fo3 from "../../../public/cropped-image_3.svg"
import fo4 from "../../../public/cropped-image_4.svg"

const Footer = () => {
  return (
    <footer className="bg-[#181739] text-white pt-10 px-4">
      <div className="container mx-auto">
        {/* "VISIT US" Section */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl">VISIT US</h2>
        </div>

        {/* Social Media Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12 justify-center">
          {[
            {
              url: "https://twitter.com/kodeVortex",
              name: "Twitter",
              icon: fo3
            },
            {
              url: "https://www.instagram.com/kodevortex",
              name: "Instagram",
              icon: fo2,
            },
            {
              url: "https://youtube.com/@kodevortex?si=PKz-yTp_5tH5QLFW",
              name: "YouTube",
              icon:  fo1,
            },
            {
              url: "https://www.linkedin.com/company/kodevortex",
              name: "LinkedIn",
              icon: fo4,
            },
          ].map((social, index) => (
            <div className="text-center" key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-16 h-16 sm:w-24 sm:h-24 mx-auto"
                />
              </a>
              <p className="mt-2">@kodeVortex</p>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-wrap px-24 justify-center sm:justify-between gap-8 text-center sm:text-left">
          {/* Logo Section */}
          <div className="w-full sm:w-auto flex justify-center mb-9">
            <img
              src={logo}
              alt="KodeVortex"
              className="sm:w-22 w-[80%] h-[90%] "
            />
          </div>

          {/* KVTech Section */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h3 className="font-bold text-xl">KodeVortex</h3>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link to="/training" onClick={() => window.scrollTo(0, 0)}>Trainings</Link>
            <Link to="/internship" onClick={() => window.scrollTo(0, 0)}>Internship</Link>  
            <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>

          </div>

          
          {/* Contact Section */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h3 className="font-bold text-xl">Contact</h3>
            <a href="mailto:info@kodevortex.com">Email</a>
            <a href="https://www.linkedin.com/company/kodevortex">LinkedIn</a>
            <a href="https://www.instagram.com/kodevortex">Instagram</a>
            <a href="https://twitter.com/kodeVortex">Twitter (X)</a>
          </div>

          {/* Join Us Section */}
          <div className="flex flex-col space-y-4 text-center sm:text-left">
            <h3 className="font-bold text-xl">Join Us Here</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 px-4 pr-32 text-white bg-gray-800 border border-gray-700 rounded-full w-full"
              />
              <button className="absolute right-0 top-0 bg-[#056777] py-2 px-4 rounded-r-full text-white font-bold">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
          <div className="flex pb-5 flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
           
            <span>© 2024 KodeVortex</span>
            <div className="flex items-center space-x-2">
              <img
                src="../../../public/SSL.jpg"
                alt="Secured with SSL"
                className="w-6 h-6"
              />
              <span>Secured with SSL</span>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
