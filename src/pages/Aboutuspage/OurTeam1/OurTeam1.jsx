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
    infinite: true, // Loops the images infinitely
    speed: 300, // Animation speed
    slidesToShow: 3, // Number of visible images at once
    slidesToScroll: 1, // Number of images to scroll per swipe
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 2000, // Delay between auto sliding
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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
    <div className="">
      <h1 className=" text-center text-4xl font-bold text-[#CF9274]  tracking-wide text-font py-16">
        OUR TEAM
      </h1>
      <p className="text-white px-[10rem] text-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, velit consequatur ipsum quos ducimus numquam quaerat cum explicabo aspernatur aliquam nesciunt exercitationem at ratione dolorum iure sint sunt, aperiam earum.
      </p>
      <div className="w-full max-w-6xl mt-20 mx-auto">
  <Slider {...settings} className="px-10">
    {teams.map((member, index) => (
      <div key={index} className="w-[100%]  rounded-xl h-[30rem] flex flex-col items-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full  rounded-3xl mb-4"
        />
        <p className="text-white text-lg font-semibold">{member.name}</p>
      </div>
    ))}
  </Slider>
</div>
    </div>
  );
};

export default OurTeam1;
