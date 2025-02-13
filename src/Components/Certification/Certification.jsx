import "./Certification.css"
import image from "./image.png"
const Certification = () => {
  return (
    <div className="bg-grad-cert flex  justify-center py-16">
        <div>
            <img src={image} className="w-[80%]" alt="certificate.png" />
        </div>
        <div className="w-[40%] flex items-center">
            <h1 className="text-5xl  text-white font-bold">Build your career and achieve certificate to enhance your resume</h1>
        </div>
        
    </div>
  )
}

export default Certification