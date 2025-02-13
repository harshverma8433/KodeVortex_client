import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LakshyarithmSliderContent from "../../Contents/LakshyarithmSliderContent";
import LakshyarithmContent from "../../Contents/LakshyarithmContent";

const LAKSHYARITHM = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="h-[450px]">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-16 mt-24 items-center justify-center">
        {/* Slider Section */}
        <Slider
          className="bg-color-2 mt-2 rounded-xl flex justify-center items-center px-6 w-[320px] h-[250px]"
          {...settings}
        >
          {LakshyarithmSliderContent.map((element, index) => (
            <div key={index} className="relative rounded-xl">
              <img
                src={element.image}
                alt={`Slide ${index + 1}`}
                className="w-[300px] h-[220px] object-cover rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50">
                <div className="w-16 h-16 rounded-full bg-color-1"></div>
                <h1 className="text-xs pl-6 text-white p-3">
                  {element.content}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
        {/* Static Section */}
        <div className="mb-8 md:mb-0  w-[60%]">
          <div className="relative flex ">
            <div className="bg-grad1 relative mx-auto right-12 bottom-16 flex justify-center items-center"></div>

            <h1 className="text-4xl absolute left-48 mx-auto text-white text-center ">
              LAKSHYARITHM
            </h1>

            <div className="grid absolute top-[75px] grid-cols-2   w- md:grid-cols-4 gap-4 px-4 md:px-0">
              {LakshyarithmContent.map((_, i) => (
                <div
                  key={i}
                  className="bg-color h-[180px] w-[140px] flex flex-col px-3 justify-evenly items-center text-white rounded-xl"
                >
                  <h1 className="font-serif">{_.title}</h1>
                  <div className="w-10 h-10 overflow-hidden rounded-full bg-color-1">
                    
                    <img src={_.image} className="h-full w-full" alt="" />
                  </div>
                  <p className="text-[9px] pl-3 tracking-wider">{_.content} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="px-8 pt-16 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit
        doloribus illum! Nihil corporis deserunt eum voluptatibus aliquam ipsa
        ab harum incidunt libero dolores, nulla, ad odio? Voluptates, labore
        rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        odit doloribus illum! Nihil corporis deserunt eum voluptatibus aliquam
        ipsa ab harum incidunt libero dolores, nulla, ad odio? Voluptates,
        labore rerum.
      </h1>

      <div className="bg-grad-purple relative right-[-1200px] bottom-80 "></div>
    </div>
  );
};

export default LAKSHYARITHM;
