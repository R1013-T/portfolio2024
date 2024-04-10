import {
  SiBun,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGithub,
  SiGithubcopilot,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons'
import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { getTranslation } from '@/i18n/server'

const icons = [
  {
    icon: (
      <SiTypescript
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Typescript',
  },
  {
    icon: (
      <SiReact
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'React',
  },
  {
    icon: (
      <SiNextdotjs
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Nextdotjs',
  },
  {
    icon: (
      <SiTailwindcss
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Tailwindcss',
  },
  {
    icon: (
      <SiShadcnui
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Shadcnui',
  },
  {
    icon: (
      <SiPython
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Python',
  },
  {
    icon: (
      <SiFastapi
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Fastapi',
  },
  {
    icon: (
      <SiGo
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Go',
  },
  {
    icon: (
      <SiBun
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Bun',
  },
  {
    icon: (
      <SiGraphql
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Graphql',
  },
  {
    icon: (
      <SiGithub
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Github',
  },
  {
    icon: (
      <SiGithubcopilot
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Githubcopilot',
  },
  {
    icon: (
      <SiDocker
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Docker',
  },
  {
    icon: (
      <SiOpenai
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Openai',
  },
  {
    icon: (
      <SiFirebase
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Firebase',
  },
  {
    icon: (
      <SiSupabase
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Supabase',
  },
  {
    icon: (
      <SiVercel
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Vercel',
  },
  {
    icon: (
      <SiGooglecloud
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    label: 'Googlecloud',
  },
]

export default async function TechnologyItem({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang)

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center p-5">
      <p>{t('tech_desc_1')}</p>
      <div className="w-full max-w-md h-2/3 lg:h-1/3 border rounded-3xl overflow-x-hidden shadow">
        <Marquee
          gradient
          gradientColor="hsl(var(--background))"
          gradientWidth="30%"
          className="text-muted-foreground h-full"
        >
          {icons.map((icon) => (
            <div
              key={icon.label}
              className="mx-6 p-4 rounded-2xl bg-border border border-background dark:border-none relative"
            >
              <Slot className="w-8 h-8 text-purple-300">{icon.icon}</Slot>
              <span className="absolute -z-10 w-full h-full top-0 left-0 bg-purple-300/60 rounded-2xl blur"></span>
            </div>
          ))}
        </Marquee>
      </div>
      <p className="text-sm">{t('tech_desc_2')}</p>
    </div>
  )
}
