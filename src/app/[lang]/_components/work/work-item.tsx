import Image from 'next/image'

import { getTranslation } from '@/i18n/server'

import GiftJobImage from './assets/giftjiob.webp'
import AIInterviewImage from './assets/interview.webp'
import SlideShareImage from './assets/slide.webp'

export default async function WorkItem({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  const WindowWrapper = ({
    className,
    children,
  }: {
    className?: string
    children: React.ReactNode
  }) => (
    <div
      className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 h-44 aspect-video 
      rounded-md overflow-hidden bg-background/50 shadow-sm shadow-purple-300 border-2 border-purple-300/30
      transition duration-300 group-hover:scale-110
      ${className}`}
    >
      {children}
    </div>
  )

  return (
    <div className="w-full h-full flex items-end relative group">
      <div className="text-sm pb-8 pt-12 px-5 w-full bg-gradient-to-t from-background">
        <p className="leading-loose">
          {t('work_description_1')}
          <br />
          {t('work_description_2')}
        </p>
      </div>
      <WindowWrapper className="-translate-y-40 -rotate-12 group-hover:-rotate-[18deg] group-hover:-translate-y-52">
        <Image src={GiftJobImage} alt="GiftJob" />
      </WindowWrapper>
      <WindowWrapper className="-translate-y-1/2 group-hover:rotate-3">
        <Image src={AIInterviewImage} alt="AI Interview" />
      </WindowWrapper>
      <WindowWrapper className="-translate-y-4 rotate-12 group-hover:rotate-[18deg] group-hover:translate-y-12">
        <Image src={SlideShareImage} alt="SlideShare" />
      </WindowWrapper>
    </div>
  )
}
