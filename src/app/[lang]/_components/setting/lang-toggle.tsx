import Image from 'next/image'
import Link from 'next/link'

import ENImage from './assets/en.webp'
import JAImage from './assets/ja.webp'

const langs = ['ja', 'en']

const LangItem = ({
  lang,
  currentLang,
}: {
  lang: string
  currentLang: string
}) => (
  <Link
    href={`/${lang}`}
    className={`${lang != currentLang ? 'opacity-30' : ''}`}
  >
    <Image
      src={lang === 'ja' ? JAImage : ENImage}
      className="w-10 h-10"
      alt={lang}
    />
  </Link>
)

export default async function LangToggle({ lang }: { lang: string }) {
  return (
    <div className="flex gap-2">
      {langs.map((l) => (
        <LangItem key={l} lang={l} currentLang={lang} />
      ))}
    </div>
  )
}
