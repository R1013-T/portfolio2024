import React from 'react'

import { getTranslation } from '@/i18n/server'

import ExperienceItem from '../../about/experience-item'
import GitHub from '../../contact/github'
import Instagram from '../../contact/instagram'
import Mail from '../../contact/mail'
import X from '../../contact/x'
import GridItem from '../grid-item'

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
            work
          </GridItem>
        </div>
        <div className="flex gap-2">
          <div className="w-32 aspect-square border rounded-3xl">
            <GridItem
              link={{ href: 'https://github.com/R1013-T', blank: true }}
            >
              <GitHub />
            </GridItem>
          </div>
          <div className="w-32 aspect-square border rounded-3xl">
            <GridItem
              link={{ href: 'https://twitter.com/rtjob2023', blank: true }}
            >
              <X />
            </GridItem>
          </div>
          <div className="w-32 aspect-square border rounded-3xl">
            <GridItem
              link={{ href: 'https://twitter.com/rtjob2023', blank: true }}
            >
              <Instagram />
            </GridItem>
          </div>
          <div className="w-32 aspect-square border rounded-3xl">
            <GridItem
              link={{
                href: 'mailto:takahashi.ryunosuke.job@gmail.com',
                blank: true,
              }}
            >
              <Mail />
            </GridItem>
          </div>
        </div>
      </div>
    </div>
  )
}
