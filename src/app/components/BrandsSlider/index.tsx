"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import brandImages from "@/app/data/brandImagePaths.js"
import Image from 'next/image'


export default function BrandsSlider() {
  return (
    <section className="container mx-auto mb-44">
      <h2 className="text-3xl lg:text-6xl text-center mb-20">Brands Ive worked with</h2>
      <Swiper
        navigation={true}

        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper mb-8">
        {brandImages.map((brand, index) => (
          <SwiperSlide key={index} className="my-auto">
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