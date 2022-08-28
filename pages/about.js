import Head from 'next/head'
import styled from 'styled-components'

const Container1 = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`

const Container2 = styled.div`
  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background: #000;
`

const Heading = styled.div`
color: #fff;
font-size: 72px;
font-weight: 700;
`

const Para = styled.div`
  color: #fff;
  font-size: 36px;
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
      <Container1>
        <Heading>About</Heading>
      </Container1>

      <Container2>
        <Para>
          Kyaliko is good dev team with cool website yay :3
        </Para>
      </Container2>
    </>
  )
}