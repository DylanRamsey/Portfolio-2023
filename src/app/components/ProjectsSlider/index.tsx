"use client";
import ProjectCard from '@/app/components/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import * as projectData from "@/../public/data/projects.json"

const projects = projectData.projects;

export default function ProjectsSlider() {
  return (
    <section className="container mx-auto mb-20 px-6 xl:px-0">
      <h2 className="text-3xl lg:text-6xl text-center mb-8 lg:mb-16 pt-12" id="myWork">My Work</h2>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper mb-8">
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              projectName={project.name}
              projectLink={project.link}
              projectScreenshot={project.screenshot}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Button buttonText="View my full portfolio" /> */}
    </section>
  )
}