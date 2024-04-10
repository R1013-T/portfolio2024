import { getTranslation } from '@/i18n/server'

import TechnologyItem from '../../about/technology-item'
import GridItem from '../grid-item'

export default async function TechnologySection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="h-64 w-full">
      <GridItem
        title={t('tech_title')}
        link={{ href: `${lang}/about#technology`, isDisplay: true }}
      >
        <TechnologyItem lang={lang} />
      </GridItem>
    </div>
  )
}
