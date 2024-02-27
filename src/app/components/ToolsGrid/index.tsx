"use client";
import * as tools from "@/../public/data/tools.json"
import Image from 'next/image'

const toolsList = tools.tools;

export default function BrandsSlider() {
  return (
    <section className="container mx-auto mb-44">
      <h2 className="text-6xl text-center mb-20">The tools I craft with</h2>
        <div className="w-[58rem] max-w-full mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {toolsList.map((tool, index) => (
          <div className="m-auto flex bg-white h-48 w-48 rounded-3xl">
            <Image className="object-contain p-5"
              src={tool.link} 
              alt={tool.alt}
              width={300}
              height={300}
            />
          </div>
        ))}     
        </div>
      
    </section>
  )
}