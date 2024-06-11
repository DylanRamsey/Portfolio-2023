import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="container mx-auto px-6 xl:px-0 mb-12 md:mb-32 flex flex-row justify-between items-end">
      <ul className="flex flex-row gap-x-8 mt-16">
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/">Home</Link>
        </li>
        {/* <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/portfolio">Portfolio</Link>
        </li> */}
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/resume.pdf" target='_blank'>Resume</Link>
        </li>
        {/* <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">About</li>
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">Blog</li> */}
      </ul>
      <ul className="flex gap-4">
        <a href="https://github.com/DylanRamsey" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Image
            width={35}
            height={35}
            src={"/icons/github.svg"}
            alt="Github Icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/dylan-ramsey/" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Image
            width={35}
            height={35}
            src={"/icons/linkedIn.svg"}
            alt="LinkedIn Icon"
          />
        </a>
      </ul>
    </nav>
  )
}