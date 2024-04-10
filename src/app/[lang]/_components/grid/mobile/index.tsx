import ArticleSection from './article'
import ContactSection from './contact'
import ExperienceSection from './experience'
import ProfileSection from './profile'
import SettingSection from './setting'
import TechnologySection from './technology'
import WorkSection from './work'

export default async function MobileGrid({ lang }: { lang: string }) {
  return (
    <article className="overflow-hidden md:hidden px-4 pb-6">
      <div className="border-2 rounded-3xl p-2 flex flex-col gap-2">
        <ProfileSection lang={lang} />
        <div className="w-full flex gap-2">
          <ExperienceSection lang={lang} />
          <ContactSection />
        </div>
        <SettingSection lang={lang} />
        <WorkSection lang={lang} />
        <TechnologySection lang={lang} />
        <ArticleSection lang={lang} />
      </div>
    </article>
  )
}
