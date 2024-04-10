import { getTranslation } from '@/i18n/server'

import LangToggle from '../../setting/lang-toggle'
import ThemeToggle from '../../setting/theme-toggle'
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
          <LangToggle lang={lang} />
        </GridItem>
      </div>
      <div className="lg:hidden w-full h-32 border rounded-3xl">
        <GridItem>
          <p className="tracking-widest">😎😎😎😎😎😎</p>
        </GridItem>
      </div>
    </div>
  )
}
