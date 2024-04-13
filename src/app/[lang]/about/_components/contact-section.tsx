import type { TFunction } from 'i18next'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import SectionWrapper from './section-wrapper'

export default async function ContactSection({
  t,
}: {
  t: TFunction<'translation', undefined>
}) {
  const contacts = [
    {
      name: t('mail'),
      link: 'mailto:takahashi.ryunosuke.job@gmail.com',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/R1013-T',
    },
    {
      name: 'Wantedly',
      link: 'https://www.wantedly.com/id/RYU1013',
    },
    {
      name: 'AtCoder',
      link: 'https://atcoder.jp/users/RYU_1013',
    },
    {
      name: 'X',
      link: 'https://twitter.com/rtjob2023',
    },
    {
      name: 'Instagram',
      link: 'https://twitter.com/rtjob2023',
    },
    {
      name: 'Qiita',
      link: 'https://qiita.com/ryu1013',
    },
    {
      name: 'しずかなインターネット',
      link: 'https://sizu.me/ryu_1013',
    },
  ]

  return (
    <SectionWrapper id="contact">
      <h3>{t('contact_title')}</h3>
      <p className="text-sm py-2 px-1 text-muted-foreground">
        {t('contact_page_desc')}
      </p>
      <ul className="mt-2 px-1 flex  flex-col gap-3 list-disc list-inside">
        {contacts.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              target="_blank"
              className="inline-flex gap-1 items-center hover:underline"
            >
              {item.name}
              <ArrowUpRight className="text-muted-foreground" size={16} />
            </Link>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
