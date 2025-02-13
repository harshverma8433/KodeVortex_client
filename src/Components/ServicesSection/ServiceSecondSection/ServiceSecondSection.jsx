import logodesign from "./Logo_design.png"
import "./ServiceSecondSection.css"
const ServiceSecondSection = () => {
    const items = Array(5).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

    return (
      <div className="flex  mb-4 justify-center items-center min-h-screen bg-black text-white relative">
        {/* Central Circle */}

        <img src={logodesign} className="w-60 " alt="logo..png" />
        
  
        {/* Rotated Elements */}
        {items.map((text, index) => (
          <div
            key={index}
            className="absolute w-40 h-40 bg-service-sec-col   text-white p-4 rounded-full flex justify-center items-center text-xs pl-6  text-start shadow-md"
            style={{
              transform: `rotate(${index * 660}deg) translate(16rem) rotate(-${index * 660}deg)`,
            }}
          >
            {text}
          </div>
        ))}


        
      </div>
    );
}

export default ServiceSecondSection