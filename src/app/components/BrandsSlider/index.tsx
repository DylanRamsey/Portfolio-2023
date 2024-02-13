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

const brands = brandimages.brandImages;

export default function BrandsSlider() {
  return (
    <section className="container mx-auto mb-44">
      <h2 className="text-6xl text-center mb-8">Brands I've worked with</h2>
      {brands.map((brand, index) => (
        <p key={index}>
          <img src={brand.link} /> 
        </p>
      ))}         
    </section>
  )
}