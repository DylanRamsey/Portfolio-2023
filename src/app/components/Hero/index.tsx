import Image from 'next/image'

export default function Hero() {
  return (
    <div className="container flex justify-between mx-auto">
      <div>
        <h1 className="text-8xl mb-8">
          Dylan Ramsey
        </h1>
        <h2 className="text-6xl mb-8">
          Web Developer
        </h2>
        <h3 className="text-3xl mb-8">
          Sarasota, Florida
        </h3>
        <h3 className="text-3xl mb-8">
          Get in Touch 
          <Image
            className="inline mx-3"
            width={40}
            height={40}
            src={"/icons/envelope.svg"}
            alt="email"
          />
        </h3>
        <h3 className="text-3xl mb-8">
          Check me Out!
          <Image
            className="inline mx-3"
            width={35}
            height={35}
            src={"/icons/down-arrow.svg"}
            alt="email"
          />          
        </h3>        
      </div>
      <Image
        className="block"
        width={435}
        height={458}
        src={"/images/dylan_and_data_website_profile.webp"}
        alt="Picture of Dylan and his dog"
      />
    </div>
  )
}
