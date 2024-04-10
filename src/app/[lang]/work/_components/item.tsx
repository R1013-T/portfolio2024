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
      <div>
        <Link
          href={link.href}
          target="_blank"
          className="flex gap-0.5 items-center hover:underline"
        >
          <h3>{title}</h3>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <p className="text-muted-foreground text-sm mt-2 mb-1">{description}</p>
      </div>
      <div className="relative aspect-square overflow-hidden border">
        <div className="absolute -inset-1 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Image src={image} alt="Interview" layout="fill" />
        <div className="absolute py-4 px-3.5 top-o left-0 w-full flex justify-between items-center gap-2.5">
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
      <p className="text-muted-foreground text-sm">{date}</p>
    </section>
  )
}
