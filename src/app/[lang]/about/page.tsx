import BackButton from '@/components/common/back-button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getTranslation } from '@/i18n/server'

import ContactSection from './_components/contact-section'
import ExperienceSection from './_components/experience-section'
import HobbySection from './_components/hobby-section'
import ProfileSection from './_components/profile-section'
import TechnologySection from './_components/technology-section'

export default async function About({ params }: { params: { lang: string } }) {
  const lang = params.lang
  const { t } = await getTranslation(lang)

  return (
    <main className="overflow-hidden">
      <BackButton lang={lang} />
      <ScrollArea className="h-dvh w-full">
        <article className="mt-8 mb-20 px-4 max-w-xl mx-auto">
          <h2 className="mb-4 text-xl">{t('about_title')}</h2>
          <ProfileSection t={t} />
          <ExperienceSection t={t} />
          <TechnologySection t={t} />
          <ContactSection t={t} />
          <HobbySection t={t} />
        </article>
      </ScrollArea>
    </main>
  )
}
