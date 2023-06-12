import Meta from "@/data/meta.json";
import type { Metadata } from "next";

const siteMeta: Metadata = Meta.find(meta => meta.page == 'ontario-parks-passes') || Meta[2];

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