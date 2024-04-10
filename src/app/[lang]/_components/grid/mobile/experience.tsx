import { getTranslation } from '@/i18n/server'

import ExperienceItem from '../../about/experience-item'
import GridItem from '../grid-item'

export default async function ExperienceSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="w-full">
      <GridItem
        title={t('experience_title')}
        link={{ href: `${lang}/about#experience`, isDisplay: true }}
      >
        <ExperienceItem lang={lang} />
      </GridItem>
    </div>
  )
}
