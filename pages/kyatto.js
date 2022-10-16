import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const kyatto = () => {
  return (
    
    <div className="bg-white text-black selection:bg-[#00000025] selection:text-cyan-100 uwu h-screen">
        <Head>
        <title>Kyatto - Kyaliko</title>
        <meta name="Kyaliko" content="nya" />
        <meta name="description" content="Kyaliko is a dev team that creates .NET Applications for people that are learning to code :3" />
        <meta property="og:title" content="Kyatto - Kyaliko" />
        <meta property="og:image" content="/PFP1.png" />
        <meta property="og:description" content="Kyaliko is a dev team that creates .NET Applications for people that are learning to code :3" />
        <link rel="icon" href="/kyafav.ico" />
        </Head>
        <div className="p-20 pt-40 bg-fixed backdrop-blur-lg static text-white h-screen">

            <div className="transition ease-in-out duration-300 absolute top-2 right-2 hover:scale-110 selection:bg-white/0">
                <Link href="https://kyaliko.com/">
                   <button className="bg-white/20 p-2 rounded-md">
                    <img className="stroke-white" src="close-120.svg" width="20px">
                        
                    </img>
                   </button>
                </Link>
            </div>
            <div className="text-6xl font-bold">
                Kyatto
            </div>
            <div className="text-2xl pt-5 font-semibold">
                I created Kyaliko lol
            </div>
            <div className="pt-5 rounded-md">
                <div className="text-xl grid bg-slate-50/25 rounded-md w-fit font-semibold">
                    <span className="p-5">
                        I create software in the .NET Framework coding language: C#
                    </span>
                    <span className="pt-0 p-5">
                        I'm trying to make like 10 different projects all at once so my website looks terrible rn so yh
                    </span>
                </div>
            </div>
            
            
            <div className="pt-5 flex gap-5 font-semibold">
                <Link href="https://github.com/kyaliko">
                    <button className="transition ease-in-out duration-500 p-2 bg-slate-50/25 rounded-md hover:bg-violet-200/25 hover:scale-110 hover:outline-4 outline-offset-4">
                        My GitHub
                    </button>
                </Link>
                <Link href="https://discord.gg/GX6TVXafUm">
                    <button className="transition ease-in-out duration-500 p-2 bg-slate-50/25 rounded-md hover:bg-violet-200/25 hover:scale-110 hover:outline-4 outline-offset-4">
                        Discord Server
                    </button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default kyatto