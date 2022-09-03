import React from 'react'

const projects = () => {
  return (
    <div>

        <div className="flex place-content-center text-center py-10 sm:p-48" >
            <p className="transition ease-in-out rounded-md scale-75 p-5 font-bold text-5xl sm:text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Projects</p>
        </div>

        <div className="flex place-content-center text-center p-10">
          <div className="bg-black bg-opacity-50 w-96 p-10 font-semibold rounded-md">
            Not Finished
          </div>
      </div>
    </div>
  )
}

export default projects