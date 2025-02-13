import NewCompBox from './NewCompBox'

const NewComp = () => {
  return (
    <div className='flex space-x-10 my-16 justify-center'>
        {Array(3).fill().map((_ , idx) => {
            return (
                <div key={idx}>
                <NewCompBox/>
                </div>
            )
        })}
    </div>
  )
}

export default NewComp