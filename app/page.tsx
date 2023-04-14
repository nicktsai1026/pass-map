import Metadata from "@/data/meta.json";

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
        <div className='container mx-auto px-4'>
            <h1>Welcome to the pass map</h1>
        </div>
    )
}

export default HomePage