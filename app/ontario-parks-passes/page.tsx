import Meta from "@/data/meta.json";

interface MetaInterface {
  "page": string,
  "title": string,
  "keywords": string,
  "description": string,
}

const siteMeta: MetaInterface = Meta.find(meta => meta.page == 'ontario-parks-passes') || Meta[2];

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