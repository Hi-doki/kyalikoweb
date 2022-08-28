import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Hero = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kyaliko Home</title>
        <meta name="kyaliko uwu" content="nya" />
        <meta property="og:title" content="Kyaliko" />
        <meta property="og:image" content="/kyaweb.png" />
        <meta property="og:description" content="A small dev team that is weird yhyh" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <Hero className="">
        <Link href="/about">
        <button className="
          transition ease-in-out
          p-2 delay-0 rounded-md w-60
          bg-indigo-500 hover:bg-cyan-200
          hover:scale-110 hover:text-stone-800 hover:font-semibold
          active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500
          active:text-white active:w-50 active:font-semibold
          duration-300" href="/about">
          Press Here
        </button>
        </Link>
        
      </Hero>
    </div>
  )
}
