import Metadata from "@/data/meta.json";
import Image from 'next/image';
import HomepageData from '@/data/homepage.json';

interface Meta {
    "page": string,
    "title": string,
    "keywords": string,
    "description": string,
}

const siteMeta: Meta = Metadata.find(meta => meta.page == 'home') || Metadata[0];

export const metadata = {
    title: siteMeta.title,
    description: siteMeta.description,
    keywords: siteMeta.keywords
};

const HomePage = () => {
    return (
        <>
            <div className="min-h-4/5 bg-homepage-cover bg-cover bg-center flex justify-center items-center">
                <div className="p-5 text-center bg-gray-100 dark:bg-gray-700 rounded-lg bg-opacity-50 dark:bg-opacity-50">
                    <h1 className="mb-4 text-xl">{HomepageData.cover.heading}</h1>
                    <h1 className="text-2xl">{HomepageData.cover.greeting}</h1>
                </div>
            </div>
            <div className="container mx-auto max-w-5xl px-6 pt-16 grid grid-cols-2 gap-12">
                <div className="intro">
                    <h1 className="text-2xl font-semibold">{HomepageData.intro.title}</h1>
                    <span className="text-xs">{HomepageData.intro.description}</span>
                    <p className="text-base font-normal">{HomepageData.intro.content}</p>
                </div>
                <div className="relative">
                    <Image
                        src={HomepageData.intro.image}
                        alt={HomepageData.intro.title}
                        fill
                        priority
                    />
                </div>
            </div>
        </>
    )
}

export default HomePage