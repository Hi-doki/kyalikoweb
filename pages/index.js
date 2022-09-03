import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta property="og:title" content="Home - Kyaliko" />
        <meta property="og:image" content="/PFP1.png" />
        <meta property="og:description" content="Home page for a random dev team lol" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <div className="flex place-content-center text-center pt-48" >
        <p className="transition ease-in-out rounded-md scale-75 p-5  font-bold text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Welcome to <span className="transition ease-in-out duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-teal-100 to-cyan-300">Kyaliko</span></p>
      </div>

      <div className="flex place-content-center pt-36 pb-48">
        <Link href="/about">
        <button className="
          transition ease-in-out
          p-2 delay-0 rounded-md w-60
          bg-indigo-500 hover:bg-cyan-200
          hover:scale-110 hover:text-stone-800 hover:font-semibold
          active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500
          active:text-white active:w-50 active:font-semibold
          duration-300" href="/about">
          Click here
        </button>
        </Link>
      </div>
    </div>
  )
}
