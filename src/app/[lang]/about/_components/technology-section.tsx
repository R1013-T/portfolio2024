import type { TFunction } from 'i18next'

import SectionWrapper from './section-wrapper'

const frontEnd = [
  'TypeScript 💜💜',
  'React 💜',
  'Next.js 💜💜',
  'Tailwind CSS 💜',
  'shadcn/ui 💜',
  'Mantine',
  'Auth.js',
]

const backEnd = [
  'Node.js 💜',
  'Hono 💜',
  'Express',
  'Go 💜',
  'Echo',
  'Python',
  'FastAPI',
]

const others = [
  'Docker',
  'GitHub 💜',
  'Firebase 💜',
  'Supabase 💜',
  'Hasura',
  'Vercel 💜',
  'AWS',
  'GCP 💜',
  'Azure',
]

export default async function TechnologySection({
  t,
}: {
  t: TFunction<'translation', undefined>
}) {
  return (
    <SectionWrapper id="technology">
      <h3>{t('tech_title')}</h3>
      <p className="text-sm py-2 px-1 text-muted-foreground">
        {t('tech_page_desc')}
        <br />
        {t('tech_page_desc_2')}
      </p>
      <div className="mt-4 px-1 text-sm flex flex-wrap justify-between gap-10">
        <div>
          <p className="text-muted-foreground text-xs mb-3">{t('front_end')}</p>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            {frontEnd.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-muted-foreground text-xs mb-3">{t('back_end')}</p>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            {backEnd.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-muted-foreground text-xs mb-3">{t('other')}</p>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            {others.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
