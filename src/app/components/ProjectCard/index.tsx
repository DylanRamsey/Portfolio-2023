import IconOpenLink from '../icons/IconOpenLink'
import Image from 'next/image'

interface Props {
  projectName: string,
  projectLink: string,
  projectScreenshot: string,
}


export default function ProjectCard(props: Props) {
  return (

    <section>
      <a href={props.projectLink} target="_blank">
      <div className='block mx-auto lg:w-72	xl:w-96'>
        <div className="mx-auto text-center mb-8 rounded-lg bg-white shadow-xl">
          <div className="aspect-video">
            {props.projectScreenshot ?
              <Image
                className='min-h-full object-cover rounded-t-lg'
                src={props.projectScreenshot}
                alt={props.projectName}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                unoptimized
              />
              : null
            }
          </div>
          <div className="project_card_content flex flex-col justify-center text-2xl border-solid border-t-2 border-black h-24">
            <p className="project_card_content__title text-black text-2xl mb-2 font-semibold">{props.projectName}</p>
            <div className="project_card_content__links flex justify-center items-center rounded-lg gap-2">
            </div>
          </div>
        </div>
      </div>
      </a>
    </section>
  )
}