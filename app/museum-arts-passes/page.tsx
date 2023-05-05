import Meta from "@/data/meta.json";
import Libraries from "@/data/libraries.json";
import Image from "next/image";

interface MetaInterface {
    "page": string,
    "title": string,
    "keywords": string,
    "description": string,
}

const siteMeta: MetaInterface = Meta.find(meta => meta.page == 'museum-arts-passes') || Meta[1];

export const metadata = {
    title: siteMeta.title,
    description: siteMeta.description,
    keywords: siteMeta.keywords
};

const MuseumArtsPage = () => {
    return (
        <div>
            {Libraries.map((library) => (
                <div key={library.name}>
                    <Image src={library.image} width={300} height={300} alt={library.name} />
                </div>
            ))}
        </div>
    )
}

export default MuseumArtsPage