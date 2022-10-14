import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="selection:bg-gray-500 selection:bg-opacity-25">
      <Head>
        <title>Home - Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta name="description" content="Home page for a random dev team lol" />
        <meta property="og:title" content="Home - Kyaliko" />
        <meta property="og:image" content="/PFP1.png" />
        <meta property="og:description" content="Home page for a random dev team lol" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
