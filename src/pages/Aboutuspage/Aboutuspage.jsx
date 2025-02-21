import OurTeam1 from "./OurTeam1/OurTeam1";
const Aboutuspage = () => {
  return (
    <div className="px-[4%] pb-16">
      <div className="w-full mt-8 h-72 bg-gradient-to-r from-[#5D7284] to-[#3B3A66]"></div>
      <div className="text-white my-10">
        <h1 className="text-3xl font-semibold text text-center">
          {" "}
          <span className="text-[#CF9274] ">WHAT IS</span>{" "}
          <span className="text-[#056777] text-5xl ">KODE</span> VORTEX
        </h1>
        <div className="lg:px-[5%] pl-[5%] flex flex-col space-y-5 my-10">
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

      {/* <div>
        <div className="flex relative  justify-center  flex-col items-center my-32">
          <div className="w-[50rem] h-[40rem] rounded-2xl blur-xl opacity-40 bg-[#056777] mr-[30rem]"></div>
          <div className="absolute">
            <h1 className=" text-[#CF9274] text-center text-4xl font-bold mb-16">
              OUR MISSION
            </h1>
            <div className="">
              <div className="flex space-x-36 items-center  ">
                <div className="w-[28rem] h-[28rem] bg-gray-300 rounded-[2rem] mb-6 lg:mb-0"></div>
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
                <div className="w-[28rem] h-[28rem] bg-gray-300 rounded-[2rem] mb-6 lg:mb-0"></div>
              </div>
            </div>
          </div>
          <div className="w-[50rem] h-[40rem] rounded-2xl blur-xl opacity-40 bg-[#056777] ml-[30rem]"></div>
        </div>
      </div> */}
<div className="px-4  py-8">
  {/* Mission Section */}
  <div className="relative  gap-y-10 flex flex-col  items-center justify-center my-16 lg:my-32">
    {/* Background Blur (Desktop) */}
    <div className="absolute hidden lg:block w-[48rem] h-[38rem]  rounded-2xl blur-xl opacity-40 bg-[#056777]  mr-[30rem]"></div>

    <div className="relative  z-10">
      <h1 className="text-[#CF9274] text-center text-3xl lg:text-4xl font-bold mb-8 lg:mb-16">
        OUR MISSION
      </h1>
      <div className="">
        <div className="flex   flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12  items-center">
          <div className="w-full lg:w-[28rem]  h-[20rem] lg:h-[24rem] bg-gray-300 rounded-[1rem] lg:rounded-[2rem]"></div>
          <div className="max-w-lg">
            <p className="text-white text-lg lg:text-[130%] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Background Blur (Mobile) */}
    <div className="absolute block lg:hidden w-full h-[30rem] rounded-2xl blur-xl opacity-40 bg-[#056777] top-1/2 transform -translate-y-1/2"></div>
  </div>

  {/* Vision Section */}
  <div className="relative flex flex-col  items-center justify-center my-16 lg:my-48">
    {/* Background Blur (Desktop) */}
    <div className="absolute hidden lg:block w-[50rem] h-[40rem] rounded-2xl blur-xl opacity-40 bg-[#056777] ml-[30rem]"></div>

    <div className="relative z-10">
      <h1 className="text-[#CF9274] text-center text-3xl lg:text-4xl font-bold mb-8 lg:mb-16">
        OUR VISION
      </h1>
      <div className="">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 items-center">
          <div className="max-w-lg">
            <p className="text-white text-lg lg:text-2xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
          <div className="w-full lg:w-[28rem] h-[20rem] lg:h-[24rem] bg-gray-300 rounded-[1rem] lg:rounded-[2rem]"></div>
        </div>
      </div>
    </div>
    {/* Background Blur (Mobile) */}
    <div className="absolute block lg:hidden w-full h-[30rem] rounded-2xl blur-xl opacity-40 bg-[#056777] top-1/2 transform -translate-y-1/2"></div>
  </div>
</div>
      <OurTeam1/>
    </div>
  );
};

export default Aboutuspage;
