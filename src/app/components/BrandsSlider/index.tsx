"use client";
import ProjectCard from '@/app/components/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import * as projectData from "@/../public/data/projects.json"
import * as brandimages from "@/../public/data/brandImagePaths.json"
import Image from 'next/image'

const brands = brandimages.brandImages;

export default function BrandsSlider() {
  return (
    <section className="container mx-auto mb-44">
      <h2 className="text-6xl text-center mb-20">Brands I've worked with</h2>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper mb-8">
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className='my-auto'>
            <Image className="object-contain ml-16"
              src={brand.link} 
              alt={brand.alt}
              width={300}
              height={300}
            /> 
          </SwiperSlide>
        ))}     
      </Swiper>      
    </section>
  )
}