import React from 'react'

const projects = () => {
  return (
    <div>

        <div className="flex place-content-center text-center py-10 sm:p-48" >
            <p className="transition ease-in-out rounded-md scale-75 p-5 font-bold text-5xl sm:text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Projects</p>
        </div>

        <div className="flex place-content-center text-center lg:text-left p-10">
          <div className="transition ease-in-out duration-500 hover:scale-110 grid grid-cols-1 lg:flex bg-black bg-opacity-50 md:w-2/4 lg:h-64 font-semibold rounded-md">
            <img src="https://avatars.githubusercontent.com/u/101818213?s=200&v=4.png" className="lg:flex lg:rounded-md lg:h-auto lg:w-auto w-full" />
            <div className="">
              <p className="pt-10 lg:pl-10 pb-5 text-xl">Kyaliko Test</p>
              <div className="flex">
                <p className="lg:pl-10 pb-10 text-lg">This is a test for projects. This may change in the future.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default projects