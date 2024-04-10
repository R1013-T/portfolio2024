import { getTranslation } from '@/i18n/server'

import ProfileItem from '../../about/profile-item'
import GridItem from '../grid-item'

export default async function ProfileSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="w-full h-40">
      <GridItem link={{ href: `/${lang}/about#profile`, isDisplay: true }}>
        <ProfileItem lang={lang} />
      </GridItem>
    </div>
  )
}
