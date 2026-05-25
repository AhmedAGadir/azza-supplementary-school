'use client'

import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useTranslation } from '@/app/useTranslation'

const videos = [
  { id: 'PVwxKxBk_jA', titleKey: 'videoOneTitle' },
  { id: 'EMhLyzuD8kQ', titleKey: 'videoTwoTitle' },
]

export default function ArchivePage() {
  const { translation, language } = useTranslation()

  const t = useMemo(() => translation?.archive ?? {}, [translation])

  return (
    <section className="bg-purple-25 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="prose prose-lg mx-auto mt-14 pb-16 sm:mt-16">
        <h3 className="mb-12 text-center text-5xl font-bold">{t.title}</h3>
        <p>{t.description}</p>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className={clsx(
                language === 'en' ? 'text-left' : 'text-right',
              )}
            >
              <h4 className="mb-3 text-xl font-bold text-purple-900">
                {t.videos?.[video.titleKey]}
              </h4>
              <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={t.videos?.[video.titleKey]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
