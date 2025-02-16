import { motion } from "framer-motion";
import arrow from "./arrow.png";
import polygon from "./polygon.png";
const InternshipPage = () => {
  return (
    <>
      <div className="mx-[5%] mr-[10rem]   overflow-hidden h-[47rem] ">
        <div className=" flex   space-x-24 pt-16">
          <div className="text-white   pt-16   ">
            <h1 className="text-4xl font-semibold pl-8">
              Are you looking for an{" "}
              <span className="text-[#CF9274] font-bold">INTERNSHIP?</span>{" "}
            </h1>
            <div className="traking-wider mt-6 text-3xl flex ml-16 space-x-4 font-bold pt-4">
              <img src={arrow} alt="" />

              <button className="bg-[#6764C9] px-4 py-2 rounded-full">
                Find Your Perfect Career Path with Us!
              </button>
            </div>
            <h1 className="pt-2 text-2xl text-start ml-36 tracking-wide mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </h1>
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
      </div>

      <div>
        <h1 className="text-[#CF9274] font-bold text-4xl text-center">
          EXPLORE CAREER INTERNSHIPS
        </h1>
        <div className="mt-28 flex flex-col space-y-36">
          <div className="flex items-center justify-center  ">
            <div className="relative bg-[#0f0f2d] text-white w-[80rem] h-[20rem] rounded-2xl p-10 flex">
              <div className="absolute flex justify-center items-center text-3xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" w-[30rem] h-[5rem] bg-[#056777] blur-xl opacity-95 text-white "></div>
                <h1 className="absolute text-4xl font-semibold">
                  {" "}
                  🎨 CREATIVE ENTHUSIAST
                </h1>
              </div>

              {/* Left Section */}
              <div className="flex relative flex-col items-center justify-center w-1/3">
                <img src={polygon} alt="" />
                <div className="absolute  text-black font-bold flex flex-col items-center justify-center rounded-full ">
                  <span className="text-6xl">UI / UX</span>
                  <span className="text-2xl ">Design Intern</span>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-2/3 flex flex-col justify-center pl-10">
                <ul className=" text-xl mt-24 font-bold">
                  <li>→ Design intuitive</li>
                  <li>→ User-friendly interfaces</li>
                  <li>→ Master Figma, Adobe XD, and prototyping tools.</li>
                </ul>

                <div className="mt-6 flex  flex-col items-end mr-24 ">
                  <button className="bg-[#CF9274] mr-12 font-bold text-black px-6 py-2 rounded-full shadow hover:bg-orange-400 w-40">
                    Apply now
                  </button>
                  <p className=" flex flex-col text-lg mt-2">
                    Send your resume :{" "}
                    <a
                      href="mailto:vijay.singh@kodevortex.in"
                      className="text-[#056777]"
                    >
                      vijay.singh@kodevortex.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center  ">
            <div className="relative bg-[#0f0f2d] text-white w-[80rem] h-[20rem] rounded-2xl p-10 flex">
              <div className="absolute flex justify-center items-center text-3xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className=" w-[30rem] h-[5rem] bg-[#056777] blur-xl opacity-95 text-white "></div>
                <h1 className="absolute text-4xl font-semibold">
                  {" "}
                  🌐 FULL-STACK BUILDER
                </h1>
              </div>

              {/* Left Section */}
              <div className="flex relative flex-col items-center justify-center w-1/3">
                <img src={polygon} alt="" />
                <div className="absolute  text-black font-bold flex flex-col items-center justify-center rounded-full ">
                  <span className="text-6xl">WEB D</span>
                  <span className="text-2xl ">Intern</span>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-2/3 flex flex-col justify-center pl-10">
                <ul className=" text-xl mt-24 font-bold">
                  <li>→ Build dynamic and responsive websites</li>
                  <li>→ Work with MERN stack, React, and Next.js.</li>
                </ul>

                <div className="mt-6 flex  flex-col items-end mr-24 ">
                  <button className="bg-[#CF9274] mr-12 font-bold text-black px-6 py-2 rounded-full shadow hover:bg-orange-400 w-40">
                    Apply now
                  </button>
                  <p className=" flex flex-col text-lg mt-2">
                    Send your resume :{" "}
                    <a
                      href="mailto:vijay.singh@kodevortex.in"
                      className="text-[#056777]"
                    >
                      vijay.singh@kodevortex.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col text-4xl leading-16 font-bold tracking-wide items-center">
          <div className="py-24">
            <h1 className="text-[#056777] ">
              "Your career isn’t just a job—it’s a journey.
            </h1>
            <h1 className="text-white">Let’s help you find the right path!"</h1>
          </div>

          <div className="relative bg-  w-full px-[5%]">
            <div className="flex">
              <div className="">
                <h1
                  className="text-9xl text-transparent"
                  style={{ WebkitTextStroke: "2px gray" }}
                >
                  KODE
                </h1>
                <h1
                  className="text-9xl text-transparent"
                  style={{ WebkitTextStroke: "2px gray" }}
                >
                  VORTEX
                </h1>
              </div>
              <h1 className="text-[#CF9274] text-3xl  ">
                WHY CHOOSE AN INTERNSHIP WITH US
              </h1>
            </div>
            <div className="relative  bottom-16 left-40 flex">
              <div className=" border-[2rem] border-[#056777] bg-black text-white text-6xl p-6 w-[20rem] h-[20rem]">
                1.
              </div>
              <div className="absolute left-40 top-[7rem] text-white">
                <h1>REAL WORLD PROJECT , </h1>
                <h1> NO BUSY WORK</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex items-end  justify-end  w-full px-[5%]">
          <div className="relative  bottom-16 left-60 flex">
            <div className=" border-[2rem] flex justify-end border-[#54677B] bg-[#181739] text-white text-6xl p-6 w-[20rem] h-[20rem]">
              2.
            </div>
            <div className="absolute  -left-60 text-4xl font-bold top-[7rem] text-white">
              <h1>WORK WITH INDUSTRY </h1>
              <h1> PROS AND MENTORS</h1>
            </div>
          </div>
          <div className=" ">
            <h1
              className="text-[8rem] text-transparent"
              style={{ WebkitTextStroke: "2px gray" }}
            >
              INTERN
            </h1>
          </div>
        </div>

        <div className="relative  w-full  bottom-16 left-60 flex">
          <div className=" border-[2rem] border-[#056777] bg-black text-white text-6xl p-6 w-[20rem] h-[20rem]">
            3.
          </div>
          <div className="absolute left-40 text-4xl  font-bold top-[9rem] text-white">
            <h1>FLEXIBLE WORK ENVIRONMENT</h1>
          </div>
        </div>


      <div className=" flex justify-end mx-[5%]">

        <div className="relative    bottom-16 right-48 flex">
            <div className=" border-[2rem] flex justify-end border-[#54677B] bg-[#181739] text-white text-6xl p-6 w-[20rem] h-[20rem]">
              4.
            </div>
            <div className="absolute  -left-48 text-4xl font-bold top-[7rem] text-white">
              <h1>GAIN EXPERIENCE +  </h1>
              <h1> CERTIFICATE</h1>
            </div>
          </div>
          </div>

      </div>
    </>
  );
};

export default InternshipPage;
