import Meta from "@/data/meta.json";
import HomepageData from '@/data/homepage.json';
import MuseumCulturalVenues from '@/data/museum_cultural_venues.json';
import { PrimaryButton  } from "@/components/MUI";
import Image from "next/image";

interface MetaInterface {
  "page": string,
  "title": string,
  "keywords": string,
  "description": string,
}

const siteMeta: MetaInterface = Meta.find(meta => meta.page == 'home') || Meta[0];

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords
};

const HomePage = () => {
  return (
    <>
      <div className="min-h-9/10 bg-light-museum-cover dark:bg-dark-museum-cover bg-cover bg-center flex justify-center items-center">
        <div className="bg-opacity-30 dark:bg-opacity-80 bg-gray-950 min-h-9/10 w-full flex items-center">
          <div className="container mx-auto max-w-5xl p-12 lg:p-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="flex flex-col justify-around text-center sm:text-start">
              <h1 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
                {HomepageData.greeting.text}
              </h1>
              <div className="operation mt-6 sm:mt-0">
                <PrimaryButton
                  link={HomepageData.greeting.button.href}
                  text={HomepageData.greeting.button.text}
                />
              </div>
            </div>
            <div className="min-h-2/5 hidden sm:block px-10 bg-contain bg-no-repeat bg-center
              bg-light-museum-image dark:bg-dark-museum-image">
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {MuseumCulturalVenues.map((museum) => (
          <div key={museum.id}>
            <Image 
              src={museum.image} 
              alt={museum.name} 
              width={300} 
              height={300} 
              key={museum.id} priority
              />
            <h1>{museum.name}</h1>
          </div>
        ))}
        <div className="paginations"></div>
      </div>
    </>
  )
}

export default HomePage