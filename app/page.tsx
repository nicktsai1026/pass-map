import Metadata from "@/data/meta.json";
import Image from 'next/image';

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
        <div className='container mx-auto'>
            <div className="relative min-h-4/5">
                <div className="flex items-center justify-center min-h-4/5">
                    <h1 className="z-10">Welcome to the pass map</h1>
                </div>
                <Image
                    src="/homepage_cover.jpg"
                    alt="Homepage cover"
                    fill
                    priority
                />
            </div>
        </div>
    )
}

export default HomePage