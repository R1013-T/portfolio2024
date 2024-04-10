import type { TFunction } from 'i18next'

import SectionWrapper from './section-wrapper'

export default async function HobbySection({
  t,
}: {
  t: TFunction<'translation', undefined>
}) {
  const hobbies = [
    {
      name: t('chocolate'),
      desc: t('chocolate_desc') + '\n' + t('chocolate_desc_2'),
    },
    {
      name: t('snowboard'),
      desc: t('snowboard_desc'),
    },
    {
      name: t('walking'),
      desc: t('walking_desc'),
    },
  ]

  return (
    <SectionWrapper id="hobby">
      <h3>{t('hobby_title')}</h3>
      <p className="text-sm py-2 px-1 text-muted-foreground">
        {t('hobby_page_desc')}
      </p>
      <ul className="mt-4 px-1 flex flex-col gap-5">
        {hobbies.map((item, index) => (
          <li key={index} className="flex flex-col gap-0.5">
            <p className="text-muted-foreground text-xs">{item.name}</p>
            <p className="text-sm  whitespace-pre">{item.desc}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
