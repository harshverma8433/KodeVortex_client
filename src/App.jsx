import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import Training from "./Components/Training/Training";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import Navbar from "./Components/Navbar/Navbar";
import HeroPage from "./Components/HeroPage/HeroPage";
import AboutUsSectioon from "./Components/AboutUsSection/AboutUsSection";
import { Routes, Route, Outlet } from "react-router-dom";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import OurTeam from "./Components/OurTeam/OurTeam";
import MainMemberPage from "./pages/MemberPage/MainMemberPage";
import LoginPage from "../src/AuthenticationPages/LoginPage/LoginPage";
import Register from "../src/AuthenticationPages/Register/Register";
import Otp from "../src/AuthenticationPages/Otp/Otp";
import { Toaster } from "react-hot-toast";
import FormPage from "./pages/FormPage/FormPage";
import InternshipPage from "./pages/InternshipPage/InternshipPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import ChooseUs from "./Components/HeroPage/ChooseUs/ChooseUs";
import SuccessStories from "./Components/SuccessStories/SuccessStories";
import FAQs from "./Components/FAQs/FAQs";
import ContactUs from "./Components/ContactUs/ContactUs";
import CourseWeOffer from "./Components/CourseWeOffer/CourseWeOffer";
import TrainingOffer from "./Components/Training/TrainingOffer/TrainingOffer";
import ServiceSecondSection from "./Components/ServicesSection/ServiceSecondSection/ServiceSecondSection";
import BrochureSection from "./Components/ServicesSection/BrochureSection/BrochureSection";
import AssociateInstitution from "./Components/AssociateInstitution/AssociateInstitution";
import Certification from "./Components/Certification/Certification";
import Navbar1 from "./Components/Navbar/NavBar1";
import Section2 from "./pages/InternshipPage/Section2/Section2";
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4444/get-user", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data.data); // Set the user data properly
        } else {
          setUser(null); // In case of failure
        }
      } catch (error) {
        setUser(null); // In case of an error
        console.error("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, []);

  const MainLayout = () => (
    <div className="bg-black min-h-screen  overflow-hidden">
      <Navbar user={user} setUser={setUser} />
      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
  return (
    <div className="overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <>
                    <HeroPage />
                  <div className="px-[10%]">
                    <TrainingOffer />

                    <CourseWeOffer />
                  </div>

                  <ChooseUs />

                  <div className="px-[10%]">
                    <Training />
                    {/* <ServicesSection /> */}
                    <ServiceSecondSection />
                    <BrochureSection />
                    <Certification />
                    <AssociateInstitution />
                  </div>
                  <SuccessStories />

                  {/* <AboutUsSectioon /> */}
                  <OurTeam />
                  <FormPage />
                  <FAQs />
                  <ContactUs />
                </>
              }
            />

            <Route path="/training" element={<TrainingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/member" element={<MainMemberPage />} />
            <Route path="/internship" element={<><InternshipPage /> <Section2/> </> } />
            <Route path="/course" element={<CoursePage />} />
          </Route>
          <Route
            path="/login"
            element={
              <div className="bg-black px-[10%]">
                {" "}
                <Navbar1 /> <LoginPage />{" "}
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="bg-black px-[10%]">
                {" "}
                <Navbar1 /> <Register />{" "}
              </div>
            }
          />

          <Route path="/sendotp" element={<Otp setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
