import "./NewComp.css"
const NewCompBox = () => {
  return (

<>
<div className="w-64 relative">
  <div className="bg-grad-out-box rounded-t-[2rem] px-2  pt-2 h-[400px]">
  <div className="relative h-full flex flex-col  space-y-10 bg-[#3B3A66] text-white rounded-3xl pt-10  px-2 text-center">
       <div className=" bg-gray-500 w-24 h-24 mx-auto mb-4"></div>
       <p className="text-lg px-12">Lorem ipsum dolor sit amet</p>

     </div>
  </div>
  <div className="border-wrapper absolute right-0 left-0 h-[200px]">
    <div className="gradient-border "></div>
  </div>
</div>
<div className='w-64 mt-10 h-8 rounded-3xl bg-box-col'>
        
    </div>
</>


  )
}

export default NewCompBox