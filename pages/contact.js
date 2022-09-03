import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyaliko Dev</title>
        <meta name="Contact - Kyaliko" content="nya" />
        <meta property="og:title" content="Contact Us - Kyaliko" />
        <meta property="og:image" content="/PFP1.png" />
        <meta property="og:description" content="This page contains information on how to contact us" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <div className="flex place-content-center text-center py-10 sm:p-48" >
        <p className="transition ease-in-out rounded-md scale-75 p-5 font-bold text-5xl sm:text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Contact </p>
      </div>

      <div className="grid grid-cols-1 gap-y-2 text-center sm:flex sm:gap-4 sm:place-content-center">
          <a href="https://discord.com/invite/K4h2AbdhKw/">
           <button className="
              transition ease-in-out
              p-2 delay-0 rounded-md w-60 
             bg-indigo-500 hover:bg-cyan-200
             hover:scale-110 hover:text-stone-800 hover:font-semibold
             active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500 active:text-white active:w-50 active:font-semibold duration-300">
             Discord
           </button>
          </a>
          <a href="https://github.com/kyaliko/">
            <button className="
              transition ease-in-out
              p-2 delay-0 rounded-md w-60
              bg-indigo-500 hover:bg-cyan-200
              hover:scale-110 hover:text-stone-800 hover:font-semibold
              active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500
              active:text-white active:w-50 active:font-semibold
             duration-300">
             Github
           </button>
         </a>
        
      </div>

      <div className="sm:flex px-10 gap-5 py-5 sm:place-content-center">
        <div className="flex transition ease-in-out duration-300 items-center place-content-center gap-2 p-2 py-2 rounded-md bg-opacity-0 bg-black hover:bg-opacity-50 hover:scale-110">
          <img className="rounded-full" src="https://avatars.githubusercontent.com/u/106713009?v=4.png" alt="" width="50" height="50"/>
          <div>
            <p className="font-semibold">
              kyatto<span className="text-slate-500 text-sm">#2671</span>
            </p>
          </div>
        </div>
        <div className="flex transition ease-in-out duration-300 text-semibold items-center place-content-center gap-2 p-2 py-2 rounded-md bg-opacity-0 bg-black hover:bg-opacity-50 hover:scale-110">
          <img className="rounded-full" src="https://cdn.discordapp.com/avatars/500392354105131009/a_fe4fce34e7b66c72492bce68c31418a2.gif" alt="" width="50" height="50"/>
          <div>
            <p className="font-semibold">
              astromal<span className="text-slate-500 text-sm">#0001</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex place-content-center text-center p-10">
        <div className="bg-black bg-opacity-50 w-96 p-10 font-semibold rounded-md">
          Alternatively, you can email <a href="mailto:support@kyaliko.com">support@kyaliko.com</a>
        </div>
        
      </div>
    </div>
  )
}