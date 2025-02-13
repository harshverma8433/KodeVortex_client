import "./HeroPage.css";
import heroimage from "./hero_image.png";
function HeroPage() {
  return (
    <div className=" h-[550px]  mb-36 mt-10">
    <div className="flex">
            <div className="w-full mx-14">
              <img src={heroimage} className="w-[100%] opacity-75" alt="" />
            </div>
            <div className=" lg:mb-0  absolute">
              <div className="px-3  flex items-center mt-24 ml-24">
                <h1 className="text-white  text-5xl font-bold  leading-relaxed">
                  Your Gateway to <br /> Innovation and <br /> Success
                  Revolutionizing <br />
                  Learning and Software <br /> Solutions
                </h1>
              </div>

             
            </div>
          </div>

       <div className="row mt-16 w-[90%] mx-auto  justify-content-center">
         <div className="col-12">
           <div className="horizontal-band mx-auto"></div>
         </div>
       </div>

   </div>

  
  );
}

export default HeroPage;
