import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyaliko Dev</title>
        <meta name="kyaliko uwu" content="nya" />
        <meta property="og:title" content="Kyaliko" />
        <meta property="og:image" content="/kyaweb.png" />
        <meta property="og:description" content="A small dev team that is weird yhyh" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <div className="flex place-content-center text-center p-48" >
        <p className="transition ease-in-out rounded-md scale-75 p-5 font-bold text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Contact </p>
      </div>

      <div className="flex gap-4 place-content-center">
          <Link href="https://discord.com/invite/K4h2AbdhKw/">
           <button className="
              transition ease-in-out
              p-2 delay-0 rounded-md w-60 
             bg-indigo-500 hover:bg-cyan-200
             hover:scale-110 hover:text-stone-800 hover:font-semibold
             active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500 active:text-white active:w-50 active:font-semibold duration-300">
             Discord
           </button>
          </Link>
          <Link href="https:/github.com/kyaliko">
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
         </Link>
        
      </div>

      <div className="flex px-10 gap-5 py-5 place-content-center">
        <div className="flex transition ease-in-out duration-300 items-center place-content-center gap-2 p-2 py-2 rounded-md bg-opacity-0 bg-black hover:bg-opacity-50 hover:scale-110">
          <img className="rounded-full" src="https://avatars.githubusercontent.com/u/106713009?v=4" width="50"/>
          <div>
            <p class="font-semibold">
              kyatto<span className="text-slate-500 text-sm">#2671</span>
            </p>
          </div>
        </div>
        <div className="flex transition ease-in-out duration-300 text-semibold items-center place-content-center gap-2 p-2 py-2 rounded-md bg-opacity-0 bg-black hover:bg-opacity-50 hover:scale-110">
          <img className="rounded-full" src="https://cdn.discordapp.com/avatars/500392354105131009/a_fe4fce34e7b66c72492bce68c31418a2.gif" width="50"/>
          <div>
            <p class="font-semibold">
              astromal<span className="text-slate-500 text-sm">#0001</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex place-content-center text-center p-10">
        <div className="bg-black bg-opacity-50 w-96 p-10 font-semibold rounded-md">
          Kyaliko currently does not use a custom email. Please use Github issues or our Discord server for support.
        </div>
        
      </div>
    </div>
  )
}