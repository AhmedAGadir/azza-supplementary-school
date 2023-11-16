import { GalleryHero } from '@/components/GalleryHero'
import { Gallery } from '@/components/Gallery'
import { Maintenance } from '@/components/Maintenance'
import { getAllItems, getGalleryTags } from '@/lib/getItems'

import 'lightgallery/css/lightgallery.css'

export const metadata = {
  title: 'Gallery - Azza Supplementary School',
  description:
    "Step inside Azza's vibrant learning environment with our photo gallery.",
}

export default function GalleryPage() {
  // return <Maintenance />
  const gallery = getAllItems('gallery')
  const galleryArabic = getAllItems('gallery-arabic')
  const tags = getGalleryTags('gallery')
  const tagsArabic = getGalleryTags('gallery-arabic')

  return (
    <>
      {/* <GalleryHero /> */}
      <Gallery
        gallery={gallery}
        galleryArabic={galleryArabic}
        tags={tags}
        tagsArabic={tagsArabic}
      />
    </>
  )
}
