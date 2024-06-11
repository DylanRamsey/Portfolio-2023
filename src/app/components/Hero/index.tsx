'use client'
import Image from 'next/image'
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="container flex flex-col-reverse md:flex-row justify-between mx-auto px-6 xl:px-0 lg:mb-44">
      <div>
        <h1 className="text-5xl lg:text-8xl mb-8">
          Dylan Ramsey
        </h1>
        <h2 className="text-3xl lg:text-6xl mb-8">
          Software Developer
        </h2>
        <h3 className="text-2xl lg:text-5xl mb-8">
          <Typewriter
            options={{
              strings: ['Web Developer. . .', 'Designer. . .', 'UX Strategist. . .', 'Consultant. . .', 'Digital Marketer. . .', 'Technologist. . .'],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <h3 className="text-lg lg:text-3xl mb-4 lg:mb-8">
          Sarasota, Florida
        </h3>
        <a href="mailto:dylanbradramsey@gmail.com">
          <h3 className="text-lg lg:text-3xl mb-4 lg:mb-8">
            Get in Touch
            <Image
              className="inline mx-3 -mt-1 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
              width={40}
              height={40}
              src={"/icons/envelope.svg"}
              alt="email"
            />
          </h3>
        </a>
        <a href="/#myWork" className='hidden lg:block'>
          <h3 className="text-lg lg:text-3xl mb-4 lg:mb-8">
            Check me Out!
            <Image
              className="inline mx-3 -mt-1 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
              width={35}
              height={35}
              src={"/icons/down-arrow.svg"}
              alt="email"
            />
          </h3>
        </a>
      </div>
      <Image
        className="block object-contain drop-shadow-xl m-auto mb-10 md:m-0 w-[235px] h-[258px] lg:w-[435px] lg:h-[458px]"
        width={435}
        height={458}
        src={"/images/dylan_and_data_website_profile.webp"}
        alt="Picture of Dylan and his dog"
      />
    </section>
  )
}
