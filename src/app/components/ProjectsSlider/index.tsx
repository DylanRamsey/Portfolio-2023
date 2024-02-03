"use client";
import ProjectCard from '../ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import * as projectData from "../../../../public/data/projects.json"
/* 
Get data together for projects that will appear in the ProjectsSlider, import that
data into this file, and then loop over that data, for each object create a project card
*/

const projects = projectData.projects;

export default function ProjectsSlider() {
  return (
    <section className="container mx-auto">
      <div>

      </div>
      <h2 className="text-6xl text-center mb-8">My Work</h2>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper">
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              projectName={project.name}
              projectLink={project.link}
              projectGithub={project.github}
              projectFigma={project.figma}
            />
          </SwiperSlide>        
        ))}          
      </Swiper>        
    </section>
  )
}