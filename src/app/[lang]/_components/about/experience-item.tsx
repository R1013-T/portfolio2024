import { getTranslation } from '@/i18n/server'

export default async function ExperienceItem({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  const experience = [
    {
      date: '2024/2 -',
      title: t('zeroichi'),
      type: t('intern'),
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

  const GradientBar = () => (
    <>
      <div className="experience-grade w-[4px] rounded-lg blur-md absolute top-1/2 left-1/3 translate-x-1/2 -translate-y-1/2 animate-experience-up"></div>
      <div className="experience-grade w-[2px] rounded-lg absolute top-1/2 left-1/3 translate-x-1/2 translate-y-full animate-experience-up"></div>
      <div className="h-full w-px bg-zinc-400/20 rounded-lg absolute top-1/2 left-1/3 translate-x-1/2 -translate-y-1/2"></div>
    </>
  )

  return (
    <div className="h-5/6 w-full flex justify-center relative pt-20">
      <GradientBar />
      <div className="h-full absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-10">
        {experience.map((item, index) => (
          <div key={index} className="flex flex-col gap-0.5">
            <p className="text-muted-foreground text-xs">{item.type}</p>
            <p className="text-sm whitespace-nowrap">{item.title}</p>
            <p className="text-muted-foreground text-[11px]">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
