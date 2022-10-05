import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="selection:bg-gray-500 selection:bg-opacity-25">
      <Head>
        <title>Home - Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta property="og:title" content="Home - Kyaliko" />
        <meta property="og:image" content="/PFP1.png" />
        <meta property="og:description" content="Home page for a random dev team lol" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <div className="flex place-content-center text-center pt-48" >
        <p id="uwu" className="transition ease-in-out rounded-md scale-75 p-5   font-bold text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500"><span className="transition ease-in-out duration-500 hover:text-[#FFFFFF00] bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-200">Welcome to </span><span className="transition ease-in-out duration-500 hover:text-[#FFFFFF00] bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-300">Kyaliko</span></p>
      </div>

      <div id="hehe" className="flex place-content-center pt-36 pb-48">
        <Link href="/about">
        <button className="
          transition ease-in-out
          p-2 delay-0 rounded-md w-60 
          shadow-lg shadow-indigo-700
        bg-indigo-500 hover:bg-cyan-200
         hover:scale-110 hover:text-stone-800 hover:font-semibold hover:shadow-cyan-400
         active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500 active:text-white 
         active:w-50 active:font-semibold active:shadow-indigo-700 duration-300" href="/about">
          Click here
        </button>
        </Link>
      </div>
    </div>
  )
}
