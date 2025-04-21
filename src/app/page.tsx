import Image from 'next/image'

import logo from '../assets/logo.png'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
        <div className="flex flex-col gap-10 w-full max-w-[550px]">
          <Image src={logo} alt="devstage" width={108.5} height={30} />
        </div>
      </div>
    </main>
  )
}
