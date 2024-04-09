import React from 'react'

import { ThemeToggle } from '@/components/theme/toggle'
import { getTranslation } from '@/i18n/server'

import GridItem from './grid-item'

export default async function ComputerGrid({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <article className="h-5/6 lg:h-dvh max-w-7xl mx-auto md:flex-wrap gap-2 lg:flex-nowrap hidden p-8 md:flex">
      <div className="w-full h-full flex flex-col gap-2">
        <div className="w-full h-64 flex gap-2">
          <div className="w-full h-full">
            <GridItem
              title="ABOUT"
              link={{ href: '/about#profile', isDisplay: true }}
            >
              {t('app_name')}
            </GridItem>
          </div>
          <div className="w-64 aspect-square">
            <GridItem link={{ href: '/about#hobby' }}>cacao</GridItem>
          </div>
        </div>
        <div className="w-full h-full flex gap-2">
          <div className="min-w-64 w-full h-[396px] lg:h-full">
            <GridItem
              title="EXPERIENCE"
              link={{ href: '/about#experience', isDisplay: true }}
            >
              experience
            </GridItem>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-64 lg:h-full lg:min-h-80 w-full">
              <GridItem title="WORK" link={{ href: '/work', isDisplay: true }}>
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
            <GridItem>lang</GridItem>
          </div>
          <div className="lg:hidden w-full h-32 border rounded-3xl">
            <GridItem>none</GridItem>
          </div>
        </div>
        <div className="h-64 lg:h-full w-full lg:min-h-96">
          <GridItem
            title="TECHNOLOGY"
            link={{ href: '/about#technology', isDisplay: true }}
          >
            technology
          </GridItem>
        </div>
        <div className="h-80 w-full min-h-32">
          <GridItem title="ARTICLES">articles</GridItem>
        </div>
      </div>
    </article>
  )
}
