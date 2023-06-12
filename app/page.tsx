import Meta from "@/data/meta.json";
import Utils from '@/data/utils.json';
import MuseumCulturalVenues from '@/data/museum_cultural_venues.json';
import { PrimaryButton, LocationIcon  } from "@/components/MUI";
import Image from "next/image";
import type { Metadata } from "next";

const siteMeta: Metadata = Meta.find(meta => meta.page == 'home') || Meta[0];

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
                {Utils.greeting.text}
              </h1>
              <div className="mt-6 sm:mt-0">
                <PrimaryButton
                  link={Utils.greeting.button.href}
                  text={Utils.greeting.button.text}
                />
              </div>
            </div>
            <div className="min-h-2/5 hidden sm:block px-10 bg-contain bg-no-repeat bg-center
              bg-light-museum-image dark:bg-dark-museum-image">
            </div>
          </div>
        </div>
      </div>
      <div className="attractions-section container mx-auto max-w-2xl m-20">
        {MuseumCulturalVenues.map((museum) => (
          <div className="museum-card flex m-5" key={museum.id}>
            <div className="museum-image m-5 mr-0 relative min-w-1/2">
              <Image 
                src={museum.image} 
                alt={museum.name}
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                fill
                priority
              />
            </div>
            <div className="museum-info px-6 py-10 bg-gray-50 dark:bg-gray-700 ">
              <h1>{museum.name}</h1>
              <p>{museum.description}</p>
              <p className="my-4">
                <LocationIcon />
                {museum.address}
              </p>
              <PrimaryButton
                link={`${Utils.attractions.button.href}/${museum.slug}`}
                text={Utils.attractions.button.text}
              />
            </div>
          </div>
        ))}
        <div className="paginations">
          <p><b>1</b> / {MuseumCulturalVenues.length}</p>
        </div>
      </div>
    </>
  )
}

export default HomePage