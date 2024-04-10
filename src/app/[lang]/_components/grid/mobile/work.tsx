import { getTranslation } from '@/i18n/server'

import WorkItem from '../../work/work-item'
import GridItem from '../grid-item'

export default async function WorkSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="h-72 w-full">
      <GridItem
        title={t('work_title')}
        link={{ href: `${lang}/work`, isDisplay: true }}
      >
        <WorkItem lang={lang} />
      </GridItem>
    </div>
  )
}
