import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyaliko Home</title>
        <meta name="kyaliko uwu" content="nya" />
        <meta property="og:title" content="Kyaliko" />
        <meta property="og:image" content="/kyaweb.png" />
        <meta property="og:description" content="A small dev team that is weird yhyh" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <div className="flex place-content-center text-center pt-48" >
        <p className="transition ease-in-out rounded-md scale-75 p-5  font-bold text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Welcome to <span className="">Kyaliko</span></p>
        <div className="text-white bg-clip-text bg-gradient-to-br from-teal-100 to-cyan-300">
          meow
        </div>
      </div>

      <div className="flex place-content-center pt-36 pb-64">
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
