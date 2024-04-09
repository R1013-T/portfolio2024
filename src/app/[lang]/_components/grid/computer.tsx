import Link from 'next/link'
import React from 'react'

import { ThemeToggle } from '@/components/theme/toggle'
import { getTranslation } from '@/i18n/server'

import ExperienceItem from '../about/experience-item'
import ProfileItem from '../about/profile-item'
import GridItem from './grid-item'

export default async function ComputerGrid({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <article className="h-5/6 lg:h-dvh max-w-7xl mx-auto md:flex-wrap gap-2 lg:flex-nowrap hidden p-8 md:flex">
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full h-64 flex gap-2">
          <div className="w-full h-full">
            <GridItem
              title={t('about_title')}
              link={{ href: `/${lang}/about#profile`, isDisplay: true }}
            >
              <ProfileItem lang={lang} />
            </GridItem>
          </div>
          <div className="w-64 aspect-square">
            <GridItem link={{ href: `${lang}/about#hobby` }}>cacao</GridItem>
          </div>
        </div>
        <div className="w-full h-full flex gap-2">
          <div className="min-w-64 w-full h-[396px] lg:h-full">
            <GridItem
              title={t('experience_title')}
              link={{ href: `${lang}/about#experience`, isDisplay: true }}
            >
              <ExperienceItem lang={lang} />
            </GridItem>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-64 lg:h-full lg:min-h-80 w-full">
              <GridItem
                title={t('work_title')}
                link={{ href: `${lang}/work`, isDisplay: true }}
              >
                work
              </GridItem>
            </div>
            <div className="flex gap-2">
              <div className="w-32 aspect-square border rounded-3xl">
                <GridItem>GitHub</GridItem>
              </div>
              <div className="w-32 aspect-square border rounded-3xl">
                <GridItem>X</GridItem>
              </div>
              <div className="w-32 aspect-square border rounded-3xl">
                <GridItem>Instagram</GridItem>
              </div>
              <div className="w-32 aspect-square border rounded-3xl">
                <GridItem>Mail</GridItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-full w-full flex-wrap lg:flex-nowrap gap-2 lg:w-auto flex lg:flex-col">
        <div className="flex gap-2 w-full">
          <div className="h-32 w-64 ">
            <GridItem>
              <ThemeToggle />
            </GridItem>
          </div>
          <div className="w-32 h-full lg:h-32 aspect-square">
            <GridItem>
              <div className="flex gap-2">
                <Link href="/ja">ja</Link>
                <Link href="/en">en</Link>
              </div>
            </GridItem>
          </div>
          <div className="lg:hidden w-full h-32 border rounded-3xl">
            <GridItem>none</GridItem>
          </div>
        </div>
        <div className="h-64 lg:h-full w-full lg:min-h-96">
          <GridItem
            title={t('tech_title')}
            link={{ href: `${lang}/about#technology`, isDisplay: true }}
          >
            technology
          </GridItem>
        </div>
        <div className="h-80 w-full min-h-32">
          <GridItem title={t('article_title')}>articles</GridItem>
        </div>
      </div>
    </article>
  )
}
