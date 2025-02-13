import "./NewComp.css"
const NewCompBox = ({element}) => {
  return (

<>
<div className="w-64 relative">
  <div className="bg-grad-out-box rounded-t-[2rem] px-2  pt-2 h-[400px]">
  <div className="relative h-full flex flex-col  space-y-3 bg-[#3B3A66] text-white rounded-3xl pt-4  px-1.5 text-center">
       <div className=" bg-gray-500 mb-2 rounded-2xl">{element.name}</div>
       <p className="text-md">{element.title}</p>
       <p className="text-sm">{element.uniq1}</p>
       <p className="text-sm">{element.uniq2}</p>
       <p className="text-sm">{element.uniq3}</p>
       <p className="text-sm">{element.uniq4}</p>

     </div>
  </div>
  <div className="border-wrapper absolute right-0 left-0 h-[200px]">
    <div className="gradient-border "></div>
  </div>
</div>
<div className="w-64 flex items-center text-black overflow-hidden whitespace-nowrap mt-10 h-8 rounded-3xl bg-box-col">
  <div className="animate-marquee inline-block">
    Tech Stack - {element.tech_stack}
  </div>
</div>

</>


  )
}

export default NewCompBox