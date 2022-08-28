import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`

const Container2 = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: left;
  background: #000;
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
        <Heading>Contact </Heading>
      </Hero>
      <Container2>
        <Para>
        <a href="https://discord.gg/K4h2AbdhKw"> Discord</a>
        </Para>
      </Container2>
      
    </>
  )
}