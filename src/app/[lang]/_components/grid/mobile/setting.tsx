import LangToggle from '../../setting/lang-toggle'
import ThemeToggle from '../../setting/theme-toggle'
import GridItem from '../grid-item'

export default function SettingSection({ lang }: { lang: string }) {
  return (
    <div className="flex gap-2">
      <div className="h-24 w-1/2 ">
        <GridItem>
          <ThemeToggle />
        </GridItem>
      </div>
      <div className="h-24 w-1/2">
        <GridItem>
          <LangToggle lang={lang} />
        </GridItem>
      </div>
    </div>
  )
}
