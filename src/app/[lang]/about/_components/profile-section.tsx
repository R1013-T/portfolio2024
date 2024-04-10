import type { TFunction } from 'i18next'
import Image from 'next/image'

import SectionWrapper from './section-wrapper'

export default async function ProfileSection({
  t,
}: {
  t: TFunction<'translation', undefined>
}) {
  return (
    <SectionWrapper id="profile">
      <div className="flex items-center gap-5">
        <div className="relative">
          <Image
            src="/icon.webp"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold text-lg mb-1">{t('name')}</p>
          <p className="text-balance text-muted-foreground text-sm">
            {t('profile_page_desc')}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
