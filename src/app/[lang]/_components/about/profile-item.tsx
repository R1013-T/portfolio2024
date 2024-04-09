import Image from 'next/image'

import { getTranslation } from '@/i18n/server'

export default async function ProfileItem({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="relative">
        <Image
          src="/icon.webp"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-purple-200 rounded-full blur-md"></div>
      </div>
      <div>
        <p className="font-semibold text-lg mb-1">{t('name')}</p>
        <p className="text-balance text-sm">{t('profile_desc')}</p>
      </div>
    </div>
  )
}
