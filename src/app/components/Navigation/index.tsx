import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="container mx-auto mb-40 flex flex-row justify-between items-baseline">
      <ul className="flex flex-row gap-x-8 mt-16">
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/portfolio">Portfolio</Link>
        </li>      
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">About</li>
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300">Blog</li>
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