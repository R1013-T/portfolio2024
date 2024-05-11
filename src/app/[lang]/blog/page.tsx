import type { Metadata } from 'next'

import BackButton from '@/components/common/back-button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getTranslation } from '@/i18n/server'

export const metadata: Metadata = {
  title: 'BLOG',
}

export default async function Blog({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const { t } = await getTranslation(lang)

  return (
    <main className="overflow-hidden">
      <BackButton lang={lang} />
      <ScrollArea className="h-dvh w-full">
        <article className="mt-8 mb-20 px-4 max-w-xl mx-auto">
          <h2 className="mb-4 text-xl">{t('article_title')}</h2>
        </article>
      </ScrollArea>
    </main>
  )
}
