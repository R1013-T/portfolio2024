import type { IconType } from '@icons-pack/react-simple-icons'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowUpRight, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkItem({
  title,
  description,
  image,
  link,
  technologies,
  date,
}: {
  title: string
  description: string
  image: string
  link: {
    href: string
    github: string
  }
  technologies: IconType[]
  date: string
}) {
  return (
    <section className="flex flex-col gap-1">
      <div className="space-y-3 mb-1">
        <Link
          href={link.href}
          target="_blank"
          className="flex gap-0.5 items-center hover:underline underline-offset-4"
        >
          <h3 className="text-lg">{title}</h3>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="grid grid-flow-col items-end justify-between">
          <div className="grid grid-flow-col w-fit gap-3">
            <Link
              href={link.github}
              target="_blank"
              className="translation duration-300 opacity-80 hover:opacity-100"
            >
              <SiGithub
                className="h-7 w-7"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </Link>
            <Link
              href={link.href}
              target="_blank"
              className="translation duration-300 opacity-80 hover:opacity-100"
            >
              <SquareArrowOutUpRight className="h-7 w-7" />
            </Link>
          </div>
          <p className="text-foreground/80 text-sm">{date}</p>
        </div>
      </div>
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute bg-gradient-to-br from-background w-full h-full -z-10"></div>
        <div className="absolute border w-full h-full -z-20"></div>
        <div className="absolute -inset-1 -z-20 border bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Image src={image} alt={title} layout="fill" />
        <div className="absolute w-full bottom-0 flex gap-2 py-4 px-3.5 opacity-80">
          {technologies.map((Icon, index) => (
            <Icon
              key={index}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="h-7 w-7"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
