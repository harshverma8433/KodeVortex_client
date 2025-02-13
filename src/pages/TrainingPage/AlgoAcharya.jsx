import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlgoAcharyaContent from "../../Contents/AlgoAcharyaContent";
import AlgoAcharyaSliderContent from "../../Contents/AlgoAcharyaSliderContent"
const AlgoAcharya = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Disable navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Transition every 2 seconds
  };


  return (
    <div className="h-[450px]">
      <div className="flex flex-col   md:flex-row space-x-0 md:space-x-8 items-center justify-center">
        {/* Static Section */}
        <div className="mb-8 md:mb-0  w-[60%]">
          <div className="relative flex ">
            <div className="bg-grad1 relative mx-auto bottom-16 right-12 flex justify-center items-center"></div>

            <h1 className="text-4xl absolute left-48 mx-auto text-white text-center ">
              ALGOCHARYA
            </h1>

            <div className="grid absolute grid-cols-2 top-[75px] w- md:grid-cols-4 gap-4 px-4 md:px-0">
              {AlgoAcharyaContent
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-color h-[180px] w-[140px] flex flex-col px-3 justify-evenly items-center text-white rounded-xl"
                  >
                    <h1 className="font-serif">{_.title}</h1>
                    <div className="w-10 overflow-hidden h-10 rounded-full bg-color-1"><img className="h-full w-full" src={_.image} alt="" /> </div>
                    <p className="text-[9px] pl-3 tracking-wider">
                      {_.content}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <Slider
          className="bg-color-2 rounded-xl flex justify-center items-center px-6 w-[320px] h-[250px]"
          {...settings}
        >
          {AlgoAcharyaSliderContent.map((element, index) => (
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

      <div className="bg-grad-purple relative right-80 bottom-60 "></div>
    </div>
  );
};

export default AlgoAcharya;
