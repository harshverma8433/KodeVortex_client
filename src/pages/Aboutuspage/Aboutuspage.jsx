import OurTeam1 from "./OurTeam1/OurTeam1";
const Aboutuspage = () => {
  return (
    <div className="px-[5%] pb-16">
      <div className="w-full mt-8 h-72 bg-gradient-to-r from-[#5D7284] to-[#3B3A66]"></div>
      <div className="text-white my-10">
        <h1 className="text-3xl font-semibold text text-center">
          {" "}
          <span className="text-[#CF9274] ">WHAT IS</span>{" "}
          <span className="text-[#056777] text-5xl ">KODE</span> VORTEX
        </h1>
        <div className=" px-[3%] flex flex-col space-y-5 my-10">
          <h1 className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper
            scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque
            mi, in malesuada felis madf
          </h1>
          <h1 className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper
            scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque
            mi, in malesuada felis madf
          </h1>
        </div>
      </div>

      <div>
        <div className="flex relative  justify-center  flex-col items-center my-32">
          <div className="w-[50rem] h-[40rem] rounded-2xl blur-xl opacity-40 bg-[#056777] mr-[30rem]"></div>
          <div className="absolute">
            <h1 className=" text-[#CF9274] text-center text-4xl font-bold mb-16">
              OUR MISSION
            </h1>
            <div className="">
              <div className="flex space-x-36 items-center  ">
                <div className="w-[28rem] h-[28rem] bg-gray-300 rounded-[2rem] mb-6 md:mb-0"></div>
                <div className="max-w-lg">
                  <p className="text-white text-2xl text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ullamcorper scelerisque mi, in malesuada felis
                    malesuada vel. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nunc ullamcorper scelerisque mi, in
                    malesuada felis malesuada vel. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc ullamcorper scelerisque
                    mi, in malesuada felis malesuada vel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative  justify-center  flex-col items-center my-32">
          <div className="absolute">
            <h1 className=" text-[#CF9274]  text-center text-4xl font-bold mb-16">
              OUR VISION
            </h1>
            <div className="">
              <div className="flex space-x-36 items-center  ">
                <div className="max-w-lg">
                  <p className="text-white text-2xl text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ullamcorper scelerisque mi, in malesuada felis
                    malesuada vel. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nunc ullamcorper scelerisque mi, in
                    malesuada felis malesuada vel. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc ullamcorper scelerisque
                    mi, in malesuada felis malesuada vel.
                  </p>
                </div>
                <div className="w-[28rem] h-[28rem] bg-gray-300 rounded-[2rem] mb-6 md:mb-0"></div>
              </div>
            </div>
          </div>
          <div className="w-[50rem] h-[40rem] rounded-2xl blur-xl opacity-40 bg-[#056777] ml-[30rem]"></div>
        </div>
      </div>

      <OurTeam1/>
    </div>
  );
};

export default Aboutuspage;
