import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Hero = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container2 = styled.div`
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
`

const Heading = styled.div`
  color: #fff;
  font-size: 72px;
  font-weight: 700;
`
const Para = styled.div`
  color: #9182DF;
  font-size: 48px;
  font-weight: 700;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyaliko Dev</title>
        <meta name="kyaliko uwu" content="nya" />
        <meta property="og:title" content="Kyaliko" />
        <meta property="og:image" content="/kyaweb.png" />
        <meta property="og:description" content="A small dev team that is weird yhyh" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <Hero>
        <Heading className="transition ease-in-out rounded-md scale-75 p-5 hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Contact </Heading>
      </Hero>
      <Container2>
      <Link href="https://discord.com/invite/K4h2AbdhKw/">
        <button className="
          transition ease-in-out
          p-2 delay-0 rounded-md w-60
          bg-indigo-500 hover:bg-cyan-200
          hover:scale-110 hover:text-stone-800 hover:font-semibold
          active:scale-75 active:bg-gradient-to-r from-indigo-500 to-violet-500
          active:text-white active:w-50 active:font-semibold
          duration-300">
          Our Discord Server :)
        </button>
        </Link>
      </Container2>
      
    </>
  )
}