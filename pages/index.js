import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
`

const Heading = styled.div`
  color: #fff;
  font-size: 10rem;
  font-weight: 700;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyaliko Home</title>
        <meta name="kyaliko uwu" content="nya" />
        <image content="/kyaweb.png" width="1920" height="1080" />
        <desc>Kyaliko is a small dev team lol</desc>
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <Hero>
        <Heading>WIP</Heading>
      </Hero>
    </>
  )
}
