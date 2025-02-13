// import galgotia from './galgotia.jpg'
// import gla from "./gla.png"
// import iftm from "./iftm.jpg"
// import iilm from "./iilm.png"
// import kalasalingam from "./kalasalingam.jpg"
// import nims from "./nims.png"
// import sharada from "./sharada.jpg"
// import vishwaniketan from "./vishwaniketan.png"
// import kg_reddy from "./kg_reddy.png"

// const AssociateInstitution = () => {

//   const AssociateInstitutionContent = [
//     galgotia,
//     gla,
//     iftm,
//     iilm,
//     kalasalingam,
//     nims,
//     sharada,
//     vishwaniketan,
//     kg_reddy,

//   ]


//   return (
//     <div className="bg-black text-center py-20">
//         <h1 className="text-font text-white text-2xl pb-10">Associated Institution</h1>
//     {/* First Row - 4 Circles */}
//     <div className="flex justify-center gap-10 mb-10">
//         {AssociateInstitutionContent.slice(0, 4).map((image, index) => (
//           // <div key={index} className="w-36 h-36 bg-[#54677B] rounded-full overflow-hidden">
//             <img key={index}  src={image}  alt={`Institution-${index + 1}`} className="w-40 h-36 rounded-3xl" />
//           // </div>
//         ))}
//       </div>
    
//     {/* Second Row - 5 Circles */}
//     <div className="flex justify-center gap-10">
//         {AssociateInstitutionContent.slice(4).map((image, index) => (
//           // <div key={index + 4} className="w-36 h-36 bg-[#54677B] rounded-full overflow-hidden">
//             <img key={index} src={image} alt={`Institution-${index + 5}`} className="w-48 h-36  rounded-3xl" />
//           // </div>
//         ))}
//       </div>

//     {/* Caption */}
//     {/* <p className="text-white text-font text-xl mt-12">And many more...</p> */}
//   </div>  )
// }

// export default AssociateInstitution

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import galgotia from "./galgotia.jpg";
import gla from "./gla.png";
import iftm from "./iftm.jpg";
import iilm from "./iilm.png";
import kalasalingam from "./kalasalingam.jpg";
import nims from "./nims.png";
import sharada from "./sharada.jpg";
import vishwaniketan from "./vishwaniketan.png";
import kg_reddy from "./kg_reddy.png";

const AssociateInstitution = () => {
  const AssociateInstitutionContent = [
    galgotia,
    gla,
    iftm,
    iilm,
    kalasalingam,
    nims,
    sharada,
    vishwaniketan,
    kg_reddy,
  ];

  const settings = {
    
    infinite: true, // Loops the images infinitely
    speed: 300, // Animation speed
    slidesToShow: 4, // Number of visible images at once
    slidesToScroll: 1, // Number of images to scroll per swipe
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 2000, // Delay between auto sliding
    arrow : false,
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
    <div className="bg-black text-center py-20">
      <h1 className="text-font text-white text-2xl pb-10">
        Associated Institution
      </h1>

      <Slider {...settings} className="px-10">
        {AssociateInstitutionContent.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Institution-${index + 1}`}
              className="w-40 h-36 rounded-3xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AssociateInstitution;
