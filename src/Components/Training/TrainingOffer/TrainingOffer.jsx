import "./TrainingOffer.css";
const TrainingOffer = () => {
  return (
    <div className="mt-80 ">
      <p className="text-white pb-16 text-font text-2xl tracking-wider">
        Trainings we offer
      </p>
      <div className="flex space-x-10 h-[50%] justify-center ">
        <div className="w-[40%] flex flex-col items-center rounded-3xl h-[60vh] bg-algo-col">
          <h1 className="text-xl pr-24 font-semibold py-10">ALGOCHARYA</h1>
          <div className="relative flex">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-[#181739] border  border-white rounded-full"
                  style={{ marginLeft: index === 0 ? "0" : "-20px" }}
                ></div>
              ))}
              <div className=" flex items-end text-xs pl-4 text-white">
              <h1 className="">Many More...</h1>
              </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col items-center rounded-3xl h-[60vh] bg-algo-col">
          <h1 className="text-xl pr-24 font-semibold py-10">LAKSHYARITHM</h1>
          <div className="relative flex">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-[#181739] border  border-white rounded-full"
                  style={{ marginLeft: index === 0 ? "0" : "-20px" }}
                ></div>
              ))}
              <div className=" flex items-end text-xs pl-4 text-white">
              <h1 className="">Many More...</h1>
              </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default TrainingOffer;
