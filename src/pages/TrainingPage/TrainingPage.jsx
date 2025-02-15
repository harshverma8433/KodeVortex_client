import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AlgoAcharya from "./AlgoAcharya";
import LAKSHYARITHM from "./LAKSHYARITHM";

const TrainingPage = () => {
  return (
    <>
      <div className="flex relative h-[40rem]    ">
        <div className="absolute w-[80%]  mt-24 ml-12 flex justify-center flex-col items-center px-44  space-y-6 ">
          <div className="w-[45rem] flex justify-end ">
            <h1 className="text-7xl font-bold    text-white text-center ml-">
              DISCOVER THE CAREER TO SKILL up YOURSELF
            </h1>
          </div>
          <p className="text-2xl text-white">
            Unlock the doors to the future career options
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-[#056777] rounded-full px-6 py-2 text-2xl font-semibold text-white">
              Start your journey
            </button>
            <IoIosArrowRoundForward className="text-7xl text-white" />
          </div>
        </div>
        <div className="absolute right-0   flex justify-end   w-[30%] ">
          {/* First Triangle */}
          <div
            className="absolute  top-0 right-0    bottom-0 w-[21rem] h-[38rem] bg-[#056777] opacity-80"
            style={{ clipPath: "polygon(100% 0, 0 40%, 100% 100%)" }}
          >
            1
          </div>

          {/* Second Triangle Overlapping */}
          <div
            className="absolute top-12 right-0  bottom-0 w-[21rem] h-[40rem] bg-[#056777] opacity-80"
            style={{ clipPath: "polygon(100% 0, 0 40%, 100% 100%)" }}
          >
            3
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-col items-center mx-auto left-[50%] right-[50%]">
          <div className="w-[80rem] h-6 bg-[#056777] bottom-0"></div>
          <div className="w-[82rem] h-7 bg-[#54677B] bottom-0"></div>
        </div>
      </div>

      <div className="bg-[#181739] mb-24">
        <h1 className="text-4xl py-16 text-center text-white">
          TRAININGS WE OFFER
        </h1>

        <div className="flex pb-10 justify-center space-x-24  items-center">
          <AlgoAcharya />
          <LAKSHYARITHM />
        </div>
        <div className="flex justify-center items-center pb-16 pt-6 space-x-6">
          <h1 className="text-white text-xl">Want to know more, reach out to us </h1>
          <button className="px-4 py-2 bg-[#CF9274] rounded-full font-bold">CONTACT US</button>
        </div>
      </div>
    </>
  );
};

export default TrainingPage;
