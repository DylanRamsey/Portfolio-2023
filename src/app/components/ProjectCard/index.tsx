import IconOpenLink from '../icons/IconOpenLink'
import GitHubIcon from '../icons/GitHubIcon'
import FigamIcon from '../icons/FigmaIcon'

export default function ProjectCard({projectName, projectLink, projectGithub, projectFigma, projectScreenshot}) {
  return (
    <section>
      <div className='block mx-auto lg:w-72	xl:w-96'>
        <div className="mx-auto text-center mb-8 rounded-lg bg-white shadow-xl">
          <div className="aspect-video">
            {projectScreenshot ?
              <img
                className='min-h-full object-cover rounded-t-lg'
                src={projectScreenshot}
                alt={projectName}
              />
              : null
            }
          </div>
          <div className="project_card_content flex flex-col justify-center text-2xl border-solid border-t-2 border-black h-24">
            <p className="project_card_content__title text-black text-2xl mb-2">{projectName}</p>
            <div className="project_card_content__links flex justify-center items-center rounded-lg gap-2">
            {projectLink ?
              <a href={projectLink} target="_blank">
                <IconOpenLink iconHeight={30} color="black" />
              </a>
              : null
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
      </div>
    </section>
  )
}