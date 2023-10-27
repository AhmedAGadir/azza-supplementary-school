import { GalleryHero } from '@/components/GalleryHero'
import { Gallery } from '@/components/Gallery'
import { Maintenance } from '@/components/Maintenance'
import { getAllItems, getGalleryTags } from '@/lib/getItems'

import 'lightgallery/css/lightgallery.css'

export const metadata = {
  title: 'Activities - Azza Supplementary School',
  description:
    "Step inside Azza's vibrant learning environment with our photo gallery.",
}

export default function GalleryPage() {
  return <Maintenance />
  const gallery = getAllItems('gallery')
  const tags = getGalleryTags()

  return (
    <>
      <GalleryHero />
      <Gallery gallery={gallery} tags={tags} />
    </>
  )
}
