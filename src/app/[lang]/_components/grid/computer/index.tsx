import AsideSection from './aside'
import MainSection from './main'
import ProfileSection from './profile'
import SettingSection from './setting'

export default async function ComputerGrid({ lang }: { lang: string }) {
  return (
    <article className="h-full w-full p-4">
      <div className="h-5/6 lg:h-[calc(100dvh-24px)] max-w-7xl mx-auto md:flex-wrap gap-2 lg:flex-nowrap hidden border-2 rounded-3xl p-3 md:flex">
        <div className="w-full h-full flex flex-col gap-2">
          <ProfileSection lang={lang} />
          <MainSection lang={lang} />
        </div>
        <div className="lg:h-full w-full flex-wrap lg:flex-nowrap gap-2 lg:w-auto flex lg:flex-col">
          <SettingSection lang={lang} />
          <AsideSection lang={lang} />
        </div>
      </div>
    </article>
  )
}
