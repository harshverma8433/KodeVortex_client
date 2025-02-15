import "./SuccessStories.css";
import Slider from "react-slick";

const SuccessStories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };

  const stories = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in  ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem ipsum dolor sit .",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem ipsum "
  ];

  return (
    <div className="bg-[#181739] pb-24">
      <h1 className="text-3xl tracking-wide py-12 text-font text-white ">
        Success Stories
      </h1>
      <div className="flex justify-center relative items-center">
        <div className="relative left-12 bg-[#D9D9D9] flex justify-center items-center h-96 w-[35%]">
          {/* Top left corner line */}
          <div className="absolute top-6 left-2 w-96  h-1 bg-black"></div>
          <div className="absolute top-2 left-6 h-[90%] w-1 bg-black"></div>

          {/* Bottom right corner line */}
          <div className="absolute bottom-6 right-2 w-96 h-1 bg-black"></div>
          <div className="absolute bottom-2 right-6 h-[90%] w-1 bg-black"></div>

          <Slider className=" w-[25rem] pr-10  flex items-center " {...settings} >

          {stories.map((story, index) => (
          // <div key={index} className="bg-[#D9D9D9] p-16 h-96 rounded-lg shadow-lg">
            <p key={index} className="text-center text-gray-700 text-lg">{story}</p>
          // </div>
        ))}
          </Slider>
        </div>
        <div className=" w-96 h-[500px] bg-grad-certificate"></div>
      </div>
    </div>
  );
};

export default SuccessStories;
