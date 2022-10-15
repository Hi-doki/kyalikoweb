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
    <div className="selection:bg-gray-500 selection:bg-opacity-25 text-sky-100 h-screen place-content-center flex bg-gradient-to-br from-orange-800 to-black rotate-[${uwu}] overflow-y-hidden">

        <div className="flex place-content-center p-10 items-center">
            <div className="text-left items-center justify-center font-semibold text-xl hover:scale-110 sm:text-2xl w-auto x bg-orange-900 bg-opacity-50 rounded-md p-5 shadow-xl shadow-orange-900 transition ease-in-out duration-500">
                <div className="grid grid-cols-2 px-5">
                    <div className="p-10">
                        <img onClick={ meow } src="https://cdn.discordapp.com/avatars/716728138222010378/2099b3dc4216a46def92cb5646e6534b.png?size=2048" width="150px" className="transition duration-500 ease-in-out flex rounded-full place-content-center hover:scale-110 " />
                    </div>
                
                    <div className="grid place-content-center text-left items-center pr-10 hover:text-white transition ease-in-out duration-500">
                        <p className="text-3xl text-center  pb-5">ham</p>

                        <div>
                            <p className="text-xl">shush <br />Idk what to put here so yh idk lol</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default kat