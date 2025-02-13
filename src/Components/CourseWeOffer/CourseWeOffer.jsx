import Boxes from "./boxes/Boxes";
import "./CourseWeOffer.css";
import NewComp from "./NewComp/NewComp";
import csharp from "./csharp.jpg";
import go from "./go.jpg";
import java from "./java.jpg";
import js from "./js.jpg";
import mern from "./mern.jpg";
import mongodb from "./mongodb.jpg";
import git from "./git.jpg";
import github from "./github.jpg";
import python from "./python.jpg";

const courses = [
  { image: csharp, title: "C#" },
  { image: go, title: "Go" },
  { image: java, title: "Java" },
  { image: js, title: "JavaScript" },
  { image: mern, title: "MERN Stack" },
  { image: mongodb, title: "MongoDB" },
  { image: git, title: "Git" },
  { image: github, title: "GitHub" },
  { image: python, title: "Python" },
];

const CourseWeOffer = () => {
  return (
    <div className="text-white my-24">
      <div className="cwo-font text-white text-2xl text-center pb-12 font-medium">
      TECHNOLOGIES WE HAVE      </div>
      <div className="space-y-5">
        {/* First Row */}
        <div className="flex space-x-10  justify-center">
          {courses.slice(0, 4).map((course, idx) => (
            <div key={idx}>
              <Boxes image={course.image} title={course.title} />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex space-x-10 justify-center">
          {courses.slice(4, 9).map((course, idx) => (
            <div key={idx}>
              <Boxes image={course.image} title={course.title} />
            </div>
          ))}
        </div>

        
      </div>
      <NewComp />
    </div>
  );
};

export default CourseWeOffer;
