import {
  SiFirebase,
  SiGo,
  SiGooglecloud,
  SiGoogledrive,
  SiGoogleslides,
  SiMicrosoftazure,
  SiNextdotjs,
  SiOpenai,
  SiSass,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons'
import type { Metadata } from 'next'

import BackButton from '@/components/common/back-button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getTranslation } from '@/i18n/server'

import WorkItem from './_components/item'

export const metadata: Metadata = {
  title: 'WORK',
}

export default async function Work({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const { t } = await getTranslation(lang)

  const workItems = [
    {
      title: t('slide_share'),
      description: t('slide_share_description'),
      image: '/work/slide.webp',
      link: {
        href: 'https://www.techc-lt.tokyo/',
        github: 'https://github.com/R1013-T/slide-share',
      },
      technologies: [
        SiTypescript,
        SiNextdotjs,
        SiTailwindcss,
        SiShadcnui,
        SiVercel,
        SiGo,
        SiFirebase,
        SiGoogleslides,
        SiGoogledrive,
        SiGooglecloud,
      ],
      date: '2024/3 - 2024/4',
    },
    {
      title: t('interview'),
      description: t('interview_description'),
      image: '/work/interview.webp',
      link: {
        href: 'https://ai-interview-ten.vercel.app/',
        github: 'https://github.com/R1013-T/AI-Interview',
      },
      technologies: [
        SiTypescript,
        SiNextdotjs,
        SiTailwindcss,
        SiShadcnui,
        SiVercel,
        SiOpenai,
        SiMicrosoftazure,
      ],
      date: '2024/3 - 2024/3',
    },
    {
      title: t('giftjob'),
      description: t('giftjob_description'),
      image: '/work/giftjob.webp',
      link: {
        href: 'https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/',
        github: 'https://github.com/R1013-T/GiftJob',
      },
      technologies: [
        SiTypescript,
        SiNextdotjs,
        SiTailwindcss,
        SiShadcnui,
        SiVercel,
        SiGo,
        SiOpenai,
        SiMicrosoftazure,
      ],
      date: '2023/8 - 2024/3',
    },
    {
      title: t('ar'),
      description: t('ar_description'),
      image: '/work/ar.webp',
      link: {
        href: 'https://www.enan.tokyo/',
        github: 'https://github.com/R1013-T/ENAN',
      },
      technologies: [
        SiTypescript,
        SiNextdotjs,
        SiSass,
        SiThreedotjs,
        SiSupabase,
        SiVercel,
      ],
      date: '2023/6 - 2023/7',
    },
  ]

  return (
    <main className="overflow-hidden">
      <BackButton lang={lang} />
      <ScrollArea className="h-dvh w-full">
        <article className="mt-8 mb-20 px-4 max-w-xl mx-auto">
          <h2 className="mb-8 text-xl">{t('work_title')}</h2>
          <div className="flex flex-col gap-10">
            {workItems.map((workItem, index) => (
              <WorkItem key={index} {...workItem} />
            ))}
          </div>
        </article>
      </ScrollArea>
    </main>
  )
}
