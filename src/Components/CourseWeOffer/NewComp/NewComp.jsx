import NewCompBox from './NewCompBox'

const NewComp = () => {

  const rr = [

    { id: 1, name: 'Python & Machine Learning',title:"Develop an AI-Powered Travel Assistant Like a Google Travel Engineer" , uniq1 : "✔ Fine-tuned LLMs for real-time query processing" ,uniq2:"✔ Seamless API integration with airlines, hotels, and transport services",uniq3:"✔ Personalized itinerary generation with AI-based travel recommendations",uniq4:"✔ Dynamic pricing and availability updates in real-time", tech_stack:"Fine-tuned LLMs, Apigee (API management), MERN stack" },
    { id: 2, name: 'Web Development ',title:"Build a Live Streaming App Like a Twitch Engineer" , uniq1 : "✔ WebRTC-powered real-time video streaming" ,uniq2:"✔ AI-driven video quality optimization based on network conditions",uniq3:"✔ Live chat and reactions with real-time synchronization",uniq4:"✔ Serverless backend for scalable content delivery", tech_stack:"WebRTC, Node.js, Redis, React.js, AWS Lambda, FFmpeg" },
    { id: 3, name: 'MLOps',title:"Architect AI Infrastructure Like an NVIDIA Engineer" , uniq1 : "✔ Real-time hyperparameter tuning based on live performance" ,uniq2:"✔ Auto-scaling inference pipelines with GPU optimization",uniq3:"✔ On-the-fly model compression for low-latency serving",uniq4:"✔ Smart traffic routing to the best-performing models", tech_stack:"TensorFlow, Kubernetes, ONNX, AWS Fargate, Apache Kafka" },
   
  ]
  return (
    <div className='flex space-x-20 my-16 justify-center'>
        {rr.map((element , idx) => {
            return (
                <div key={idx}>
                <NewCompBox element={element}/>
                </div>
            )
        })}
    </div>
  )
}

export default NewComp