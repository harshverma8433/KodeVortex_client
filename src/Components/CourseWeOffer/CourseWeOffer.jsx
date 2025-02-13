import Boxes from "./boxes/Boxes";
import "./CourseWeOffer.css";
import NewComp from "./NewComp/NewComp";
const CourseWeOffer = () => {
  return (
    <div className="text-white my-24">
      <div className="cwo-font text-white text-2xl text-center pb-12 font-medium">
        COURSE WE OFFER
      </div>
      <div className="space-y-5">
        <div className="flex space-x-10  justify-center">
          {Array(4)
            .fill()
            .map((_ , idx) => {
              return (
                <div key={idx}>
                  <Boxes />
                </div>
              );
            })}
        </div>
        <div className="flex space-x-10  justify-center">
          {Array(3)
            .fill()
            .map((_, idx) => {
              return (
                <div key={idx}>
                  <Boxes />
                </div>
              );
            })}
        </div>
        <div className="flex space-x-10  justify-center">
          {Array(4)
            .fill()
            .map((_, idx) => {
              return (
                <div key={idx}>
                  <Boxes />
                </div>
              );
            })}
        </div>
      </div>
      <NewComp/>
    </div>
  );
};

export default CourseWeOffer;
