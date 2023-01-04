import Link from 'next/link'

const Footer = () => {
  return (
    <div className="absolute bottom-10 w-screen overflow-hidden font-medium place-content-center text-gray-300 items-center text-center selection:bg-slate-900">
      <div className="">
        <samp className="text-sm">© Kyaliko 2022</samp>
      </div>
    </div>
  )
}

export default Footer