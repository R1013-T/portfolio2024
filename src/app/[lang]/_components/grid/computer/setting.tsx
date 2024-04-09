import Link from 'next/link'

import { ThemeToggle } from '@/components/theme/toggle'
import { getTranslation } from '@/i18n/server'

import GridItem from '../grid-item'

export default async function SettingSection({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="flex gap-2 w-full">
      <div className="h-32 w-64 ">
        <GridItem>
          <ThemeToggle />
        </GridItem>
      </div>
      <div className="w-32 h-full lg:h-32 aspect-square">
        <GridItem>
          <div className="flex gap-2">
            <Link href="/ja">ja</Link>
            <Link href="/en">en</Link>
          </div>
        </GridItem>
      </div>
      <div className="lg:hidden w-full h-32 border rounded-3xl">
        <GridItem>none</GridItem>
      </div>
    </div>
  )
}
