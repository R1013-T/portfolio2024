import { getTranslation } from '@/i18n/server'

import TechnologyItem from '../../about/technology-item'
import ArticleItem from '../../article/article-item'
import GridItem from '../grid-item'

export default async function AsideSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)
  return (
    <>
      <div className="h-64 lg:h-full w-full lg:w-[390px] lg:min-h-96">
        <GridItem
          title={t('tech_title')}
          link={{ href: `${lang}/about#technology`, isDisplay: true }}
        >
          <TechnologyItem lang={lang} />
        </GridItem>
      </div>
      <div className="h-80 w-full min-h-32">
        <GridItem
          title={t('article_title')}
          link={{
            href: `${lang}/blog`,
            blank: true,
          }}
        >
          <ArticleItem lang={lang} />
        </GridItem>
      </div>
    </>
  )
}
