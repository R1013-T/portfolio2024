import React from 'react'

import { getTranslation } from '@/i18n/server'

import ProfileItem from '../../about/profile-item'
import GridItem from '../grid-item'

export default async function ProfileSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
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
  )
}
