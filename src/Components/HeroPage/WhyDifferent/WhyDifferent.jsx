import "./WhyDifferent.css"
const WhyDifferent = () => {
  return (
    <div className='text-white mt-10 flex flex-col items-center'>
        <h1 className="text-[#CF9274] text-xl font-bold pb-12 tracking-wide">WHAT MAKE US DIFFERENT</h1>
        <div className="flex justify-center space-x-14">
        {
            Array(4).fill().map((element  , index) => {
                return(
                    <div key={index}>
                        <div className='w-40 h-40 bg-grad-wd  rounded-full '>
                            
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default WhyDifferent