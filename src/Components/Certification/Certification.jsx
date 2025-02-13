import "./Certification.css"
import image from "./certificte.jpg"
const Certification = () => {
  return (
    <div className="bg-grad-cert flex  px-20 py-16">
        <div className="w-[50%] h-ffull ">
            <img src={image} className="w-[80%]" alt="certificate.png" />
        </div>
        <div className="w-[50%] flex  items-center">
            <h1 className="text-5xl  text-white font-bold">Build your career and achieve certificate to enhance your resume</h1>
        </div>
        
    </div>
  )
}

export default Certification