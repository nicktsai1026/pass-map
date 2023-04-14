import Metadata from "@/data/meta.json";

interface Meta {
    "page": string,
    "title": string,
    "keywords": string,
    "description": string,
}

const siteMeta: Meta = Metadata.find(meta => meta.page == 'ontario-parks-passes') || Metadata[2];

export const metadata = {
    title: siteMeta.title,
    description: siteMeta.description,
    keywords: siteMeta.keywords
};

const OnParksPage = () => {
    return (
        <div>Ontario Parks Page</div>
    )
}

export default OnParksPage