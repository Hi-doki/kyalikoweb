import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const meow = () => {
  prompt("meow");
}

const projects = () => {
  return (
    <div onInput={meow} className="selection:bg-gray-500 selection:bg-opacity-25 ">
      <Navbar />
        <Head>
          <title>Projects - Kyaliko</title>
          <meta name="Kyaliko" content="nya" />
          <meta name="description" content="This page contains promoted projects" />
          <meta property="og:title" content="Our Projects - Kyaliko" />
          <meta property="og:image" content="/PFP1.png" />
          <meta property="og:description" content="This page contains our published projects" />
          <link rel="icon" href="/kyafav.ico" />
        </Head>

        <div className="flex place-content-center text-center py-10 sm:p-48" >
            <p className="transition ease-in-out rounded-md scale-75 p-5 font-bold text-5xl sm:text-7xl hover:bg-black hover:bg-opacity-20 hover:scale-100 duration-500">Promote</p>
        </div>

        <div className="flex place-content-center text-center lg:text-left p-10">
          <div className="transition ease-in-out duration-500 hover:scale-110 grid grid-cols-1 lg:flex bg-black bg-opacity-50 md:w-2/4 lg:h-64 font-semibold rounded-md overflow-y-scroll 2xl:overflow-clip">
            <img src="/FXS.png" className="lg:flex lg:rounded-md lg:h-auto lg:w-auto w-full" />
            <div className="">
              <p className="pt-10 lg:pl-10 pb-5 text-xl">FXS - Kanayatto</p>
              <div className="flex">
                <p className="lg:pl-10 lg:pr-10 text-xs xl:text-sm 2xl:text-[16px]">
                    This project has been dead since 2020 and will not be revived,
                    im keeping the repository though because i want it to still be here lol.
                </p>
              </div>
              <div className="flex place-content-center lg:place-content-end p-10 lg:pb-10 lg:pr-10 2xl:p-10">
                <a href="https://github.com/kanayatto/FXS">
                    <button className="transition ease-in-out duration-500 p-2 w-20 rounded-md bg-blue-600 hover:bg-blue-300">
                        GitHub
                    </button>
                </a>
              </div>
            </div>
          </div>
        </div>



        <div className="flex place-content-center text-center lg:text-left p-10">
          <div className="transition ease-in-out duration-500 hover:scale-110 grid grid-cols-1 lg:flex bg-black bg-opacity-50 md:w-2/4 lg:h-64 font-semibold rounded-md overflow-y-scroll 2xl:overflow-hidden">
            <img src="https://user-images.githubusercontent.com/71313658/161446669-ba25a0de-2547-4f0e-978c-605b1fea5197.png" className="lg:flex lg:rounded-md lg:h-auto lg:w-auto w-full" />
            <div className="">
              <p className="pt-10 lg:pl-10 pb-5 text-xl">KyalikoInstaller - Kanayatto</p>
              <div className="flex">
                <p className="lg:pl-10 lg:pr-10 text-xs xl:text-sm 2xl:text-[16px]">
                    This installer is really bad and shouldnt be used with the pre-existing code. basically, change the code to make it better :3
                </p>
              </div>
              <div className="flex place-content-center lg:place-content-end p-10 lg:pb-10 lg:pr-10 2xl:p-10">
                <a href="https://github.com/kyaliko/KyalikoInstaller">
                    <button className="transition ease-in-out duration-500 p-2 w-20 rounded-md bg-blue-600 hover:bg-blue-300">
                        GitHub
                    </button>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default projects