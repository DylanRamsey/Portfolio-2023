"use client";
import ProjectCard from '../ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function ProjectsSlider() {
  return (
    <section className="container mx-auto">
      <h2 className="text-6xl text-center mb-8">My Projects</h2>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper">
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>        
    </section>
  )
}