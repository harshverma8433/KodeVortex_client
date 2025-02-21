import suraj_nayak from "./suraj_nayak.jpg";
import sonal_mittal from "./sonal_mittal.jpg";
import rishabh_triphati from "./rishabh_triphati.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam1 = () => {
  const teams = [
    { name: "Suraj Nayak", image: suraj_nayak },
    { name: "Sonal Mittal", image: sonal_mittal },
    { name: "Rishabh Tripathi", image: rishabh_triphati }
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      <h1 className="text-center text-4xl font-bold text-[#CF9274] tracking-wide py-8 md:pb-16">
        OUR TEAM
      </h1>
      <p className="text-white px-4 md:px-[10rem] text-lg md:text-2xl text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, velit consequatur ipsum quos ducimus numquam quaerat cum explicabo aspernatur aliquam nesciunt exercitationem at ratione dolorum iure sint sunt, aperiam earum.
      </p>
      <div className="mt-10 mx-auto     px-4 ml-12 mr-16 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {teams.map((member, index) => (
            <div key={index} className="px-2">
              <div className="w-full rounded-xl h-[16rem] md:h-[30rem] flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[25rem] object-cover rounded-3xl mb-4"
                />
                <p className="text-white text-lg font-semibold">{member.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam1;