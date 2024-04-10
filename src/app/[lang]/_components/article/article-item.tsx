import Image from 'next/image'

import { getTranslation } from '@/i18n/server'

import QiitaImage from './assets/qiita.webp'
import SizuImage from './assets/sizu.webp'

export default async function ArticleItem({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="flex flex-col w-full h-full justify-center group">
      <div className="flex w-full justify-center gap-5">
        <div className="p-3 w-1/5 max-w-32 aspect-square rounded-3xl relative">
          <div
            className="absolute -z-10 w-full h-full rounded-3xl bg-purple-300/70 dark:bg-purple-300/50 blur-sm top-0 left-0
            transition duration-300 group-hover:scale-105"
          ></div>
          <Image
            src={QiitaImage}
            alt="Qiita"
            className="w-full aspect-square opacity-80 transition duration-300
            group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
        <div className="p-3 w-1/5 max-w-32 aspect-square rounded-3xl relative">
          <div
            className="absolute -z-10 w-full h-full rounded-3xl bg-purple-300/70 dark:bg-purple-300/50 blur-sm top-0 left-0
          transition duration-300 group-hover:scale-105"
          ></div>
          <Image
            src={SizuImage}
            alt="Sizu"
            className="w-full aspect-square opacity-80 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      </div>
      <p className="text-center text-xs text-balance mt-5">
        {t('article_description')}
      </p>
    </div>
  )
}
