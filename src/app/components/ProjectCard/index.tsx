import IconOpenLink from '../icons/IconOpenLink'
import GitHubIcon from '../icons/GitHubIcon'
import FigamIcon from '../icons/FigmaIcon'
export default function ProjectCard() {
  return (
    <section>
      <div className="mx-auto text-center mb-8 w-96 rounded-lg py-5 bg-white">
        <div className="aspect-video">
        </div>
        <div className="project_card_content text-2xl">
          <p className="project_card_content__title text-black text-2xl mb-2">East Coast K9</p>
          <div className="project_card_content__links flex justify-center items-center rounded-lg gap-2 m-auto">
            <IconOpenLink iconHeight={30} color="black" />
            <GitHubIcon iconHeight={39} iconWidth={40} color="black" />
            <FigamIcon iconHeight={39} iconWidth={40} color="black" />
          </div>
        </div>          
      </div>
    </section>
  )
}