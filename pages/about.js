import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About - Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta property="og:title" content="About Us - Kyaliko" />
        <meta property="og:image" content="/PFP1.png" />
        <meta property="og:description" content="well uhm, it tells you about us, just read the title :moyai:" />
        <link rel="icon" href="/kyafav.ico" />
      </Head>
      <div className="flex place-content-center text-center py-10 sm:p-48" >
        <p className="transition ease-in-out rounded-md scale-75 w-80 p-5 font-bold text-5xl sm:text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">About</p>
      </div>

      <div className="flex place-content-center p-10">
        <div className=" text-center font-semibold text-xl sm:text-2xl w-3/4 bg-black bg-opacity-50 rounded-md p-10 ">
          Kyaliko is a small devteam owned by Kyatto and Astromal.
          <div className="p-2">
              Kyaliko creates open-source .NET applications for people to learn how to code easily, instead of looking at a 5 hour video/documentation.
              We currently do not have any of our projects on GitHub however, we will realease them in the next 3 months.
          </div>
          <div>
            <span className="text-blue-200">For our GitHub page, <Link href="/contact">click here </Link>:3</span>
          </div>
        </div>
      </div>
    </div>
  )
}