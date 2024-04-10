import { getTranslation } from '@/i18n/server'

import ArticleItem from '../../article/article-item'
import GridItem from '../grid-item'

export default async function ArticleSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="h-52 w-full">
      <GridItem
        title={t('article_title')}
        link={{
          href: 'https://qiita.com/ryu1013',
          blank: true,
        }}
      >
        <ArticleItem lang={lang} />
      </GridItem>
    </div>
  )
}
