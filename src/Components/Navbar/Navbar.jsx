import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import logo from "./logo.png";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccount, setopenAccount] = useState(false);
  const [text, setText] = useState("Joint Venture");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Joint Venture" ? "Kodebumps" : "Joint Venture"
      );
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when screen size exceeds 1100px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      const url = "http://localhost:4444/logout";
      const response = await axios.post(url, {}, { withCredentials: true });

      if (response.status === 200) {
        toast.success(response.data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error("Error while logging out!!!");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    navigate(path); // Navigate to the desired route
  };

  return (
    <nav className="flex w-full justify-between px-[4%] mb-4 pt-4 items-center font-sans">
      <div className="flex items-center ">
        <Link to="/" className="flex h-24 items-center">
          <div className="flex items-center ">
            <img src={logo} alt="logo.png" className="w-[55%] h-[5%]" />
            <h1 className="kodev-font ">
              <span className="kode-col text-xl ">KODE</span>
              <span className="text-white text-xl ">VORTEX</span>
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-3">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center font-sans space-x-0.5 text-sm text-white">
          <hr className="w-[1px] h-8 bg-white" />
          <Link
            to="/"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/"
                ? "border-b-2 mx-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 mx-2 hover:border-[#3da9b9]"
            }`}
          >
            Home
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/training"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/training"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Trainings
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/internship"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/internship"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Internship
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/about-us"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/about-us"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            About us
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/contact-us"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/contact-us"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Contact us
          </Link>

          {user ? (
            <div className="relative">
              <MdAccountCircle
                onClick={() => setopenAccount(!openAccount)}
                className="text-4xl cursor-pointer bg-col-7"
              />
              {openAccount && (
                <div className="absolute bg-zinc-800 rounded-xl w-36 top-full mt-2">
                  <div className="flex flex-col items-center">
                    <h1 className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center">
                      {user.name}
                    </h1>
                    <button
                      onClick={handleLogout}
                      className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/kodebumps">
              <div className="butt text-white rounded-full">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fade-in-out">{text}</span>
              </div>
            </Link>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-black text-white z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={() => handleLinkClick("/")} // Close menu and navigate
              className={`px-4 text-base py-2 rounded-full ${
                location.pathname === "/"
                  ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                  : "hover:border-b-4 hover:border-[#3da9b9]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/training"
              onClick={() => handleLinkClick("/training")} // Close menu and navigate
              className={`px-4 text-base py-2 rounded-full ${
                location.pathname === "/training"
                  ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                  : "hover:border-b-4 hover:border-[#3da9b9]"
              }`}
            >
              Trainings
            </Link>
            <Link
              to="/internship"
              onClick={() => handleLinkClick("/internship")} // Close menu and navigate
              className={`px-4 text-base py-2 rounded-full ${
                location.pathname === "/internship"
                  ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                  : "hover:border-b-4 hover:border-[#3da9b9]"
              }`}
            >
              Internship
            </Link>
            <Link
              to="/about-us"
              onClick={() => handleLinkClick("/about-us")} // Close menu and navigate
              className={`px-4 text-base py-2 rounded-full ${
                location.pathname === "/about-us"
                  ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                  : "hover:border-b-4 hover:border-[#3da9b9]"
              }`}
            >
              About us
            </Link>
            <Link
              to="/contact-us"
              onClick={() => handleLinkClick("/contact-us")} // Close menu and navigate
              className={`px-4 text-base py-2 rounded-full ${
                location.pathname === "/contact-us"
                  ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                  : "hover:border-b-4 hover:border-[#3da9b9]"
              }`}
            >
              Contact us
            </Link>
            {user ? (
              <div className="relative">
                <MdAccountCircle
                  onClick={() => setopenAccount(!openAccount)}
                  className="text-4xl cursor-pointer bg-col-7"
                />
                {openAccount && (
                  <div className="absolute bg-zinc-800 rounded-xl w-36 top-full mt-2">
                    <div className="flex flex-col items-center">
                      <h1 className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center">
                        {user.name}
                      </h1>
                      <button
                        onClick={handleLogout}
                        className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/kodebumps" onClick={() => handleLinkClick("/kodebumps")}>
                <div className="butt text-white rounded-full">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fade-in-out">{text}</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;