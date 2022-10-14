import Head from 'next/head'
import Link from 'next/link'

function meow(){
    const uwu = prompt("hi :)");
    if(uwu == "pp20"){
        console.log("user typed correctly")
    }
    console.log("user typed: " + uwu)
}

const kat = () => {
  return (
    <div className="selection:bg-gray-500 selection:bg-opacity-25 h-screen place-content-center flex bg-gradient-to-br from-pink-200 to-sky-200 rotate-[${uwu}] overflow-y-hidden">

        <div className="flex place-content-center p-10 items-center">
            <div className="text-left items-center justify-center font-semibold text-xl hover:scale-110 sm:text-2xl w-auto x bg-black bg-opacity-50 rounded-md p-5 shadow-xl shadow-blue-300 transition ease-in-out duration-500">
                <div className="grid grid-cols-2">
                    <div className="p-10">
                        <img onClick={ meow } src="https://avatars.githubusercontent.com/u/106713009?v=4.png" width="150px" className="transition duration-500 ease-in-out flex rounded-full place-content-center hover:scale-110 " />
                    </div>
                
                    <div className="grid place-content-center text-left items-center pr-10 hover:text-cyan-200 transition ease-in-out duration-500">
                        <p className="text-3xl text-center  pb-5">Kyatto</p>

                        <div>
                            <p className="text-xl">I like cats :3 <br />I created kyaliko too lol</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default kat