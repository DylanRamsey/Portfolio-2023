import IconOpenLink from '../icons/IconOpenLink'
import GitHubIcon from '../icons/GitHubIcon'
import FigamIcon from '../icons/FigmaIcon'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({projectName, projectLink, projectGithub, projectFigma}) {
  return (
    <section>
      <a href={projectLink} target="_blank">
        <div className="mx-auto text-center mb-8 w-96 rounded-lg pb-5 bg-white">
          <div className="aspect-video">
          <img
            src={"https://placekitten.com/1920/1200"}
            alt="Github Icon"
          />  
          </div>
          <div className="project_card_content text-2xl">
            <p className="project_card_content__title text-black text-2xl mb-2">{projectName}</p>
            <div className="project_card_content__links flex justify-center items-center rounded-lg gap-2 m-auto">
            {projectLink.length > 0 &&
              <a href={projectLink} target="_blank">
                <IconOpenLink iconHeight={30} color="black" />
              </a>    
            }   
            {projectGithub ?         
              <a href={projectGithub} target="_blank">
                <GitHubIcon iconHeight={39} iconWidth={40} color="black" />
              </a>
              : null
            }
            {projectFigma ?
              <a href={projectFigma} target="_blank">
                <FigamIcon iconHeight={39} iconWidth={40} color="black" />
              </a>
              : null
            }
            </div>
          </div>          
        </div>
      </a>
    </section>
  )
}