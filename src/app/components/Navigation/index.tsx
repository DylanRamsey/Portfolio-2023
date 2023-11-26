import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="container mx-auto mb-40 flex flex-row justify-between items-baseline">
      <ul className="flex flex-row gap-x-8 mt-16">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>      
        <li>About</li>
        <li>Blog</li>
      </ul>
      <ul className="flex gap-4">
        <a href="https://github.com/DylanRamsey" target="_blank">
          <Image
            width={35}
            height={35}
            src={"/icons/github.svg"}
            alt="Github Icon"
          />  
        </a>
        <a href="https://www.linkedin.com/in/dylan-ramsey/" target="_blank">
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