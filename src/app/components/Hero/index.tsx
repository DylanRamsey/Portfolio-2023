'use client'
import Image from 'next/image'
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="container flex justify-between mx-auto">
      <div>
        <h1 className="text-8xl mb-8">
          Dylan Ramsey
        </h1>
        <h2 className="text-6xl mb-8">
          Full-Stack Web Engineer
        </h2>
        <h3 className="text-5xl mb-8">
          <Typewriter
            options={{
              strings: ['Developer. . .', 'Designer. . .', 'UX Strategist. . .', 'Consultant. . .', 'Digital Marketer. . .', 'Technologist. . .', 'Gamer. . .'],
              autoStart: true,
              loop: true,
            }}
          />            
        </h3>
        <h3 className="text-3xl mb-8">
          Sarasota, Florida
        </h3>
        <h3 className="text-3xl mb-8">
          Get in Touch 
          <Image
            className="inline mx-3 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
            width={40}
            height={40}
            src={"/icons/envelope.svg"}
            alt="email"
          />
        </h3>
        <h3 className="text-3xl mb-8">
          Check me Out!
          <Image
            className="inline mx-3 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
            width={35}
            height={35}
            src={"/icons/down-arrow.svg"}
            alt="email"
          />          
        </h3>        
      </div>
      <Image
        className="block object-contain"
        width={435}
        height={458}
        src={"/images/dylan_and_data_website_profile.webp"}
        alt="Picture of Dylan and his dog"
      />
    </div>
  )
}
