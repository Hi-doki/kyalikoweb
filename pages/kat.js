import Head from 'next/head'
import Link from 'next/link'

const kat = () => {
  return (
    <div className="selection:bg-gray-500 selection:bg-opacity-25">
        <div className="flex place-content-center text-center py-10 sm:p-48" >
            <p className="transition ease-in-out rounded-md scale-75 p-5 font-bold text-5xl sm:text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Kyatto</p>
        </div>

        <div className="flex place-content-center p-10">
            <div className="text-left items-center justify-center font-semibold text-xl sm:text-2xl w-auto bg-black bg-opacity-50 rounded-md p-5 ">
                <div className="p-10">
                    <img src="https://avatars.githubusercontent.com/u/106713009?v=4.png" width="150px" className="flex rounded-full place-content-center" />
                </div>
                
                <div className="grid place-content-center text-center pb-10">
                    <p className="text-3xl pb-5">Kyatto</p>

                    <div>
                        <p className="text-xl">I like cats :3</p>
                    </div>
                    
                    
                </div>
                <div className="flex place-content-center text-lg pb-10">
                    <Link href="/about">
                       <button className="
                            transition ease-in-out
                            p-2 delay-0 rounded-md w-auto 
                            shadow-lg shadow-indigo-700
                            bg-indigo-500 hover:bg-cyan-200
                            hover:scale-110 hover:text-stone-800 hover:font-semibold hover:shadow-cyan-400
                            active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500 active:text-white 
                            active:font-semibold active:shadow-indigo-700 duration-300" href="/about">
                            Click here
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default kat