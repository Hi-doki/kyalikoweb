import React from 'react'
import Link from 'next/link'


const kyatto = () => {
  return (
    <div className="bg-white text-black selection:bg-[#00000050] ">
        <div className="flex place-content-end relative p-5">
            <Link href="https://kyaliko.com/">
                <div>
                    <button className="p-2 w-10 text-xl  bg-slate-100 rounded-md font-semibold after:content-['×']">

                    </button>
                </div>
            </Link>
            
        </div>
        <div className="p-20 grid bg-fixed backdrop-blur-md ">
            <div className="text-5xl font-bold">
                Kyatto
            </div>
            <div className="text-xl pt-5 font-bold">
                I create apps lol
            </div>
            
            <div className="pt-5 font-semibold">
                <Link href="https://github.com/kyaliko">
                    <button className="transition ease-in-out duration-500 p-2 bg-pink-100 rounded-md hover:outline-violet-200 hover:outline-4 outline-offset-4">
                        My GitHub
                    </button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default kyatto