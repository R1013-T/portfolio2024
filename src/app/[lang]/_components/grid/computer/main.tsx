import React from 'react'

import { getTranslation } from '@/i18n/server'

import ExperienceItem from '../../about/experience-item'
import WorkItem from '../../work/work-item'
import GridItem from '../grid-item'
import ContactSection from './contact'

export default async function MainSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
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
            <WorkItem lang={lang} />
          </GridItem>
        </div>
        <ContactSection />
      </div>
    </div>
  )
}
