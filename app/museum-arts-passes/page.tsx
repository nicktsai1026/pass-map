import Metadata from "@/data/meta.json";

interface Meta {
    "page": string,
    "title": string,
    "keywords": string,
    "description": string,
}

const siteMeta: Meta = Metadata.find(meta => meta.page == 'museum-arts-passes') || Metadata[1];

export const metadata = {
    title: siteMeta.title,
    description: siteMeta.description,
    keywords: siteMeta.keywords
};

const MuseumArtsPage = () => {
    return (
        <div>Museum Arts Page</div>
    )
}

export default MuseumArtsPage