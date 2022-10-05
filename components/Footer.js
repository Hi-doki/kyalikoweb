import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex bg-black h-[102px] translate-y-full font-medium place-content-center text-gray-300 items-center text-center selection:bg-slate-900">
      <div className="grid grid-cols-1 items-center text-center gap-4">
        <Link href="https://mc.kyaliko.com/" className="">
          <a className="text-sm">Kyaliko Launcher</a>
        </Link>
        <samp className="text-sm">© Kyaliko 2022</samp>
      </div>
    </div>
  )
}

export default Footer