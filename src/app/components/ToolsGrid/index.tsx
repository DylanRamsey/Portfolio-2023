"use client";
import tools from "@/app/data/tools.js"
import Image from 'next/image'

export default function BrandsSlider() {
  return (
    <section className="container mx-auto mb-20">
      <h2 className="text-3xl lg:text-6xl text-center mb-8 lg:mb-16">The tools I build with</h2>
        <div className="md:w-[58rem] max-w-full mx-auto mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-12">
        {tools.map((tool, index) => (
          <div className="m-auto flex bg-white h-40 md:h-48 w-40 md:w-48 rounded-3xl transition ease-in-out hover:-translate-y-2 duration-200 drop-shadow-xl">
            <img className="object-contain p-5"
              src={tool.link}
              alt={tool.alt}
            />
          </div>
        ))}
        </div>
    </section>
  )
}