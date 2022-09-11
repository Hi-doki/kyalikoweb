import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex bg-black h-[100px] translate-y-full font-medium place-content-center text-gray-300 items-center text-center selection:bg-slate-900">
      <div className="">
        <Link href="https://mc.kyaliko.com/">
          Kyaliko Launcher
        </Link>
      </div>
    </div>
  )
}

export default Footer