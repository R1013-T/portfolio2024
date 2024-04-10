import type { TFunction } from 'i18next'

import SectionWrapper from './section-wrapper'

export default async function ExperienceSection({
  t,
}: {
  t: TFunction<'translation', undefined>
}) {
  const experience = [
    {
      date: '2024/2 -',
      title: t('zeroichi'),
      type: t('intern'),
    },
    {
      date: '2023/9 -',
      title: t('lt-circle'),
      type: t('school'),
    },
    {
      date: '2023/8 - 2023/3',
      title: t('microsoft_seminar'),
      type: t('school'),
    },
    {
      date: '2022/4 -',
      title: t('tech.c.'),
      type: t('school'),
    },
  ]

  return (
    <SectionWrapper id="experience">
      <h3>{t('experience_title')}</h3>
      <p className="text-sm py-2 px-1 text-muted-foreground">
        {t('experience_page_desc')}
        <br />
        {t('experience_page_desc_2')}
      </p>
      <ul className="mt-4 px-1 flex flex-col gap-5">
        {experience.map((item, index) => (
          <li key={index} className="flex flex-col gap-0.5">
            <p className="text-muted-foreground text-xs">{item.type}</p>
            <p className="text-sm">{item.title}</p>
            <p className="text-muted-foreground text-[11px]">{item.date}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
